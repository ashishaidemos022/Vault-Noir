import { NextResponse } from "next/server";
import { getProductBySlug } from "@/lib/products";
import { supabase } from "@/lib/supabase";
import { SHOPIFY_TABLES } from "@/lib/db";

export async function GET(
  _request: Request,
  { params }: { params: { slug: string } }
) {
  if (supabase) {
    const { data, error } = await supabase
      .from(SHOPIFY_TABLES.products)
      .select("*")
      .eq("slug", params.slug)
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(data ?? null);
  }

  const product = getProductBySlug(params.slug);
  if (!product) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json(product);
}
