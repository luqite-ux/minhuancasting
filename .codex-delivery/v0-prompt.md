# 常州旻欢精密铸造有限公司英文 B2B 网站完整设计与源码

请在一个项目中一次性生成可运行、可编辑、响应式的完整 Next.js 网站源码。公司法律主体为常州旻欢精密铸造有限公司；网站英文展示采用有来源记录的忠实直译 `Changzhou Minhuan Precision Casting Co., Ltd.`，品牌视觉使用附件中的官方 `MINHUAN JINGZHU` Logo。网站面向海外工业采购、工程师与 OEM 买家，首发语言为英文。

## 已确认业务事实

- Founded in 2009.
- Core scope: precision casting, machining, and casting of general mechanical components.
- Custom manufacturing based on buyer drawings and technical requirements.
- One production line, with a stated monthly production capacity of 40 tons.
- Address: No. 154, Dongdu West Road, Luoyang Town, Wujin District, Changzhou, Jiangsu, China.
- Email: yanweiwenlhzz@126.com.
- Contact phones: +86 139 1434 4192 and +86 138 1501 5042.
- The formal product catalogue contains 282 numbered products. The attached product photos are representative examples only; use a clean data structure that Codex can later replace with the complete catalogue.

Do not invent certifications, machines, facilities, markets, partners, prices, stock, test standards, material grades, statistics, customer logos or commercial promises. Do not publish the customer worksheet’s warranty/replacement statements. The words warranty, warranties, guarantee, guaranteed, 质保 and 保修 must not appear anywhere, including metadata, FAQs, JSON-LD, placeholders or demo content. Do not present “45 days” as a committed lead time.

## Required routes and source integrity

Generate real editable source files for every route below, not screenshots or placeholder links:

- `/` Home
- `/products` product catalogue with category/search/filter UI and complete-product-image presentation
- `/products/[slug]` product detail with gallery, product facts, related products and RFQ CTA
- `/about` company profile and evidence-based company timeline
- `/capabilities` precision casting, machining, quality-control approach and drawing-based custom workflow
- `/news` dynamic-ready news list with a professional empty state when no articles exist
- `/news/[slug]` dynamic-ready article detail template
- `/contact` contact details and enquiry form
- a branded `not-found` page

Create shared Header, Footer, mobile navigation, breadcrumbs, product cards, section reveal behavior, enquiry/RFQ form, empty states and loading-safe image layouts. Header navigation must explicitly include `Home`. Both header and footer Logos must link to `/`, retain their original ratio with `object-fit: contain`, and remain legible on desktop and 390px mobile.

The enquiry UI must contain name, work email, phone/WhatsApp, company, country/region, product or project, quantity, message, drawing/file placeholder, consent state, submit/progress/success/error states, plus a clear reserved visual position for a later 4-character image CAPTCHA. Do not implement fake submission, setTimeout success, alerts, Supabase, email APIs, secrets, admin, authentication or deployment configuration in v0.

## Visual direction

Build a premium, restrained industrial visual system from the supplied customer evidence—not a generic SaaS template. Derive the palette from the official Logo: deep teal/blue-green for technical trust, controlled orange accents for action and casting heat, graphite text, warm off-white and clean light neutral surfaces. Use crisp grids, generous negative space, fine technical lines, restrained radii and subtle metal/casting texture. Avoid excessive cards, oversized pill shapes, neon gradients, glassmorphism, fake 3D chrome and generic stock-factory photography.

Use all three supplied 3840×1600 customer Banner artworks as the home Hero sequence. They are protected customer visual subjects: preserve the real industrial subjects and do not redraw, replace or distort them. Compose each slide as an advertising-grade web Hero with real HTML heading, supporting copy, CTA and concise evidence chips over the image. Do not create the banned “white text card on the left + rectangular image on the right” split layout. Desktop and mobile must have separately considered crop/safe areas; at 390px the main industrial subject, key heading and CTA must stay visible.

Product images are factual subjects. Display them with `object-fit: contain`, clean light backgrounds, consistent safe padding and no cropping of edges, accessories or annotations. Do not place them on dirty dark-grey gradients or heavy overlays. Product lists should feel catalogued and precise while allowing different source proportions.

Homepage narrative should be conversion-led and fact-based: Hero → focused capabilities → representative product catalogue → drawing-to-component workflow → production facts (founded 2009, one line, 40 tons/month) → selected technical/control points → contact/RFQ CTA. Do not add repetitive filler sections. Information-card groups must use semantically relevant, unified line icons rather than repeated generic icons or emoji.

## Motion and accessibility

Implement the four motion scenes described in the appended motion plan. Every major public-page section must have a perceptible viewport-entry animation in normal motion mode. Use per-element viewport observation; never mark offscreen sections completed with a fixed/global timeout. Reduced-motion mode must remain fully readable and stable. Hero controls must be keyboard usable, focus-visible, pauseable, and avoid autoplay motion that harms readability. Normal text contrast must meet WCAG AA; explicitly reset foreground colors whenever a section changes between light and dark themes.

## Footer, SEO-ready structure and constraints

Use the dynamic copyright pattern `© {current year} Changzhou Minhuan Precision Casting Co., Ltd. All rights reserved.` after normalizing trailing punctuation. Keep the full legal company name consistent in Footer and Organization/WebSite JSON-LD scaffolding. Prepare route-specific metadata, canonical helpers, Open Graph/Twitter image fields, breadcrumb structure and accessible image alt text, but do not invent a production domain—use a single replaceable site URL constant.

Return the complete executable source in the downloadable project version. Do not connect Supabase, R2, the shared admin, CAPTCHA services, analytics, Vercel or a domain; Codex will implement those after visual acceptance.
