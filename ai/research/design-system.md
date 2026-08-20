# Design System — commercialcoatingscoach.com

Generated via real Google Stitch AI mockups (`stitch-mcp.sh`, raw-HTTP path). Zero quota issues — all 4 screens generated on the first attempt, no hand-authored fallback needed.

- Stitch project: `projects/7927210189198835175` ("Commercial Coatings Coach — site design")
- Design system asset: `assets/13818710175422086753`
- Model: `GEMINI_3_1_PRO`, `deviceType: DESKTOP`

## Palette (strict warm earth tones + natural green — verified hex hues, no purple/pink/blue)

| Role | Name | Hex |
|---|---|---|
| Primary / brand | Rust / Terracotta | `#B5541F` |
| Dark inverted-band | Deep clay-brown | `#6B3A22` |
| Accent | Gold / Amber | `#D4A03C` |
| Secondary | Bronze / Copper | `#9C6B34` |
| Natural accent | Sage Green | `#6E7F52` |
| Background (base) | Warm off-white | `#FAF7F2` |
| Background (tinted band) | Warm sand | `#F0E6D8` |
| Text | Charcoal | `#2A211A` |

## Typography

- Headline: **Manrope** (confident geometric-humanist sans — consulting/SaaS authority, distinct from the residential-contractor feel of other CCA sites)
- Body: **Inter** (clean, readable)
- Roundness: `ROUND_TWELVE`

## Motif / image style

Founder-forward and business-strategy-session photography (office, whiteboard, dashboard) as the PRIMARY hero motif — this is a coaching/consulting brand, not a physical trade contractor. Commercial coatings job-site photography used only as secondary supporting imagery. Explicitly no fabricated named testimonials or invented star ratings. Hero text-over-image scrim held to >=50% opacity per hard rule.

## Section rhythm

No two adjacent sections share a background: white/off-white base <-> sand-tinted band <-> inverted dark clay-brown band (credibility bar / results band / final CTA) <-> full-bleed photo band with scrim.

## Screens generated (`.stitch-pages/`)

| File | Stitch title | Notes |
|---|---|---|
| `home.html` | Home Page - Commercial Coatings Coach | Hero, credibility bar, program grid, methodology, process timeline, inverted results band, FAQ, final CTA, footer |
| `sales-closing-coaching.html` | Sales & Closing Coaching - Program Details | Representative program-page template — what's-included, who-it's-for, inverted why-choose-us, FAQ, inline booking CTA |
| `about.html` | About & Founder - Commercial Coatings Coach | Founder story, values, inverted credentials strip, service-area band |
| `book-a-call.html` | Apply for Coaching - Commercial Coatings Coach | Application/booking form panel, next-steps timeline, inverted FAQ band |

## Exact prompts used

Preserved verbatim in `ai/research/stitch-prompts.md`.

## Downstream build note

Screens are art-direction references (structural scaffold per Stitch skill guidance) — the actual Next.js build applies these as the locked style contract (palette, type pairing, section rhythm, motif) via Tailwind, not by transplanting the raw HTML.
