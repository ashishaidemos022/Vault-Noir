import { NextResponse } from "next/server";
import { getFeaturedProducts } from "@/lib/products";
import { supabase } from "@/lib/supabase";
import { SHOPIFY_TABLES } from "@/lib/db";

export async function GET() {
  if (supabase) {
    const { data, error } = await supabase
      .from(SHOPIFY_TABLES.products)
      .select("*")
      .eq("featured", true);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(data ?? []);
  }

  return NextResponse.json(getFeaturedProducts());
}
