import {
  PayPalButtons,
  PayPalButtonsComponentProps,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import React from "react";
import { handlePaypalCheckout } from "../../utils/checkout";

// This value is from the props in the UI
const style: PayPalButtonsComponentProps["style"] = { layout: "vertical" };

function Paypal({
  cart,
  input,
  products,
  setRequestError,
  clearCartMutation,
  setIsStripeOrderProcessing,
  setCreatedOrderData,
}: any) {
  const [{ isPending }] = usePayPalScriptReducer();

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
    const wooresult = await handlePaypalCheckout(
      input,
      products,
      setRequestError,
      clearCartMutation,
      setIsStripeOrderProcessing,
      setCreatedOrderData
    );
    if (actions.order) {
      const order = await actions.order.capture();
      console.log("done", order);
      window.location.replace(`/thank-you?order_id=${wooresult?.orderId}`);
    }
  };

  return (
    <>
      <PayPalButtons
        style={style}
        disabled={false}
        fundingSource={undefined}
        createOrder={createOrder}
        onApprove={onApprove}
      />
    </>
  );
}

export default Paypal;