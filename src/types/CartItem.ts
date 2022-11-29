import { ProductType } from "./Products";

export interface CartItem {
  product: ProductType;
  quantity: number;
}
