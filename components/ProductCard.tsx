import Link from "next/link";
import type { Product } from "@/lib/types";
import { AvailabilityPill } from "./AvailabilityPill";

export const ProductCard = ({
  product,
  hrefBase = "/product"
}: {
  product: Product;
  hrefBase?: string;
}) => {
  const imageSrc = product.images?.[0] || "/assets/footwear-hero.jpg";

  return (
    <Link
      href={`${hrefBase}/${product.slug}`}
      className="group flex flex-col gap-3"
    >
      <div className="relative overflow-hidden rounded-2xl bg-bone-100">
        <img
          src={imageSrc}
          alt={product.title}
          className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
        />
        <div className="absolute left-4 top-4">
          <AvailabilityPill availability={product.availability} />
        </div>
      </div>
      <div className="flex items-center justify-between text-sm">
        <div>
          <p className="font-display text-base text-noir-900">
            {product.title}
          </p>
          <p className="text-xs uppercase tracking-[0.24em] text-noir-500">
            {product.category}
          </p>
        </div>
        <span className="text-xs uppercase tracking-[0.24em] text-noir-700">
          ${product.price_usd}
        </span>
      </div>
    </Link>
  );
};
