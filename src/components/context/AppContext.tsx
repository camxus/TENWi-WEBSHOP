import React, { useState, useEffect } from "react";
import { getFormattedCart, handleSetCart } from "../../functions";
import {
  ApolloQueryResult,
  OperationVariables,
  useQuery,
} from "@apollo/client";
import GET_CART from "../../queries/get-cart";

export type ICart = {
  products: { productId: any }[];
  totalProductsPrice: string;
  total: number;
};

export type ShippingMethod = {
  cost: string;
  id: string;
  label: string;
};

export const AppContext = React.createContext<{
  cartState: [ICart | null, React.Dispatch<React.SetStateAction<ICart | null>>];
  chosenShippingMethodState: [
    ShippingMethod | undefined | null,
    React.Dispatch<React.SetStateAction<ShippingMethod | undefined>>
  ];
  availableShippingMethods: [] | ShippingMethod[];
  refetch:
    | null
    | ((
        variables?: Partial<OperationVariables> | undefined
      ) => Promise<ApolloQueryResult<any>>);
  loading: boolean;
}>({
  loading: false,
  cartState: [null, () => {}],
  chosenShippingMethodState: [null, () => {}],
  refetch: null,
  availableShippingMethods: [],
});

export const AppProvider = (props: any) => {
  const [cart, setCart] = useState<any | null>(null);
  const [
    chosenShippingMethod,
    setChosenShippingMethod,
  ] = useState<ShippingMethod>();
  const [availableShippingMethods, setAvailableShippingMethods] = useState<
    ShippingMethod[]
  >([]);

  const { loading, error, data, refetch } = useQuery(GET_CART, {
    notifyOnNetworkStatusChange: true,
    onCompleted: () => {
      const { cart } = data;
      const {
        availableShippingMethods: [methods],
        chosenShippingMethods,
      } = cart;
      const { rates } = methods;
      const chosenShippingMethod = rates.find(
        (method: ShippingMethod) => method.id === chosenShippingMethods[0]
      );

      setCart(handleSetCart(cart, chosenShippingMethod));
      setAvailableShippingMethods(rates);
      setChosenShippingMethod(chosenShippingMethod);
    },
  });

  useEffect(() => {
    const cartData = localStorage.getItem("tenwi-cart");
    setCart(cartData ? JSON.parse(cartData) : null);
  }, []);

  return (
    <AppContext.Provider
      value={{
        cartState: [cart, setCart],
        refetch,
        loading,
        availableShippingMethods: availableShippingMethods,
        chosenShippingMethodState: [
          chosenShippingMethod,
          setChosenShippingMethod,
        ],
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
