import { SomeInventory } from "~/config/api";
import type { ProductI } from "~/interfaces/product";

export const useSomeProducts = defineStore("some-products", () => {
  const someProducts: Ref<ProductI[]> = ref([]);

  const request = async () => {
    const response = await fetch(SomeInventory);
    someProducts.value = (await response.json()) as ProductI[];
  };

  return { someProducts, request };
});
