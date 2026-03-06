import { createClient } from "@supabase/supabase-js";
import fs from "fs";
import path from "path";

const SHOPIFY_PRODUCTS_TABLE = "shopify_products";
const SHOPIFY_VARIANTS_TABLE = "shopify_product_variants";
const SHOPIFY_EMBEDDINGS_TABLE = "shopify_product_embeddings";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);
const dataPath = path.join(process.cwd(), "data", "products.json");
const products = JSON.parse(fs.readFileSync(dataPath, "utf8"));

const { error: deleteEmbeddingsError } = await supabase
  .from(SHOPIFY_EMBEDDINGS_TABLE)
  .delete()
  .not("id", "is", null);

if (deleteEmbeddingsError) {
  console.error(deleteEmbeddingsError);
  process.exit(1);
}

const { error: deleteVariantsError } = await supabase
  .from(SHOPIFY_VARIANTS_TABLE)
  .delete()
  .not("id", "is", null);

if (deleteVariantsError) {
  console.error(deleteVariantsError);
  process.exit(1);
}

const { error: deleteProductsError } = await supabase
  .from(SHOPIFY_PRODUCTS_TABLE)
  .delete()
  .not("id", "is", null);

if (deleteProductsError) {
  console.error(deleteProductsError);
  process.exit(1);
}

const { error } = await supabase.from(SHOPIFY_PRODUCTS_TABLE).insert(products);

if (error) {
  console.error(error);
  process.exit(1);
}

console.log(`Seeded ${products.length} products.`);
