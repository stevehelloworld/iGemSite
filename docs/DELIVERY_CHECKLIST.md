# Cadture final delivery checklist

The starter is allowed to be incomplete. The final student site is not.

## Build gate

- [ ] `npm run lint` passes.
- [ ] `npm run build` passes and creates `out/`.
- [ ] `IGEM_TEAM_SLUG=vis npm run build` passes.
- [ ] `out/index.html` references `/vis/_next/` production assets.
- [ ] No required `TODO(Sxx-x)` remains.
- [ ] No external font request is required.

## Required structure

- [ ] `/contribution` is a real page.
- [ ] `/engineering` is a real page.
- [ ] `/human-practices` is a real page.
- [ ] `/attributions` is a real page and points to the official attribution workflow.
- [ ] Navigation links resolve without redirects used as substitutes for Standard URLs.

## Markdown handoff gate

- [ ] Normal homepage edits only change `content/home.md`.
- [ ] Normal page edits only change `content/pages/*.md`.
- [ ] Front matter controls title, subtitle, tone, badge, and TOC.
- [ ] Markdown headings, lists, tables, links, quotes, and images render correctly.
- [ ] A student can explain `.md → content.ts → WikiPage → MarkdownBody → browser`.

## Content and accessibility

- [ ] English public content has been reviewed.
- [ ] No invented experiments, results, people, or stakeholder claims.
- [ ] Every image has meaningful alt text, caption, permission, and source.
- [ ] Heading order is logical.
- [ ] Keyboard focus is visible.
- [ ] Mobile and desktop layouts are readable.
- [ ] Reduced-motion preference is respected.

## Freeze handoff

- [ ] CC BY 4.0 and team source links are present in the footer.
- [ ] Media locations comply with the current iGEM requirements.
- [ ] Production URLs have been clicked on the actual target host.
- [ ] Official GitLab CI publishes the `public/` artifact from `main`.
- [ ] The team has named page owners and reviewers.
- [ ] A final Markdown-only maintenance drill has passed.
