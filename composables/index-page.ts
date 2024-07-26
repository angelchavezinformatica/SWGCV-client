import { AllInventory } from "~/config/api";
import { type ProductI } from "~/interfaces/product";

const getProducts = async (): Promise<ProductI[]> => {
  const response = await fetch(AllInventory);
  return (await response.json()).products as ProductI[];
};

export const useIndexPage = () => {
  const products: Ref<ProductI[]> = ref([]);

  onMounted(async () => {
    products.value = await getProducts();
  });

  return { products };
};
