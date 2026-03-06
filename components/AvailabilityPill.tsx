import type { Availability } from "@/lib/types";
import clsx from "clsx";

const labels: Record<Availability, string> = {
  in_stock: "In stock",
  low_stock: "Low stock",
  out_of_stock: "Out of stock"
};

export const AvailabilityPill = ({ availability }: { availability: Availability }) => {
  return (
    <span
      className={clsx(
        "rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.24em]",
        availability === "in_stock" && "bg-noir-900 text-bone-50",
        availability === "low_stock" && "bg-noir-200 text-noir-900",
        availability === "out_of_stock" && "bg-bone-100 text-noir-400"
      )}
    >
      {labels[availability]}
    </span>
  );
};
