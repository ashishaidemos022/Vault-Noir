import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";

const SHOPIFY_CATALOG_TABLE = "shopify_products_catalog";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);
const dataPath = path.join(process.cwd(), "data", "products-core.json");
const products = JSON.parse(fs.readFileSync(dataPath, "utf8"));

const { error: deleteError } = await supabase
  .from(SHOPIFY_CATALOG_TABLE)
  .delete()
  .not("id", "is", null);

if (deleteError) {
  console.error(deleteError);
  process.exit(1);
}

const { error } = await supabase.from(SHOPIFY_CATALOG_TABLE).insert(products);

if (error) {
  console.error(error);
  process.exit(1);
}

console.log(`Seeded ${products.length} catalog products.`);
