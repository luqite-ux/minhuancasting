# Minhuan Precision Casting Website Design

## Architecture

The site is an English-first Next.js 16 B2B catalogue with scalable locale-aware data access. v0 supplies the first visual template using representative assets; Codex then replaces representative/static content with tenant-scoped Supabase products, categories, articles, settings and CAPTCHA-protected inquiries. The public catalogue remains server-rendered and ISR-backed, while filters, galleries, forms and motion are focused client components.

## Visual system

The official Logo establishes teal and foundry orange as brand accents. Most page surfaces remain warm white or clean light grey; navy is limited to the Hero overlay, narrow CTA areas and footer. The supplied three wide Banner artworks are retained as full-bleed slides with individually measured copy-safe areas. Product grids use clean, continuous light stages and protect the complete part geometry.

## Content and conversion

The homepage follows product → capability → evidence → cooperation flow → inquiry. It uses only verified company facts and clearly distinguishes customer-supplied brand artwork from literal factory evidence. All 282 supplied products become backend-managed catalogue records; homepage cards are a subset. News starts as an honest backend-driven empty state.

## Reliability and validation

Motion is progressive enhancement, with content visible when JavaScript or motion fails. The inquiry boundary uses server-issued, atomically consumed image CAPTCHA challenges. Build, data round trips, desktop/390px visual passes, no-JS and reduced-motion checks, metadata/Schema/Sitemap audits, GitHub SHA and Production deployment are required before delivery can proceed to the domain step.

