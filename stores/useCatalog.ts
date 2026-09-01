import { defineStore } from "pinia";
import { products as initialProducts } from "~/data/products";
import type { Product, ProductCategory } from "~/types";

export const useCatalogStore = defineStore("catalog", () => {
  const products = ref<Product[]>(structuredClone(initialProducts));

  const setStock = (id: string, stock: number) => {
    const product = products.value.find((item) => item.id === id);
    if (product) product.stock = stock;
  };

  const adjustStock = (id: string, delta: number) => {
    const product = products.value.find((item) => item.id === id);
    if (product) product.stock += delta;
  };

  const byCategory = (category: ProductCategory | "all") =>
    category === "all" ? products.value : products.value.filter((product) => product.category === category);

  return { products, setStock, adjustStock, byCategory };
});