import React, { useState, useEffect } from "react";
import { getFormattedCart } from "../../functions";

type ICart = {
  products: { productId: any }[];
  totalProductsPrice: string;
  total: number
};

export const AppContext = React.createContext<
  [ICart | null, React.Dispatch<React.SetStateAction<any>>]
>([null, () => {}]);

export const AppProvider = (props: any) => {
  const [cart, setCart] = useState<any | null>(null);

  useEffect(() => {
    let cartData = localStorage.getItem("tenwi-cart");
    cartData = cartData ? JSON.parse(cartData) : null;
    setCart(cartData);
  }, []);

  const handleSetCart = (data: any) => {
    // Update cart in the localStorage.
    const updatedCart = getFormattedCart(data);
    localStorage.setItem("tenwi-cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  return (
    <AppContext.Provider value={[cart, handleSetCart]}>
      {props.children}
    </AppContext.Provider>
  );
};
