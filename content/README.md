# Wiki content

Edit these Markdown files to update the **team wiki** (public site). Normal text changes do not require editing React components.

Course / teaching materials are **not** in this repo — see sibling folder `curriculum/cadture-wiki` under the Ray projects directory.

## Rules

1. **English only** in page bodies.  
2. Align facts with the team and https://2026.igem.wiki/vis/  
3. If a page still uses the iGEM template outline, keep it until real content is ready.  
4. After editing, run `npm run dev` and check the page locally.

## Files

| File | Live route |
|------|------------|
| `home.md` | `/` |
| `pages/description.md` | `/description` |
| `pages/engineering.md` | `/engineering` |
| `pages/results.md` | `/results` |
| `pages/contribution.md` | `/contribution` |
| `pages/experiments.md` | `/experiments` |
| `pages/notebook.md` | `/notebook` |
| `pages/measurement.md` | `/measurement` |
| `pages/alternative-platform.md` | `/alternative-platform` |
| `pages/safety-and-security.md` | `/safety-and-security` |
| `pages/model.md` | `/model` |
| `pages/software.md` | `/software` |
| `pages/human-practices.md` | `/human-practices` |
| `pages/team.md` | `/team` |
| `pages/attributions.md` | `/attributions` (create when form is ready) |

Optional extras (design shell only; not required by current official menu):  
`design.md`, `education.md`, `hardware.md`, `parts.md` if present under `pages/`.

## Front matter (top of each page file)

```yaml
---
title: Page title
eyebrow: Section label
subtitle: One-line summary under the title
badge: Optional badge
tone: rose   # rose | mint | sky | cream | lavender
toc:
  - id: section-heading-as-slug
    label: On this page link
---
```

Heading `## My Section` becomes anchor `#my-section` for the TOC.

## How to add a new page

1. Create `content/pages/my-page.md`  
2. Create `src/app/my-page/page.tsx` that renders `<WikiPage slug="my-page" />`  
3. Add the link in `src/data/nav.ts`  

Or ask your teacher / wiki lead for help with steps 2–3.
