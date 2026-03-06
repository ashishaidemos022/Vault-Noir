export type Availability = "in_stock" | "low_stock" | "out_of_stock";
export type Gender = "men" | "women" | "unisex";
export type FootwearWidthFit = "regular" | "wide" | "both";
export type Category =
  | "outerwear"
  | "tops"
  | "bottoms"
  | "dresses"
  | "knitwear"
  | "footwear"
  | "accessories";

export type Product = {
  slug: string;
  sku: string;
  title: string;
  description: string;
  category: Category;
  gender: Gender;
  price_usd: number;
  availability: Availability;
  fit: string;
  material: string;
  care: string;
  size_notes: string;
  occasion: string;
  footwear_width_fit?: FootwearWidthFit;
  colorways: string[];
  images: string[];
  featured: boolean;
};
