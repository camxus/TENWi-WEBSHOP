"use strict";
(() => {
var exports = {};
exports.id = 190;
exports.ids = [190];
exports.modules = {

/***/ 7521:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8394);
/* harmony import */ var _src_components_cart_cart_page_CartItemsContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(806);
/* harmony import */ var _src_queries_product_and_categories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6462);
/* harmony import */ var _src_components_ApolloClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9747);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_components_cart_cart_page_CartItemsContainer__WEBPACK_IMPORTED_MODULE_2__]);
_src_components_cart_cart_page_CartItemsContainer__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];





const Cart = ({ categories , tags  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        categories: categories,
        tags: tags,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_cart_cart_page_CartItemsContainer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cart);
async function getStaticProps() {
    var categories = await _src_components_ApolloClient__WEBPACK_IMPORTED_MODULE_4__/* ["default"].query */ .ZP.query({
        query: _src_queries_product_and_categories__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z
    });
    var tags = categories.data.productTags.nodes;
    categories = categories.data.productCategories.nodes;
    return {
        props: {
            categories: categories ? categories : [],
            tags: tags ? tags : []
        },
        revalidate: 1
    };
}
;

});

/***/ }),

/***/ 4137:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6555);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7392);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4921);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_functions__WEBPACK_IMPORTED_MODULE_3__, uuid__WEBPACK_IMPORTED_MODULE_2__]);
([_functions__WEBPACK_IMPORTED_MODULE_3__, uuid__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);





const CartItem = ({ item , products , updateCartProcessing , handleRemoveProductClick , updateCart ,  })=>{
    const { 0: productCount , 1: setProductCount  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(item.qty);
    /*
	 * When user changes the qty from product input update the cart in localStorage
	 * Also update the cart in global context
	 *
	 * @param {Object} event event
	 *
	 * @return {void}
	 */ const handleQtyChange = (event, cartKey)=>{
        if (false) {}
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
        className: "cart-item",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                className: "cart-element cart-el-close",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "cart-close-icon cursor-pointer",
                    onClick: (event)=>handleRemoveProductClick(event, item.cartKey, products)
                    ,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_4__/* .Cross */ .X1, {
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                className: "cart-element",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    width: "64",
                    src: item.image.sourceUrl,
                    srcSet: item.image.srcSet,
                    alt: item.image.title
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                className: "cart-element",
                children: item.name
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                className: "cart-element",
                children: 'string' !== typeof item.price ? item.price.toFixed(2) : item.price
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                className: "cart-element cart-qty",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "number",
                    min: "1",
                    "data-cart-key": item.cartKey,
                    className: `cart-qty-input form-control ${updateCartProcessing ? 'opacity-25 cursor-not-allowed' : ''} `,
                    value: productCount,
                    onChange: (event)=>handleQtyChange(event, item.cartKey)
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                className: "cart-element",
                children: 'string' !== typeof item.totalPrice ? item.totalPrice.toFixed(2) : item.totalPrice
            })
        ]
    }, item.productId));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartItem);

});

/***/ }),

/***/ 806:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6589);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7392);
/* harmony import */ var _CartItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4137);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6555);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mutations_update_cart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1095);
/* harmony import */ var _queries_get_cart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2321);
/* harmony import */ var _mutations_clear_cart__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6189);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CartItem__WEBPACK_IMPORTED_MODULE_5__, uuid__WEBPACK_IMPORTED_MODULE_6__, _functions__WEBPACK_IMPORTED_MODULE_4__]);
([_CartItem__WEBPACK_IMPORTED_MODULE_5__, uuid__WEBPACK_IMPORTED_MODULE_6__, _functions__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);












const CartItemsContainer = ()=>{
    // @TODO wil use it in future variations of the project.
    const { 0: cart , 1: setCart  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_AppContext__WEBPACK_IMPORTED_MODULE_3__/* .AppContext */ .I);
    const { 0: requestError , 1: setRequestError  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    // Get Cart Data.
    const { loading , error: error1 , data , refetch  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useQuery)(_queries_get_cart__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        notifyOnNetworkStatusChange: true,
        onCompleted: ()=>{
            // Update cart in the localStorage.
            const updatedCart = (0,_functions__WEBPACK_IMPORTED_MODULE_4__/* .getFormattedCart */ .W3)(data);
            localStorage.setItem('tenwi-cart', JSON.stringify(updatedCart));
            // Update cart data in React Context.
            setCart(updatedCart);
        }
    });
    // Update Cart Mutation.
    const [updateCart, { data: updateCartResponse , loading: updateCartProcessing , error: updateCartError  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useMutation)(_mutations_update_cart__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        onCompleted: ()=>{
            refetch();
        },
        onError: (error)=>{
            if (error) {
                var ref, ref1;
                const errorMessage = (error === null || error === void 0 ? void 0 : (ref = error.graphQLErrors) === null || ref === void 0 ? void 0 : (ref1 = ref[0]) === null || ref1 === void 0 ? void 0 : ref1.message) ? error.graphQLErrors[0].message : '';
                setRequestError(errorMessage);
            }
        }
    });
    // Update Cart Mutation.
    const [clearCart, { data: clearCartRes , loading: clearCartProcessing , error: clearCartError  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useMutation)(_mutations_clear_cart__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        onCompleted: ()=>{
            refetch();
        },
        onError: (error)=>{
            if (error) {
                var ref, ref2;
                const errorMessage = !(0,lodash__WEBPACK_IMPORTED_MODULE_11__.isEmpty)(error === null || error === void 0 ? void 0 : (ref = error.graphQLErrors) === null || ref === void 0 ? void 0 : ref[0]) ? (ref2 = error.graphQLErrors[0]) === null || ref2 === void 0 ? void 0 : ref2.message : '';
                setRequestError(errorMessage);
            }
        }
    });
    /*
	 * Handle remove product click.
	 *
	 * @param {Object} event event
	 * @param {Integer} Product Id.
	 *
	 * @return {void}
	 */ const handleRemoveProductClick = (event, cartKey, products)=>{
        event.stopPropagation();
        if (products.length) {
            // By passing the newQty to 0 in updateCart Mutation, it will remove the item.
            const newQty = 0;
            const updatedItems = (0,_functions__WEBPACK_IMPORTED_MODULE_4__/* .getUpdatedItems */ .zn)(products, newQty, cartKey);
            updateCart({
                variables: {
                    input: {
                        clientMutationId: (0,uuid__WEBPACK_IMPORTED_MODULE_6__.v4)(),
                        items: updatedItems
                    }
                }
            });
        }
    };
    // Clear the entire cart.
    const handleClearCart = (event)=>{
        event.stopPropagation();
        if (clearCartProcessing) {
            return;
        }
        clearCart({
            variables: {
                input: {
                    clientMutationId: (0,uuid__WEBPACK_IMPORTED_MODULE_6__.v4)(),
                    all: true
                }
            }
        });
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "cart product-cart-container container mx-auto my-32 px-4 xl:px-0",
        children: cart ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "cart-wrapper container",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "cart-header grid grid-cols-2 gap-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "text-2xl mb-5 uppercase",
                            children: "Cart"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "clear-cart text-right",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                    className: "px-4 py-1 bg-gray-500 text-white rounded-sm w-auto",
                                    onClick: (event)=>handleClearCart(event)
                                    ,
                                    disabled: clearCartProcessing,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "cart",
                                            children: "Clear Cart"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fa fa-arrow-alt-right"
                                        })
                                    ]
                                }),
                                clearCartProcessing ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "Clearing..."
                                }) : '',
                                updateCartProcessing ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "Updating..."
                                }) : null
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "grid grid-cols-1 xl:grid-cols-4 gap-0 xl:gap-4 mb-5",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                            className: "cart-products table-auto col-span-3 mb-5",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                                    className: "text-left",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                        className: "cart-head-container",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                className: "cart-heading-el",
                                                scope: "col"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                className: "cart-heading-el",
                                                scope: "col"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                className: "cart-heading-el",
                                                scope: "col",
                                                children: "Product"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                className: "cart-heading-el",
                                                scope: "col",
                                                children: "Price"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                className: "cart-heading-el",
                                                scope: "col",
                                                children: "Quantity"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                className: "cart-heading-el",
                                                scope: "col",
                                                children: "Total"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                    children: cart.products.length && cart.products.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CartItem__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            item: item,
                                            updateCartProcessing: updateCartProcessing,
                                            products: cart.products,
                                            handleRemoveProductClick: handleRemoveProductClick,
                                            updateCart: updateCart
                                        }, item.productId)
                                    )
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "row cart-total-container border p-5 bg-gray-200",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("table", {
                                        className: "table table-hover mb-5",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                className: "table-light flex flex-col",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                        className: "cart-element-total text-2xl font-normal",
                                                        children: "Subtotal"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                        className: "cart-element-amt text-2xl font-bold",
                                                        children: 'string' !== typeof cart.totalProductsPrice ? cart.totalProductsPrice.toFixed(2) : cart.totalProductsPrice
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                        href: "/checkout",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                            className: "bg-purple-600 text-white px-5 py-3 rounded-sm w-auto xl:w-full",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "cart-checkout-txt",
                                                    children: "Proceed to Checkout"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                    className: "fas fa-long-arrow-alt-right"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                }),
                requestError ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row cart-total-container mt-5",
                    children: [
                        " ",
                        requestError,
                        " "
                    ]
                }) : ''
            ]
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container mx-auto my-32 px-4 xl:px-0",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    className: "text-2xl mb-5",
                    children: "No items in the cart"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    href: "/",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        className: "bg-purple-600 text-white px-5 py-3 rounded-sm",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "cart-checkout-txt",
                                children: "Add New Products"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                className: "fas fa-long-arrow-alt-right"
                            })
                        ]
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartItemsContainer);

});

/***/ }),

/***/ 6189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const CLEAR_CART_MUTATION = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
mutation CLEAR_CART_MUTATION( $input: RemoveItemsFromCartInput! ) {
  removeItemsFromCart(input: $input) {
    cartItems {
      quantity
    }
  }
}
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CLEAR_CART_MUTATION);


/***/ }),

/***/ 1095:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Update Cart
 *
 * This query is used for both updating the items in the cart and delete a cart item.
 * When the cart item needs to be deleted, we should pass quantity as 0 in the input along with other fields.
 */ const UPDATE_CART = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
mutation UPDATE_CART($input: UpdateItemQuantitiesInput!) {
  updateItemQuantities(input: $input) {
    items {
      key
      product {
        node {
          id
          productId: databaseId
          name
          description
          type
          onSale
          slug
          averageRating
          reviewCount
          image {
            id
            sourceUrl
            altText
          }
          galleryImages {
            nodes {
              id
              sourceUrl
              altText
            }
          }
        }
      }
      variation {
        node {
          id
          variationId: databaseId
          name
          description
          type
          onSale
          price
          regularPrice
          salePrice
          image {
            id
            sourceUrl
            altText
          }
        }
        attributes {
          id
          attributeId
          name
          value
        }
      }
      quantity
      total
      subtotal
      subtotalTax
    }
    removed {
      key
      product {
        node {
          id
          productId: databaseId
        }
      }
      variation {
        node {
          id
          variationId: databaseId
        }
      }
    }
    updated {
      key
      product {
        node {
          id
          productId: databaseId
        }
      }
      variation {
        node {
          id
          variationId: databaseId
        }
      }
    }
  }
}
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UPDATE_CART);


/***/ }),

/***/ 9114:
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ 6517:
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 3018:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 4809:
/***/ ((module) => {

module.exports = require("node-fetch");

/***/ }),

/***/ 808:
/***/ ((module) => {

module.exports = require("nprogress");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,61,498,181], () => (__webpack_exec__(7521)));
module.exports = __webpack_exports__;

})();