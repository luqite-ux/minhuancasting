# Motion Plan — Minhuan Precision Casting

Industry: precision casting, machined cast parts, and custom industrial components.  
Goal: make a large technical product catalogue feel navigable and precise while preserving product recognition and fast RFQ access.

## Candidate review

| Candidate | Source | Score / 30 | Decision | Reason |
|---|---|---:|---|---|
| Bounded `inView` reveal with one-time observers | Motion official `inView` / React scroll animation docs | 27 | Adopt | Supports per-section viewport lifecycle, observer cleanup and bounded stagger without global timers. |
| Reduced-motion aware component transitions | Motion official `useReducedMotion` docs | 29 | Adopt | Maps directly to carousel stop, zero displacement and immediately visible content. |
| CSS view-progress timelines | MDN Scroll-driven Animations | 20 | Progressive enhancement only | Useful for one short casting-flow trace, but core content cannot depend on partial browser support. |
| Deep parallax / pinned scroll sequence | General scroll-linked candidate | 11 | Reject | Adds mobile and performance cost and distracts from exact product geometry across 282 products. |

Recent-combination check: the plan does not reuse the recent HVAC airflow, conductor strand, textile filament, welding seam or fly-ash process combinations. Its industry-specific device is a mould-to-finished-part contour trace plus a restrained orange heat-to-teal precision handoff.

## Selected scenes

### MOT-MINHUAN-01 — Protected-subject Hero crossfade

- Role: narrative.
- Location: homepage three-slide Hero.
- Effect: 500ms crossfade with a short 8px copy rise; only the active slide is announced. Auto-advance pauses on hover, focus, hidden page and user interaction.
- Desktop: preserve the per-slide focal points and copy-safe areas in the media plan.
- 390px: use independent crops and 6px copy movement; never move the product outside its safe area.
- Reduced motion: no auto-advance, no displacement, instant manual slide switch.

### MOT-MINHUAN-02 — Mould-to-part contour trace

- Role: industry-specific explanation.
- Location: capability/cooperation flow.
- Effect: a single SVG line traces mould/drawing → casting → machining → inspection when the flow enters view; nodes activate once in reading order.
- Desktop: horizontal path with bounded 650ms trace.
- 390px: static vertical path with only short node emphasis.
- Reduced motion / unsupported browser: complete static line and all labels visible immediately.

### MOT-MINHUAN-03 — Catalogue section reveal

- Role: content hierarchy.
- Location: every main public-page section and all product/news/contact templates.
- Effect: per-section 20px/550ms reveal and at most six children staggered by 60ms. An element is marked played only after its own IntersectionObserver entry; no fixed/global timeout may consume off-screen motion.
- Desktop: 20px translation; product cards may use alternating mask direction only when it does not crop the subject.
- 390px: 10px translation and maximum 120ms cumulative stagger.
- Fail-safe: content is visible by default. Hiding only occurs after a synchronous `data-motion-ready` enhancement marker; no-JS, slow-load and observer failure restore visibility without marking scenes played.
- Reduced motion: immediate final state.

### MOT-MINHUAN-04 — Technical control feedback

- Role: interaction.
- Location: navigation, product filters/cards, FAQ, carousel controls, CTA and RFQ inputs.
- Effect: 150–220ms border/brand-color/focus/press feedback; fine-pointer product cards lift 4px and scale the image at most 1.015 without cropping it.
- Desktop: hover plus visible keyboard focus.
- 390px: press/focus only; no information depends on hover.
- Reduced motion: color and border state remain, translation/scale are removed.

## Verification contract

- Scene count: 4; external candidates: 3 distinct primary-source mechanisms.
- Desktop and 390px must show perceptible page-level and component-level feedback.
- Wait at least 16 seconds before scrolling and confirm off-screen sections remain unplayed; then scroll first, middle and last sections into view and confirm each plays exactly once.
- Verify normal JS, no JS, blocked animation script, slow loading, page visibility changes and `prefers-reduced-motion`.
- Remove observers/listeners on unmount and pause the Hero when the document is hidden.

