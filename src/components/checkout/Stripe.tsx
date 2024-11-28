import React, { useEffect, useState } from "react";
import { handleStripeCheckout } from "../../utils/checkout";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { clearTheCart } from "../../utils/cart";
import { submitMailchimp } from "../Dialog";

function Stripe({
  cart,
  input,
  products,
  setRequestError,
  clearCartMutation,
  setIsStripeOrderProcessing,
  stripeOptions,
  checkoutEnabled,
  signUpNewsletter,
}: any) {
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    elements?.create("expressCheckout", {
      buttonType: {
        applePay: "buy",
        googlePay: "buy",
      },
    });
  }, []);

  const handleSubmit = async (
    event: React.MouseEventHandler<HTMLButtonElement>
  ) => {
    try {
      setProcessing(true);
      event.preventDefault();
      if (!elements || !stripe) {
        console.warn("Stripe or elements not initialized");
        return;
      }

      // Trigger form validation and wallet collection
      const { error: submitError } = await elements.submit();

      if (submitError) {
        throw new Error(submitError.message);
      }

      // Create the PaymentIntent and obtain clientSecret from your server endpoint
      const {
        data: { clientSecret },
      } = await axios.post("/api/stripe/create-intent", {
        amount: stripeOptions.amount,
        currency: stripeOptions.currency,
        payment_method_types: stripeOptions.payment_methpod_types,
      });

      if (!clientSecret) {
        throw new Error("Create intent failed");
      }

      const { error } = await stripe.confirmPayment({
        elements,
        clientSecret,
        redirect: "if_required",
      });

      if (error) {
        setRequestError(error.message);
        throw error.message;
      }

      const { orderId } = await handleStripeCheckout(
        input,
        products,
        setRequestError,
        setIsStripeOrderProcessing
      );

      if (signUpNewsletter) {
        submitMailchimp({
          email: input.shipping.email,
          firstName: input.shipping.firstName,
          lastName: input.shipping.lastName,
        });
      }

      clearTheCart(clearCartMutation);

      console.log("Order ID:", orderId);
      window.location.replace(`/shop/thank-you?order_id=${orderId}`);
      setProcessing(false);
    } catch (err) {
      setProcessing(false);
      console.error("Error in handleSubmit:", err);
    }
  };

  if (!stripeOptions) {
    return;
  }

  return (
    <>
      <PaymentElement />
      {stripe && elements && (
        <button
          className="rounded-md p-2 w-full bg-black text-white border border-gray-300 my-4 fade-in disabled:bg-gray-500 disabled:text-gray-300 disabled:cursor-not-allowed transition-all"
          onClick={handleSubmit}
          type="submit"
          disabled={processing || !checkoutEnabled}
        >
          Pay
        </button>
      )}
    </>
  );
}

export default Stripe;
