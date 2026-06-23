# Lessons

A running log of significant infrastructure decisions in this codebase. Each entry captures **what changed**, **why**, and **how to extend it later** — so the next contributor (or the next session) doesn't have to reverse-engineer the decision.

Append a new entry whenever you build something that future work will plug into: a new routing pattern, a new data source, a new global utility, a new SEO/meta system, a new build step, a new dependency, a new convention. Do not log per-content additions (a single blog article, a copy tweak, a styling change) — only the infrastructure that makes those additions possible.

Format for each entry:

```
## YYYY-MM-DD — Short title

**What:** one-line summary
**Why:** the motivation / constraint
**Files:** the key files involved
**How to extend:** what someone adding the next article / page / feature needs to know
```

Newest entries on top.

---

## 2026-06-23 — Contact click conversion tracking

**What:** Added a second Google Ads conversion (`conversion_event_contact`) fired on every "contact action" — phone clicks, WhatsApp click, mailto-less but present on tel/wa links across the site. Form submit now fires both conversions (lead form + contact click).

**Why:** Phone/WhatsApp clicks are softer than form submits but still valuable leads — without tracking them, Smart Bidding has no signal for the "user got contact info" intent. Keeping it as a Secondary conversion in Ads so it informs the algorithm without being optimized as the primary goal.

**Files:**
- `src/lib/analytics.ts` — new `trackContactClick(url?: string)`. With no arg, fires the event and lets the browser handle the link (works for `tel:`, `mailto:`, target="_blank" wa.me — the page doesn't unload). With a url arg, fires the event then `window.location.href = url` after the gtag callback (or 2s timeout). `trackContactFormSubmit()` now also calls `trackContactClick()` so both conversions fire on form success.
- `src/components/Header/index.tsx` — phone link `onClick={() => trackContactClick()}`.
- `src/components/Footer/index.tsx` — phone icon, WhatsApp icon, phone text-link in ניווט מהיר all wired. Mailto deliberately NOT wired — accidental clicks aren't meaningful conversions.

**Deliberately skipped:**
- Terms page phone link — server component, not worth the client conversion for a low-traffic terms route.
- Footer mailto link — high false-positive rate (people misclick mail icons).

**How to extend:**
- New contact CTA (e.g. a fixed-position WhatsApp bubble, a "call now" button on a landing page): add `onClick={() => trackContactClick()}` to the element. No URL arg needed for `tel:` / `mailto:` / target="_blank" — they don't unload the page.
- If you ever add a link that DOES navigate away in the current tab (e.g. external referral link), use `onClick={(e) => { e.preventDefault(); trackContactClick(href); }}` so the helper handles navigation after the event sends.
- Conversion priority: in Ads → Conversions, "Website contact form" should be Primary, "Contact" should be Secondary. Both as Primary = double-counting and over-aggressive bidding.

---

## 2026-06-20 — Google Ads conversion tracking

**What:** Wired Google Ads (AW-714018549) alongside the existing GA4 tag and added a `trackContactFormSubmit()` helper that fires on contact form success. The conversion label is still a placeholder pending the user creating the website conversion action in the Ads UI.

**Why:** Running paid search to drive contact form submissions. Without conversion tracking, Smart Bidding has no signal and money burns on low-intent clicks. Reused the existing inline gtag init script rather than adding a second tag manager.

**Files:**
- `src/app/layout.tsx` — `GOOGLE_ADS_ID = "AW-714018549"` constant next to `GA_MEASUREMENT_ID`. Inline init script now calls `gtag('config', AW)` after the GA4 config, and assigns `window.gtag = gtag` so client components can call it.
- `src/lib/analytics.ts` — `trackContactFormSubmit()` calls `window.gtag('event', 'conversion', { send_to: 'AW-714018549/<LABEL>' })` and also a `generate_lead` GA4 event. `GOOGLE_ADS_CONVERSION_LABEL` is still `"YYYY..."` placeholder — must be replaced with the value from the Google Ads conversion action's Event snippet.
- `src/components/Contact/index.tsx` — calls `trackContactFormSubmit()` immediately after `setStatus("success")` in the `handleSubmit` try block.

**Outstanding manual step (cannot be done from code):**
1. In Google Ads → Goals → Conversions → Summary → **+ New conversion action** → **Website** (NOT "Google hosted"; the existing "Lead form - Submit" is Google's own lead-form ads, wrong target). Name it `Website contact form`.
2. On the Tag setup screen → Install yourself → Use Google tag → copy the Event snippet's `send_to` value (the part after the slash).
3. Paste that value into `GOOGLE_ADS_CONVERSION_LABEL` in `src/lib/analytics.ts`. Redeploy.
4. Verify with Google Tag Assistant — submit the live form, confirm both `conversion` and `generate_lead` events fire.

**How to extend:**
- New conversion types (phone clicks, WhatsApp clicks, scroll-depth): add a new exported function to `src/lib/analytics.ts` that calls `window.gtag('event', ...)` and create a matching conversion action in Google Ads. Don't track everything as the same conversion — Ads needs distinct actions to optimize per goal.
- Multiple gtag IDs (e.g. a second Ads account, Meta Pixel): add another `gtag('config', '...')` line to the inline init script in `layout.tsx`. The script's `window.gtag` already routes by `send_to`.
- If switching to Google Tag Manager later: remove the inline init script + the `googletagmanager.com/gtag/js` Script tag, add the GTM container snippet, and reimplement `trackContactFormSubmit` using `window.dataLayer.push({ event: 'contact_form_submit' })` instead of `gtag('event', ...)`.

---

## 2026-06-09 — Technical SEO infrastructure

**What:** Added centralized site constants, dynamic sitemap, robots.txt, metadataBase, canonical URLs and per-page `og:url` on every page, Google Search Console verification, ProfessionalService JSON-LD in the root layout, and Article + FAQPage JSON-LD on blog posts (with absolute image URLs, publisher.logo, mainEntityOfPage).

**Why:** Articles and pages need to be discoverable and indexable by Google. Without a sitemap and proper meta, Google has to crawl link-by-link and can't be told what changed. metadataBase resolves the OG-image warning at build time. Canonical URLs and per-page `og:url` prevent duplicate-content and bad-share-card issues. Article schema needs absolute image URLs (schema.org requirement) and publisher.logo (Google rich results requirement) to render rich results properly.

**Files:**
- `src/lib/site.ts` — single source of truth: `SITE_URL` (currently `https://www.urishamaut.co.il`, no trailing slash, `www` is canonical), `SITE_NAME`, `SITE_PHONE`, `SITE_LOGO_PATH`, `SITE_DESCRIPTION`. Edit `SITE_URL` here and metadataBase, sitemap, robots, canonicals, OG, and all JSON-LD update.
- `src/app/sitemap.ts` — dynamic sitemap reading from `allPosts`.
- `src/app/robots.ts` — allow `*`, disallow `/blog-details`, `/blog-sidebar`, `/api/`, `/signin`, `/signup`.
- `src/app/layout.tsx` — `metadataBase`, default `openGraph` (inherited by pages that don't override), `verification.google` (live GSC token), `ProfessionalService` JSON-LD (areaServed Israel, no LocalBusiness since no public office).
- Every page has BOTH `alternates.canonical` AND `openGraph.url` in its `metadata` export. The `og:url` is *not* inherited from the layout — without an explicit per-page override, all pages would report the homepage URL as their og:url (caught in a validation pass).
- `src/app/blog/[slug]/page.tsx` — Article + FAQPage JSON-LD. Article schema includes `mainEntityOfPage` (canonical), absolute `image` URL (via `${SITE_URL}${post.image}` helper), and `publisher.logo` as ImageObject.

**Production wiring (already live):**
- Domain: `urishamaut.co.il` registered at Box (`domains.box.co.il`). Apex `urishamaut.co.il` 301-redirects to `https://www.urishamaut.co.il` at the registrar's DNS layer (Box "הפניית 301") — Box doesn't support ANAME for apex, so the 301 forward is the workaround. Don't expect to find this redirect in the codebase or Railway config.
- Hosting: Railway. Custom domain `www.urishamaut.co.il` → CNAME to `xa6sv7dh.up.railway.app`. Target port 8080 (Railway autodetects `next-server`).
- DNS records in Box: CNAME `www` → Railway target, TXT `_railway-verify.www` for Railway domain verification, 301 forward apex → `https://www.urishamaut.co.il`.
- Google Search Console: verified via HTML tag (token in `layout.tsx`). Sitemap submitted.

**How to extend:**
- New static pages: add BOTH `alternates: { canonical: '/your-path' }` AND `openGraph: { url: '/your-path' }` to the page's `metadata` export. Also add to `src/app/sitemap.ts`.
- New blog posts: nothing to do — they auto-register via `allPosts` in the sitemap, get canonical + og:url + Article + FAQPage JSON-LD from the dynamic route.
- Domain change: edit `SITE_URL` in `src/lib/site.ts`. Then update Railway custom domain and Box DNS records (CNAME + 301 forward + TXT verify) to match.
- Adding new JSON-LD: prefer schema.org `@type`s that are subtypes of what you mean. Always absolute URLs in `image`/`logo`/`url` fields (relative paths fail schema validators even though Google may resolve them).
- Validate after any meta change: `grep -rE 'https?://urishamaut\.co\.il' .next/server/app/ 2>/dev/null` should return zero hits (bare apex is a duplicate-content trap).
- Other manual ops user steps (GBP, directory listings, reviews) live in CLAUDE.md under ״SEO — outstanding manual steps״.

---

## 2026-06-09 — Dynamic blog post system

**What:** Replaced the placeholder `blogData.tsx` with a structured `Post` type, a posts directory (one TS file per article), a minimal Hebrew-RTL Markdown renderer, and a dynamic `/blog/[slug]` SSG route with full SEO meta and JSON-LD schemas.

**Why:** The original template had 3 hard-coded placeholder cards pointing to a single static `/blog-details` page. We needed an architecture that scales to dozens of real Hebrew articles, each with its own SEO meta, FAQ schema, and indexable URL.

**Files:**
- `src/types/blog.ts` — `Post` type with `slug`, `metaTitle`, `metaDescription`, `primaryKeyword`, `secondaryKeywords`, `excerpt`, `body` (Markdown string), `faqs`, `tags`, `publishDate`, `readTimeMinutes`, `author`, `image`.
- `src/data/posts/<slug>.ts` — one file per article, exports a `Post`.
- `src/data/posts/index.ts` — aggregator exporting `allPosts` (sorted newest-first), `getPostBySlug`, `getAllSlugs`.
- `src/components/Blog/MarkdownBody.tsx` — minimal renderer for the predictable subset of Markdown ChatGPT produces (H2/H3, ordered + unordered lists, bold, paragraphs). Hebrew-RTL styled. No external dependency.
- `src/app/blog/[slug]/page.tsx` — dynamic SSG route. `generateStaticParams` + `generateMetadata`. Injects Article + FAQPage JSON-LD. Renders body + structured FAQ section.
- `src/lib/hebrew-date.ts` — formats ISO dates as ״8 ביוני 2026״ for display.

**How to extend (adding a new article):**
1. Create `src/data/posts/<kebab-slug>.ts` exporting a `Post` default.
2. Import it in `src/data/posts/index.ts` and add to the `posts` array.
3. `npm run build` — confirms the new path is in the SSG list and there are no type errors.
4. Image goes in `public/images/blog/` and is referenced via `/images/blog/<file>` in `post.image`. Reuse existing placeholders if no real photo yet.

**Conventions for article TS files:**
- `body` is Markdown WITHOUT the H1 (the title is rendered separately from `post.title`). Includes opening hook, H2 sections, and the סיכום.
- `faqs` are stored as a structured array — they generate both the visual FAQ section and the FAQPage JSON-LD schema. The body markdown also contains the FAQ section in plain text (kept as a redundancy for now — single source of truth would be a future cleanup).
- `publishDate` is ISO `YYYY-MM-DD`. The aggregator sorts newest-first by this field.
- Hebrew typography: ״״ for quotes, גרשיים (״) for acronyms, no em-dashes.

**Legacy routes intentionally left alone:** `/blog-details` and `/blog-sidebar` still exist as placeholder pages from the template. They're disallowed in robots.txt and not linked from anywhere. Don't waste time on them; they'll be removed in a future cleanup.
