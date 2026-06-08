# Uri — Property Damage Appraisal Website

## What this is

Marketing site for an independent property damage appraisal business
("אורי שמאות נזקים" — Uri Damage Appraisal). The business represents
insureds against insurance companies for water, fire, burglary, and
natural-disaster damage claims.

**Audience:** Hebrew-speaking homeowners and small business owners
filing or contesting property insurance claims in Israel.

**Tone:** Professional, advocacy-focused. Position the appraiser as
*the insured's representative*, distinct from the insurance company's
appraiser.

## Tech stack

- **Next.js 16** (App Router) — `src/app/`
- **React 19**, TypeScript
- **Tailwind CSS v4** — config in `src/styles/index.css` via
  `@theme`/`@utility` blocks (no `tailwind.config.js`)
- **Heebo** font via `next/font/google` (Hebrew + Latin subsets)
- Path alias: `@/*` → `src/*` (see `tsconfig.json`)

## Theme

Light mode only. The site does not support dark mode and `next-themes`
is not installed. Do not add `dark:` Tailwind variants — they will not
render. The design system is a single light palette tuned for a
professional appraisal/insurance feel:

- `--color-primary: #0F3B68` (deep blue)
- `--color-secondary: #2E6EA6` (supporting blue, used for hover and
  uppercase section eyebrows)
- `--color-accent: #D4AF37` (gold, used sparingly — accent rules,
  footer column underlines, the dot in the brand wordmark)
- `--color-gray-light: #F5F7FA` (alternating section background)

Alternating section backgrounds: Hero/Services/Process/Contact on
white; Why Choose Us/About/Blog on `bg-gray-light`. Section eyebrows
use the `accent-rule` helper class defined in `index.css`.

## Internationalization & direction

- Site is **Hebrew RTL only**. `<html lang="he" dir="rtl">` set in
  `src/app/layout.tsx`. `layout.tsx` is a server component — keep it
  that way. Components that need React hooks must declare
  `"use client"` themselves (e.g. `Header`, `ScrollToTop`,
  `ScrollUp`).
- All copy is Hebrew. Use sentence-style Hebrew quotes (״) for
  quotation marks, not straight `"`.
- **Use logical Tailwind utilities** (`ms-`, `me-`, `ps-`, `pe-`,
  `start-`, `end-`) for content-flow spacing so the layout reads
  correctly in RTL. Reserve physical `mr-`/`ml-`/`pr-`/`pl-`/`right-`/
  `left-` for cases where you specifically want a side that does NOT
  flip (e.g. decorative absolute-positioned art).
- Decorative SVGs that were originally `right-0` in the LTR template
  were intentionally flipped to `left-0` (and vice versa) so they
  balance the layout in RTL. Match that pattern when adding new
  background art.
- The `.rtl-flip` helper in `src/styles/index.css` mirrors an element
  horizontally — use for directional icons (arrows, play buttons) that
  point the wrong way in RTL.

## Section structure

The homepage (`src/app/page.tsx`) renders these sections in order:

1. **Hero** — `components/Hero/`
2. **Services** — `components/Services/` (catalog of damage-type
   expertise — section `id="services"`)
3. **Why Choose Us** — `components/WhyChooseUs/` (advocacy proposition
   + bullet list)
4. **Process** — `components/Process/` (3 cards: response time,
   representation, transparency)
5. **About** — `components/About/` (company background)
6. **Contact** — `components/Contact/` (form only — no newsletter)
7. **Blog** — `components/Blog/`

`Header` and `Footer` wrap every route via `src/app/layout.tsx`.
`ScrollToTop` and `ScrollUp` are utility components.

When adding a new homepage section: drop a component in
`src/components/<Name>/index.tsx`, import it into `src/app/page.tsx`,
and pick an order that fits the narrative flow above. Don't reintroduce
removed sections (Pricing, Newsletter, Brand carousel, Video promo,
Testimonials) without an explicit ask.

## Inner pages

- `/about`, `/contact`, `/blog` — standalone pages that use
  `Common/Breadcrumb` + reuse the homepage section components.
- `/blog-details`, `/blog-sidebar` — single-post layouts (placeholder
  copy).
- `/signin`, `/signup`, `/error` — auth and 404 pages.

## Conventions

- **Don't add CLAUDE.md duplication.** Per-directory CLAUDE.md files
  are not used here — keep all project guidance in this single root
  file.
- **No comments explaining what code does.** Prefer self-evident names.
  Only add a comment when there's a non-obvious *why*.
- **Don't introduce new dependencies** without a strong reason. The
  template ships intentionally lean.
- **Section anchor ids** must match what Header/Footer links point to.
  When you rename a section anchor, sweep `components/Header/menuData.tsx`
  and `components/Footer/index.tsx` for stale `#anchor` references.

## Local dev

```
npm install
npm run dev          # port 3000 by default
npm run build        # production build (catches type errors)
```

Build cleanly before committing. The build step runs `tsc` and will
fail on type errors.
