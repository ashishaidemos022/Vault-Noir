import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { SHOPIFY_TABLES } from "@/lib/db";
import { getAllFootwear } from "@/lib/footwear";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const gender = searchParams.get("gender") ?? undefined;
  const width = searchParams.get("width") ?? undefined;

  if (supabase) {
    let query = supabase
      .from(SHOPIFY_TABLES.footwear)
      .select("*")
      .eq("category", "footwear");

    if (gender) query = query.eq("gender", gender);
    if (width) query = query.in("footwear_width_fit", [width, "both"]);

    const { data, error } = await query;
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json(data ?? []);
  }

  const rows = getAllFootwear().filter((item) => {
    if (gender && item.gender !== gender) return false;
    if (width) {
      if (!item.footwear_width_fit) return false;
      if (item.footwear_width_fit !== width && item.footwear_width_fit !== "both") {
        return false;
      }
    }
    return true;
  });

  return NextResponse.json(rows);
}
