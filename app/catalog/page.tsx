import { FiltersBar } from "@/components/FiltersBar";
import { ShowroomGrid } from "@/components/ShowroomGrid";
import { getAllProducts } from "@/lib/products";

export default function CatalogPage() {
  const products = getAllProducts();
  return (
    <main className="mx-auto max-w-6xl space-y-10 px-6 py-16">
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.3em] text-noir-500">
          Showroom
        </p>
        <h1 className="font-display text-4xl text-noir-900">
          The Vault Noir Collection
        </h1>
        <p className="max-w-2xl text-sm text-noir-600">
          Explore the latest lineup by material, fit, and occasion. Every piece
          is crafted to hold its form in motion.
        </p>
      </div>
      <FiltersBar />
      <ShowroomGrid products={products} />
    </main>
  );
}
