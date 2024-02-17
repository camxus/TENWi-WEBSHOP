import { useState, useContext, useRef, forwardRef, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import Link from "next/link";
import { v4 } from "uuid";
import cx from "classnames";

import { AppContext } from "../context/AppContext";
import { getFormattedCart } from "../../functions";
import GET_CART from "../../queries/get-cart";
import ADD_TO_CART from "../../mutations/add-to-cart";
import Select, { OptionsOrGroups, StylesConfig } from "react-select";

import styles from "../../styles/product.module.css";

const AddToCart = ({ product, variationName, sizes }: any) => {
  let selectedSize = null;

  const [, setCart] = useContext(AppContext);
  const [showViewCart, setShowViewCart] = useState(false);
  const [requestError, setRequestError] = useState<string | null>(null);

  //REACT SELECT
  const [size, setSize] = useState("");
  const [sizeOptions, setSizeOptions] = useState([]);
  const [productQryInput, setProductQryInput] = useState({});

  const sizeHandler = (event: { value: any }) => {
    const value = event.value;
    setSize(value);
  };

  // Get Cart Data.
  const { data, refetch } = useQuery(GET_CART, {
    notifyOnNetworkStatusChange: true,
    onCompleted: () => {
      // Update cart data in React Context.
      setCart(data);
    },
  });

  useEffect(() => {
    if (sizes) {
      setProductQryInput({
        clientMutationId: v4(), // Generate a unique id.
        productId: product.productId,
        variation: [
          {
            attributeName: variationName,
            attributeValue: size, //REACT-SELECT
          },
        ],
      });
    } else {
      setProductQryInput({
        clientMutationId: v4(), // Generate a unique id.
        productId: product.productId,
      });
    }
  }, [size]);

  useEffect(() => {
    if (sizes)
      setSizeOptions(sizes.map((size: any) => ({ value: size, label: size })));
  }, [sizes]);

  // Add to Cart Mutation.
  const [
    addToCart,
    { data: addToCartRes, loading: addToCartLoading, error: addToCartError },
  ] = useMutation(ADD_TO_CART, {
    variables: {
      input: productQryInput,
    },
    onCompleted: () => {
      // On Success:
      // 1. Make the GET_CART query to update the cart with new values in React context.
      refetch();

      // 2. Show View Cart Button
      setShowViewCart(true);
    },
    onError: (error) => {
      console.log("input", productQryInput);
      if (error) {
        setRequestError(error.graphQLErrors?.[0]?.message ?? "");
      }
      console.log(
        "ERROR ",
        error,
        "WITH",
        error?.graphQLErrors?.[0]?.message ?? ""
      );
    },
  });

  const handleAddToCartClick = async () => {
    setRequestError(null);
    await addToCart();
  };

  const customStyles: StylesConfig<any> = {
    option: (provided: any, state: { isSelected: any }, base: any) => ({
      ...provided,
      //   borderBottom: '1px solid black',
      borderTop: "1px solid grey",
      borderLeft: "0",
      borderRight: "0",
      color: state.isSelected ? "black" : "black",
      backgroundColor: state.isSelected ? "lightgray" : "white",
      borderRadius: "0",
      textAlign: "center",
      padding: "2% 0",
      transition: "all 300ms ease-in-out",
      ...base,
      "&:hover": {
        backgroundColor: "black",
        color: "white",
        textAlign: "center",
      },
    }),
    control: (
      provided: any,
      state: { isSelected: any; isFocused: any },
      base: any
    ) => ({
      // none of react-select's styles are passed to <Control />
      ...provided,
      borderTop: "1px solid black",
      borderBottom: "0",
      borderLeft: "0",
      borderRight: "0",
      borderRadius: "0",
      color: state.isSelected ? "white" : "black",
      backgroundColor: state.isSelected ? "black" : "white",
      borderColor: state.isFocused ? "black" : null,
      padding: "2% 0",
      transition: "all 300ms ease-in-out",
      ...base,
      "&:hover": {
        // boxShadow: "0px 0px 3px 0px black",
        borderColor: "black",
      },
    }),
    menu: (base: any) => ({
      ...base,
      marginTop: 0,
      textAlign: "left",
    }),

    dropdownIndicator: (base: any) => ({
      ...base,
      margin: "0 10px 0 0",
    }),

    menuList: (base: any) => ({
      ...base,
      // kill the white space on first and last option
      padding: 0,
    }),

    placeholder: (provided: any) => ({
      ...provided,
      transform: "translateX(3%)",
      padding: "0",
      textAlign: "center",
    }),
    singleValue: (provided: any, state: any) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "all 300ms ease-in-out";

      return {
        ...provided,
        opacity,
        transition,
        //   marginLeft: "36px",
        transform: "translateX(3%)",
        padding: "0",
        textAlign: "center",
      };
    },

    input: (provided: any) => ({
      ...provided,
      marginLeft: "36px",
      padding: "0",
    }),
  };

  return (
    <div>
      {/*	Check if its an external product then put its external buy link */}
      {sizes ? (
        <div className="sizes">
          <Select
            styles={customStyles}
            options={sizeOptions}
            onChange={sizeHandler}
            className="browser-default custom-select"
            isSearchable={false}
          ></Select>
        </div>
      ) : (
        ""
      )}
      {"ExternalProduct" === product.__typename ? (
        <Link href={product?.externalUrl ?? "/"}>
          <a
            target="_blank"
            className="px-3 py-1 rounded-sm mr-3 text-sm border-solid border border-current inline-block hover:text-white"
          >
            BUY NOW
          </a>
        </Link>
      ) : !requestError ? (
        <button
          disabled={addToCartLoading}
          onClick={handleAddToCartClick}
          className={
            `${styles["add-to-cart-button"]}`
            // cx(
            //     // 'px-3 py-1 rounded-sm mr-3 text-sm border-solid border border-current',
            //     {'hover:text-white': !addToCartLoading},
            //     {'opacity-50 cursor-not-allowed': addToCartLoading}
            // )
          }
        >
          {addToCartLoading
            ? "ADDING TO CART..."
            : requestError
            ? "SOLD OUT"
            : "ADD TO CART"}
        </button>
      ) : (
        <Link href="/shop">
          <button
            disabled={addToCartLoading}
            // onClick={handleAddToCartClick}
            className={
              `${styles["add-to-cart-button-red"]}`
              // cx(
              //     // 'px-3 py-1 rounded-sm mr-3 text-sm border-solid border border-current',
              //     {'hover:text-white': !addToCartLoading},
              //     {'opacity-50 cursor-not-allowed': addToCartLoading}
              // )
            }
          >
            ITEM IS ALREADY IN CART OR SOLD OUT RETURN TO SHOP
          </button>
        </Link>
      )}

      {showViewCart ? (
        <Link href="/cart">
          <button
            // onClick={openNav()}
            // ref={ref}
            className={`${styles["view-cart"]}`}
          >
            VIEW CART
          </button>
        </Link>
      ) : (
        ""
      )}
    </div>
  );
};

export default AddToCart;
