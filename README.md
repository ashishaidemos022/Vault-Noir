# VAULT NOIR

Ultra-modern luxury apparel showroom with Supabase-backed product metadata and RAG-ready structure.

## Setup

1. Install deps:

```bash
npm install
```

2. Add env:

```bash
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_URL=...
SUPABASE_SERVICE_ROLE_KEY=...
```

3. Apply Supabase migration:

- Run `supabase/migrations/001_init.sql`, `supabase/migrations/002_add_shopify_footwear_width_fit.sql`, and `supabase/migrations/003_create_shopify_products_catalog.sql` in your Supabase SQL editor.
- This creates:
- `shopify_products` (footwear table)
- `shopify_products_catalog` (restored main catalog table)
- `shopify_product_variants`, `shopify_product_embeddings`

4. Seed products:

```bash
# footwear
node scripts/seed.mjs

# restored main catalog
node scripts/seed-catalog.mjs
```

5. Run dev server:

```bash
npm run dev
```

## Data

- Product catalog: `data/products.json`
- Restored catalog: `data/products-core.json`
- Seed SQL: `supabase/seed/seed.sql`
- Catalog seed SQL: `supabase/seed/seed_catalog.sql`

## Assets

- Images: `public/assets/hero.jpg`, `public/assets/lookbook-01.jpg` ... `public/assets/lookbook-07.jpg`
- Videos: `public/assets/showroom-loop.mp4`, `public/assets/runway-loop.mp4`

Generate assets with `imagegen` + `sora` skills once `OPENAI_API_KEY` is set.
