import Link from "next/link";
import { useContext, useState, useEffect } from "react";
import { AppContext, ICart, ShippingMethod } from "../../context/AppContext";
import { handleSetCart } from "../../../functions";
import CartItem from "./CartItem";
import { v4 } from "uuid";
import { useMutation } from "@apollo/client";
import UPDATE_CART from "../../../mutations/update-cart";
import { POST_SHIPPING_METHOD } from "../../../mutations/shipping.js";
import REMOVE_ITEMS_FROM_CART_MUTATION from "../../../mutations/clear-cart";
import ShippingModes from "../../checkout/ShippingModes";

import axios from "axios";

const CartItemsContainer = () => {
  const {
    cartState: [cart, setCart],
    refetch,
    availableShippingMethods,
    chosenShippingMethodState: [chosenShippingMethod, setChosenShippingMethod],
    loading: cartLoading,
  } = useContext(AppContext);
  const [displayedShippingMethods, setDisplayedShippingMethods] = useState<
    ShippingMethod[] | []
  >([]);

  const [postShipping, { loading: postShippingLoading }] = useMutation(
    POST_SHIPPING_METHOD,
    {
      variables: {
        input: {
          shippingMethods: chosenShippingMethod?.id ?? "",
          clientMutationId: v4(),
        },
      },
      onCompleted: () => {
        if (refetch) {
          refetch();
        }
      },
    }
  );

  useEffect(() => {
    if (availableShippingMethods.length) {
      axios
        .get("https://ipapi.co/json/")
        .then((response) => {
          const { continent_code } = response.data;
          setDisplayedShippingMethods(
            availableShippingMethods.filter(
              (method) =>
                (method.label.includes("EU") && continent_code === "EU") ||
                !Number(method.cost)
            )
          );
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [availableShippingMethods]);

  useEffect(() => {
    if (chosenShippingMethod) {
      postShipping();
    }
  }, [chosenShippingMethod?.id]);

  // Update Cart Mutation.
  const [
    updateCart,
    {
      data: updateCartResponse,
      loading: updateCartProcessing,
      error: updateCartError,
    },
  ] = useMutation(UPDATE_CART, {
    onCompleted: () => {
      if (refetch) {
        refetch();
      }
    },
  });

  // Remove from Cart Mutation.
  const [
    removeFromCart,
    {
      data: removeFromCartRes,
      loading: removeFromCartProcessing,
      error: removeFromCartError,
    },
  ] = useMutation(REMOVE_ITEMS_FROM_CART_MUTATION, {
    onCompleted: ({ removeItemsFromCart }) => {
      const { cart } = removeItemsFromCart;
      setCart((handleSetCart(cart, chosenShippingMethod) as unknown) as ICart);
    },
  });

  /*
   * Handle remove product click.
   *
   * @param {Object} event event
   * @param {Integer} Product Id.
   *
   * @return {void}
   */
  const handleRemoveProductClick = (
    event: Event,
    cartKey: any,
    products: any[]
  ) => {
    event.stopPropagation();
    if (products.length) {
      removeFromCart({
        variables: {
          input: {
            clientMutationId: v4(),
            keys: [cartKey],
          },
        },
      });
    }
  };

  // Clear the entire cart.
  const handleClearCart = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();

    if (removeFromCartProcessing) {
      return;
    }

    removeFromCart({
      variables: {
        input: {
          clientMutationId: v4(),
          all: true,
        },
      },
    });
  };

  const handleOnShippingChange = async (event: any) => {
    if (event.target) {
      setChosenShippingMethod(
        availableShippingMethods.find(
          (method) => method.id === event.target.value
        )
      );
    }
  };

  // const handleOnCountryChange = (event: any) => {
  //   event.persist();
  //   setCountryCode(event.target.value);
  // };

  return (
    <div className="cart product-cart-container container mx-auto my-32 px-4 xl:px-0">
      {cart ? (
        <div className="cart-wrapper container">
          <div className="cart-header grid grid-cols-2 gap-4">
            <h1 className="text-2xl mb-5 uppercase">Cart</h1>
            {/*Clear entire cart*/}
            <div className="clear-cart text-right">
              <button
                className="px-4 py-1 bg-gray-500 text-white rounded-sm w-auto"
                onClick={handleClearCart}
                disabled={removeFromCartProcessing}
              >
                <span className="cart">Clear Cart</span>
                <i className="fa fa-arrow-alt-right" />
              </button>
              {removeFromCartProcessing ? <p>Clearing...</p> : ""}
              {updateCartProcessing || cartLoading ? <p>Updating...</p> : null}
            </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-0 xl:gap-4 mb-5">
            <table className="cart-products table-auto col-span-3 mb-5">
              <thead className="text-left">
                <tr className="cart-head-container">
                  <th className="cart-heading-el" scope="col" />
                  <th className="cart-heading-el" scope="col" />
                  <th className="cart-heading-el" scope="col">
                    Product
                  </th>
                  <th className="cart-heading-el" scope="col">
                    Quantity
                  </th>
                  <th className="cart-heading-el" scope="col">
                    Price
                  </th>
                  <th className="cart-heading-el" scope="col">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {cart.products.length &&
                  cart.products.map((item) => (
                    <CartItem
                      key={item.productId}
                      item={item}
                      updateCartProcessing={updateCartProcessing}
                      products={cart.products}
                      handleRemoveProductClick={handleRemoveProductClick}
                      updateCart={updateCart}
                    />
                  ))}
              </tbody>
            </table>

            <div className="row cart-total-container border p-5 bg-gray-200">
              <div className="">
                {/* <h2 className="text-2xl">Cart Total</h2> */}
                <table className="table table-hover mb-5">
                  <tbody>
                    <tr className="table-light flex flex-col">
                      <td className="cart-element-total text-2xl font-normal">
                        Subtotal
                      </td>
                      <td className="cart-element-amt text-2xl font-bold">
                        {cart.total}
                      </td>
                    </tr>
                    {/* {!countryCode && (
                      <CountrySelection
                        input=""
                        handleOnChange={handleOnCountryChange}
                        countries={countries}
                        isShipping=""
                      />
                    )} */}

                    <ShippingModes
                      postShippingLoading={postShippingLoading}
                      shippingMethods={displayedShippingMethods}
                      chosenShippingMethod={chosenShippingMethod?.id}
                      handleOnChange={handleOnShippingChange}
                    />
                  </tbody>
                </table>

                <Link
                  href="/checkout"
                  legacyBehavior
                  aria-disabled={
                    !chosenShippingMethod || updateCartProcessing || cartLoading
                  }
                >
                  <button
                    className="text-white px-5 py-3 rounded-sm w-auto xl:w-full"
                    style={{
                      cursor: chosenShippingMethod ? "pointer" : "default",
                      backgroundColor: chosenShippingMethod
                        ? "black"
                        : "lightgray",
                    }}
                    disabled={
                      !chosenShippingMethod ||
                      updateCartProcessing ||
                      cartLoading
                    }
                  >
                    <span className="cart-checkout-txt">
                      Proceed to Checkout
                    </span>
                    <i className="fas fa-long-arrow-alt-right" />
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Display Errors if any */}
          {/* { requestError ? <div className="row cart-total-container mt-5"> { requestError } </div> : '' } */}
        </div>
      ) : (
        <div className="container mx-auto my-32 px-4 xl:px-0">
          <h2 className="text-2xl mb-5">YOUR CART IS EMPTY</h2>
          <Link href="/shop" legacyBehavior>
            <button className="bg-black text-white px-5 py-3 rounded-sm">
              <span className="cart-checkout-txt">ADD NEW PRODUCTS</span>
              <i className="fas fa-long-arrow-alt-right" />
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartItemsContainer;
