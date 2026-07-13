# Deploy this wiki to iGEM (GitLab → 2026.igem.wiki/vis)

**Intent:** This repo is the **styled team wiki deliverable**. Content is student-edited Markdown under `content/`.  
**Baseline:** https://2026.igem.wiki/vis/ (current official site).  
**Target freeze host:** https://gitlab.igem.org/2026/vis → https://2026.igem.wiki/vis/

Requirements: https://teams.igem.org/6423/deliverables/wiki/requirements

---

## Content rules before deploy

1. Prefer **team-confirmed** text; do not invent science.  
2. Template pages may ship as placeholders until students fill them.  
3. English only on pages.  
4. Home highlights in `content/home.md` must be **verified** before freeze if claimed as results.

---

## What students edit vs what you deploy

| Layer | Location |
|-------|----------|
| Page text | `content/home.md`, `content/pages/*.md` |
| UI chrome | `src/components/*`, `src/app/globals.css` |
| Nav | `src/data/nav.ts` |
| Freeze hosting | GitLab iGEM CI / Pages |

---

## Compliance checklist (freeze)

- [ ] No external CDNs (Google Fonts, jsDelivr, etc.) in freeze build  
- [ ] Replace `next/font/google` with self-hosted fonts or `static.igem.wiki` fonts  
- [ ] Images via uploads → `static.igem.wiki/teams/6423/...`  
- [ ] Videos only from video.igem.org  
- [ ] Footer: **CC BY 4.0** + **https://gitlab.igem.org/2026/vis**  
- [ ] Standard URLs live: `/attributions`, `/contribution`, `/engineering`, `/human-practices`  
- [ ] Official **Attributions Form** embedded/linked on `/attributions`  
- [ ] External Content Check passes  
- [ ] `npm run build` green before port  

---

## Deploy strategies

### A — Keep Markdown workflow here, port HTML periodically (recommended early)

1. Students edit `content/*.md`.  
2. Preview with `npm run dev`.  
3. Wiki lead exports/ports pages into `gitlab.igem.org/2026/vis` template **or** static export.  
4. Verify on `2026.igem.wiki/vis`.

### B — Static export into GitLab Pages

1. Self-host fonts (remove Google runtime).  
2. Configure Next static export if/when routes allow.  
3. CI builds and publishes to Pages under team path.  
4. Confirm `basePath` / asset paths for `/vis/`.

### C — Official iGEM template is source of deploy

1. Use GitLab template for freeze.  
2. Paste Markdown-rendered HTML from this site into template pages.  
3. Still use this repo as the **student editing UX**.

Pick one with the PI; write it in the notebook.

---

## Local commands

```bash
npm install
npm run dev
npm run build
```

---

## Page inventory

| Route | Markdown file |
|-------|----------------|
| `/` | `content/home.md` |
| `/description` | `content/pages/description.md` |
| `/engineering` | `content/pages/engineering.md` |
| `/results` | `content/pages/results.md` |
| `/contribution` | `content/pages/contribution.md` |
| `/experiments` | `content/pages/experiments.md` |
| `/notebook` | `content/pages/notebook.md` |
| `/measurement` | `content/pages/measurement.md` |
| `/alternative-platform` | `content/pages/alternative-platform.md` |
| `/safety-and-security` | `content/pages/safety-and-security.md` |
| `/model` | `content/pages/model.md` |
| `/software` | `content/pages/software.md` |
| `/human-practices` | `content/pages/human-practices.md` |
| `/team` | `content/pages/team.md` |
| `/attributions` | `content/pages/attributions.md` |

---

## Freeze week

- Freeze −14d: Bronze + Silver Standard Pages filled or honestly templated  
- Freeze −7d: figures uploaded to static.igem.wiki  
- Freeze −3d: External Content Check  
- Freeze day: typos only  

Calendar: https://competition.igem.org/about/calendar
