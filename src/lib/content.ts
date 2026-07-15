export type TocItem = {
  id: string;
  label: string;
};

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

const starterPages: Record<string, WikiPageData> = {
  description: {
    slug: "description",
    frontmatter: {
      title: "Description",
      eyebrow: "Starter pipeline",
      subtitle: "This page is still using safe TypeScript fallback data.",
      badge: "Lesson 8 will connect Markdown",
      tone: "rose",
    },
    body:
      "## The pipeline is alive\n\nThe route, WikiPage, page hero, layout, and body renderer already work. The next job is to replace this fallback with content/pages/description.md.",
  },
};

function titleFromSlug(slug: string) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function getPageBySlug(slug: string): WikiPageData {
  const knownPage = starterPages[slug];
  if (knownPage) return knownPage;

  // TODO(S08-1): replace this fallback with fs/path file reading.
  // TODO(S08-2): split YAML front matter and body with gray-matter.
  return {
    slug,
    frontmatter: {
      title: titleFromSlug(slug),
      eyebrow: "Buildable placeholder",
      subtitle: "The route works; its Markdown file is not connected yet.",
      tone: "sky",
    },
    body: `## ${titleFromSlug(slug)} is ready to connect\n\nOpen the lesson handout and replace the fallback one safe step at a time.`,
  };
}

export type HomeData = {
  frontmatter: {
    title: string;
    badge?: string;
    tagline?: string;
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

const starterHome: HomeData = {
  frontmatter: {
    title: "Cadture",
    badge: "Starter data",
    problems: [
      {
        title: "Heavy-metal pollution",
        body: "This data is still in TypeScript.",
        tag: "Pb + Cd",
      },
    ],
    locations: [],
    solution: [],
    highlights: [],
    sustainable: "Homepage Markdown is not connected yet.",
    humanPractices: [],
    engineering: [],
    teamNote: "Team content will be added only after consent and review.",
  },
  body: "",
};

export function getHomeContent(): HomeData {
  // TODO(S11-1): replace starterHome with content/home.md file reading.
  // TODO(S11-2): parse the YAML arrays with gray-matter.
  return starterHome;
}
