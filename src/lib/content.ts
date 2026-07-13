import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content");
const PAGES_DIR = path.join(CONTENT_DIR, "pages");

export type TocItem = { id: string; label: string };

export type PageFrontmatter = {
  title: string;
  eyebrow?: string;
  subtitle?: string;
  badge?: string;
  tone?: "rose" | "mint" | "sky" | "cream" | "lavender";
  mascotMood?: "hero" | "happy" | "think";
  toc?: TocItem[];
};

export type WikiPageData = {
  slug: string;
  frontmatter: PageFrontmatter;
  body: string;
};

export function getPageSlugs(): string[] {
  if (!fs.existsSync(PAGES_DIR)) return [];
  return fs
    .readdirSync(PAGES_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getPageBySlug(slug: string): WikiPageData {
  const full = path.join(PAGES_DIR, `${slug}.md`);
  if (!fs.existsSync(full)) {
    throw new Error(`Missing content file: content/pages/${slug}.md`);
  }
  const raw = fs.readFileSync(full, "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    frontmatter: data as PageFrontmatter,
    body: content.trim(),
  };
}

export type HomeData = {
  frontmatter: {
    title: string;
    tagline: string;
    badge: string;
    problems: { title: string; body: string; tag: string }[];
    locations: { name: string; body: string }[];
    solution: { title: string; body: string }[];
    highlights: { value: string; label: string }[];
    sustainable: string;
    humanPractices: { title: string; body: string }[];
    engineering: { title: string; body: string }[];
    teamNote: string;
  };
  body: string;
};

export function getHomeContent(): HomeData {
  const full = path.join(CONTENT_DIR, "home.md");
  const raw = fs.readFileSync(full, "utf8");
  const { data, content } = matter(raw);
  return {
    frontmatter: data as HomeData["frontmatter"],
    body: content.trim(),
  };
}
