import {
  PayPalButtons,
  PayPalButtonsComponentProps,
  SCRIPT_LOADING_STATE,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import React from "react";
import { handlePaypalCheckout } from "../../utils/checkout";
import { submitMailchimp } from "../Dialog";
import { clearTheCart } from "../../utils/cart";

// This value is from the props in the UI
const style: PayPalButtonsComponentProps["style"] = { layout: "vertical" };

function Paypal({
  cart,
  input,
  products,
  setRequestError,
  clearCartMutation,
  setIsStripeOrderProcessing,
  checkoutEnabled,
  signUpNewsletter,
}: any) {
  const [{ isPending }, dispatchPaypal] = usePayPalScriptReducer();

  const createOrder: PayPalButtonsComponentProps["createOrder"] = (
    data,
    actions
  ) => {
    return actions.order.create({
      intent: "CAPTURE",
      purchase_units: [
        {
          description: "TENWi",
          amount: {
            currency_code: "EUR",
            value: cart.total.replace(",", ".").slice(0, -1),
          },
        },
      ],
    });
  };

  const onApprove: PayPalButtonsComponentProps["onApprove"] = async (
    data,
    actions
  ) => {
    try {
      if (!actions.order) {
        throw new Error("payment failed");
      }

      // Capture the payment first
      // const captureResult = await actions.order.capture();

      // if (captureResult.status !== "COMPLETED") {
      //   throw new Error("Payment capture was not completed");
      // }

      // Only proceed with order creation after successful capture
      const { orderId } = await handlePaypalCheckout(
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

      window.location.replace(`/shop/thank-you?order_id=${orderId}`);
    } catch (e: any) {
      console.error(e);
      // dispatchPaypal({
      //   type: "setLoadingStatus",
      //   value: {
      //     state: SCRIPT_LOADING_STATE.INITIAL,
      //     message: "Please try again",
      //   },
      // });
      alert("Create order failed: " + e.message);
    }
  };

  return (
    <div className="fade-in">
      <PayPalButtons
        style={style}
        disabled={!checkoutEnabled}
        fundingSource={"paypal"}
        createOrder={createOrder}
        onApprove={onApprove}
        onError={(err) => alert("Create order failed: " + JSON.stringify(err))}
      />
    </div>
  );
}

export default Paypal;
