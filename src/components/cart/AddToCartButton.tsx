import { useState, useContext, useEffect } from "react";
import { useMutation } from "@apollo/client";
import Link from "next/link";
import { v4 } from "uuid";

import { AppContext } from "../context/AppContext";
import ADD_TO_CART from "../../mutations/add-to-cart";
import Select, { StylesConfig } from "react-select";

import styles from "../../styles/product.module.css";
import { isEmpty, reduceRight } from "lodash";

const AddToCart = ({ product, variations, variationProducts }: any) => {
  const { refetch } = useContext(AppContext);
  const [showViewCart, setShowViewCart] = useState(false);
  const [requestError, setRequestError] = useState<string | null>(null);

  //REACT SELECT
  const [selectedVariationProduct, setSelectedVariationProduct] = useState<any>(
    {}
  );
  const [selectedVariations, setSelectedVariations] = useState({});
  const [productQryInput, setProductQryInput] = useState({});

  function variationsHandler({ value, label }: any) {
    setSelectedVariations((variations) => ({ ...variations, [value]: label }));
  }

  const isPreorder = !!product.productTags.nodes.find(
    (tag: { slug: string }) => tag?.slug.toLowerCase() === "pre-order"
  );

  useEffect(() => {
    function matchesAttributes(
      item: { attributes: { nodes: { name: any; value: any }[] } },
      arr2: any[]
    ) {
      return arr2.every((attr2: { name: any; value: any }) =>
        item.attributes.nodes.some(
          (attr1: { name: any; value: any }) =>
            attr1.name === attr2.name && attr1.value === attr2.value
        )
      );
    }

    // Function to find items in arr1 (variations.nodes) that match arr2
    function findMatchingItems(arr1: any[], arr2: any[]) {
      const [matchingItem] = arr1.filter((item: any) =>
        matchesAttributes(item, arr2)
      );
      return matchingItem;
    }

    if (selectedVariations) {
      setSelectedVariationProduct(
        findMatchingItems(
          variationProducts,
          Object.entries(selectedVariations).map(([label, value]) => ({
            name: label,
            value: value,
          }))
        )
      );
    }
  }, [selectedVariations]);

  useEffect(() => {
    if (!isEmpty(selectedVariationProduct)) {
      console.log(selectedVariationProduct.attributes.nodes);
      setProductQryInput({
        clientMutationId: v4(), // Generate a unique id.
        productId: product.productId,
        variationId: selectedVariationProduct.variationId,
        variation: selectedVariationProduct.attributes.nodes.map(
          (variation: { name: any; value: any }) => ({
            attributeName: variation.name,
            attributeValue: variation.value,
          })
        ),
      });
    } else {
      setProductQryInput({
        clientMutationId: v4(), // Generate a unique id.
        productId: product.productId,
      });
    }
  }, [selectedVariationProduct]);

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
      if (refetch) {
        refetch();
      }

      // 2. Show View Cart Button
      setShowViewCart(true);
    },
    onError: (error) => {
      if (error) {
        setRequestError(error.graphQLErrors?.[0]?.message ?? "");
      }
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
      backgroundColor: "white",
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
      boxShadow: state.isFocused ? "none" : null,
      padding: "2% 0",
      transition: "all 300ms ease-in-out",
      // ...base,
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
      // const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "all 300ms ease-in-out";

      return {
        ...provided,
        // opacity,
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

  function renderAddCart() {
    if (addToCartLoading) {
      return "ADDING TO CART...";
    }
    if (requestError) {
      return "SOLD OUT";
    }
    if (isPreorder) {
      return "PRE-ORDER NOW";
    }
    return "ADD TO CART";
  }

  return (
    <div>
      {/*	Check if its an external product then put its external buy link */}
      {variations.length ? (
        <>
          {variations.map((variation: { name: any; options: string[] }) => (
            <div className="sizes">
              <Select
                styles={customStyles}
                options={variation.options.map((option: any) => ({
                  label: option,
                  value: variation.name,
                }))}
                placeholder={variation.name}
                onChange={variationsHandler}
                className="browser-default custom-select"
                isSearchable={false}
              ></Select>
            </div>
          ))}
        </>
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
          disabled={
            addToCartLoading ||
            (variations.length &&
              Object.values(selectedVariations).length !== variations.length)
          }
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
          {renderAddCart()}
        </button>
      ) : (
        <Link href="/shop">
          <button
            disabled={addToCartLoading}
            // onClick={handleAddToCartClick}
            data-error={true}
            className={
              `${styles["add-to-cart-button"]}`
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
