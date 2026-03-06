import products from "../data/products-core.json";
import type { Product } from "./types";

const allProducts = products as Product[];

export const getAllProducts = () => allProducts;

export const getFeaturedProducts = () =>
  allProducts.filter((product) => product.featured);

export const getProductBySlug = (slug: string) =>
  allProducts.find((product) => product.slug === slug);

export const filterProducts = (params: {
  category?: string;
  material?: string;
  fit?: string;
  occasion?: string;
  priceMin?: number;
  priceMax?: number;
  gender?: string;
}) => {
  return allProducts.filter((product) => {
    if (params.category && product.category !== params.category) return false;
    if (params.gender && product.gender !== params.gender) return false;
    if (params.material && product.material !== params.material) return false;
    if (params.fit && product.fit !== params.fit) return false;
    if (params.occasion && product.occasion !== params.occasion) return false;
    if (params.priceMin !== undefined && product.price_usd < params.priceMin)
      return false;
    if (params.priceMax !== undefined && product.price_usd > params.priceMax)
      return false;
    return true;
  });
};
