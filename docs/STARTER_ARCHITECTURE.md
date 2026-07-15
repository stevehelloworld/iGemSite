# Student starter architecture

`main` is a deliberately incomplete but production-buildable learning branch.

## Safe data flow on day one

```text
route page.tsx
  → WikiPage(slug)
  → getPageBySlug(slug)
  → safe TypeScript fallback
  → PageHero + ContentLayout + MarkdownBody
  → visible browser page
```

The course replaces only one link in this chain at a time:

1. Read the Markdown file with `fs` and `path`.
2. Show the raw file so students can see what was read.
3. Split YAML and body with `gray-matter`.
4. Render body Markdown with `react-markdown` and `remark-gfm`.
5. Add front matter-driven hero tone and TOC.
6. Repeat the pattern for `content/home.md`.

Every intermediate state must pass `npm run build`.

## What is scaffold and what is student work

Provided scaffold:

- Toolchain, dependencies, TypeScript types, filenames, route wrappers.
- Small readable CSS baseline.
- Shared component function signatures.
- Safe fallback data and visible placeholders.
- Approved content templates and simple visual assets.

Student work:

- Semantic homepage sections.
- Component props and reusable composition.
- Array mapping and navigation data.
- Client-side mobile navigation.
- File reading and front matter parsing.
- Markdown rendering and heading anchors.
- Homepage Markdown connection.
- Final content, QA, static export, and handoff.

## TODO marker convention

`TODO(S08-2)` means Session 8, task 2. A TODO is always attached to valid code.

Do not create parser-breaking blanks in the repo. Written quizzes may use blanks, but repository exercises replace complete fallback blocks.
