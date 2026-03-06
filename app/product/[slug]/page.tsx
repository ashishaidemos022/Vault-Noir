import { notFound } from "next/navigation";
import { getAllProducts, getProductBySlug } from "@/lib/products";
import { AvailabilityPill } from "@/components/AvailabilityPill";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) return notFound();

  return (
    <main className="mx-auto max-w-6xl space-y-12 px-6 py-16">
      <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <img
            src={product.images[0]}
            alt={product.title}
            className="h-[520px] w-full rounded-3xl object-cover shadow-soft-edge"
          />
          <video
            className="h-[240px] w-full rounded-3xl object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/assets/runway-loop.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-noir-500">
              {product.category}
            </p>
            <h1 className="font-display text-4xl text-noir-900">
              {product.title}
            </h1>
            <p className="text-sm text-noir-600">{product.description}</p>
          </div>
          <div className="flex items-center justify-between">
            <AvailabilityPill availability={product.availability} />
            <span className="text-xs uppercase tracking-[0.28em] text-noir-700">
              ${product.price_usd}
            </span>
          </div>
          <div className="space-y-4 text-sm text-noir-700">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-noir-500">
                Material
              </p>
              <p>{product.material}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-noir-500">
                Fit
              </p>
              <p>{product.fit}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-noir-500">
                Care
              </p>
              <p>{product.care}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-noir-500">
                Size Notes
              </p>
              <p>{product.size_notes}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-noir-500">
                Occasion
              </p>
              <p>{product.occasion}</p>
            </div>
            {product.footwear_width_fit && (
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-noir-500">
                  Foot Width
                </p>
                <p>{product.footwear_width_fit}</p>
              </div>
            )}
          </div>
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.3em] text-noir-500">
              Colorways
            </p>
            <div className="flex flex-wrap gap-2">
              {product.colorways.map((color) => (
                <span
                  key={color}
                  className="border border-noir-200 px-3 py-1 text-xs uppercase tracking-[0.24em]"
                >
                  {color}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export const generateStaticParams = async () => {
  return getAllProducts().map((product) => ({ slug: product.slug }));
};
