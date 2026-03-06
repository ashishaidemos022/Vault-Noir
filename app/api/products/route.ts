import { NextResponse } from "next/server";
import { filterProducts } from "@/lib/products";
import { supabase } from "@/lib/supabase";
import { SHOPIFY_TABLES } from "@/lib/db";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const params = {
    category: searchParams.get("category") ?? undefined,
    material: searchParams.get("material") ?? undefined,
    fit: searchParams.get("fit") ?? undefined,
    occasion: searchParams.get("occasion") ?? undefined,
    gender: searchParams.get("gender") ?? undefined,
    priceMin: searchParams.get("priceMin")
      ? Number(searchParams.get("priceMin"))
      : undefined,
    priceMax: searchParams.get("priceMax")
      ? Number(searchParams.get("priceMax"))
      : undefined
  };

  if (supabase) {
    let query = supabase.from(SHOPIFY_TABLES.products).select("*");
    if (params.category) query = query.eq("category", params.category);
    if (params.gender) query = query.eq("gender", params.gender);
    if (params.material) query = query.eq("material", params.material);
    if (params.fit) query = query.eq("fit", params.fit);
    if (params.occasion) query = query.eq("occasion", params.occasion);
    if (params.priceMin !== undefined) query = query.gte("price_usd", params.priceMin);
    if (params.priceMax !== undefined) query = query.lte("price_usd", params.priceMax);

    const { data, error } = await query;
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(data ?? []);
  }

  return NextResponse.json(filterProducts(params));
}
