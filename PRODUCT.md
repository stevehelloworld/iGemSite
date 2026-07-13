# Cadture · VIS iGEM 2026 Team Wiki

## Register
brand

## Platform
web

## Product
**This site is the VIS iGEM 2026 team wiki deliverable**, project **Cadture**, team **6423**.

| | |
|--|--|
| **Live official wiki (current content baseline)** | https://2026.igem.wiki/vis/ |
| **GitLab** | https://gitlab.igem.org/2026/vis |
| **How students edit text** | Markdown under `content/` |

### Content policy (important)

1. **Facts follow the current official wiki** (`2026.igem.wiki/vis`) until the team confirms changes.  
2. **If a page is still the iGEM template** (“What Should this Page Contain?”), keep that structure — **do not invent experiments, people, or results**.  
3. **Design** (colors, layout, student-friendly UI) is maintained in the codebase; scientific text is edited via Markdown under `content/`.  
4. **English only** on page content.

### Home vs inner pages

- **Home:** seeded from the current official home (problem, solution steps, highlights, HP, DBTL teaser, team placeholder).  
- **Inner pages:** seeded from official **template guidance** where the live site has not been filled yet.

## Users
- VIS students (edit Markdown)
- Mentors / wiki lead (deploy to iGEM infrastructure)
- iGEM judges (via freeze URL on iGEM hosting)

## Purpose
A student-friendly wiki UI that remains a valid iGEM deliverable path: Standard Pages, English content, and deployability to `2026.igem.wiki/vis`.

## Brand personality
Curious · playful · rigorous · maker · transparent

## Voice
Friendly student English. Short sentences. No Chinese on wiki pages.

## Stack
Next.js App Router · TypeScript · Tailwind CSS v4 · **Markdown content** (`gray-matter` + `react-markdown`)

## Key paths for editors
- `content/home.md` — homepage structured fields  
- `content/pages/*.md` — each wiki page  
- `content/README.md` — how to edit  
- `docs/STUDENT_HANDBOOK.md` — student manual  
- `docs/DEPLOY_TO_IGEM.md` — ship to GitLab / freeze compliance  
