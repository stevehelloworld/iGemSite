# Deploy Cadture to the official 2026 iGEM wiki

This project has one delivery path: Next.js static export → the official iGEM GitLab repository → GitLab Pages at `https://2026.igem.wiki/vis/`.

The 2026 official template builds only the default branch, publishes a `public/` artifact, recommends Node 22, and requires all loaded code and assets to come from iGEM infrastructure. This repository's `.gitlab-ci.yml` follows that contract while copying Next.js `out/` into `public/`.

Current official references:

- Team Wiki requirements: `https://teams.igem.org/go/deliverables/wiki`
- Official example: `https://gitlab.igem.org/2026/example`
- Cadture source target: `https://gitlab.igem.org/2026/vis`
- Published wiki: `https://2026.igem.wiki/vis/`
- 2026 calendar: `https://competition.igem.org/calendar`

## Why the production build differs from local development

Local lessons run at `/`. The official wiki lives under `/vis/`, so CI sets:

```yaml
IGEM_TEAM_SLUG: "vis"
```

`next.config.ts` converts that value into `basePath: "/vis"`. Next links and bundled assets then point to `/vis/...` instead of the domain root.

## Local release checks

First verify the normal student build:

```bash
npm ci
npm run lint
npm run build
```

Then simulate the official path:

```bash
IGEM_TEAM_SLUG=vis npm run build
```

Required evidence:

```bash
test -f out/index.html
test -f out/description/index.html
test -f out/contribution/index.html
test -f out/engineering/index.html
test -f out/human-practices/index.html
rg '/vis/_next/' out/index.html
```

Do not commit `out/`; CI recreates it.

## Publish to the official repository

Only do this after the teacher has verified access and the release commit.

```bash
git remote add igem https://gitlab.igem.org/2026/vis.git
git remote -v
git push igem main
```

If the `igem` remote already exists, do not add it again. Never force-push during class.

The official pipeline performs:

```text
npm ci
→ npm run lint
→ IGEM_TEAM_SLUG=vis npm run build
→ copy out/ into public/
→ publish the public artifact
```

The pipeline runs only on the default branch, matching the official 2026 example.

## Production smoke test

Test the deployed host, not localhost:

- `https://2026.igem.wiki/vis/`
- `https://2026.igem.wiki/vis/description/`
- `https://2026.igem.wiki/vis/contribution/`
- `https://2026.igem.wiki/vis/engineering/`
- `https://2026.igem.wiki/vis/human-practices/`
- `https://2026.igem.wiki/vis/attributions/`

For every URL record desktop, mobile, navigation, media, issue, and owner. Standard URL pages must be real pages, not redirects.

## Content and infrastructure gate

- All public page content is English and team-reviewed.
- No invented data, experiments, people, interviews, or citations.
- Footer links to CC BY 4.0 and `https://gitlab.igem.org/2026/vis`.
- Images, photos, icons, and fonts use the iGEM uploads workflow and `static.igem.wiki`.
- Video and audio follow the current official iGEM hosting guidance.
- No Google Fonts, jsDelivr, cdnjs, or other third-party CDN requests.
- Correct Standard URL spelling is preserved.
- The official Wiki and Judging Form requirements are rechecked before freeze.

## Rollback

If a release breaks production:

1. Identify the last verified release commit.
2. Create a normal revert commit with `git revert <bad-commit>`.
3. Push the revert to the official default branch.
4. Wait for CI and repeat the production smoke test.

Do not hand-edit generated files on the host and do not use a destructive reset as the class rollback method.

## Freeze timeline

Use the live 2026 calendar as the authority. The calendar currently lists Wiki Freeze for October 21, 2026 at 15:00 UTC; recheck it during the release lesson because official dates and instructions can be updated.
