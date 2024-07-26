import { type ProductI } from "~/interfaces/product";
import { useSomeProducts } from "~/stores/some-products";

export const useIndexPage = () => {
  const { someProducts, request } = useSomeProducts();

  onMounted(async () => {
    await request();
  });

  return { products: someProducts };
};
