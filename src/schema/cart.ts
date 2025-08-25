import type { Product } from "./ProductRes";

export interface CartProduct {
  id: number;
  image: string;
  price: number;
  title: string;
}
export interface ProductDetail {
  cartProduct: CartProduct;
  totalAmount: number;
  productCount: number;
}

export interface CartContextType {
  cart: ProductDetail[];
  addToCart: (product: Product) => void;
}
