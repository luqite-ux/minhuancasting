# Minhuan Full Visual Redesign

## Goal

Rework the customer site as one coherent industrial B2B experience, correcting the rejected visual system rather than patching isolated screenshots.

## Approved direction

- Keep the verified company facts, catalogue data, contact paths, and backend integration unchanged.
- Replace the current single-image hero with a three-slide advertising-grade carousel using the three supplied banner assets.
- Use each image's genuine safe area: slide one places copy on the right; slides two and three place copy on the left.
- Do not use gradient overlays. Use localized solid/translucent copy surfaces only where contrast requires them.
- Use a transparent version of the supplied logo, visibly larger in both header and footer, preserving its aspect ratio and home link.
- Replace the unexplained two-image strip with a meaningful evidence section that labels the imagery and connects it to the buyer journey.
- Rebuild the homepage narrative in this order: hero, verified facts, representative products, manufacturing evidence, process, RFQ.
- Enlarge product subjects by giving square source images a square media stage and removing the internal padding that shrank them. Preserve the complete product shape; never crop merely to fill.
- Align card information regions for rhythm, but do not treat equal height as a substitute for enlarging the product.
- Every major section and every repeated card receives viewport-entry motion with reduced-motion support and no premature global completion.

## Visual system

The site keeps the customer's existing teal and orange brand colors. Teal provides technical structure and orange is restricted to decision points and small accents. Light warm surfaces carry catalogue imagery; deep graphite/teal surfaces provide contrast for evidence and conversion sections. Technical grid texture is used only where it reinforces manufacturing context.

## Responsive behavior

- Desktop hero copy follows the image safe area per slide.
- Mobile uses a dedicated bottom copy surface and a controlled image focal position so neither copy nor subject is lost.
- Product grids step from one to two to four columns while the media stage remains square.
- Navigation, controls, card text, logo, and footer remain readable at 390px.

## Verification

- Automated route tests verify all three carousel slides and buyer paths render.
- Build and lint must pass.
- Real-browser screenshots are required at desktop and 390px for the homepage, catalogue, representative detail pages, and all global brand placements.
- Visual review must explicitly check product scale, full subject visibility, Banner copy safe areas, absence of gradients, card rhythm, motion, focus states, and reduced-motion behavior.
