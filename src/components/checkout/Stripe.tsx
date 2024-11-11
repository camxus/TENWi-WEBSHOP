import {
  PayPalButtons,
  PayPalButtonsComponentProps,
  SCRIPT_LOADING_STATE,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import React from "react";
import {
  handlePaypalCheckout,
  handleStripeCheckout,
} from "../../utils/checkout";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import axios from "axios";

// This value is from the props in the UI
const style: PayPalButtonsComponentProps["style"] = { layout: "vertical" };

function Stripe({
  cart,
  input,
  products,
  setRequestError,
  clearCartMutation,
  setIsStripeOrderProcessing,
  setCreatedOrderData,
  stripeOptions,
}: any) {
  if (!stripeOptions) {
    return;
  }

  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (
    event: React.MouseEventHandler<HTMLButtonElement>
  ) => {
    try {
      event.preventDefault();
      if (!elements || !stripe) {
        console.warn("Stripe or elements not initialized");
        return;
      }

      // Trigger form validation and wallet collection
      const { error: submitError } = await elements.submit();

      // if (submitError) {
      //   throw new Error(submitError.message);
      // }

      // Create the PaymentIntent and obtain clientSecret from your server endpoint
      const {
        data: { client_secret: clientSecret },
      } = await axios.post("/api/stripe/create-intent", stripeOptions);

      if (!clientSecret) {
        throw new Error("Create intent failed");
      }

      const { error } = await stripe.confirmPayment({
        elements,
        clientSecret,
        confirmParams: {
          return_url: window.location.href,
        },
      });

      if (error) {
        console.error("Payment confirmation error:", error.message);
        setRequestError(error.message);
        return;
      } else {
        console.log("Payment confirmed successfully");
      }

      const { orderId } = await handleStripeCheckout(
        input,
        products,
        setRequestError,
        clearCartMutation,
        setIsStripeOrderProcessing,
        setCreatedOrderData
      );

      console.log("Order ID:", orderId);
      window.location.replace(`/shop/thank-you?order_id=${orderId}`);
    } catch (err) {
      console.error("Error in handleSubmit:", err);
    }
  };

  return (
    <>
      <PaymentElement />
      <button
        onClick={handleSubmit}
        type="submit"
        disabled={!stripe || !elements}
      >
        Pay
      </button>
    </>
  );
}

export default Stripe;
