import { useState, useContext, useEffect } from "react";
import { useMutation } from "@apollo/client";
import Link from "next/link";
import { v4 } from "uuid";

import { AppContext } from "../context/AppContext";
import ADD_TO_CART from "../../mutations/add-to-cart";
import Select, { StylesConfig } from "react-select";

import styles from "../../styles/product.module.css";
import { isEmpty, reduceRight } from "lodash";
import ColorPicker from "./ColorPicker";

const AddToCart = ({
  product,
  options,
  variations,
  selectedVariation,
  setSelectedVariation,
}: any) => {
  const { refetch } = useContext(AppContext);
  const [showViewCart, setShowViewCart] = useState(false);
  const [requestError, setRequestError] = useState<string | null>(null);

  //REACT SELECT
  const [selectedOptions, setSelectedOptions] = useState<any>({});
  const [productQryInput, setProductQryInput] = useState({});

  function optionsHandler({ value, label }: any) {
    setSelectedOptions((variations: any) => ({
      ...variations,
      [value]: label,
    }));
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

    if (!isEmpty(selectedOptions)) {
      setSelectedVariation(
        findMatchingItems(
          variations,
          Object.entries(selectedOptions).map(([label, value]) => ({
            name: label,
            value: value,
          }))
        )
      );
    }
  }, [selectedOptions]);

  useEffect(() => {
    if (!isEmpty(selectedVariation)) {
      setProductQryInput({
        clientMutationId: v4(), // Generate a unique id.
        productId: product.productId,
        variationId: selectedVariation.variationId,
        variation: selectedVariation.attributes.nodes.map(
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
  }, [selectedVariation]);

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
      textTransform: "uppercase",
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
      padding: "0.5rem",
      borderTop: "1px solid black",
      borderBottom: "0",
      borderLeft: "0",
      borderRight: "0",
      borderRadius: "0",
      color: state.isSelected ? "white" : "black",
      backgroundColor: state.isSelected ? "black" : "white",
      boxShadow: state.isFocused ? "none" : null,
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
      textTransform: "uppercase",
      fontSize: "small"
    }),
    singleValue: (provided: any, state: any) => {
      // const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "all 300ms ease-in-out";

      return {
        ...provided,
        // opacity,
        transition,
        //   marginLeft: "36px",
        textTransform: "uppercase",
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
    if (isPreorder) {
      return "PRE-ORDER NOW";
    }
    return "ADD TO CART";
  }

  return (
    <div>
      {/*	Check if its an external product then put its external buy link */}
      {options.length ? (
        <>
          <div className="flex items-center justify-between bg-white border-black border-t-[1px]">
            <h1 className="text-sm font-bold md:hiddenuppercase px-4 py-2">
              {product.name}
            </h1>
            <ColorPicker
              options={options}
              selectedOptions={selectedOptions}
              onClick={optionsHandler}
            />
          </div>
          <div className="flex items-center justify-between bg-white border-black border-t-[1px]">
            <h1
              className="text-sm uppercase px-4 py-2"
              dangerouslySetInnerHTML={{
                __html: product.price ? product.price : "SOLD OUT",
              }}
            />
          </div>
          {options
            .filter(
              (option: { name: any; options: string[] }) =>
                option.name !== "color"
            )
            .map((option: { name: any; options: string[] }) => {
              return (
                <div className="sizes">
                  <Select
                    styles={customStyles}
                    options={option.options.map((value: any) => ({
                      label: value,
                      value: option.name,
                    }))}
                    placeholder={option.name}
                    onChange={optionsHandler}
                    className="browser-default custom-select"
                    isSearchable={false}
                  ></Select>
                </div>
              );
            })}
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
      ) : showViewCart ? (
        <Link href="/cart">
          <button className={`${styles["view-cart"]}`}>VIEW CART</button>
        </Link>
      ) : !requestError ? (
        <button
          disabled={
            addToCartLoading ||
            (options.length &&
              Object.values(selectedOptions).length !== options.length)
          }
          onClick={handleAddToCartClick}
          className={`${styles["add-to-cart-button"]}`}
        >
          {renderAddCart()}
        </button>
      ) : (
        <Link href="/shop">
          <button
            disabled={addToCartLoading}
            data-error={true}
            className={`${styles["add-to-cart-button"]}`}
          >
            ITEM IS ALREADY IN CART OR SOLD OUT RETURN TO SHOP
          </button>
        </Link>
      )}
    </div>
  );
};

export default AddToCart;
