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
import REMOVE_COUPONS_MUTATION from "../../../mutations/remove-coupons";
import APPLY_COUPON_MUTATION from "../../../mutations/apply-coupon";
import ShippingModes from "../../checkout/ShippingModes";
import euCountries from "../../../lib/euCountries.json"
import axios from "axios";
import { X } from "react-feather";

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
  const [coupon, setCoupon] = useState<string>("");

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

  // Apply Coupon Mutation
  const [
    applyCoupon,
    {
      data: applyCouponRes,
      loading: applyCouponLoading,
      error: applyCouponError,
    },
  ] = useMutation(APPLY_COUPON_MUTATION, {
    variables: {
      input: {
        code: coupon,
      },
    },
    onCompleted: ({ applyCoupon }) => {
      if (refetch) {
        refetch();
      }
    },
    onError: (error) => {
      return error.message;
    },
  });

  // Apply Coupon Mutation
  const [
    removeCoupons,
    {
      data: removeCouponRes,
      loading: removeCouponLoading,
      error: removeCouponError,
    },
  ] = useMutation(REMOVE_COUPONS_MUTATION, {
    onCompleted: () => {
      if (refetch) {
        refetch();
      }
    },
    onError: (error) => {
      return error.message;
    },
  });

  useEffect(() => {
    if (availableShippingMethods.length) {
      axios
        .get("https://ipapi.co/json/")
        .then((response) => {
          const { country_code } = response.data;

          // check if the detected country is in our EU list
          const isEU = euCountries.some(
            (c) => c.code.toUpperCase() === country_code.toUpperCase()
          );
          
          if (isEU) {
            setDisplayedShippingMethods(
              availableShippingMethods.filter(
                (method) => method.label.includes("EU") || !Number(method.cost)
              )
            );
          } else {
            setDisplayedShippingMethods(
              availableShippingMethods.filter(
                (method) => method.label.includes("INT") || !Number(method.cost)
              )
            );
          }
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

  const checkoutDisabled =
    !chosenShippingMethod?.id.includes("free_shipping") &&
    (!chosenShippingMethod ||
      updateCartProcessing ||
      cartLoading ||
      postShippingLoading ||
      applyCouponLoading);

  return (
    <div className="cart product-cart-container container py-20 px-10 min-w-full xl:px-20">
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
                      key={item.variation?.productId ?? item.productId}
                      item={{ ...item, ...(item.variation ?? {}) }}
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
                      chosenShippingMethod={chosenShippingMethod}
                      handleOnChange={handleOnShippingChange}
                    />
                  </tbody>
                </table>

                <div className="mb-2">
                  <div className="flex flex-col gap-4">
                    <input
                      className="p-1 border border-neutral-300 focus:border-black transition-all"
                      placeholder="Apply Coupon"
                      onChange={(e) => setCoupon(e.target.value)}
                    />
                    <div className="flex gap-1">
                      {cart.appliedCoupons?.map((coupon) => (
                        <div
                          className="flex items-center justify-center gap-1 bg-black border-black text-white text-xs p-1 transition-all hover:bg-white hover:text-black cursor-pointer"
                          onClick={() =>
                            removeCoupons({
                              variables: { input: { codes: [coupon.code] } },
                            })
                          }
                        >
                          {coupon.code.toUpperCase()}
                          <X width={10} />
                        </div>
                      ))}
                    </div>
                    <button
                      className="text-white px-5 py-3 rounded-sm w-full transition-all"
                      style={{
                        cursor: applyCouponLoading ? "default" : "pointer",
                        backgroundColor: applyCouponLoading
                          ? "lightgray"
                          : "black",
                      }}
                      disabled={applyCouponLoading}
                      onClick={() => applyCoupon()}
                    >
                      <span className="cart-checkout-txt">Apply Coupon</span>
                      <i className="fas fa-long-arrow-alt-right" />
                    </button>
                  </div>
                  {applyCouponError && (
                    <div
                      className="text-red-500 text-xs fade-in"
                      dangerouslySetInnerHTML={{
                        __html: applyCouponError.message,
                      }}
                    ></div>
                  )}
                </div>

                <Link
                  href="/shop/checkout"
                  legacyBehavior
                  aria-disabled={checkoutDisabled}
                >
                  <button
                    className="text-white px-5 py-3 rounded-sm w-auto w-full transition-all"
                    style={{
                      cursor: checkoutDisabled ? "default" : "pointer",
                      backgroundColor: checkoutDisabled ? "lightgray" : "black",
                    }}
                    disabled={checkoutDisabled}
                  >
                    <span className="cart-checkout-txt">
                      Proceed to Checkout{" "}
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
        <div className="mx-auto my-32 px-4 xl:px-0">
          <h2 className="text-2xl mb-5">YOUR CART IS EMPTY</h2>
          <Link href="/shop" legacyBehavior>
            <button className="bg-black text-white px-5 py-3">
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
