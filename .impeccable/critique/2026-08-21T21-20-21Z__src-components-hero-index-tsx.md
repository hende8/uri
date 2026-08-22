---
target: Hero section
total_score: 20
max_score: 36
na_heuristics: 9
p0_count: 1
p1_count: 3
timestamp: 2026-08-21T21-20-21Z
slug: src-components-hero-index-tsx
---
Method: dual-agent (A: design review · B: detector + browser evidence)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | `קבלת ייעוץ חינם` never discloses it opens the dialer; WhatsApp is `target="_blank"` with no cue; no availability/response-time status. |
| 2 | Match System / Real World | 2 | Industry framing (`הערכת הנזק`, `שמאות בלתי תלויה`) instead of the words a flooded person uses; plural `נדאג` misdescribes a one-person practice. |
| 3 | User Control and Freedom | 3 | Nothing traps the user, but every hero exit is an irreversible commitment — no low-commitment path in-hero. |
| 4 | Consistency and Standards | 2 | Two focus systems (custom 2px navy on Call vs UA 1px ring on WhatsApp); gold used as underline here and as eyebrow rule elsewhere. |
| 5 | Error Prevention | 2 | `tel:` fires into a desktop handler with no confirmation and no visible number to fall back to. |
| 6 | Recognition Rather Than Recall | 3 | Everything needed is on screen except the phone number, which is absent from the hero and hidden in the header below 768px. |
| 7 | Flexibility and Efficiency | 2 | Two channels plus a floating shortcut, but no click-to-copy number, no email, no jump to a damage type. |
| 8 | Aesthetic and Minimalist Design | 2 | Generic centered stack in wide white gutters; the gold rule paints outside the `h1` box; ~130px dead zone at the bottom at 1440×900. |
| 9 | Error Recovery | n/a | Hero has no inputs, no async states, no failure modes. |
| 10 | Help and Documentation | 2 | "What is an independent appraiser and what happens after I call" is the documentation on a Persuade surface, and it is absent. |
| **Total** | | **20/36** | **Below average — functional, not yet persuasive** |

## Design Specificity Verdict

**LLM assessment:** Not authored for this product. Strip five Hebrew words and this is a dental clinic, a mortgage broker, or a Series-A SaaS: centered 840px column, headline, long paragraph, two equal pill buttons, three dot-bullets, one small badge. No face, no name (אורי דבי appears nowhere in the hero), no artifact of the craft, and no visual expression of the one idea the business exists on — *the insurer's appraiser is not your appraiser*. The only product-specific atom is the איגוד seal, and it is the smallest, lowest, last element, rendered as an illegible 64px smudge.

**Deterministic scan:** `detect.mjs --json src/components/Hero/index.tsx` → exit 0, `[]`, zero findings. The whole `src/components/` tree also scanned clean. Static-clean did not mean hero-clean: the runtime detector injected in-page reported 2 × `low-contrast`, one of them the hero WhatsApp CTA (2.0:1, need 4.5:1).

**Visual overlays:** injection succeeded and a yellow-bordered "low contrast text" overlay was rendered over the hero WhatsApp CTA. The live server has since been stopped, so **no overlay is visible now**.

## Overall Impression

The mechanics are genuinely good — the RTL is real rather than accidental, the thumb ergonomics are right, and the motion respects both `prefers-reduced-motion` and the LCP element. What's missing is a reason to believe. The hero is anonymous, promises an outcome it cannot guarantee, and buries its only verifiable claim at 56px. Biggest opportunity: put a name, a face, and a falsifiable response-time commitment where the generic promise currently sits.

## What's Working

1. **The RTL is real.** Logical properties throughout, and the Call CTA is first in DOM so it renders rightmost — read first in Hebrew. Most Hebrew sites built on LTR templates get that order backwards.
2. **Mobile thumb ergonomics.** Both CTAs measure 56×358 at 390px, stacked with a 12px gap, primary at y=361–417 — centre of the thumb arc.
3. **Motion handled with care.** `prefers-reduced-motion` kills both keyframes, and `hero-lead` animates only translate+blur, never opacity, so the LCP headline is never invisible.

## Priority Issues

- **[P0] White-on-green WhatsApp label is 1.98:1.** Confirmed three ways: injected detector, direct computation, and Lighthouse (which flagged the Contact-section twin and under-reported the hero's). AA needs 4.5:1. *Why it matters:* the user is outdoors at a damaged property or in bed at 23:40 with the screen dimmed, at the exact moment they must choose a channel. *Fix:* keep the brand fill, set the label to `#0B1F3A` (~8.3:1); or darken the fill to ~`#128C4A` and keep white. Add the missing `focus-visible:outline-2 focus-visible:outline-offset-2` to `WhatsAppButton` so both CTAs share one focus language. *Command:* `/impeccable audit`
- **[P1] The gold `hero-mark` is geometrically detached.** At 1440 the band paints at y≈343.6–350 while the `h1` box ends at y=338 — the mark is outside its own heading and sits closer to the paragraph (y=362) than to the words it marks. It reads as a divider, not emphasis. Cause: the inline box's ascent+descent overflows `leading-[1.08]` and the gradient anchors to that overflow. *Fix:* baseline-tracked `text-decoration-color`/`text-underline-offset`, or pin the gradient with `background-size: 100% 0.09em; background-position: 0 0.84em; background-repeat: no-repeat`; relax the h1 to `leading-[1.18]` at ≥768px. *Command:* `/impeccable typeset`
- **[P1] The phone number does not exist in the hero, and vanishes from the header on mobile.** No digits anywhere in `#home`; `header a[href^="tel"]` computes `display:none` below 768px. *Why it matters:* older homeowners in distress want to read the number aloud, save it, or call from a landline. *Fix:* put `050-6273002` in the hero as text, and add a sticky bottom Call+WhatsApp bar on mobile. *Command:* `/impeccable adapt`
- **[P1] Nothing answers "will someone answer tonight?"** `זמינות לאורך כל התהליך` is the vaguest of the three proof points. Response time *is* the purchase decision at 23:40. *Fix:* replace with something falsifiable — a stated call-back window or arrival window — plus one line under the CTA row about evenings and weekends. Requires the user to confirm the real commitment; do not invent it. *Command:* `/impeccable clarify`
- **[P2] Anonymous, and the promise over-reaches.** No name, no face, no damage imagery. `נדאג` violates the project's own first-person-singular rule, and `נדאג שתקבלו את הפיצוי המלא` guarantees an outcome an appraiser cannot control — to someone just over-promised by an insurer that reads as sales, and carries professional-conduct risk. *Fix:* name him in the hero, break to an asymmetric two-column composition at ≥992px with a real photo (also killing the ~300px dead gutters at 1440), switch to `אדאג`, and promise the process rather than the number. *Command:* `/impeccable bolder`

## Persona Red Flags

**"Just-flooded homeowner at 23:40" (project-specific):** no availability claim, no visible number to dial manually, no word about what the appraiser costs — an unpriced stranger is a hard tap at midnight. The headline's guarantee pattern-matches to the over-promise they just heard from the insurer.

**Jordan (Confused First-Timer):** has never heard of an independent שמאי and does not know he is *allowed* to bring one against the insurer — the hero never states this, the most persuasive fact in the business. `שמאות בלתי תלויה` presupposes he knows what *dependent* appraisal is. CTA is labeled by benefit, not action, so he cannot predict it opens a dialer.

**Sam (Accessibility-Dependent):** 1.98:1 on a conversion CTA; two conflicting focus treatments; no skip link, so a keyboard user traverses logo → hamburger → 5 nav items → WhatsApp icon → header call before reaching the hero CTA; `target="_blank"` with no programmatic warning.

**Casey (Distracted Mobile):** at 360×740 the trust badge is clipped by the fold *and* the floating WhatsApp bubble overlaps it (measured collision). The CTA row finishes animating ~980ms after paint — Casey can tap a still-translating, still-blurred target.

## Minor Observations

- The badge PNG is `priority` and loads the `w=256` candidate (23.8KB) into a 56–64px box — a 4× oversample, LCP budget spent on an unreadable circle. Pass `sizes`, or redraw the seal as SVG.
- `letter-spacing: -0.02em` on `h1`/`h2` is inherited Latin-template tuning. At Heebo 800/64px (−1.28px) the counters of ס/ם/ט start to close. Hebrew headings want `0` or `+0.005em`.
- `text-wrap: balance` splits the verb pair `נדאג / שתקבלו` across lines at 1200px.
- `.hero-grid` at 5.5% alpha under a radial mask is effectively invisible at 1440 — it costs paint without reading as a surface.
- Primary CTA hover moves `#0F3B68` → the *lighter* `#2E6EA6`; on a Persuade surface the primary should gain weight on hover, not lose it.
- Page has no `<main>` landmark (`landmark-one-main` fails) — layout-level, not hero-level.
- Zero console errors; zero horizontal overflow at 1440 and at a true 390px viewport; all other hero text passes AA (h1 16.52:1, paragraph 5.97:1, proof items 15.89:1, Call CTA 11.38:1).

**False positives noted and dismissed:** the 6px gold bullet dots at 2.10:1 (decorative, adjacent text carries meaning); `alt=""` on the badge (correct — adjacent text duplicates it); Lighthouse `third-party-cookies`/`inspector-issues` (gtag, out of scope).

## Questions to Consider

1. If you deleted every Hebrew word and left only the composition, could anyone tell this is a damage appraiser rather than a dental clinic — and what is the gold rule actually earning?
2. The business rests on one asymmetry: *the insurer's appraiser is not your appraiser*. Why is that sentence not the headline?
3. You spend your largest pixels on an unverifiable promise and your smallest on the only verifiable claim. Which does a person just under-quoted by an insurer actually believe?
4. A homeowner with water coming through the ceiling wants one fact before they tap. Where does it say **"אני עונה"** — and who is "אני"?
