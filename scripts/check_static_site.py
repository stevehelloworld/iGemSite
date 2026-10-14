"""Check the generated static wiki for broken local references and size regressions."""

from __future__ import annotations

import argparse
import os
import re
import sys
from collections import defaultdict
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urljoin, urlsplit


PUBLIC = Path("public")
LOCAL_ORIGIN = "https://site-check.invalid"
PLACEHOLDER_RE = re.compile(
    r"\b(?:placeholder|coming soon|todo)\b|insert\s+(?:photos|details)", re.IGNORECASE
)
KNOWN_PLACEHOLDER_LIMITS = {
    "team": {"coming soon": 21},
    "education": {"placeholder": 2, "insert photos": 2},
}
CSS_URL_RE = re.compile(r"url\(\s*(['\"]?)(.*?)\1\s*\)", re.IGNORECASE)


class PageParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.ids: set[str] = set()
        self.duplicate_ids: set[str] = set()
        self.links: list[str] = []
        self.resources: list[str] = []
        self.controls: list[str] = []
        self.missing_alt: list[str] = []
        self.main_count = 0
        self.base_href: str | None = None
        self.text: list[str] = []

    def handle_starttag(self, tag: str, raw_attrs: list[tuple[str, str | None]]) -> None:
        attrs = dict(raw_attrs)
        element_id = attrs.get("id")
        if element_id:
            if element_id in self.ids:
                self.duplicate_ids.add(element_id)
            self.ids.add(element_id)

        if tag == "main":
            self.main_count += 1
        if tag == "base" and attrs.get("href"):
            self.base_href = attrs["href"]
        if attrs.get("aria-controls"):
            self.controls.extend(attrs["aria-controls"].split())

        if tag in {"a", "area"} and attrs.get("href"):
            self.links.append(attrs["href"])
        if tag in {"img", "script", "iframe", "source", "video", "audio", "input"}:
            src = attrs.get("src") or attrs.get("poster")
            if src:
                self.resources.append(src)
        if tag == "img" and "alt" not in attrs:
            self.missing_alt.append(attrs.get("src") or "<image without src>")
        if tag == "link" and attrs.get("href"):
            rel = set((attrs.get("rel") or "").lower().split())
            if rel.intersection({"stylesheet", "icon", "preload", "manifest"}):
                self.resources.append(attrs["href"])

        srcset = attrs.get("srcset")
        if srcset:
            for candidate in srcset.split(","):
                url = candidate.strip().split()
                if url:
                    self.resources.append(url[0])

        action = attrs.get("action")
        if tag == "form" and action:
            self.links.append(action)

    def handle_data(self, data: str) -> None:
        self.text.append(data)


def html_pages() -> dict[Path, PageParser]:
    pages: dict[Path, PageParser] = {}
    for path in PUBLIC.rglob("*"):
        if not path.is_file():
            continue
        try:
            content = path.read_text(encoding="utf-8")
        except (OSError, UnicodeDecodeError):
            continue
        if "<html" not in content[:2000].lower():
            continue
        parser = PageParser()
        parser.feed(content)
        pages[path] = parser
    return pages


def page_url(path: Path) -> str:
    relative = path.relative_to(PUBLIC).as_posix()
    if relative == "index.html":
        return "/"
    return "/" + relative


def local_target(reference: str, page: Path, parser: PageParser) -> tuple[Path | None, str]:
    reference = reference.strip()
    if not reference or reference.startswith(("#", "//")):
        return None, ""
    split_reference = urlsplit(reference)
    if split_reference.scheme and split_reference.scheme.lower() not in {"http", "https"}:
        return None, ""

    base = parser.base_href or page_url(page)
    base_url = urljoin(LOCAL_ORIGIN + page_url(page), base)
    target_url = urljoin(base_url, reference)
    target = urlsplit(target_url)
    base_parts = urlsplit(base_url)
    if target.netloc and target.netloc not in {urlsplit(LOCAL_ORIGIN).netloc, base_parts.netloc}:
        return None, ""

    target_path = unquote(target.path)
    base_path = base_parts.path
    if base_path != "/" and base_path.endswith("/") and target_path.startswith(base_path):
        target_path = "/" + target_path[len(base_path):]

    if target_path in {"", "/"}:
        candidates = [PUBLIC / "index.html"]
    else:
        relative = target_path.lstrip("/")
        candidate = PUBLIC / relative
        candidates = [candidate]
        if not candidate.suffix:
            candidates.extend([candidate / "index.html", candidate.with_suffix(".html")])
    for candidate in candidates:
        if candidate.is_file():
            return candidate, target.fragment
    return None, target.fragment


def check_css_assets() -> list[str]:
    errors: list[str] = []
    for stylesheet in PUBLIC.rglob("*.css"):
        css_path = "/" + stylesheet.relative_to(PUBLIC).as_posix()
        content = stylesheet.read_text(encoding="utf-8", errors="replace")
        for _, reference in CSS_URL_RE.findall(content):
            reference = reference.strip()
            if not reference or reference.startswith(("#", "//")):
                continue
            split_reference = urlsplit(reference)
            if split_reference.scheme:
                continue
            target = unquote(urlsplit(urljoin(LOCAL_ORIGIN + css_path, reference)).path)
            candidate = PUBLIC / target.lstrip("/")
            if not candidate.is_file():
                errors.append(f"{stylesheet}: missing CSS asset {reference}")
    return errors


def main() -> int:
    argument_parser = argparse.ArgumentParser(description=__doc__)
    argument_parser.add_argument(
        "--max-size-mb",
        type=float,
        default=float(os.environ.get("PUBLIC_MAX_SIZE_MB", "25")),
        help="Maximum uncompressed public/ size in MiB (default: PUBLIC_MAX_SIZE_MB or 25)",
    )
    argument_parser.add_argument(
        "--strict-placeholders",
        action="store_true",
        help="Fail when placeholder copy is present; default mode reports it as a warning.",
    )
    args = argument_parser.parse_args()

    if not PUBLIC.is_dir():
        print("ERROR: public/ does not exist; run the site freeze step first.", file=sys.stderr)
        return 1
    if args.max_size_mb <= 0:
        print("ERROR: --max-size-mb must be greater than zero.", file=sys.stderr)
        return 1

    pages = html_pages()
    errors: list[str] = []
    placeholder_pages: dict[Path, list[str]] = defaultdict(list)
    resource_count = 0
    link_count = 0
    for page, parser in pages.items():
        if parser.main_count != 1:
            errors.append(f"{page}: expected one <main>, found {parser.main_count}")
        for element_id in parser.duplicate_ids:
            errors.append(f"{page}: duplicate id #{element_id}")
        for element_id in parser.controls:
            if element_id not in parser.ids:
                errors.append(f"{page}: aria-controls references missing id #{element_id}")
        for image in parser.missing_alt:
            errors.append(f"{page}: image is missing alt text ({image})")

        text = " ".join(parser.text)
        markers = [match.group(0) for match in PLACEHOLDER_RE.finditer(text)]
        if markers:
            placeholder_pages[page] = markers

        for reference in parser.links:
            if reference.startswith("#"):
                fragment = unquote(reference[1:])
                if fragment and fragment not in parser.ids:
                    errors.append(f"{page}: missing anchor #{fragment} on this page")
                continue
            target_path, fragment = local_target(reference, page, parser)
            if target_path is None:
                if reference.strip() and not reference.startswith(("#", "//")):
                    split_reference = urlsplit(reference)
                    if not split_reference.scheme and not reference.startswith("#"):
                        errors.append(f"{page}: broken internal link {reference}")
                continue
            link_count += 1
            if fragment:
                target_parser = pages.get(target_path)
                if target_parser and unquote(fragment) not in target_parser.ids:
                    errors.append(f"{page}: missing anchor #{fragment} in {target_path}")

        for reference in parser.resources:
            target_path, _ = local_target(reference, page, parser)
            if target_path is None:
                split_reference = urlsplit(reference.strip())
                if reference.strip() and not split_reference.scheme and not reference.startswith("//"):
                    errors.append(f"{page}: missing local asset {reference}")
                continue
            resource_count += 1

    errors.extend(check_css_assets())
    total_bytes = sum(path.stat().st_size for path in PUBLIC.rglob("*") if path.is_file())
    size_mib = total_bytes / (1024 * 1024)
    if size_mib > args.max_size_mb:
        errors.append(f"public/ is {size_mib:.1f} MiB; configured limit is {args.max_size_mb:.1f} MiB")

    print(
        f"Static site check: {len(pages)} pages, {link_count} local links, "
        f"{resource_count} local assets, {size_mib:.1f} MiB / {args.max_size_mb:.1f} MiB limit"
    )
    if placeholder_pages:
        count = sum(len(markers) for markers in placeholder_pages.values())
        print(f"Placeholder scan: {count} known marker(s) in {len(placeholder_pages)} page(s):")
        for page, markers in sorted(placeholder_pages.items()):
            relative_page = page.relative_to(PUBLIC).as_posix()
            allowed = KNOWN_PLACEHOLDER_LIMITS.get(relative_page, {})
            marker_counts: dict[str, int] = defaultdict(int)
            for marker in markers:
                marker_counts[marker.lower()] += 1
            details = ", ".join(f"{marker}: {marker_count}" for marker, marker_count in sorted(marker_counts.items()))
            print(f"  {page}: {details}")
            for marker, marker_count in marker_counts.items():
                limit = allowed.get(marker, 0)
                if marker_count > limit:
                    errors.append(
                        f"{page}: unexpected placeholder marker '{marker}' "
                        f"({marker_count}, known limit {limit})"
                    )
        if args.strict_placeholders:
            errors.append("placeholder copy is present (--strict-placeholders)")

    if errors:
        print("ERRORS:", file=sys.stderr)
        for error in errors:
            print(f"  - {error}", file=sys.stderr)
        return 1
    print("Static site checks passed.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
