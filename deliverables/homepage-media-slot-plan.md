# Homepage Media Slot Plan

Customer: 常州旻欢精密铸造有限公司  
Primary launch language: English  
Visual source: customer Logo, three customer-supplied 3840×1600 Banner backgrounds, and representative real product photographs.

| Slot | Business purpose | Media and source | Desktop composition | 390px composition | CTA / fallback | Delivery responsibility |
|---|---|---|---|---|---|---|
| Hero 1 — Custom precision casting | Conversion + product recognition | `banner背景/1.jpg`; customer-supplied composite of cast/machined parts | Full-bleed 12:5 image. Subject mass stays left; copy sits in the darker right-side negative space. Focus 34% 50%. | Use a dedicated mobile crop keeping the central flange and one fitting; copy moves below/over a restrained local navy plate. | `Explore Products` → `/products`; `Request a Quote` → `/contact`. Static image when carousel or motion is reduced. | v0 builds the responsive media slot and controls; Codex retains the supplied image and verifies both crops. |
| Hero 2 — Drawing-to-part manufacturing | Trust + capability | `banner背景/2.jpg`; customer-supplied industrial casting composition | Full-bleed. Product is left-center; copy uses upper/right negative space without covering the drawing layer. Focus 38% 52%. | Keep flange and orange process light; remove nonessential far-right area. Copy stacks at top with localized readable plate. | `Discuss Your Drawing` → `/contact`; static fallback. | v0 slot + responsive layout; Codex verifies image authenticity is presented as brand artwork, not a claimed literal factory photograph. |
| Hero 3 — Precision machining support | Capability + differentiation | `banner背景/3.jpg`; customer-supplied technical composition | Full-bleed. Preserve central casting and machine on right; copy occupies the clean dark left zone. Focus 67% 50%. | Crop around main casting; machine may be partially omitted if needed to protect the product. Copy stays above/below the protected subject. | `View Capabilities` → `/capabilities`; `Send RFQ` → `/contact`. | v0 slot + controls; Codex validates mobile safe area and no false machine-count claim. |
| Product spectrum | Product discovery | 8–12 representative covers from the numbered `产品图` folders; full library remains outside v0 | Light, continuous product stage; 4-column desktop grid with complete subjects and consistent optical scale. | 2-column grid or horizontal snap, no crop of product structure. | `View All Products` → `/products`. Broken-image fallback uses neutral text, never another product image. | v0 designs scalable cards; Codex later connects all 282 backend products and R2 images. |
| Custom manufacturing capability | Trust + technical fit | Logo geometry, line icons, and verified text facts: drawing-based customization, precision casting, machining, general components | Split narrative with technical path graphic; no invented factory photography. | Vertical path with readable labels and large touch targets. | `Share Your Requirements` → `/contact`. | v0 designs DOM layout/icons; Codex fills verified copy and data. |
| Verified company facts | Trust | 2009 founding date, one production line, approximate monthly output of 40 tons, address; all from customer workbook | Short facts band with explicit labels; no unsupported superlatives. | Two-column fact grid. | Link to `/about`. | v0 builds accessible fact components; Codex supplies exact verified values. |
| Quality and cooperation flow | Risk reduction + conversion | Semantic line icons; customer-provided facts on inspection support, samples, OEM/ODM, quotation by requirements | 4–5 step visual flow; icons must differ by meaning. | Vertical timeline. | `Start an Inquiry` → `/contact`. | v0 creates structure; Codex removes prohibited warranty/replacement language and connects form. |
| FAQ preview | Buyer objection handling | Only customer-answered, permitted FAQ items | Accordion with clear focus and motion-safe expansion. | Single-column native disclosure. | `Contact Us` → `/contact`. | v0 UI; Codex supplies screened content. |
| News / Insights reserve | Maintainability | No fabricated article or stock image | Honest empty state driven by backend. | Same content hierarchy. | Optional `/news`; no fake post cards. | v0 empty state; Codex wires Supabase articles. |
| Final RFQ | Conversion | Brand orange/teal accents and abstract foundry texture derived from Logo; no invented factual scene | Compact high-contrast CTA, not an oversized dark section. | Stacked CTA, 44px minimum controls. | `/contact` and product-aware RFQ. | v0 visuals; Codex wires CAPTCHA-protected inquiries. |

## Global media safeguards

- Customer Logo is used in header/footer with `object-fit: contain`; its gear-and-M symbol supplies the favicon source.
- Banner text is real DOM text. No title, button, watermark, or generated English is baked into the images.
- Product imagery is always tied to its exact numbered folder. v0 receives representatives only and must not infer the final product count from attachment count.
- No video was provided. No blank video frame is created; all video slots are omitted rather than filled with unrelated media.
- No customer factory/environment photographs or certifications were supplied. The site must not present generated scenes as customer facts.

