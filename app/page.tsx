import { Hero } from "@/components/Hero";
import { LookbookBand } from "@/components/LookbookBand";
import { ProductCard } from "@/components/ProductCard";
import { getFeaturedProducts } from "@/lib/products";
import { getFeaturedFootwear } from "@/lib/footwear";
import Link from "next/link";

export default async function Home() {
  const featured = getFeaturedProducts();
  const featuredFootwear = (await getFeaturedFootwear()).slice(0, 3);
  return (
    <main className="noir-grid">
      <Hero />

      <section className="mx-auto max-w-6xl space-y-10 px-6 py-16">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-noir-500">
              Curated
            </p>
            <h2 className="font-display text-3xl text-noir-900">
              Signature lineups
            </h2>
          </div>
          <span className="text-xs uppercase tracking-[0.26em] text-noir-500">
            2026 Collection
          </span>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {featured.slice(0, 6).map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <LookbookBand />

      <section className="mx-auto max-w-6xl space-y-8 px-6 py-16">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-noir-500">
              New Section
            </p>
            <h2 className="font-display text-3xl text-noir-900">
              Footwear
            </h2>
          </div>
          <Link href="/footwear" className="text-xs uppercase tracking-[0.26em] text-noir-600">
            View all footwear
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {featuredFootwear.map((product) => (
            <ProductCard key={product.slug} product={product} hrefBase="/footwear" />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-10 px-6 py-16">
        <div className="grid gap-10 md:grid-cols-[1fr_1fr]">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.3em] text-noir-500">
              Showroom Film
            </p>
            <h3 className="font-display text-3xl text-noir-900">
              Texture in motion
            </h3>
            <p className="text-sm text-noir-600">
              A moving study of fabric, light, and shadow. Crafted to loop
              seamlessly in the digital showroom.
            </p>
          </div>
          <video
            className="h-[280px] w-full rounded-3xl object-cover shadow-soft-edge"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/assets/showroom-loop.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
    </main>
  );
}
