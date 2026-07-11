# CadArmor · VIS iGEM 2026 Wiki

Team wiki for **VIS iGEM 2026** — project **CadArmor**: dual-mode cadmium bioremediation (**Detect → Capture → Mineralize**) using surface-displayed metallothionein and MICP.

**Language:** English only.

Inspired by award-winning student wiki craft (e.g. GEMS-Taiwan) and grounded in Ray’s research flight logs.

## Stack

- Next.js (App Router) · TypeScript · Tailwind CSS v4

## Design skills (all projects + this repo)

Installed for AI harnesses globally and in this project:

| Skill | Source | Purpose |
|-------|--------|---------|
| **Impeccable** | [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | Design critique, polish, motion, anti-AI-slop |
| **UI/UX Pro Max** | [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | Design systems, palettes, UX checklist |

Grok user skills: `~/.grok/skills/impeccable`, `~/.grok/skills/ui-ux-pro-max`  
Project: `.grok/skills/`, `.agents/skills/`, `.claude/skills/`, etc.

Context files: `PRODUCT.md`, `DESIGN.md`, `design-system/MASTER.md`

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Site map

| Section | Routes |
|--------|--------|
| Home | `/` |
| Project | `/description`, `/design`, `/engineering`, `/results` |
| Wet Lab | `/experiments`, `/parts`, `/notebook` |
| Dry Lab | `/model`, `/hardware` |
| Human Practices | `/human-practices`, `/education`, `/safety` |
| Team | `/team`, `/attributions` |
| Journal | `/journal`, `/journal/[slug]` |

## Deploy

```bash
npx vercel
```
