import { ReactNode, createContext, useEffect, useState } from "react";

import {
  createCartUpdateTag,
  deleteCartUpdateTag,
} from "~/notifications/notificationTags";
import {
  StorageCartProps,
  storageProductGetAll,
  storageProductRemove,
  storageProductSave,
} from "../storage/storageCart";

export type CartContextDataProps = {
  addProductCart: (newProduct: StorageCartProps) => Promise<void>;
  removeProductCart: (productId: string) => Promise<void>;
  cart: StorageCartProps[];
};

type CartContextProviderProps = {
  children: ReactNode;
};

export const CartContext = createContext<CartContextDataProps>(
  {} as CartContextDataProps,
);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<StorageCartProps[]>([]);

  async function addProductCart(newProduct: StorageCartProps) {
    const storageResponse = await storageProductSave(newProduct);
    setCart(storageResponse);
    createCartUpdateTag(storageResponse.length);
  }

  async function removeProductCart(productId: string) {
    const storageResponse = await storageProductRemove(productId);
    setCart(storageResponse);

    if (storageResponse.length > 0) {
      createCartUpdateTag(storageResponse.length);
    } else {
      deleteCartUpdateTag();
    }
  }

  useEffect(() => {
    storageProductGetAll()
      .then(products => setCart(products))
      .catch(error => console.log(error));
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductCart,
        removeProductCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
