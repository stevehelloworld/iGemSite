# Cadture · VIS iGEM 2026 Wiki

Student-friendly **team wiki deliverable** for **VIS (6423)** · project **Cadture**.

| | |
|--|--|
| **Content baseline (current official)** | https://2026.igem.wiki/vis/ |
| **GitLab** | https://gitlab.igem.org/2026/vis |
| **Edit text** | Markdown in `content/` |

**Policy:** Match official wiki facts; keep iGEM template pages until the team writes real content — **no invented results**. UI is claymorphic / student-styled; science text is owned by students via Markdown.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Students: how to update a page

1. Open `content/pages/<name>.md` (or `content/home.md` for the homepage).  
2. Edit English text.  
3. Save → refresh the browser.  

Manual (中文): **`docs/STUDENT_HANDBOOK.md`**  
Folder guide: **`content/README.md`**

## Docs

| File | Audience |
|------|----------|
| `docs/curriculum/LESSON_PLAN_14.md` | **Teacher — 14×3h curriculum** |
| `docs/STUDENT_HANDBOOK.md` | Students — how to edit content |
| `docs/DEPLOY_TO_IGEM.md` | Wiki lead (freeze / GitLab) |
| `docs/WIKI_MAP.md` | Medals / paths |
| `docs/WRITING_TEMPLATES.md` | Optional long-form outlines |
| `PRODUCT.md` | Product rules |

## Stack

Next.js App Router · TypeScript · Tailwind CSS v4 · Markdown (`content/`)

## Deploy

This UI/content must be shippable to iGEM infrastructure for Wiki Freeze. See `docs/DEPLOY_TO_IGEM.md` (fonts, static.igem.wiki, no external CDNs, CC BY + GitLab footer).
