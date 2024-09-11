import { useState, useContext, useEffect } from "react";
import { useMutation } from "@apollo/client";

import { AppContext } from "../context/AppContext";
import { UserContext } from "../context/UserContext";

import YourOrder from "./YourOrder";
import Paypal from "./Paypal";

import validateAndSanitizeCheckoutForm from "../../validator/checkout";
import { createCheckoutData } from "../../functions";
import OrderSuccess from "./OrderSuccess";

import CHECKOUT_MUTATION from "../../mutations/checkout";

import Address from "./Address";
import {
  handleBillingDifferentThanShipping,
  handleCreateAccount,
  handleStripeCheckout,
  setStatesForCountry,
} from "../../utils/checkout";
import CheckboxField from "./form-elements/CheckboxField";
import REMOVE_ITEMS_FROM_CART_MUTATION from "../../mutations/clear-cart";

import Link from "next/link";
import Dialog, { submitMailchimp } from "../Dialog";

interface ICustromerInfo {
  firstName: string;
  lastName: string;
  address1: string;
  address2: string;
  city: string;
  country: string;
  state: string;
  postcode: string;
  email: string;
  phone: string;
  company: string;
  errors: null | any;
}

interface IInput {
  billing: ICustromerInfo;
  shipping: ICustromerInfo;
  createAccount: boolean;
  orderNotes: string;
  billingDifferentThanShipping: boolean;
  paymentMethod: string;
}

const defaultCustomerInfo = {
  firstName: "",
  lastName: "",
  address1: "",
  address2: "",
  city: "",
  country: "",
  state: "",
  postcode: "",
  email: "",
  phone: "",
  company: "",
  errors: null,
};

const CheckoutForm = ({ countriesData, dialogState }: any) => {
  const { billingCountries, shippingCountries } = countriesData || {};

  const initialState = {
    billing: {
      ...defaultCustomerInfo,
    },
    shipping: {
      ...defaultCustomerInfo,
    },
    createAccount: false,
    orderNotes: "",
    billingDifferentThanShipping: false,
    paymentMethod: "ppcp-gateway",
  };

  const {
    cartState: [cart],
  } = useContext(AppContext);
  const [signedUp, setSignedUp] = useState(false);
  const [user] = useContext(UserContext);
  const [input, setInput] = useState<IInput & typeof user>(initialState);
  const [orderData, setOrderData] = useState<any>(null);
  const [requestError, setRequestError] = useState<string | null>(null);
  const [shippingStates, setShippingStates] = useState([]);
  const [isFetchingShippingStates, setIsFetchingShippingStates] = useState(
    false
  );
  const [billingStates, setBillingStates] = useState([]);
  const [isStripeOrderProcessing, setIsStripeOrderProcessing] = useState(false);
  const [isFetchingBillingStates, setIsFetchingBillingStates] = useState(false);
  const [createdOrderData, setCreatedOrderData] = useState({});
  const [errorHandler, setErrorHandler] = useState("");

  const [paypalLoaded, setPaypalLoaded] = useState(false);

  const ShippingMethods = ["Express Shipping", "Standard Shipping"];

  useEffect(() => {
    if (user) setInput((input) => ({ ...input, ...user }));
  }, [user]);

  // Create New order: Checkout Mutation.
  const [
    checkout,
    { data: checkoutResponse, loading: checkoutLoading },
  ] = useMutation(CHECKOUT_MUTATION, {
    variables: {
      input: orderData,
    },
    onError: (error) => {
      if (
        error?.graphQLErrors?.[0]?.message ===
        'Für diese E-Mail-Adresse existiert bereits ein Kundenkonto. <a href="#" class="showlogin">Bitte anmelden.</a>'
      ) {
        setErrorHandler("email-exists");
        setRequestError(error?.graphQLErrors?.[0]?.message ?? "");
      } else {
        setRequestError(error?.graphQLErrors?.[0]?.message ?? "");
      }
      console.log(
        "ERROR ",
        error,
        "WITH",
        error?.graphQLErrors?.[0]?.message ?? "",
        "WITH",
        orderData
      );
    },
  });

  const [clearCartMutation] = useMutation(REMOVE_ITEMS_FROM_CART_MUTATION);

  /*
   * Handle form submit.
   *
   * @param {Object} event Event Object.
   *
   * @return {void}
   */
  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();

    await submitMailchimp({
      email: input.billing.email,
      firstName: input.billing.firstName,
      lastName: input.billing.lastName,
    });
    /**
     * Validate Billing and Shipping Details
     *
     * Note:
     * 1. If billing is different than shipping address, only then validate billing.
     * 2. We are passing billingStates?.length and shippingStates?.length, so that
     * the respective states should only be mandatory, if a country has states.
     */
    const billingValidationResult = input?.billingDifferentThanShipping
      ? validateAndSanitizeCheckoutForm(input?.billing, !!billingStates?.length)
      : { errors: null, isValid: true };
    const shippingValidationResult = validateAndSanitizeCheckoutForm(
      input?.shipping,
      !!shippingStates?.length
    );

    if (!shippingValidationResult.isValid || !billingValidationResult.isValid) {
      setInput({
        ...input,
        billing: { ...input.billing, errors: billingValidationResult.errors },
        shipping: {
          ...input.shipping,
          errors: shippingValidationResult.errors,
        },
      });

      return;
    }

    if ("stripe-mode" === input.paymentMethod) {
      setOrderData(
        await handleStripeCheckout(
          input,
          cart?.products,
          setRequestError,
          clearCartMutation,
          setIsStripeOrderProcessing,
          setCreatedOrderData
        )
      );
      return null;
    }
    if ("ppcp-gateway" === input.paymentMethod) {
      localStorage.setItem("user-info", JSON.stringify(input));
      setPaypalLoaded(true);
      return null;
    }
    const checkOutData = createCheckoutData(input);
    setRequestError(null);
    /**
     *  When order data is set, checkout mutation will automatically be called,
     *  because 'orderData' is added in useEffect as a dependency.
     */
    setOrderData(checkOutData);
  };

  /*
   * Handle onchange input.
   *
   * @param {Object} event Event Object.
   * @param {bool} isShipping If this is false it means it is billing.
   * @param {bool} isBillingOrShipping If this is false means its standard input and not billing or shipping.
   *
   * @return {void}
   */
  const handleOnChange = async (
    event: React.ChangeEventHandler,
    isShipping = false,
    isBillingOrShipping = false
  ) => {
    const { target } = (event as unknown) as { target: HTMLButtonElement };

    if (target) {
      if ("createAccount" === target.name) {
        handleCreateAccount(input, setInput, target);
      } else if ("billingDifferentThanShipping" === target.name) {
        handleBillingDifferentThanShipping(input, setInput, target);
      } else if (isBillingOrShipping) {
        if (isShipping) {
          await handleShippingChange(target);
        } else {
          await handleBillingChange(target);
        }
      } else {
        const newState = { ...input, [target.name]: target.value };
        setInput(newState);
        console.log(input);
      }
    }
  };

  const handleShippingChange = async (target: HTMLButtonElement) => {
    const newState = {
      ...input,
      shipping: { ...input?.shipping, [target.name]: target.value },
    };
    setInput(newState);
    await setStatesForCountry(
      target,
      setShippingStates,
      setIsFetchingShippingStates
    );
  };

  const handleBillingChange = async (target: HTMLButtonElement) => {
    const newState = {
      ...input,
      billing: { ...input?.billing, [target.name]: target.value },
    };
    setInput(newState);
    await setStatesForCountry(
      target,
      setBillingStates,
      setIsFetchingBillingStates
    );
  };

  useEffect(() => {
    if (orderData) {
      // Call the checkout mutation when the value for orderData changes/updates.
      checkout();
    }
  }, [orderData]);

  // Loading Data
  const isOrderProcessing = checkoutLoading || isStripeOrderProcessing;

  return (
    <>
      {cart ? (
        <form onSubmit={handleFormSubmit} className="checkout-form">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              {/*Shipping Details*/}
              <div className="billing-details">
                <h2 className="text-xl font-medium mb-4">Shipping Details</h2>
                <Address
                  states={shippingStates}
                  countries={shippingCountries}
                  // input={user.shipping ??input?.shipping}
                  input={input?.shipping}
                  handleOnChange={(event) => handleOnChange(event, true, true)}
                  isFetchingStates={isFetchingShippingStates}
                  isShipping
                />
              </div>
              <div>
                <CheckboxField
                  name="billingDifferentThanShipping"
                  type="checkbox"
                  checked={input?.billingDifferentThanShipping}
                  handleOnChange={handleOnChange}
                  label="Billing different than shipping"
                  containerClassNames="mb-4 pt-4"
                />
              </div>
              {/*Billing Details*/}
              {input?.billingDifferentThanShipping ? (
                <div className="billing-details">
                  <h2 className="text-xl font-medium mb-4">Billing Details</h2>
                  <Address
                    states={billingStates}
                    countries={billingCountries}
                    // input={user.billing ?? input?.billing}
                    input={input?.billing}
                    handleOnChange={(event) =>
                      handleOnChange(event, false, true)
                    }
                    isFetchingStates={isFetchingBillingStates}
                    isShipping={false}
                  />
                </div>
              ) : null}
            </div>
            {/* Order & Payments*/}
            <div className="your-orders">
              {/*	Order*/}
              <h2 className="text-xl font-medium mb-4">Your Order</h2>
              <YourOrder />

              {/*Payment*/}
              {/* { getFloatVal(cart.totalProductsPrice) < 200 && <ShippingModes methods={ShippingMethods} chosenShippingMethod={chosenShippingMethod} handleOnChange={handleOnShippingChange}/>}                             */}
              {/* <PaymentModes input={input} handleOnChange={handleOnChange}/> */}

              <div className="flex gap-1">
                <input
                  className="checked:bg-black"
                  type="checkbox"
                  id="newsletter"
                  onChange={() => setSignedUp(true)}
                />
                <label htmlFor="newsletter">Sign up for Newsletter</label>
              </div>
              <div className="place-order-btn-wrap mt-5">
                {!paypalLoaded && (
                  <button
                    disabled={isOrderProcessing}
                    className="bg-black text-white px-5 py-3 rounded-sm w-auto xl:w-full"
                    type="submit"
                  >
                    Place Order
                  </button>
                )}

                {paypalLoaded && (
                  <Paypal
                    cart={cart}
                    input={input}
                    products={cart?.products}
                    requestError={requestError}
                    setRequestError={setRequestError}
                    clearCartMutation={clearCartMutation}
                    setIsStripeOrderProcessing={setIsStripeOrderProcessing}
                    setCreatedOrderData={setCreatedOrderData}
                  />
                )}
              </div>

              {/* Checkout Loading*/}
              {isOrderProcessing && <p>Processing Order...</p>}
              {requestError && <p>Error : {requestError}</p>}
            </div>
          </div>
        </form>
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

      {/*	Show message if Order Success*/}
      <OrderSuccess response={checkoutResponse} />
    </>
  );
};

export default CheckoutForm;
