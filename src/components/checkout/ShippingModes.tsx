import { useContext } from "react";
import { AppContext, ShippingMethod } from "../context/AppContext";
import Error from "./Error";

const ShippingModes = ({
  shippingMethods,
  chosenShippingMethod,
  handleOnChange,
  postShippingLoading,
}: {
  postShippingLoading: boolean;
  shippingMethods: ShippingMethod[];
  chosenShippingMethod: ShippingMethod["id"] | undefined;
  handleOnChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
}) => {
  const { loading: cartLoading } = useContext(AppContext);
  return (
    <div className="mt-3">
      <td className="cart-element-total text-2xl font-normal">Shipping</td>
      <div className="form-check payment-input-container mt-2">
        {shippingMethods &&
          shippingMethods.map((method: ShippingMethod) => (
            <div key={method.id}>
              <label className="form-check-label">
                <input
                  onChange={handleOnChange}
                  value={method.id}
                  className="form-check-input mr-3"
                  title="shippingMethod"
                  type="radio"
                  disabled={
                    cartLoading ||
                    postShippingLoading ||
                    chosenShippingMethod?.includes("free_shipping")
                  }
                  checked={method.id === chosenShippingMethod}
                />
                <span className="payment-content">{method.label}</span>
              </label>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ShippingModes;
