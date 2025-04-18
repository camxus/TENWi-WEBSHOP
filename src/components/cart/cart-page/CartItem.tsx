import { ChangeEvent, useState } from "react";
import { v4 } from "uuid";
import { getUpdatedItems } from "../../../functions";
import { Cross } from "../../icons";
// import Link from 'next/link'
import cartbar from "../../../../src/styles/cartbar.module.css";
import Link from "next/link";

const CartItem = ({
  item,
  products,
  updateCartProcessing,
  handleRemoveProductClick,
  updateCart,
}: any) => {
  const [productCount, setProductCount] = useState(item.qty);

  /*
   * When user changes the qty from product input update the cart in localStorage
   * Also update the cart in global context
   *
   * @param {Object} event event
   *
   * @return {void}
   */
  const handleQtyChange = (
    event: ChangeEvent<HTMLInputElement>,
    cartKey: any
  ) => {
    if (process.browser) {
      event.stopPropagation();

      // If the previous update cart mutation request is still processing, then return.
      if (updateCartProcessing) {
        return;
      }

      // If the user tries to delete the count of product, set that to 1 by default ( This will not allow him to reduce it less than zero )
      const newQty = event.target.value ? parseInt(event.target.value) : 1;

      // Set the new qty in state.
      setProductCount(newQty);

      if (products.length) {
        const updatedItems = getUpdatedItems(products, newQty, cartKey);

        updateCart({
          variables: {
            input: {
              clientMutationId: v4(),
              items: updatedItems,
            },
          },
        });
      }
    }
  };

  return (
    <tr className="cart-item" key={item.productId}>
      <th className={`${cartbar[`cart-el-close`]} cart-element cart-el-close`}>
        {/* Remove item */}
        <span
          className="cart-close-icon flex justify-center cursor-pointer"
          onClick={(event) =>
            handleRemoveProductClick(event, item.cartKey, products)
          }
        >
          <Cross />
        </span>
      </th>
      <td className={cartbar[`cart-element`]}>
        {item.image && (
          <img
            width="64"
            src={item.image.sourceUrl}
            srcSet={item.image.srcSet}
            alt={item.image.title}
          />
        )}
      </td>

      <td className={cartbar[`cart-element`]}>
        <Link href={`/shop/product/${item?.slug ? item.slug : ""}`}>
          {item.name}
        </Link>
      </td>

      {/* Qty Input */}
      <td className="cart-element cart-qty">
        <input
          type="number"
          min="1"
          data-cart-key={item.cartKey}
          className={`cart-qty-input form-control ${
            updateCartProcessing ? "opacity-25 cursor-not-allowed" : ""
          } w-8`}
          value={productCount}
          onChange={(event) => handleQtyChange(event, item.cartKey)}
        />
      </td>
      <td className={cartbar[`cart-element`]}>
        {item.price && "string" !== typeof item.price
          ? item.price.toFixed(2)
          : item.price}
      </td>

      <td className={cartbar[`cart-element`]}>
        {item.totalPrice && "string" !== typeof item.totalPrice
          ? item.totalPrice.toFixed(2)
          : item.totalPrice}
      </td>
    </tr>
  );
};

export default CartItem;
