import Link from "next/link";
import { getAllFootwear } from "@/lib/footwear";
import { AvailabilityPill } from "@/components/AvailabilityPill";

export default function FootwearPage() {
  const footwear = getAllFootwear();

  return (
    <main className="mx-auto max-w-6xl space-y-10 px-6 py-16">
      <section className="grid gap-8 md:grid-cols-[1fr_1fr]">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-noir-500">Footwear</p>
          <h1 className="font-display text-4xl text-noir-900">Precision Underfoot</h1>
          <p className="max-w-xl text-sm text-noir-600">
            Dedicated footwear lineup including width-fit metadata for regular, wide, and both.
          </p>
        </div>
        <img
          src="/assets/footwear-hero.jpg"
          alt="Vault Noir footwear hero"
          className="h-[300px] w-full rounded-3xl object-cover shadow-soft-edge"
        />
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <img src="/assets/footwear-look-01.jpg" alt="Footwear editorial 1" className="h-[260px] w-full rounded-2xl object-cover" />
        <img src="/assets/footwear-look-02.jpg" alt="Footwear editorial 2" className="h-[260px] w-full rounded-2xl object-cover" />
      </section>

      <section className="grid gap-8 md:grid-cols-3">
        {footwear.map((item) => (
          <Link key={item.slug} href={`/footwear/${item.slug}`} className="space-y-3">
            <div className="relative overflow-hidden rounded-2xl bg-bone-100">
              <img src={item.images[0]} alt={item.title} className="h-[300px] w-full object-cover" />
              <div className="absolute left-4 top-4">
                <AvailabilityPill availability={item.availability} />
              </div>
            </div>
            <div className="space-y-1">
              <p className="font-display text-lg text-noir-900">{item.title}</p>
              <p className="text-xs uppercase tracking-[0.24em] text-noir-500">{item.gender} · width: {item.footwear_width_fit}</p>
              <p className="text-xs uppercase tracking-[0.24em] text-noir-700">${item.price_usd}</p>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
