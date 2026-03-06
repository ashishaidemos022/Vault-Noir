export const LookbookBand = () => {
  return (
    <section className="border-y border-noir-100 bg-noir-900 text-bone-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-bone-200">
            Lookbook 2026
          </p>
          <h2 className="font-display text-3xl">Silent Geometry</h2>
          <p className="text-sm text-bone-200">
            A minimal wardrobe built on shadow, structure, and refined movement.
          </p>
        </div>
        <div className="overflow-hidden rounded-3xl">
          <img
            src="/assets/lookbook-05.jpg"
            alt="Vault Noir lookbook"
            className="h-[260px] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
