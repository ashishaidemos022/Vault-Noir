do $$
begin
  if not exists (select 1 from pg_type where typname = 'shopify_footwear_width_fit_enum') then
    create type shopify_footwear_width_fit_enum as enum ('regular', 'wide', 'both');
  end if;
end
$$;

alter table if exists public.shopify_products
  add column if not exists footwear_width_fit shopify_footwear_width_fit_enum;

alter table if exists public.shopify_products
  drop constraint if exists shopify_products_footwear_width_fit_required;

alter table public.shopify_products
  add constraint shopify_products_footwear_width_fit_required
  check (
    category <> 'footwear'::shopify_category_enum
    or footwear_width_fit is not null
  );

create index if not exists shopify_products_footwear_width_fit_idx
  on public.shopify_products (footwear_width_fit);
