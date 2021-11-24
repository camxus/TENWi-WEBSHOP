"use strict";
exports.id = 846;
exports.ids = [846];
exports.modules = {

/***/ 4747:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6555);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6589);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7392);
/* harmony import */ var _queries_get_cart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2321);
/* harmony import */ var _mutations_add_to_cart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3340);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_functions__WEBPACK_IMPORTED_MODULE_7__, uuid__WEBPACK_IMPORTED_MODULE_4__]);
([_functions__WEBPACK_IMPORTED_MODULE_7__, uuid__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);










const AddToCart = (props)=>{
    const { product  } = props;
    const productQryInput = {
        clientMutationId: (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)(),
        productId: product.productId
    };
    const { 0: cart , 1: setCart  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_AppContext__WEBPACK_IMPORTED_MODULE_6__/* .AppContext */ .I);
    const { 0: showViewCart , 1: setShowViewCart  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: requestError , 1: setRequestError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    // Get Cart Data.
    const { data , refetch  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(_queries_get_cart__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        notifyOnNetworkStatusChange: true,
        onCompleted: ()=>{
            // Update cart in the localStorage.
            const updatedCart = (0,_functions__WEBPACK_IMPORTED_MODULE_7__/* .getFormattedCart */ .W3)(data);
            localStorage.setItem('tenwi-cart', JSON.stringify(updatedCart));
            // Update cart data in React Context.
            setCart(updatedCart);
        }
    });
    // Add to Cart Mutation.
    const [addToCart, { data: addToCartRes , loading: addToCartLoading , error: addToCartError  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useMutation)(_mutations_add_to_cart__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        variables: {
            input: productQryInput
        },
        onCompleted: ()=>{
            // On Success:
            // 1. Make the GET_CART query to update the cart with new values in React context.
            refetch();
            // 2. Show View Cart Button
            setShowViewCart(true);
        },
        onError: (error)=>{
            if (error) {
                var ref, ref1;
                setRequestError((error === null || error === void 0 ? void 0 : (ref = error.graphQLErrors) === null || ref === void 0 ? void 0 : (ref1 = ref[0]) === null || ref1 === void 0 ? void 0 : ref1.message) ?? '');
            }
        }
    });
    const handleAddToCartClick = async ()=>{
        console.log("run");
        setRequestError(null);
        await addToCart();
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            "ExternalProduct" === product.__typename ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: (product === null || product === void 0 ? void 0 : product.externalUrl) ?? '/',
                target: "_blank",
                className: "px-3 py-1 rounded-sm mr-3 text-sm border-solid border border-current inline-block hover:bg-purple-600 hover:text-white hover:border-purple-600",
                children: "BUY NOW"
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                disabled: addToCartLoading,
                onClick: handleAddToCartClick,
                className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('px-3 py-1 rounded-sm mr-3 text-sm border-solid border border-current', {
                    'hover:bg-purple-600 hover:text-white hover:border-purple-600': !addToCartLoading
                }, {
                    'opacity-50 cursor-not-allowed': addToCartLoading
                }),
                children: addToCartLoading ? 'ADDING TO CART...' : 'ADD TO CART'
            }),
            showViewCart ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                href: "/cart",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: "px-3 py-1 rounded-sm text-sm border-solid border border-current inline-block",
                    children: "VIEW CART"
                })
            }) : ''
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddToCart);

});

/***/ }),

/***/ 940:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);


const Price = ({ regularPrice: regularPrice1 = 0 , salesPrice: salesPrice1  })=>{
    if (isEmpty(salesPrice1)) {
        return null;
    }
    /**
     * Get discount percent.
     *
     * @param {String} regularPrice
     * @param {String} salesPrice
     */ const discountPercent1 = (regularPrice, salesPrice)=>{
        if (isEmpty(regularPrice) || isEmpty(salesPrice)) {
            return null;
        }
        const formattedRegularPrice = parseInt(regularPrice === null || regularPrice === void 0 ? void 0 : regularPrice.substring(1));
        const formattedSalesPrice = parseInt(salesPrice === null || salesPrice === void 0 ? void 0 : salesPrice.substring(1));
        const discountPercent = (formattedRegularPrice - formattedSalesPrice) / formattedRegularPrice * 100;
        return {
            discountPercent: formattedSalesPrice !== formattedRegularPrice ? `(${discountPercent.toFixed(2)}%) OFF` : null,
            strikeThroughClass: formattedSalesPrice < formattedRegularPrice ? 'product-regular-price mr-2 line-through text-sm text-gray-600 font-normal' : ''
        };
    };
    const productMeta = discountPercent1(regularPrice1, salesPrice1);
    return(/*#__PURE__*/ _jsxs("h6", {
        className: "product-price text-gray-800 font-semibold mr-3 mb-5",
        children: [
            (productMeta === null || productMeta === void 0 ? void 0 : productMeta.discountPercent) ? /*#__PURE__*/ _jsx("span", {
                className: "product-price mr-2",
                children: salesPrice1
            }) : null,
            /*#__PURE__*/ _jsx("span", {
                className: productMeta === null || productMeta === void 0 ? void 0 : productMeta.strikeThroughClass,
                children: regularPrice1
            }),
            /*#__PURE__*/ _jsx("span", {
                className: "product-discount text-green-600 font-bold text-sm font-normal",
                children: productMeta === null || productMeta === void 0 ? void 0 : productMeta.discountPercent
            })
        ]
    }));
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Price)));


/***/ }),

/***/ 3340:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const ADD_TO_CART = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
    mutation ADD_TO_CART($input: AddToCartInput!) {
      addToCart(input: $input) {
        cartItem {
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
      }
    }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ADD_TO_CART);


/***/ })

};
;