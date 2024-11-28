import client from "../components/ApolloClient";
import GET_STATES from "../queries/get-states";

import { isEmpty, isArray } from "lodash";

import { loadStripe } from "@stripe/stripe-js";
import { createCheckoutSession } from "next-stripe/client"; // @see https://github.com/ynnoj/next-stripe npm i next-stripe@bets

import { createTheOrder, getCreateOrderData } from "./order";
import { clearTheCart } from "./cart";

/**
 * Get states
 *
 * @param {String} countryCode Country code
 *
 * @returns {Promise<void>}
 */
export const getStates = async (countryCode) => {
  const { data } = await client.query({
    query: GET_STATES,
    variables: { countryCode: countryCode || "" },
  });

  return data?.wooStates?.states ?? [];
};

/**
 * Set states for the country.
 *
 * @param {Object} target Target.
 * @param {Function} setTheStates React useState function to set the value of the states basis country selection.
 * @param {Function} setIsFetchingStates React useState function, to manage loading state when request is in process.
 *
 * @return {Promise<void>}
 */
export const setStatesForCountry = async (
  target,
  setTheStates,
  setIsFetchingStates
) => {
  if ("country" === target.name) {
    setIsFetchingStates(true);
    const countryCode = target[target.selectedIndex].getAttribute(
      "data-countrycode"
    );
    const states = await getStates(countryCode);
    setTheStates(states || []);
    setIsFetchingStates(false);
  }
};

export const handleBillingDifferentThanShipping = (input, setInput, target) => {
  const newState = {
    ...input,
    [target.name]: !input.billingDifferentThanShipping,
  };
  setInput(newState);
};

export const handleCreateAccount = (input, setInput, target) => {
  const newState = { ...input, [target.name]: !input.createAccount };
  setInput(newState);
};

/**
 * Handle Stripe checkout.
 *
 * 1. Create Formatted Order data.
 * 2. Create Order using Next.js create-order endpoint.
 * 3. Clear the cart session.
 * 4. On success set show stripe form to true
 *
 * @param input
 * @param products
 * @param setRequestError
 * @param setShowStripeForm
 * @param clearCartMutation
 * @param setIsStripeOrderProcessing
 *
 */
export const handleStripeCheckout = async (
  input,
  products,
  setRequestError,
  clearCartMutation,
  setIsStripeOrderProcessing,
  setCreatedOrderData
) => {
  // createCheckoutSessionAndRedirect
  try {
    setIsStripeOrderProcessing(true);
    const createCustomerOrder = await handleCheckout(
      "stripe",
      input,
      products,
      setRequestError,
      clearCartMutation
    );
    setIsStripeOrderProcessing(false);
    // On success show stripe form.
    // setCreatedOrderData(createCustomerOrder);
    return createCustomerOrder;
  } catch (error) {
    throw error;
  }
};

const createCheckoutSessionAndRedirect = async (products, input, orderId) => {
  const sessionData = {
    success_url: window.location.origin + `/thank-you?order_id=${orderId}`,
    cancel_url: window.location.href,
    customer_email: input.billingDifferentThanShipping
      ? input?.billing?.email
      : input?.shipping?.email,
    line_items: getStripeLineItems(products),
    metadata: getMetaData(input, orderId),
    payment_method_types: ["card"],
    mode: "payment",
  };
  const session = await createCheckoutSession(sessionData);
  try {
    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_CLIENT);
    if (stripe) {
      stripe.redirectToCheckout({ sessionId: session.id });
    }
  } catch (error) {
    console.log(error);
  }
};

const getStripeLineItems = (products) => {
  if (isEmpty(products) && !isArray(products)) {
    return [];
  }

  return products.map((product) => {
    return {
      quantity: product?.qty ?? 0,
      name: product?.name ?? "",
      images: [product?.image?.sourceUrl ?? ""],
      amount: Math.round(product?.price * 100),
      currency: "eur",
    };
  });
};

/**
 * Get meta data.
 *
 * @param input
 * @param {String} orderId Order Id.
 *
 * @returns {{lineItems: string, shipping: string, orderId, billing: string}}
 */
export const getMetaData = (input, orderId) => {
  return {
    billing: JSON.stringify(input?.billing),
    shipping: JSON.stringify(
      input.billingDifferentThanShipping
        ? input?.billing?.email
        : input?.shipping?.email
    ),
    orderId,
  };

  // @TODO
  // if ( customerId ) {
  //     metadata.customerId = customerId;
  // }
};

export const handlePaypalCheckout = async (
  input,
  products,
  setRequestError,
  clearCartMutation,
  setIsStripeOrderProcessing,
) => {
  try {
    setIsStripeOrderProcessing(true);
    const createCustomerOrder = await handleCheckout(
      "paypal",
      input,
      products,
      setRequestError,
      clearCartMutation
    );
    return createCustomerOrder;
  } catch (error) {
    throw error;
  }
};

export const handleCheckout = async (
  system,
  input,
  products,
  setRequestError,
  clearCartMutation
) => {
  const orderData = getCreateOrderData(input, products, system);

  try {
    const createCustomerOrder = await createTheOrder(orderData);
    return createCustomerOrder;
  } catch (error) {
    setRequestError(error.message);
    throw new Error(e);
  }
};
