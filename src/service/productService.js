import { apiClient } from "../API/axios";

const PRODUCT_GET_URL = "/products";

export async function fetchProducts() {
  const res = await apiClient.get(PRODUCT_GET_URL);
  console.log("API Response Data:", res?.data);
  return res?.data.data;
}
