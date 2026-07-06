# The Peterson Group — Marketing Homepage

A single-page marketing site for The Peterson Group (TPG), built with Next.js
(App Router), TypeScript, and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

Other scripts:

```bash
npm run build         # production build (type-checks + generates static output)
npm run start         # serve the production build
npm run lint          # ESLint
npm run format        # Prettier — writes formatting fixes
npm run format:check  # Prettier — checks formatting without writing
```

## Structure

- `src/app/` — root layout, global styles, and the single page route.
- `src/components/sections/` — one component per homepage section (Nav, Hero,
  ClientLogos, OpeningQuestion, BeforeAfter, HowWeWork, Offers, CostOfWaiting,
  Footer), assembled in `src/app/page.tsx`.
- `src/components/ui/` — shared primitives (Button, Card, EyebrowLabel,
  SectionContainer, NumberedBadge) reused across sections.
- `src/content/` — typed copy/data for each section, kept separate from
  markup so copy changes don't require touching component code.
- `src/app/globals.css` — brand design tokens as CSS custom properties
  (`--tpg-navy`, `--tpg-blue`, `--tpg-cta`, etc.), re-exposed to Tailwind via
  `@theme inline` so they're usable as utility classes (`bg-tpg-navy`,
  `text-tpg-cta`, ...). The accent (`--tpg-blue`) and CTA (`--tpg-cta`) colors
  are intentionally isolated as custom properties so they can be swapped at
  the root without touching component markup.

This is a single long-scroll homepage, not a multi-route app — the nav links
are same-page anchors (`#offers`, `#about`, etc.) with smooth scrolling
handled by `html { scroll-behavior: smooth }` and a `scroll-margin-top` on
each anchored section to clear the sticky nav.

## Nav → section mapping (needs client confirmation)

The reference design's nav links didn't specify which section each one
should point to. The current best-guess mapping, documented in
`src/content/nav.ts`, is:

| Label      | Section                              | Anchor         |
| ---------- | ------------------------------------- | -------------- |
| Services   | Six ways to start (offers)            | `#offers`      |
| About      | Opening question / transformation     | `#about`       |
| AI Fluency | How we work (S.T.E.)                  | `#ai-fluency`  |
| Results    | Client logos strip                    | `#results`     |
| Contact    | Cost-of-waiting CTA band              | `#contact`     |

**Flag this mapping to the client for confirmation before shipping** —
"About" and "AI Fluency" in particular are inferential.

## Notes

- Client logos in `src/content/logos.ts` are placeholder name tiles; swap in
  real logo marks when the client provides them.
- The hero headline rotation is implemented with React state (`setTimeout`
  recursion + a measured min-height wrapper), not vanilla JS, to avoid layout
  shift between headlines of different lengths.
- No browser/screenshot tooling was available in the environment this was
  built in — visual parity with the reference design was verified by
  cross-checking copy, spacing, and color values against the reference file
  section-by-section, plus a clean `npm run build`/`lint` and a manual
  `curl` check of the rendered HTML. A pixel-level visual pass in an actual
  browser (desktop/tablet/mobile) is still recommended before shipping.
