import type { Product } from "@/lib/types";
import { ProductCard } from "./ProductCard";

const lookbookPanels = [
  {
    title: "Architected Softness",
    copy: "Sculpted layers in motion.",
    image: "/assets/lookbook-06.jpg"
  },
  {
    title: "Quiet Velocity",
    copy: "Movement cut into form.",
    image: "/assets/lookbook-07.jpg"
  }
];

export const ShowroomGrid = ({ products }: { products: Product[] }) => {
  const panels = [...lookbookPanels];
  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
      {products.map((product, index) => {
        const panel = panels[index % panels.length];
        const injectPanel = index > 0 && index % 4 === 0;
        return (
          <div key={product.slug} className="space-y-10">
            <ProductCard product={product} />
            {injectPanel && (
              <div className="overflow-hidden rounded-3xl bg-noir-900 text-bone-50">
                <div className="grid gap-6 p-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-bone-200">
                      Lookbook
                    </p>
                    <h3 className="font-display text-2xl text-bone-50">
                      {panel.title}
                    </h3>
                    <p className="text-sm text-bone-200">{panel.copy}</p>
                  </div>
                  <img
                    src={panel.image}
                    alt={panel.title}
                    className="h-[240px] w-full rounded-2xl object-cover"
                  />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
