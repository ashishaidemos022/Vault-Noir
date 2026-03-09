import products from "../data/products.json";
import type { Product } from "./types";
import { supabase } from "./supabase";
import { SHOPIFY_TABLES } from "./db";

const allFootwear = products as Product[];

const getFootwearFromSupabase = async (): Promise<Product[] | null> => {
  if (!supabase) return null;

  const { data, error } = await supabase
    .from(SHOPIFY_TABLES.footwear)
    .select("*")
    .eq("category", "footwear")
    .order("created_at", { ascending: false });

  if (error) return null;
  return (data as Product[]) ?? [];
};

export const getAllFootwear = async () => {
  const rows = await getFootwearFromSupabase();
  if (rows) return rows;
  return allFootwear;
};

export const getFeaturedFootwear = async () => {
  const rows = await getFootwearFromSupabase();
  if (rows) return rows.filter((product) => product.featured);
  return allFootwear.filter((product) => product.featured);
};

export const getFootwearBySlug = async (slug: string) => {
  if (supabase) {
    const { data, error } = await supabase
      .from(SHOPIFY_TABLES.footwear)
      .select("*")
      .eq("slug", slug)
      .maybeSingle();

    if (!error && data) return data as Product;
  }

  return allFootwear.find((product) => product.slug === slug);
};
