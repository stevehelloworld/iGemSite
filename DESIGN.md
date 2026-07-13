# DESIGN.md — Cadture Team Wiki

## Theme
**Claymorphic student wiki** — soft 3D, chunky radii, playful but readable science site. Visual cousin to award-winning HS iGEM wikis (GEMS-Taiwan energy: rose, cream, rounded, warm). Brand name on chrome: **Cadture** · VIS iGEM 2026.

## Color (committed brand)
| Token | Hex | Role |
|-------|-----|------|
| primary | `#C94C67` | Rose brand, CTAs, headings accent |
| primary-dark | `#B43852` | Hover / strong text |
| secondary | `#5BB8A8` | Mint (water / bio) |
| accent | `#EA580C` | Energy / highlights (WCAG-safe orange) |
| background | `#FFF8F6` | Soft warm off-white (slight rose chroma) |
| surface | `#FFFFFF` | Cards / stickers |
| ink | `#4A2F34` | Body text (≥4.5:1 on bg) |
| muted | `#7A555C` | Secondary text (still ≥4.5:1 on white) |
| border | `#F0C4CE` | Soft rose borders |
| sky | `#D9EAF0` | Cool chapter tint |
| cream | `#FEF6E8` | Warm chapter tint |
| blush | `#FEEDFB` | Soft pink surface |

## Typography
- **Display:** Fredoka (rounded, friendly headings)
- **Body:** Nunito (readable long-form science)
- Avoid Inter / system-ui as brand voice
- Body line length ~65–75ch
- `text-wrap: balance` on headings

## Shape & depth
- Radius: 16–28px (clay)
- Borders: 2–3px solid rose-tinted
- Shadow: soft double (offset + ambient), no harsh black
- Sticker cards with 3–4px offset shadow for youth wiki feel
- Avoid nested cards

## Motion
- Ease-out expo/quart only (no bounce/elastic)
- 150–300ms micro-interactions
- Float / stagger on hero decorations only
- Always respect `prefers-reduced-motion`

## Icons
Prefer simple SVG (shield, flask, bacterium mascot). Emoji allowed sparingly as decoration, not as sole UI icons.

## Layout
- Max content width ~72rem
- Sticky top nav with soft blur
- Side TOC on long pages
- Colorful page covers (chapter colors) under heroes

## Language
**English only** across UI chrome and content.

## Anti-patterns
- No purple neon gradients
- No gray-on-pastel unreadable text
- No nested card-in-card
- No side-stripe-only callouts as primary pattern
- No Comic Neue for long scientific body copy
