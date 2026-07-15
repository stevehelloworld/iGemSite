/**
 * Build printable DOCX + PDF packs:
 *   - Teacher handbook (教師手冊)
 *   - Student handouts (學生講義)
 *
 * Usage: node scripts/build-printables.mjs
 *    or: npm run printables
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";
import { marked } from "marked";
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  Table,
  TableRow,
  TableCell,
  Header,
  Footer,
  AlignmentType,
  HeadingLevel,
  BorderStyle,
  WidthType,
  ShadingType,
  PageNumber,
  PageBreak,
  LevelFormat,
} from "docx";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.join(ROOT, "docs/curriculum/printables");

const PAGE_W = 11906; // A4
const PAGE_H = 16838;
const MARGIN = 1008;
const CONTENT_W = PAGE_W - MARGIN * 2;

const BRAND = "9F1239";
const MUTED = "666666";
const CODE_BG = "F5F5F5";
const TABLE_HEADER = "FCE7F3";
const TABLE_ALT = "FAFAFA";
const BORDER = { style: BorderStyle.SINGLE, size: 4, color: "CCCCCC" };
const BORDERS = { top: BORDER, bottom: BORDER, left: BORDER, right: BORDER };

// ── I/O helpers ──────────────────────────────────────────────

function read(rel) {
  return fs.readFileSync(path.join(ROOT, rel), "utf8");
}

function parseFrontmatter(raw) {
  if (!raw.startsWith("---\n") && !raw.startsWith("---\r\n")) {
    return { meta: {}, body: raw };
  }
  const end = raw.indexOf("\n---", 4);
  if (end === -1) return { meta: {}, body: raw };
  const fm = raw.slice(4, end).trim();
  const body = raw.slice(end + 4).replace(/^\r?\n/, "");
  const meta = {};
  for (const line of fm.split(/\r?\n/)) {
    const m = line.match(/^([a-zA-Z0-9_]+):\s*(.*)$/);
    if (!m) continue;
    let v = m[2].trim();
    if (
      (v.startsWith('"') && v.endsWith('"')) ||
      (v.startsWith("'") && v.endsWith("'"))
    ) {
      v = v.slice(1, -1);
    }
    if (v !== "" && v !== "|") meta[m[1]] = v;
  }
  const goals = [];
  let inGoals = false;
  for (const line of fm.split(/\r?\n/)) {
    if (/^goals:\s*$/.test(line)) {
      inGoals = true;
      continue;
    }
    if (inGoals) {
      const gm = line.match(/^\s*-\s*["']?(.*?)["']?\s*$/);
      if (gm) goals.push(gm[1]);
      else if (/^[a-zA-Z]/.test(line)) inGoals = false;
    }
  }
  if (goals.length) meta.goals = goals;
  return { meta, body };
}

/**
 * Remove teacher-only sections from session / how-to markdown.
 * Drops blocks whose heading starts with 給老師 (until next ## or ---).
 */
function stripTeacherSections(md) {
  const lines = md.replace(/\r\n/g, "\n").split("\n");
  const out = [];
  let skipping = false;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (/^##\s*給老師/.test(line)) {
      skipping = true;
      continue;
    }
    if (skipping) {
      if (/^##\s+/.test(line) || /^---+\s*$/.test(line)) {
        skipping = false;
        // fall through to process this line
      } else {
        continue;
      }
    }
    out.push(line);
  }
  // Collapse 3+ blank lines
  return out
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

/**
 * Strip leading Chinese section numbers only: 「十四、」「〇、」「一、」
 * (Do not strip 「1.1」 style nested numbers.)
 */
function stripSectionNumberPrefix(title) {
  return title.replace(/^[〇零一二三四五六七八九十百千两兩]+、\s*/u, "").trim();
}

/**
 * Embed LESSON_PLAN under handbook「一、教案總覽」:
 * - drop duplicate document title
 * - remove 〇／一／十四… prefixes (conflict with handbook 一、二、三)
 * - renumber top-level sections as 1. 2. 3. …
 * - demote nested headings one level
 */
function normalizeLessonPlanForTeacherPack(md) {
  const lines = md.replace(/\r\n/g, "\n").split("\n");
  const out = [];
  let topIndex = 0;
  let inFence = false;

  for (const line of lines) {
    // Preserve fenced code (bash comments start with # and must not become headings)
    if (/^```/.test(line)) {
      inFence = !inFence;
      out.push(line);
      continue;
    }
    if (inFence) {
      out.push(line);
      continue;
    }

    if (/^#\s+Cadture\s+Team\s+Wiki/i.test(line)) continue;
    if (/^##\s+14\s*次/.test(line)) {
      out.push(
        "> 來源：`docs/curriculum/LESSON_PLAN_14.md`（14 次 × 3 小時教案全文）"
      );
      out.push("");
      continue;
    }

    const hm = line.match(/^(#{1,6})\s+(.*)$/);
    if (!hm) {
      out.push(line);
      continue;
    }

    const level = hm[1].length;
    const rawTitle = hm[2].trim();
    const bare = stripSectionNumberPrefix(rawTitle) || rawTitle;

    // Top-level lesson-plan sections: original #… or ## with 〇、一、…
    const isTop =
      level === 1 ||
      (level === 2 && /^[〇零一二三四五六七八九十百]+、/u.test(rawTitle));

    if (isTop) {
      topIndex += 1;
      out.push(`## ${topIndex}. ${bare}`);
      continue;
    }

    // Nested under ## N.: keep ### / ####; plain ## becomes ###
    if (level <= 2) {
      out.push(`### ${bare}`);
    } else {
      out.push(`${"#".repeat(Math.min(level, 4))} ${bare}`);
    }
  }

  return out.join("\n").replace(/\n{3,}/g, "\n\n").trim();
}

/**
 * Map markdown lines with fence awareness (do not touch code samples).
 */
function mapMarkdownHeadings(md, mapFn) {
  const lines = md.replace(/\r\n/g, "\n").split("\n");
  const out = [];
  let inFence = false;
  for (const line of lines) {
    if (/^```/.test(line)) {
      inFence = !inFence;
      out.push(line);
      continue;
    }
    if (inFence) {
      out.push(line);
      continue;
    }
    const hm = line.match(/^(#{1,6})\s+(.*)$/);
    if (!hm) {
      out.push(line);
      continue;
    }
    const next = mapFn(hm[1].length, hm[2].trim());
    if (next == null) continue;
    out.push(next);
  }
  return out.join("\n").replace(/\n{3,}/g, "\n\n").trim();
}

/**
 * how-to under「二、」: strip 一、二、; H2 → 1. 2. 3.; lone H1 → callout-style ###
 */
function normalizeHowToForPack(md) {
  let n = 0;
  return mapMarkdownHeadings(md, (level, raw) => {
    const bare = stripSectionNumberPrefix(raw) || raw;
    if (level === 1) {
      // e.g. 「# 改檔 → 存檔 → 重新整理」— tip, not document H1
      return `### ${bare}`;
    }
    if (level === 2) {
      n += 1;
      return `## ${n}. ${bare}`;
    }
    return `${"#".repeat(Math.min(level, 4))} ${bare}`;
  });
}

/**
 * Handouts sit under「四、」: demote all headings one level so their # title
 * becomes ## (not competing with 一／二／三／四／五).
 */
function normalizeHandoutForPack(md) {
  return mapMarkdownHeadings(md, (level, raw) => {
    const bare = stripSectionNumberPrefix(raw) || raw;
    const next = Math.min(level + 1, 4);
    return `${"#".repeat(next)} ${bare}`;
  });
}

/**
 * Session bodies: never emit document-level H1; strip 一、 on ## if present.
 */
function normalizeSessionBodyForPack(md) {
  return mapMarkdownHeadings(md, (level, raw) => {
    const bare = stripSectionNumberPrefix(raw) || raw;
    if (level === 1) return `## ${bare}`;
    return `${"#".repeat(Math.min(level, 4))} ${bare}`;
  });
}

/**
 * Find a top-level (# ) section body by title substring. Returns body without the # heading.
 */
function findLessonSectionBody(fullMd, titleIncludes) {
  const lines = fullMd.replace(/\r\n/g, "\n").split("\n");
  for (let i = 0; i < lines.length; i++) {
    const hm = lines[i].match(/^#\s+(.+)$/);
    if (!hm || !hm[1].includes(titleIncludes)) continue;
    const body = [];
    i += 1;
    while (i < lines.length && !/^#\s+/.test(lines[i])) {
      body.push(lines[i]);
      i += 1;
    }
    return body.join("\n").trim();
  }
  return "";
}

/**
 * Student pack front matter: renumbered headings (no 十四／十六 from lesson plan).
 */
function buildStudentQuickRef(lessonPlan) {
  const schedule = findLessonSectionBody(lessonPlan, "給學生的一頁課表");
  const quality = findLessonSectionBody(lessonPlan, "第 13 次品質");
  const jsMap = findLessonSectionBody(lessonPlan, "JS ↔ 本站");

  const parts = [];
  if (schedule) {
    parts.push("## 1. 一頁課表\n\n" + schedule);
  }
  if (quality) {
    parts.push(
      "## 2. 品質／iGEM 檢查表（第 13 次與期末用）\n\n" + quality
    );
  }
  if (jsMap) {
    parts.push("## 3. JS 與本站對照\n\n" + jsMap);
  }
  return parts.join("\n\n");
}

// ── Inline / block markdown → docx ───────────────────────────

function stripMdInline(s) {
  return s
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/__([^_]+)__/g, "$1")
    .replace(/_([^_]+)_/g, "$1")
    .replace(/~~([^~]+)~~/g, "$1");
}

function inlineRuns(text, base = {}) {
  const runs = [];
  const re =
    /(\*\*[^*]+\*\*|\*[^*]+\*|__[^_]+__|_[^_]+_|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;
  let last = 0;
  let m;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) {
      runs.push(new TextRun({ text: text.slice(last, m.index), ...base }));
    }
    const tok = m[0];
    if (tok.startsWith("**") || tok.startsWith("__")) {
      runs.push(
        new TextRun({ text: tok.slice(2, -2), bold: true, ...base })
      );
    } else if (tok.startsWith("`")) {
      runs.push(
        new TextRun({
          text: tok.slice(1, -1),
          font: "Consolas",
          size: base.size ? Math.max(base.size - 2, 16) : 18,
          ...base,
        })
      );
    } else if (tok.startsWith("[") && tok.includes("](")) {
      const lm = tok.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      runs.push(
        new TextRun({
          text: lm ? `${lm[1]} (${lm[2]})` : tok,
          color: "0563C1",
          ...base,
        })
      );
    } else if (tok.startsWith("*") || tok.startsWith("_")) {
      runs.push(
        new TextRun({ text: tok.slice(1, -1), italics: true, ...base })
      );
    } else {
      runs.push(new TextRun({ text: tok, ...base }));
    }
    last = m.index + tok.length;
  }
  if (last < text.length) {
    runs.push(new TextRun({ text: text.slice(last), ...base }));
  }
  if (!runs.length) runs.push(new TextRun({ text: "", ...base }));
  return runs;
}

function p(text, opts = {}) {
  return new Paragraph({
    spacing: { after: 120, line: 276 },
    ...opts,
    children:
      typeof text === "string"
        ? inlineRuns(text, { size: opts.fontSize || 20, font: "Arial" })
        : text,
  });
}

function heading(level, text) {
  const map = {
    1: HeadingLevel.HEADING_1,
    2: HeadingLevel.HEADING_2,
    3: HeadingLevel.HEADING_3,
    4: HeadingLevel.HEADING_4,
  };
  return new Paragraph({
    heading: map[level] || HeadingLevel.HEADING_2,
    spacing: { before: level === 1 ? 0 : 200, after: 120 },
    children: [
      new TextRun({
        text: stripMdInline(text),
        bold: true,
        font: "Arial",
        color: level === 1 ? BRAND : "1A1A1A",
      }),
    ],
  });
}

function codeBlock(code) {
  const lines = code.replace(/\n$/, "").split("\n");
  return lines.map(
    (line, i) =>
      new Paragraph({
        spacing: { after: i === lines.length - 1 ? 160 : 0, line: 240 },
        shading: { type: ShadingType.CLEAR, fill: CODE_BG },
        border: {
          left: { style: BorderStyle.SINGLE, size: 4, color: "DDDDDD" },
          right: { style: BorderStyle.SINGLE, size: 4, color: "DDDDDD" },
          top:
            i === 0
              ? { style: BorderStyle.SINGLE, size: 4, color: "DDDDDD" }
              : { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
          bottom:
            i === lines.length - 1
              ? { style: BorderStyle.SINGLE, size: 4, color: "DDDDDD" }
              : { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
        },
        children: [
          new TextRun({
            text: line.length ? line : " ",
            font: "Consolas",
            size: 16,
          }),
        ],
      })
  );
}

function parseTable(rows) {
  if (!rows.length) return [];
  const colCount = Math.max(...rows.map((r) => r.length));
  const colW = Math.floor(CONTENT_W / colCount);
  const widths = Array(colCount).fill(colW);
  widths[colCount - 1] = CONTENT_W - colW * (colCount - 1);

  const tableRows = rows.map((cells, ri) => {
    const isHeader = ri === 0;
    return new TableRow({
      children: widths.map((w, ci) => {
        const raw = (cells[ci] || "").trim();
        return new TableCell({
          borders: BORDERS,
          width: { size: w, type: WidthType.DXA },
          shading: {
            type: ShadingType.CLEAR,
            fill: isHeader ? TABLE_HEADER : ri % 2 === 0 ? TABLE_ALT : "FFFFFF",
          },
          margins: { top: 60, bottom: 60, left: 80, right: 80 },
          children: [
            new Paragraph({
              children: inlineRuns(raw, {
                size: isHeader ? 18 : 17,
                font: "Arial",
                bold: isHeader,
              }),
            }),
          ],
        });
      }),
    });
  });

  return [
    new Table({
      width: { size: CONTENT_W, type: WidthType.DXA },
      columnWidths: widths,
      rows: tableRows,
    }),
    new Paragraph({ spacing: { after: 160 }, children: [] }),
  ];
}

function mdToChildren(md) {
  const lines = md.replace(/\r\n/g, "\n").split("\n");
  const children = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (/^```/.test(line)) {
      i += 1;
      const codeLines = [];
      while (i < lines.length && !/^```/.test(lines[i])) {
        codeLines.push(lines[i]);
        i += 1;
      }
      if (i < lines.length) i += 1;
      children.push(...codeBlock(codeLines.join("\n")));
      continue;
    }

    if (
      line.includes("|") &&
      i + 1 < lines.length &&
      /^\s*\|?[\s:-]+\|/.test(lines[i + 1])
    ) {
      const rows = [];
      while (i < lines.length && lines[i].includes("|")) {
        const row = lines[i];
        if (/^\s*\|?[\s:-]+\|/.test(row)) {
          i += 1;
          continue;
        }
        let cells = row.split("|").map((c) => c.trim());
        if (cells[0] === "") cells = cells.slice(1);
        if (cells[cells.length - 1] === "") cells = cells.slice(0, -1);
        rows.push(cells);
        i += 1;
      }
      children.push(...parseTable(rows));
      continue;
    }

    const hm = line.match(/^(#{1,4})\s+(.*)$/);
    if (hm) {
      children.push(heading(hm[1].length, hm[2]));
      i += 1;
      continue;
    }

    if (/^---+\s*$/.test(line) || /^\*\*\*+\s*$/.test(line)) {
      children.push(
        new Paragraph({
          spacing: { before: 120, after: 120 },
          border: {
            bottom: {
              style: BorderStyle.SINGLE,
              size: 12,
              color: BRAND,
              space: 1,
            },
          },
          children: [],
        })
      );
      i += 1;
      continue;
    }

    if (/^>\s?/.test(line)) {
      const q = [];
      while (i < lines.length && /^>\s?/.test(lines[i])) {
        q.push(lines[i].replace(/^>\s?/, ""));
        i += 1;
      }
      children.push(
        new Paragraph({
          spacing: { after: 120 },
          indent: { left: 360 },
          border: {
            left: {
              style: BorderStyle.SINGLE,
              size: 24,
              color: BRAND,
              space: 8,
            },
          },
          children: inlineRuns(q.join(" "), {
            size: 20,
            font: "Arial",
            italics: true,
            color: "333333",
          }),
        })
      );
      continue;
    }

    // task list - [ ] / - [x]
    const task = line.match(/^(\s*)[-*+]\s+\[([ xX])\]\s+(.*)$/);
    if (task) {
      const level = Math.min(
        Math.floor(task[1].replace(/\t/g, "  ").length / 2),
        2
      );
      const box = /x/i.test(task[2]) ? "☑ " : "☐ ";
      children.push(
        new Paragraph({
          numbering: { reference: "bullets", level },
          spacing: { after: 60 },
          children: inlineRuns(box + task[3], { size: 20, font: "Arial" }),
        })
      );
      i += 1;
      continue;
    }

    const ul = line.match(/^(\s*)[-*+]\s+(.*)$/);
    if (ul) {
      const level = Math.min(
        Math.floor(ul[1].replace(/\t/g, "  ").length / 2),
        2
      );
      children.push(
        new Paragraph({
          numbering: { reference: "bullets", level },
          spacing: { after: 60 },
          children: inlineRuns(ul[2], { size: 20, font: "Arial" }),
        })
      );
      i += 1;
      continue;
    }

    const ol = line.match(/^(\s*)\d+\.\s+(.*)$/);
    if (ol) {
      const level = Math.min(
        Math.floor(ol[1].replace(/\t/g, "  ").length / 2),
        2
      );
      children.push(
        new Paragraph({
          numbering: { reference: "numbers", level },
          spacing: { after: 60 },
          children: inlineRuns(ol[2], { size: 20, font: "Arial" }),
        })
      );
      i += 1;
      continue;
    }

    if (/^\s*$/.test(line)) {
      i += 1;
      continue;
    }

    let para = line;
    i += 1;
    while (
      i < lines.length &&
      !/^\s*$/.test(lines[i]) &&
      !/^#{1,4}\s/.test(lines[i]) &&
      !/^```/.test(lines[i]) &&
      !/^>\s?/.test(lines[i]) &&
      !/^(\s*)[-*+]\s+/.test(lines[i]) &&
      !/^(\s*)\d+\.\s+/.test(lines[i]) &&
      !/^---+\s*$/.test(lines[i]) &&
      !(
        lines[i].includes("|") &&
        i + 1 < lines.length &&
        /^\s*\|?[\s:-]+\|/.test(lines[i + 1])
      )
    ) {
      para += " " + lines[i].trim();
      i += 1;
    }
    children.push(p(para));
  }

  return children;
}

function pageBreak() {
  return new Paragraph({ children: [new PageBreak()] });
}

function sessionTitleBlock(meta, fallbackTitle) {
  const title = meta.title || fallbackTitle;
  const sub = meta.subtitle || "";
  const dur = meta.duration || "3 小時";
  const session = meta.session ? `第 ${meta.session} 次` : "";
  const kids = [heading(1, `${session}${session ? "｜" : ""}${title}`)];
  if (sub) {
    kids.push(
      new Paragraph({
        spacing: { after: 120 },
        children: [
          new TextRun({
            text: sub,
            font: "Arial",
            size: 22,
            italics: true,
            color: MUTED,
          }),
        ],
      })
    );
  }
  kids.push(
    new Paragraph({
      spacing: { after: 200 },
      children: [
        new TextRun({
          text: `時數：${dur}`,
          font: "Arial",
          size: 18,
          color: MUTED,
        }),
      ],
    })
  );
  if (Array.isArray(meta.goals) && meta.goals.length) {
    kids.push(heading(2, "本堂學習目標"));
    for (const g of meta.goals) {
      kids.push(
        new Paragraph({
          numbering: { reference: "bullets", level: 0 },
          spacing: { after: 60 },
          children: inlineRuns(g, { size: 20, font: "Arial" }),
        })
      );
    }
  }
  return kids;
}

function coverChildren({ badge, title, subtitle, bullets, note }) {
  const kids = [
    new Paragraph({ spacing: { before: 1000 }, children: [] }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 200 },
      children: [
        new TextRun({
          text: "VIS iGEM 2026 · Team 6423 · Cadture",
          font: "Arial",
          size: 22,
          color: MUTED,
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 160 },
      children: [
        new TextRun({
          text: badge,
          font: "Arial",
          size: 20,
          bold: true,
          color: BRAND,
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 120 },
      children: [
        new TextRun({
          text: title,
          font: "Arial",
          size: 44,
          bold: true,
          color: BRAND,
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 320 },
      children: [
        new TextRun({
          text: subtitle,
          font: "Arial",
          size: 28,
          bold: true,
        }),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 80 },
      border: {
        bottom: { style: BorderStyle.SINGLE, size: 18, color: BRAND, space: 4 },
      },
      children: [],
    }),
    new Paragraph({ spacing: { before: 360 }, children: [] }),
  ];
  for (const b of bullets) {
    kids.push(
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 100 },
        children: [
          new TextRun({ text: b, font: "Arial", size: 20, color: MUTED }),
        ],
      })
    );
  }
  if (note) {
    kids.push(new Paragraph({ spacing: { before: 480 }, children: [] }));
    kids.push(
      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
          new TextRun({
            text: note,
            font: "Arial",
            size: 16,
            color: MUTED,
            italics: true,
          }),
        ],
      })
    );
  }
  kids.push(pageBreak());
  return kids;
}

// ── Document content builders ────────────────────────────────

function loadSessions({ forStudent }) {
  const items = [];
  for (let n = 1; n <= 14; n++) {
    const num = String(n).padStart(2, "0");
    const raw = read(`content/class/session-${num}.md`);
    const { meta, body } = parseFrontmatter(raw);
    let text = forStudent ? stripTeacherSections(body) : body;
    text = normalizeSessionBodyForPack(text);
    items.push({ num, meta, body: text });
  }
  return items;
}

function listHandouts() {
  const dir = path.join(ROOT, "docs/curriculum/handouts");
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .sort();
}

function buildTeacherMarkdown(lessonPlan, howTo, sessions, handouts) {
  const parts = [];
  parts.push(`# 教師手冊 · Cadture Team Wiki 製作課程

**對象：** 資訊老師（國中 iGEM 隊）  
**時數：** 14 × 3 小時  
**配套：** 學生講義另見同資料夾 \`Student-Handouts\`

---

`);
  parts.push("# 一、教案總覽\n\n");
  parts.push(normalizeLessonPlanForTeacherPack(lessonPlan));
  parts.push("\n\n---\n\n# 二、課程總覽頁（how-to / 學習地圖）\n\n");
  parts.push(
    howTo.meta.title ? `*${howTo.meta.title}*\n\n` : ""
  );
  parts.push(normalizeHowToForPack(howTo.body));
  parts.push("\n\n---\n\n# 三、第 1–14 次完整課堂（含教師備註）\n\n");
  parts.push(
    "以下與網站 `/class/session-01`…`14` 同步，**保留「給老師」備註與分鐘表**。\n\n"
  );
  for (const s of sessions) {
    parts.push(
      `\n\n## 第 ${s.meta.session || s.num} 次｜${s.meta.title || s.num}\n\n`
    );
    if (s.meta.subtitle) parts.push(`*${s.meta.subtitle}*\n\n`);
    if (s.meta.duration) parts.push(`時數：${s.meta.duration}\n\n`);
    if (Array.isArray(s.meta.goals)) {
      parts.push("### 本堂學習目標\n\n");
      for (const g of s.meta.goals) parts.push(`- ${g}\n`);
      parts.push("\n");
    }
    parts.push(s.body);
  }
  parts.push("\n\n---\n\n# 四、講義原文（與學生講義相同來源）\n\n");
  for (const f of handouts) {
    parts.push("\n\n");
    parts.push(normalizeHandoutForPack(read(`docs/curriculum/handouts/${f}`)));
  }
  parts.push(`

---

# 五、使用說明

| 文件 | 給誰 | 內容 |
|------|------|------|
| **教師手冊**（本文件） | 老師 | 教案總覽、教學策略、完整 14 堂（含「給老師」）、講義 |
| **學生講義** | 學生 | 學習地圖、14 堂步驟（已去掉「給老師」）、講義、課表與檢查表 |

- 列印：A4、雙面；備課用教師手冊全文，當堂可只帶該次 session
- 學生線上版：\`/class\`（與本手冊步驟同源）
- 重新產生：\`npm run printables\`
`);
  return parts.join("");
}

function buildStudentMarkdown(lessonPlan, howTo, sessions, handouts) {
  const studentQuickRef = buildStudentQuickRef(lessonPlan);

  const parts = [];
  parts.push(`# 學生講義 · Cadture Team Wiki 製作課程

**隊伍：** VIS iGEM 2026 · 6423 · Cadture  
**時數：** 14 次 × 3 小時  
**線上：** \`/class\` · 官方內容基準 https://2026.igem.wiki/vis/

**鐵律：** 英文上站、不造假數據、路徑不亂改、照片要同意。

---

`);

  parts.push("# 一、課表與常用檢查\n\n");
  if (studentQuickRef) {
    parts.push(studentQuickRef);
  } else {
    parts.push("（見各次完成檢查表）\n");
  }

  parts.push("\n\n---\n\n# 二、學習地圖與操作基礎\n\n");
  parts.push(
    howTo.meta.title ? `*${howTo.meta.title}*\n\n` : ""
  );
  parts.push(
    normalizeHowToForPack(stripTeacherSections(howTo.body))
  );

  parts.push("\n\n---\n\n# 三、第 1–14 次課堂講義\n\n");
  parts.push(
    "每堂含：學習目標、分鐘表、完整步驟、完成檢查表、作業。\n\n"
  );
  for (const s of sessions) {
    parts.push(
      `\n\n## 第 ${s.meta.session || s.num} 次｜${s.meta.title || s.num}\n\n`
    );
    if (s.meta.subtitle) parts.push(`*${s.meta.subtitle}*\n\n`);
    if (s.meta.duration) parts.push(`時數：${s.meta.duration}\n\n`);
    if (Array.isArray(s.meta.goals)) {
      parts.push("### 本堂學習目標\n\n");
      for (const g of s.meta.goals) parts.push(`- ${g}\n`);
      parts.push("\n");
    }
    parts.push(s.body);
  }

  parts.push("\n\n---\n\n# 四、講義（可撕下／單獨影印）\n\n");
  for (const f of handouts) {
    parts.push("\n\n");
    parts.push(normalizeHandoutForPack(read(`docs/curriculum/handouts/${f}`)));
  }

  parts.push(`

---

# 五、給同學的提醒

1. 改 \`content/\` 裡的檔 → 存檔 → 瀏覽器重新整理  
2. 不會的先看錯誤訊息**第一行**，再舉手  
3. Wiki 科學內容以隊上確認與官方站為準，**不編造**  
4. 完整說明也在網站 **\`/class\`**，本講義方便離線與勾選
`);
  return parts.join("");
}

function buildDocxChildrenFromPack(kind, mdFull, sessions) {
  // We build structured children rather than one giant md dump for better H1 breaks
  const isTeacher = kind === "teacher";
  const children = [];

  children.push(
    ...coverChildren(
      isTeacher
        ? {
            badge: "FOR TEACHERS",
            title: "教師手冊",
            subtitle: "Cadture Wiki 製作課程 · 備課與授課用",
            bullets: [
              "14 次 × 3 小時 · 共 42 小時",
              "含：教案總覽 · 教學策略 · 完整 14 堂（含給老師備註）",
              "配套學生講義：Student-Handouts",
              "內容基準：https://2026.igem.wiki/vis/",
            ],
            note: "列印建議：A4 雙面；備課用全文，當堂可只帶該次課",
          }
        : {
            badge: "FOR STUDENTS",
            title: "學生講義",
            subtitle: "Cadture Wiki 製作課程 · 課堂步驟與作業",
            bullets: [
              "14 次 × 3 小時 · 會一點 JavaScript 即可跟",
              "含：學習地圖 · 每堂步驟與檢查表 · 講義紙",
              "線上版：/class",
              "鐵律：英文上站、不造假、路徑不亂改",
            ],
            note: "可整本裝訂，或每次只印當次課堂與對應講義",
          }
    )
  );

  // TOC
  children.push(heading(1, "本文件目錄"));
  if (isTeacher) {
    for (const t of [
      "一、教案總覽（LESSON_PLAN_14）",
      "二、課程總覽／學習地圖（how-to-edit）",
      "三、第 1–14 次完整課堂（含教師備註）",
      "四、講義原文",
      "五、使用說明",
    ]) {
      children.push(
        new Paragraph({
          numbering: { reference: "bullets", level: 0 },
          spacing: { after: 80 },
          children: inlineRuns(t, { size: 22, font: "Arial" }),
        })
      );
    }
    children.push(
      p(
        "學生發放請用「學生講義」。本手冊含教學策略與「給老師」段落，不建議整本發給學生。"
      )
    );
  } else {
    for (const t of [
      "一、課表與常用檢查",
      "二、學習地圖與操作基礎",
      "三、第 1–14 次課堂講義",
      "四、講義（可單獨影印）",
      "五、給同學的提醒",
    ]) {
      children.push(
        new Paragraph({
          numbering: { reference: "bullets", level: 0 },
          spacing: { after: 80 },
          children: inlineRuns(t, { size: 22, font: "Arial" }),
        })
      );
    }
    children.push(
      p("上課時也可打開網站 /class 對照。本講義方便勾選、離線與繳交檢查表。")
    );
  }
  children.push(pageBreak());

  // Parse the pre-built markdown by major H1 sections for body
  // Simpler: convert whole mdFull but skip the first cover heading we already have
  const bodyMd = mdFull.replace(/^# [^\n]+\n+/, ""); // drop top title
  // Split on top-level # headings we care about - convert as one stream with page breaks before # 
  const lines = bodyMd.replace(/\r\n/g, "\n").split("\n");
  let chunk = [];
  const flushChunk = (pageBreakBefore) => {
    const text = chunk.join("\n").trim();
    chunk = [];
    if (!text) return;
    if (pageBreakBefore) children.push(pageBreak());
    children.push(...mdToChildren(text));
  };

  let first = true;
  for (const line of lines) {
    if (/^#\s+/.test(line) && !first) {
      flushChunk(true);
      chunk.push(line);
      continue;
    }
    if (/^#\s+/.test(line)) first = false;
    // Session-level ## 第 N 次 → page break inside section 三
    if (/^##\s+第\s*\d+\s*次/.test(line)) {
      flushChunk(true);
      chunk.push(line);
      continue;
    }
    chunk.push(line);
  }
  flushChunk(false);

  // Ensure sessions still have good titles if md used ## only
  void sessions;
  return children;
}

function makeDocument(headerLabel, children) {
  return new Document({
    styles: {
      default: { document: { run: { font: "Arial", size: 20 } } },
      paragraphStyles: [
        {
          id: "Heading1",
          name: "Heading 1",
          basedOn: "Normal",
          next: "Normal",
          quickFormat: true,
          run: { size: 32, bold: true, font: "Arial", color: BRAND },
          paragraph: {
            spacing: { before: 280, after: 160 },
            outlineLevel: 0,
          },
        },
        {
          id: "Heading2",
          name: "Heading 2",
          basedOn: "Normal",
          next: "Normal",
          quickFormat: true,
          run: { size: 26, bold: true, font: "Arial", color: "1A1A1A" },
          paragraph: {
            spacing: { before: 220, after: 120 },
            outlineLevel: 1,
          },
        },
        {
          id: "Heading3",
          name: "Heading 3",
          basedOn: "Normal",
          next: "Normal",
          quickFormat: true,
          run: { size: 22, bold: true, font: "Arial", color: "333333" },
          paragraph: {
            spacing: { before: 180, after: 100 },
            outlineLevel: 2,
          },
        },
        {
          id: "Heading4",
          name: "Heading 4",
          basedOn: "Normal",
          next: "Normal",
          quickFormat: true,
          run: { size: 20, bold: true, font: "Arial", color: "444444" },
          paragraph: {
            spacing: { before: 140, after: 80 },
            outlineLevel: 3,
          },
        },
      ],
    },
    numbering: {
      config: [
        {
          reference: "bullets",
          levels: [0, 1, 2].map((level) => ({
            level,
            format: LevelFormat.BULLET,
            text: level === 0 ? "•" : level === 1 ? "○" : "▪",
            alignment: AlignmentType.LEFT,
            style: {
              paragraph: {
                indent: { left: 720 + level * 360, hanging: 360 },
              },
            },
          })),
        },
        {
          reference: "numbers",
          levels: [0, 1, 2].map((level) => ({
            level,
            format: LevelFormat.DECIMAL,
            text: `%${level + 1}.`,
            alignment: AlignmentType.LEFT,
            style: {
              paragraph: {
                indent: { left: 720 + level * 360, hanging: 360 },
              },
            },
          })),
        },
      ],
    },
    sections: [
      {
        properties: {
          page: {
            size: { width: PAGE_W, height: PAGE_H },
            margin: {
              top: MARGIN,
              right: MARGIN,
              bottom: MARGIN + 200,
              left: MARGIN,
            },
          },
        },
        headers: {
          default: new Header({
            children: [
              new Paragraph({
                alignment: AlignmentType.RIGHT,
                border: {
                  bottom: {
                    style: BorderStyle.SINGLE,
                    size: 6,
                    color: "E5E5E5",
                    space: 4,
                  },
                },
                children: [
                  new TextRun({
                    text: headerLabel,
                    font: "Arial",
                    size: 16,
                    color: MUTED,
                  }),
                ],
              }),
            ],
          }),
        },
        footers: {
          default: new Footer({
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                border: {
                  top: {
                    style: BorderStyle.SINGLE,
                    size: 6,
                    color: "E5E5E5",
                    space: 4,
                  },
                },
                children: [
                  new TextRun({
                    text: "第 ",
                    font: "Arial",
                    size: 16,
                    color: MUTED,
                  }),
                  new TextRun({
                    children: [PageNumber.CURRENT],
                    font: "Arial",
                    size: 16,
                    color: MUTED,
                  }),
                  new TextRun({
                    text: " 頁",
                    font: "Arial",
                    size: 16,
                    color: MUTED,
                  }),
                ],
              }),
            ],
          }),
        },
        children,
      },
    ],
  });
}

function htmlWrapper(title, badge, bodyHtml) {
  return `<!DOCTYPE html>
<html lang="zh-Hant">
<head>
<meta charset="utf-8" />
<title>${title}</title>
<style>
  @page { size: A4; margin: 15mm 14mm 16mm 14mm; }
  * { box-sizing: border-box; }
  body {
    font-family: "PingFang TC", "Noto Sans TC", "Helvetica Neue", Arial, sans-serif;
    font-size: 10.5pt; line-height: 1.55; color: #1a1a1a;
    max-width: 182mm; margin: 0 auto; padding: 4mm 0 8mm;
    word-wrap: break-word; overflow-wrap: anywhere;
  }
  /* Major parts only (一、二、三…); avoid page break on every fake H1 */
  h1 {
    color: #9F1239; font-size: 16pt; border-bottom: 2px solid #9F1239;
    padding-bottom: 0.2em; margin: 1.2em 0 0.5em;
    page-break-after: avoid; break-after: avoid;
  }
  h1.part { break-before: page; page-break-before: always; margin-top: 0; }
  .doc-body > h1.part:first-child { break-before: auto; page-break-before: auto; }
  h2 {
    font-size: 12.5pt; color: #1a1a1a; margin: 1em 0 0.4em;
    page-break-after: avoid; break-after: avoid;
  }
  h2.session { break-before: page; page-break-before: always; color: #9F1239; }
  h3 { font-size: 11pt; margin: 0.85em 0 0.35em; page-break-after: avoid; }
  h4 { font-size: 10.5pt; margin: 0.7em 0 0.3em; page-break-after: avoid; }
  p { margin: 0.4em 0; }
  a { color: #0563C1; text-decoration: none; word-break: break-all; }
  blockquote {
    margin: 0.55em 0; padding: 0.35em 0 0.35em 0.85em;
    border-left: 3px solid #9F1239; color: #333; font-style: italic;
    background: #fdf2f8; page-break-inside: avoid;
  }
  code {
    font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
    font-size: 8.8pt; background: #f3f4f6; padding: 0.08em 0.28em; border-radius: 3px;
  }
  pre {
    background: #f3f4f6; border: 1px solid #e5e7eb; border-radius: 5px;
    padding: 0.55em 0.75em; overflow-x: auto; page-break-inside: avoid;
    font-size: 8pt; line-height: 1.4; white-space: pre-wrap; word-break: break-all;
  }
  pre code { background: none; padding: 0; font-size: inherit; }
  table {
    border-collapse: collapse; width: 100%; margin: 0.55em 0;
    font-size: 9pt; page-break-inside: avoid; table-layout: fixed;
  }
  th, td {
    border: 1px solid #d1d5db; padding: 0.3em 0.4em;
    text-align: left; vertical-align: top; word-break: break-word;
  }
  th { background: #fce7f3; font-weight: 600; }
  tr:nth-child(even) td { background: #fafafa; }
  ul, ol { margin: 0.35em 0; padding-left: 1.35em; }
  li { margin: 0.15em 0; page-break-inside: avoid; }
  li input[type="checkbox"] { margin-right: 0.35em; }
  hr { border: none; border-top: 1px solid #e5e7eb; margin: 1em 0; }
  .cover {
    text-align: center; padding: 32mm 8mm 18mm;
    page-break-after: always; break-after: page;
  }
  .cover h1 {
    border: none; font-size: 24pt; break-before: auto; page-break-before: auto;
    color: #9F1239; margin: 0.3em 0;
  }
  .cover .badge { color: #9F1239; font-weight: 700; letter-spacing: 0.06em; font-size: 11pt; }
  .cover .sub { font-size: 12.5pt; margin: 0.5em 0 1em; }
  .cover .meta { color: #666; font-size: 10pt; margin: 0.25em 0; }
  .doc-body h1:first-child { break-before: auto; page-break-before: auto; }
</style>
</head>
<body>
  <div class="cover">
    <p class="meta">VIS iGEM 2026 · Team 6423 · Cadture</p>
    <p class="badge">${badge}</p>
    <h1>${title}</h1>
    <p class="sub">14 次 × 3 小時 · Wiki 製作課程</p>
    <hr style="width:40%;margin:1.2em auto;border-top:2px solid #9F1239" />
    <p class="meta">內容基準：https://2026.igem.wiki/vis/</p>
    <p class="meta">線上課堂：/class</p>
    <p class="meta" style="margin-top:1.5em">A4 · 建議雙面列印</p>
  </div>
  <div class="doc-body">
  ${bodyHtml}
  </div>
</body>
</html>`;
}

/** Add print classes to structural headings in rendered HTML. */
function decoratePrintHtml(bodyHtml) {
  let html = bodyHtml;
  // Document parts: 一、…五、
  html = html.replace(
    /<h1([^>]*)>(\s*[一二三四五六七八九十]+、[^<]*)<\/h1>/gi,
    '<h1 class="part"$1>$2</h1>'
  );
  // Each class session starts on a new page
  html = html.replace(
    /<h2([^>]*)>(\s*第\s*\d+\s*次[^<]*)<\/h2>/gi,
    '<h2 class="session"$1>$2</h2>'
  );
  // GFM task list → printable checkbox glyphs
  html = html.replace(
    /<li([^>]*)>\s*<input[^>]*type=["']checkbox["'][^>]*checked[^>]*>\s*/gi,
    "<li$1>☑ "
  );
  html = html.replace(
    /<li([^>]*)>\s*<input[^>]*type=["']checkbox["'][^>]*>\s*/gi,
    "<li$1>☐ "
  );
  return html;
}

function writeHtmlPdf(baseName, title, badge, md) {
  // Drop YAML / doc title / intro meta — cover page already has identity;
  // start body at first major part (一、…) to avoid a near-empty page 2.
  let src = md.replace(/^---[\s\S]*?---\n/, "");
  const partAt = src.search(/^#\s+[一二三四五六七八九十]+、/m);
  if (partAt >= 0) src = src.slice(partAt);
  else src = src.replace(/^#\s+[^\n]+\n+/, "");
  const bodyHtml = decoratePrintHtml(
    marked.parse(src, { gfm: true, breaks: false })
  );
  const html = htmlWrapper(title, badge, bodyHtml);
  const outHtml = path.join(OUT_DIR, `${baseName}.html`);
  fs.writeFileSync(outHtml, html);
  console.log("Wrote", outHtml);

  const outPdf = path.join(OUT_DIR, `${baseName}.pdf`);
  const chromeCandidates = [
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Chromium.app/Contents/MacOS/Chromium",
    "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
  ];
  const chrome = chromeCandidates.find((c) => fs.existsSync(c));
  if (!chrome) {
    console.warn("No Chrome/Edge — skipped PDF for", baseName);
    return;
  }
  const r = spawnSync(
    chrome,
    [
      "--headless=new",
      "--disable-gpu",
      "--no-pdf-header-footer",
      `--print-to-pdf=${outPdf}`,
      "file://" + outHtml,
    ],
    { encoding: "utf8", timeout: 180_000 }
  );
  if (fs.existsSync(outPdf)) {
    console.log(
      "Wrote",
      outPdf,
      `(${(fs.statSync(outPdf).size / 1024 / 1024).toFixed(1)} MB)`
    );
  } else {
    console.warn("PDF failed:", baseName, r.stderr || r.error);
  }
}

async function writeDocx(baseName, headerLabel, kind, md, sessions) {
  const rebuilt = rebuildWithSessionBreaks(kind, sessions, md);
  const doc = makeDocument(headerLabel, rebuilt);
  const out = path.join(OUT_DIR, `${baseName}.docx`);
  const buffer = await Packer.toBuffer(doc);
  fs.writeFileSync(out, buffer);
  console.log("Wrote", out, `(${(buffer.length / 1024).toFixed(1)} KB)`);
}

/**
 * Build cleaner DOCX children with proper covers and session page breaks.
 */
function rebuildWithSessionBreaks(kind, sessions, mdFull) {
  const isTeacher = kind === "teacher";
  const children = [];
  const lessonPlan = read("docs/curriculum/LESSON_PLAN_14.md");
  const howTo = parseFrontmatter(read("content/class/how-to-edit.md"));
  const handouts = listHandouts();

  children.push(
    ...coverChildren(
      isTeacher
        ? {
            badge: "FOR TEACHERS",
            title: "教師手冊",
            subtitle: "Cadture Wiki 製作課程 · 備課與授課用",
            bullets: [
              "14 次 × 3 小時 · 共 42 小時",
              "含：教案總覽 · 教學策略 · 完整 14 堂（含給老師備註）",
              "配套：學生講義 Student-Handouts",
              "內容基準：https://2026.igem.wiki/vis/",
            ],
            note: "列印建議：A4 雙面；備課用全文，當堂可只帶該次課",
          }
        : {
            badge: "FOR STUDENTS",
            title: "學生講義",
            subtitle: "Cadture Wiki 製作課程 · 課堂步驟與作業",
            bullets: [
              "14 次 × 3 小時 · 會一點 JavaScript 即可跟",
              "含：學習地圖 · 每堂步驟與檢查表 · 講義紙",
              "線上版：/class",
              "鐵律：英文上站、不造假、路徑不亂改",
            ],
            note: "可整本裝訂，或每次只印當次課堂與對應講義",
          }
    )
  );

  children.push(heading(1, "本文件目錄"));
  const toc = isTeacher
    ? [
        "一、教案總覽",
        "二、課程總覽／學習地圖",
        "三、第 1–14 次完整課堂（含教師備註）",
        "四、講義原文",
        "五、使用說明",
      ]
    : [
        "一、課表與常用檢查",
        "二、學習地圖與操作基礎",
        "三、第 1–14 次課堂講義",
        "四、講義（可單獨影印）",
        "五、給同學的提醒",
      ];
  for (const t of toc) {
    children.push(
      new Paragraph({
        numbering: { reference: "bullets", level: 0 },
        spacing: { after: 80 },
        children: inlineRuns(t, { size: 22, font: "Arial" }),
      })
    );
  }
  children.push(
    p(
      isTeacher
        ? "學生發放請用「學生講義」。本手冊含教學策略與「給老師」段落。"
        : "也可打開網站 /class 對照。本講義方便勾選、離線與繳交。"
    )
  );

  if (isTeacher) {
    children.push(pageBreak());
    children.push(heading(1, "一、教案總覽"));
    children.push(
      ...mdToChildren(normalizeLessonPlanForTeacherPack(lessonPlan))
    );

    children.push(pageBreak());
    children.push(heading(1, "二、課程總覽／學習地圖"));
    if (howTo.meta.title) {
      children.push(
        new Paragraph({
          spacing: { after: 160 },
          children: [
            new TextRun({
              text: howTo.meta.title,
              font: "Arial",
              size: 24,
              italics: true,
              color: MUTED,
            }),
          ],
        })
      );
    }
    children.push(
      ...mdToChildren(normalizeHowToForPack(howTo.body))
    );

    children.push(pageBreak());
    children.push(heading(1, "三、第 1–14 次完整課堂（含教師備註）"));
    children.push(
      p("與網站 /class/session-01…14 同步，保留「給老師」備註與分鐘表。")
    );
    for (const s of sessions) {
      children.push(pageBreak());
      children.push(...sessionTitleBlock(s.meta, `Session ${s.num}`));
      children.push(...mdToChildren(s.body));
    }

    children.push(pageBreak());
    children.push(heading(1, "四、講義原文"));
    for (const f of handouts) {
      children.push(pageBreak());
      children.push(
        ...mdToChildren(
          normalizeHandoutForPack(read(`docs/curriculum/handouts/${f}`))
        )
      );
    }

    children.push(pageBreak());
    children.push(heading(1, "五、使用說明"));
    children.push(
      ...mdToChildren(`
| 文件 | 給誰 | 內容 |
|------|------|------|
| **教師手冊**（本文件） | 老師 | 教案總覽、教學策略、完整 14 堂（含「給老師」）、講義 |
| **學生講義** | 學生 | 學習地圖、14 堂步驟（已去掉「給老師」）、講義、課表與檢查表 |

- 列印：A4、雙面
- 學生線上版：\`/class\`
- 重新產生：\`npm run printables\`
`)
    );
  } else {
    const studentQuickRef = buildStudentQuickRef(lessonPlan);

    children.push(pageBreak());
    children.push(heading(1, "一、課表與常用檢查"));
    children.push(
      ...mdToChildren(
        studentQuickRef || "請見各次完成檢查表與第四部分講義。"
      )
    );

    children.push(pageBreak());
    children.push(heading(1, "二、學習地圖與操作基礎"));
    if (howTo.meta.title) {
      children.push(
        new Paragraph({
          spacing: { after: 160 },
          children: [
            new TextRun({
              text: howTo.meta.title,
              font: "Arial",
              size: 24,
              italics: true,
              color: MUTED,
            }),
          ],
        })
      );
    }
    children.push(
      ...mdToChildren(
        normalizeHowToForPack(stripTeacherSections(howTo.body))
      )
    );

    children.push(pageBreak());
    children.push(heading(1, "三、第 1–14 次課堂講義"));
    children.push(p("每堂含學習目標、分鐘表、完整步驟、完成檢查表與作業。"));
    for (const s of sessions) {
      children.push(pageBreak());
      children.push(...sessionTitleBlock(s.meta, `Session ${s.num}`));
      children.push(...mdToChildren(s.body));
    }

    children.push(pageBreak());
    children.push(heading(1, "四、講義（可單獨影印）"));
    for (const f of handouts) {
      children.push(pageBreak());
      children.push(
        ...mdToChildren(
          normalizeHandoutForPack(read(`docs/curriculum/handouts/${f}`))
        )
      );
    }

    children.push(pageBreak());
    children.push(heading(1, "五、給同學的提醒"));
    children.push(
      ...mdToChildren(`
1. 改 \`content/\` 裡的檔 → 存檔 → 瀏覽器重新整理  
2. 不會的先看錯誤訊息**第一行**，再舉手  
3. Wiki 科學內容以隊上確認與官方站為準，**不編造**  
4. 完整說明也在網站 **\`/class\`**，本講義方便離線與勾選  
`)
    );
  }

  void mdFull;
  return children;
}

// ── Main ─────────────────────────────────────────────────────

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  // Remove old combined pack if present
  for (const f of fs.readdirSync(OUT_DIR)) {
    if (f.startsWith("Cadture-Wiki-Course-Printable")) {
      fs.unlinkSync(path.join(OUT_DIR, f));
      console.log("Removed old", f);
    }
  }

  const lessonPlan = read("docs/curriculum/LESSON_PLAN_14.md");
  const howTo = parseFrontmatter(read("content/class/how-to-edit.md"));
  const handouts = listHandouts();
  const teacherSessions = loadSessions({ forStudent: false });
  const studentSessions = loadSessions({ forStudent: true });

  const teacherMd = buildTeacherMarkdown(
    lessonPlan,
    howTo,
    teacherSessions,
    handouts
  );
  const studentMd = buildStudentMarkdown(
    lessonPlan,
    howTo,
    studentSessions,
    handouts
  );

  const teacherBase = "Teacher-Handbook";
  const studentBase = "Student-Handouts";

  fs.writeFileSync(path.join(OUT_DIR, `${teacherBase}.md`), teacherMd);
  fs.writeFileSync(path.join(OUT_DIR, `${studentBase}.md`), studentMd);
  console.log("Wrote Markdown packs");

  await writeDocx(
    teacherBase,
    "Cadture · 教師手冊 · VIS iGEM 2026",
    "teacher",
    teacherMd,
    teacherSessions
  );
  await writeDocx(
    studentBase,
    "Cadture · 學生講義 · VIS iGEM 2026",
    "student",
    studentMd,
    studentSessions
  );

  writeHtmlPdf(teacherBase, "教師手冊", "FOR TEACHERS", teacherMd);
  writeHtmlPdf(studentBase, "學生講義", "FOR STUDENTS", studentMd);

  fs.writeFileSync(
    path.join(OUT_DIR, "README.md"),
    `# Printable curriculum packs

兩份獨立文件，請分開列印／發放。

| 文件 | 檔名前綴 | 給誰 | 內容 |
|------|----------|------|------|
| **教師手冊** | \`Teacher-Handbook\` | 老師 | 教案總覽、教學策略、完整 14 堂（**含「給老師」備註**）、講義 |
| **學生講義** | \`Student-Handouts\` | 學生 | 一頁課表、學習地圖、14 堂步驟（**已去掉「給老師」**）、講義紙、檢查表 |

每份皆有：\`.docx\` · \`.pdf\` · \`.html\` · \`.md\`

## 重新產生

\`\`\`bash
npm run printables
\`\`\`

## 列印建議

- **教師：** 印 Teacher-Handbook.pdf 備課；當堂可只帶該次 session
- **學生：** 發 Student-Handouts（整本或每次只印當次 + 對應 handout）
- 紙張：A4、雙面
`
  );

  console.log("Done. Output:", OUT_DIR);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
