import products from "../data/products.json";
import type { Product } from "./types";

const allFootwear = products as Product[];

export const getAllFootwear = () => allFootwear;

export const getFeaturedFootwear = () =>
  allFootwear.filter((product) => product.featured);

export const getFootwearBySlug = (slug: string) =>
  allFootwear.find((product) => product.slug === slug);
