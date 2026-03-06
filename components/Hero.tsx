import Link from "next/link";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden border-b border-noir-100 bg-noir-gradient">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.28em] text-noir-500">
            Vault Noir Atelier
          </p>
          <h1 className="font-display text-4xl leading-tight text-noir-900 md:text-5xl">
            Tailored for the nocturne.
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-noir-600">
            A high-fashion study in silhouette and light. Crafted for men and
            women who move between worlds.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/catalog"
              className="bg-noir-900 px-6 py-3 text-xs uppercase tracking-[0.3em] text-bone-50"
            >
              Enter Showroom
            </Link>
            <Link
              href="/about"
              className="border border-noir-300 px-6 py-3 text-xs uppercase tracking-[0.3em] text-noir-700"
            >
              Our Atelier
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full border border-noir-200" />
          <img
            src="/assets/hero.jpg"
            alt="Vault Noir hero look"
            className="h-[420px] w-full rounded-[24px] object-cover shadow-soft-edge"
          />
        </div>
      </div>
    </section>
  );
};
