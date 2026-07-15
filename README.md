# Cadture Wiki · Student Starter

This is the **student starting branch** for the VIS iGEM 2026 Cadture wiki course.

- `main` — buildable starter with small, visible `TODO(Sxx-x)` tasks.
- `complete` — archived complete reference site for the teacher. Students should not copy from it during the course.
- Course materials — `../curriculum/cadture-wiki/` in the Ray workspace.

The starter is intentionally incomplete, but it must always run and build. A missing lesson feature is represented by a visible placeholder, never invalid TypeScript or JSX.

## Start here

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

Before and after each lesson checkpoint:

```bash
npm run lint
npm run build
```

## What already works

- Next.js App Router project structure.
- A small Cadture homepage preview.
- Buildable Standard URL route files.
- A basic shared layout, navigation, footer, card, and page shell.
- A demo content pipeline that returns safe fallback data.
- Markdown packages are installed for the later content-engine lessons.

## What students will build

Search for the lesson markers:

```bash
rg 'TODO\(S[0-9]+'
```

| Lessons | Main construction work |
|---|---|
| 1–3 | Project map, homepage JSX, Cadture styling, responsive layout |
| 4–5 | Reusable components, props, arrays, and `.map()` |
| 6–7 | Routes, global layout, data-driven and interactive navigation |
| 8–10 | File reading, front matter, Markdown rendering, page hero, and TOC |
| 11 | Move homepage data into `content/home.md` |
| 12–14 | Real content, accessibility, QA, static export, and handoff |

## The buildable-TODO rule

Do not replace code with syntax holes such as `<___>` or remove required braces. Keep a working fallback and replace one complete block at a time:

```ts
// TODO(S08-1): replace this fallback with Markdown file reading.
return starterPage;
```

Every numbered step in the handout has an expected browser result and a recovery check.

## Content integrity

- Public wiki content is English.
- Do not invent experiments, people, interviews, or results.
- Keep required iGEM Standard URL names stable.
- Images need permission, alt text, and an approved iGEM-hosted location before freeze.

The final maintenance workflow is Markdown-only for normal content changes:

- `content/home.md`
- `content/pages/*.md`
