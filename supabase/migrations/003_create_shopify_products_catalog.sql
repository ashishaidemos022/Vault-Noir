create table if not exists public.shopify_products_catalog (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  sku text unique not null,
  title text not null,
  description text not null,
  category shopify_category_enum not null,
  gender shopify_gender_enum not null,
  price_usd numeric not null,
  availability shopify_availability_enum not null,
  fit text not null,
  material text not null,
  care text not null,
  size_notes text not null,
  occasion text not null,
  footwear_width_fit shopify_footwear_width_fit_enum,
  colorways jsonb not null default '[]'::jsonb,
  images jsonb not null default '[]'::jsonb,
  featured boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists shopify_products_catalog_category_idx on public.shopify_products_catalog(category);
create index if not exists shopify_products_catalog_gender_idx on public.shopify_products_catalog(gender);
create index if not exists shopify_products_catalog_price_idx on public.shopify_products_catalog(price_usd);

create or replace function public.shopify_set_catalog_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists shopify_products_catalog_updated_at on public.shopify_products_catalog;
create trigger shopify_products_catalog_updated_at
before update on public.shopify_products_catalog
for each row execute procedure public.shopify_set_catalog_updated_at();
