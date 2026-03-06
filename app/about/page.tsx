export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl space-y-10 px-6 py-16">
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.3em] text-noir-500">
          Atelier
        </p>
        <h1 className="font-display text-4xl text-noir-900">
          Crafted in shadow and light
        </h1>
        <p className="max-w-2xl text-sm text-noir-600">
          VAULT NOIR is a study in silhouette. Each garment is cut with precision
          and softened with movement. We craft in small runs, focusing on
          materials that hold shape without weight.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-noir-100 p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-noir-500">
            The Studio
          </p>
          <p className="mt-4 text-sm text-noir-600">
            Our atelier blends Italian wool, Japanese denim, and French silk to
            create a refined, minimal wardrobe. Each piece is numbered and
            finished by hand.
          </p>
        </div>
        <div className="rounded-3xl border border-noir-100 p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-noir-500">
            The Palette
          </p>
          <p className="mt-4 text-sm text-noir-600">
            A restrained spectrum: obsidian, graphite, bone, and smoke. The
            collection is designed to layer effortlessly across seasons.
          </p>
        </div>
      </div>
    </main>
  );
}
