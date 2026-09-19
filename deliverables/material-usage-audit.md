# Material Usage Audit

Audit date: 2026-09-19  
Customer: 常州旻欢精密铸造有限公司

## Coverage result

- 462 discovered source files are registered in the material ledger.
- Both Excel workbooks were inspected sheet-by-sheet and as OOXML media containers.
- `产品清单.xlsx` contains 442 embedded images. All 442 are hash-registered as duplicates of the separately supplied authoritative Logo/product files, so they were not uploaded a second time.
- `企业资料&产品&FAQ问题收集表(95).xlsx` contains 12 embedded images. All 12 are hash-registered as duplicates of separately supplied authoritative assets.
- 453 separately supplied product images are mapped to 282 product records. Product coverage reports zero missing products and zero unaccounted source assets.
- All 282 products are available through the backend and public catalogue. The homepage intentionally shows a representative subset rather than duplicating the full catalogue.

Machine-readable evidence:

- `.codex-delivery/material-fact-manifest.json`
- `.codex-delivery/material-fact-coverage-terminal.json`
- `.codex-delivery/product-coverage-manifest.json`
- `.codex-delivery/product-coverage-terminal.json`
- `.codex-delivery/asset-ledger.json`

## Homepage use

The homepage now uses eight product records selected across the complete 282-item ordering, plus a three-image catalogue story. This avoids presenting only the first four entries while keeping the homepage useful and readable. Company facts are limited to verified source material: operation since 2009, Changzhou/Wujin/Luoyang location, approximate 40-ton monthly cast output, one production line, precision casting and machining scope, and drawing-based manufacture.

The full product/image library remains available in the product catalogue and product detail galleries. Embedded workbook copies remain retained as provenance evidence and are not duplicated in R2 or the interface.
