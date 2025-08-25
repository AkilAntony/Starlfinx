import {
  createContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { CartProduct } from "./schema/cart";

interface ProductDetail {
  cartProduct: CartProduct;
  totalAmount: number;
  productCount: number;
}

interface CartContextType {
  cart: ProductDetail[];
  addToCart: (product: CartProduct) => void;
  reduceFromCart: (product: CartProduct) => void;
  removeFromCart: (id: number) => void;
 toalCartItems :  number
 totalCartAmount : number;
}

export const CartContext = createContext<CartContextType>({
  cart: [],
  toalCartItems : 0,
  addToCart: () => {},
  reduceFromCart: () => {},
  removeFromCart: () => {},
  totalCartAmount : 0,
  
});

const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<ProductDetail[]>([]);
  
  

  const addToCart = (product: CartProduct) => {
    setCart((prev) => {
      const isProductExists = prev.some(
        (item) => item.cartProduct.id === product.id
      );

      if (!isProductExists) {
        const newProductDetail = {
          cartProduct: product,
          productCount: 1,
          totalAmount: Math.round(product.price),
        };
        return [...prev, newProductDetail];
      } else {
        return prev.map((item) =>
          item.cartProduct.id === product.id
            ? {
                ...item,
                productCount: item.productCount + 1,
                totalAmount: Math.round(item.totalAmount + product.price),
              }
            : item
        );
      }
    });
  };

  const reduceFromCart = (product: CartProduct) => {
    setCart((prev) => {
      const isProductExists = prev.some(
        (item) => item.cartProduct.id === product.id
      );

      if (!isProductExists) {
        return prev;
      } else {
        return prev.map((item) =>
          item.cartProduct.id === product.id && item.productCount > 0
            ? {
                ...item,
                productCount: item.productCount - 1,
                totalAmount: Math.round(item.totalAmount - product.price),
              }
            : item
        ).filter((item) => item.productCount > 0);;
      }
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => {
      return prev.filter((item) => item.cartProduct.id !== id);
    });
  };
 

const toalCartItems = useMemo(
  () => cart.reduce((sum, item) => sum + item.productCount, 0),
  [cart]
);

const totalCartAmount = useMemo(
  () => cart.reduce((sum, item) => sum + item.totalAmount, 0),
  [cart]
);
 
 

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        reduceFromCart,
        removeFromCart,
        toalCartItems,
        totalCartAmount
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
