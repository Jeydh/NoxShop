import { defineStore } from "pinia";
import { useCatalogStore } from "./useCatalog";

export const useCartStore = defineStore("cart", () => {
  const items = ref<Record<string, number>>({});
  const lastAddedId = ref<string | null>(null);

  const count = computed(() => Object.values(items.value).reduce((sum, quantity) => sum + quantity, 0));
  const catalog = useCatalogStore();

  const add = (productId: string) => {
    const product = catalog.products.find((item) => item.id === productId);
    if (!product || product.stock <= 0) return false;
    items.value[productId] = (items.value[productId] ?? 0) + 1;
    lastAddedId.value = productId;
    window.setTimeout(() => { if (lastAddedId.value === productId) lastAddedId.value = null; }, 650);
    return true;
  };

  const remove = (productId: string) => {
    if (!items.value[productId]) return;
    items.value[productId] -= 1;
    if (items.value[productId] <= 0) delete items.value[productId];
  };

  const clear = () => { items.value = {}; };

  const removeCompletely = (productId: string) => {
    delete items.value[productId]
  }

  const subtotal = computed(() =>
    Object.entries(items.value).reduce((total, [id, quantity]) => {
      const product = catalog.products.find((item) => item.id === id);
      return total + (product?.price ?? 0) * quantity;
    }, 0),
  );

  return { items, count, lastAddedId, add, remove, removeCompletely, clear, subtotal };
});