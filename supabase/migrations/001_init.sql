create extension if not exists "vector";

do $$
begin
  if not exists (select 1 from pg_type where typname = 'shopify_category_enum') then
    create type shopify_category_enum as enum (
      'outerwear',
      'tops',
      'bottoms',
      'dresses',
      'knitwear',
      'footwear',
      'accessories'
    );
  end if;
end
$$;

do $$
begin
  if not exists (select 1 from pg_type where typname = 'shopify_gender_enum') then
    create type shopify_gender_enum as enum ('men', 'women', 'unisex');
  end if;
end
$$;

do $$
begin
  if not exists (select 1 from pg_type where typname = 'shopify_availability_enum') then
    create type shopify_availability_enum as enum ('in_stock', 'low_stock', 'out_of_stock');
  end if;
end
$$;

create table if not exists shopify_products (
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
  colorways jsonb not null default '[]'::jsonb,
  images jsonb not null default '[]'::jsonb,
  featured boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists shopify_product_variants (
  id uuid primary key default gen_random_uuid(),
  product_id uuid references shopify_products(id) on delete cascade,
  size text not null,
  color text not null,
  inventory_status shopify_availability_enum not null,
  price_override_usd numeric
);

create table if not exists shopify_product_embeddings (
  id uuid primary key default gen_random_uuid(),
  product_id uuid references shopify_products(id) on delete cascade,
  content text not null,
  embedding vector(1536)
);

create index if not exists shopify_products_category_idx on shopify_products(category);
create index if not exists shopify_products_gender_idx on shopify_products(gender);
create index if not exists shopify_products_availability_idx on shopify_products(availability);
create index if not exists shopify_products_price_idx on shopify_products(price_usd);

create or replace function shopify_set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists shopify_products_updated_at on shopify_products;
create trigger shopify_products_updated_at
before update on shopify_products
for each row execute procedure shopify_set_updated_at();
