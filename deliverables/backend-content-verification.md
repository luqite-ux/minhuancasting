# Backend content verification

- Tenant: `f0879a92-fad3-4caa-ab7e-1aad09eeaee3`
- Product readback: 282 active records, all with absolute R2 cover URLs and multilingual JSONB names/descriptions.
- Category readback: active `precision-cast-components` category.
- Article readback: public News route reads published tenant articles and currently presents a truthful empty state because no customer news was supplied.
- Tenant defaults: Chinese administration display name, English public content, admin group 2, SEO service disabled, service-expiry enforcement disabled.
- Site settings: logo/favicon, legal identity, address, phones, email, SEO text, language settings, translation profile, and verified company facts initialized.
- Static source removal: legacy `lib/products.ts` and `lib/news.ts` were removed; public catalogue, details, news, metadata, and sitemap use the tenant data layer.
- Browser readback: Products rendered 282 distinct detail links and 283 successfully loaded images including the site logo.
