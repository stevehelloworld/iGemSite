# Website maintenance guide

[繁體中文版](website-maintenance.zh-TW.md)

This guide covers the Team introductions, static build checks, and results chart
generation added on 13 October 2026. Run the commands below from the repository
root with the project's virtual environment active. Python 3.12 matches the
GitLab build environment.

## Files to edit

| Task | File |
| --- | --- |
| Edit members, roles, portraits, and introductions | `docs/team.md` |
| Adjust Team card styles | `static/team.css` |
| Maintain Team group navigation | `static/js/site-theme.js` |
| Maintain build checks and known placeholder limits | `scripts/check_static_site.py` |
| Change chart values, labels, and presentation | `scripts/build_results_charts.py` |
| Maintain pinned chart dependencies | `chart-dependencies.txt` |
| Maintain the GitLab build sequence | `.gitlab-ci.yml` |

## Team introductions

Each member has a native HTML disclosure using `<details>` and `<summary>`.
Readers can expand or collapse it with a mouse, touch, Enter, or Space. The
browser exposes its expanded state to screen readers. The introduction stays
in the page's normal layout, so a long biography can increase the card height.

To update an introduction, edit the paragraph inside that member's
`.member-card-bio` in `docs/team.md`. Keep the member's name in the summary so
the control remains identifiable:

```html
<details class="member-card-disclosure">
    <summary class="member-card-hint">Read Member Name’s introduction</summary>
    <div class="member-card-bio">
        <p>The member's approved introduction.</p>
    </div>
</details>
```

When adding a portrait, use an `<img>` with an appropriate `alt` description
and `loading="lazy"`, following the existing portrait card. Check the updated
card on a narrow screen and use Tab, Enter, and Space to test the disclosure.

## Build and check the site

Install the runtime and chart dependencies, rebuild the charts, export the
static site, and run the checker:

```bash
python -m pip install -r dependencies.txt
python -m pip install -r chart-dependencies.txt
python scripts/build_results_charts.py
FLASK_APP=app.py flask freeze
python scripts/check_static_site.py
git diff --check
```

The GitLab pipeline installs both dependency files, rebuilds the charts,
freezes the site, and runs the static checker before uploading `public/`.
A checker failure stops the upload. The checker verifies:

- Local page links and fragment targets.
- Local assets referenced by HTML and CSS.
- The presence of an `alt` attribute on images.
- Duplicate element IDs, `aria-controls` targets, and one `<main>` per page.
- Placeholder markers and the total uncompressed size of `public/`.

The default size limit is **25 MiB**. Override it for a local check with
`--max-size-mb`, or set `PUBLIC_MAX_SIZE_MB` in the build environment:

```bash
python scripts/check_static_site.py --max-size-mb 25
```

External URLs and content loaded dynamically by JavaScript need separate
verification. An `alt` attribute passing this check still needs a human review
to confirm that its wording describes the image usefully.

### Placeholder handling

The current allowlist permits up to 21 occurrences of `coming soon` on Team,
and up to two occurrences each of `placeholder` and `insert photos` on
Education. These markers appear in the build report. New markers or counts
above those limits fail the build.

After the team supplies approved content, replace the marker and reduce its
allowance in `KNOWN_PLACEHOLDER_LIMITS` in `scripts/check_static_site.py`.
Keep an allowance only when a placeholder is intentional and still needed.
To require a completely placeholder-free build, run:

```bash
python scripts/check_static_site.py --strict-placeholders
```

## Rebuild the results charts

Chart packages have exact versions in `chart-dependencies.txt`. After
installing them, run:

```bash
python scripts/build_results_charts.py
```

The generator writes these files to `static/assets/charts/`:

- `pvis-gfp-dose-response.svg`
- `pvis-relative-growth.svg`
- `pvis-chart-data.json`

The chart values are recorded in `DOSES`, `GFP`, and `GROWTH` in the generator.
They were transcribed from the supplied report's chart labels; the script does
not calculate growth rates or GFP normalization from raw instrument workbooks.
When results are revised, confirm the values, units, controls, and calculation
method with the team, then update the source values and provenance note.

The SVG generator uses fixed IDs, omits the generation date, and removes
trailing whitespace. Two runs with the same source and dependencies produced
identical file hashes in the local verification. Commit the generated SVG and
JSON files together with any source changes, then inspect the rendered charts
for label overlap and readability.

## Publish an update

Review the diff, run the build checks, and commit the source and generated
assets. Sync the same commit to GitLab `main` and GitHub `main`; the GitHub
update triggers the linked Vercel deployment. Confirm that GitLab Pages passes
and Vercel's production deployment is READY for that commit. Finally, open the
affected pages on both deployments and check the visible result.
