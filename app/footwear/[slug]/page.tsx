import { notFound } from "next/navigation";
import { AvailabilityPill } from "@/components/AvailabilityPill";
import { getAllFootwear, getFootwearBySlug } from "@/lib/footwear";

export default function FootwearDetailPage({ params }: { params: { slug: string } }) {
  const product = getFootwearBySlug(params.slug);
  if (!product) return notFound();

  return (
    <main className="mx-auto max-w-5xl space-y-10 px-6 py-16">
      <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
        <img src={product.images[0]} alt={product.title} className="h-[520px] w-full rounded-3xl object-cover shadow-soft-edge" />
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.28em] text-noir-500">Footwear</p>
          <h1 className="font-display text-4xl text-noir-900">{product.title}</h1>
          <p className="text-sm text-noir-600">{product.description}</p>
          <div className="flex items-center justify-between">
            <AvailabilityPill availability={product.availability} />
            <p className="text-xs uppercase tracking-[0.28em] text-noir-700">${product.price_usd}</p>
          </div>
          <div className="space-y-3 text-sm text-noir-700">
            <p><span className="text-noir-500">Width:</span> {product.footwear_width_fit}</p>
            <p><span className="text-noir-500">Fit:</span> {product.fit}</p>
            <p><span className="text-noir-500">Material:</span> {product.material}</p>
            <p><span className="text-noir-500">Care:</span> {product.care}</p>
            <p><span className="text-noir-500">Size notes:</span> {product.size_notes}</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export const generateStaticParams = async () => {
  return getAllFootwear().map((product) => ({ slug: product.slug }));
};
