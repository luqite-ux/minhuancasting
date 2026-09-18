# Minhuan Full Visual Redesign Implementation Plan

**Goal:** Replace the rejected first-pass visual system with the approved three-banner, product-forward industrial B2B design while preserving verified content and backend behavior.

**Architecture:** Keep the homepage as an async Server Component for catalogue data. Isolate carousel state in one client component. Keep global Header, Footer, ProductCard, and SectionReveal reusable so the corrected brand scale, card sizing, and motion behavior propagate across public routes.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, next/image, lucide-react, Node test runner.

---

### Task 1: Protect the visible homepage contract

- Extend `tests/route-smoke.test.mjs` with a real HTTP assertion for an accessible three-slide hero and the representative catalogue.
- Run the test against the existing site and confirm it fails because only one hero exists.

### Task 2: Correct brand assets and global shell

- Add a non-destructive transparent Logo asset.
- Enlarge the Header logo and add the same linked brand mark to the Footer.
- Preserve aspect ratio, accessible labels, keyboard focus, and responsive limits.

### Task 3: Build the three-slide hero

- Add `components/site/hero-carousel.tsx` as the only client-side carousel owner.
- Define three differentiated messages and image-specific safe-area alignment.
- Add accessible previous/next controls, slide tabs, pause-on-hover/focus, and reduced-motion-aware autoplay.
- Use no gradient layers.

### Task 4: Recompose the homepage narrative

- Replace the old hero and image-only strip in `app/page.tsx`.
- Organize verified facts, representative products, evidence imagery, manufacturing process, and final RFQ in a deliberate conversion sequence.
- Use semantic icons for each information card and factual labels for each image.

### Task 5: Fix product presence and card rhythm

- Change `components/site/product-card.tsx` to a square, clean, full-width media stage with no internal image padding.
- Preserve `object-contain` and background continuity so the whole component remains visible.
- Align the information area and CTA rhythm without forcing descriptions to determine media size.

### Task 6: Complete motion and repeated-card behavior

- Make stagger wrappers participate in grid height correctly.
- Ensure all major public-page sections use viewport-triggered reveal without global timeout completion.
- Preserve reduced-motion and no-JS visibility.

### Task 7: Verify and iterate visually

- Run route tests, lint, and production build.
- Start the site and capture desktop plus 390px screenshots.
- Inspect every public route, motion entry, product subject size, focus state, and brand placement.
- Fix evidence-backed defects, rerun checks, then deploy and verify Production.
