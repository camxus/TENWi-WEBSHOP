"use strict";
(() => {
var exports = {};
exports.id = 222;
exports.ids = [222];
exports.modules = {

/***/ 8283:
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
/* harmony import */ var _src_components_checkout_CheckoutForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(134);
/* harmony import */ var _src_queries_get_countries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5370);
/* harmony import */ var _src_components_ApolloClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9747);
/* harmony import */ var _src_queries_product_and_categories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6462);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_components_checkout_CheckoutForm__WEBPACK_IMPORTED_MODULE_2__]);
_src_components_checkout_CheckoutForm__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];






const Checkout = ({ data , categories , tags  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        categories: categories,
        tags: tags,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "checkout container mx-auto my-32 px-4 xl:px-0",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "mb-5 text-2xl uppercase",
                    children: "Checkout Page"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_checkout_CheckoutForm__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    countriesData: (data === null || data === void 0 ? void 0 : data.wooCountries) ?? {
                    }
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Checkout);
async function getStaticProps() {
    const { data  } = await _src_components_ApolloClient__WEBPACK_IMPORTED_MODULE_4__/* ["default"].query */ .ZP.query({
        query: _src_queries_get_countries__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z
    });
    var categories = await _src_components_ApolloClient__WEBPACK_IMPORTED_MODULE_4__/* ["default"].query */ .ZP.query({
        query: _src_queries_product_and_categories__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z
    });
    var tags = categories.data.productTags.nodes;
    categories = categories.data.productCategories.nodes;
    return {
        props: {
            data: data || {
            },
            categories: categories ? categories : [],
            tags: tags ? tags : []
        },
        revalidate: 1
    };
}

});

/***/ }),

/***/ 9358:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ checkout_Address)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: ./src/components/checkout/Error.js
var Error = __webpack_require__(3282);
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(6517);
;// CONCATENATED MODULE: ./src/components/checkout/form-elements/Abbr.js


const Abbr = ({ required  })=>{
    if (!required) {
        return null;
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx("abbr", {
        className: "text-red-500",
        style: {
            textDecoration: 'none'
        },
        title: "required",
        children: "*"
    }));
};
Abbr.propTypes = {
    required: (external_prop_types_default()).bool
};
Abbr.defaultProps = {
    required: false
};
/* harmony default export */ const form_elements_Abbr = (Abbr);

// EXTERNAL MODULE: ./src/components/icons/ArrowDown.js
var ArrowDown = __webpack_require__(3447);
;// CONCATENATED MODULE: ./src/components/checkout/CountrySelection.js





const CountrySelection = ({ input , handleOnChange , countries , isShipping  })=>{
    const { country: country1 , errors  } = input || {
    };
    const inputId = `country-${isShipping ? 'shipping' : 'billing'}`;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "mb-3",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                className: "leading-7 text-sm text-gray-700",
                htmlFor: inputId,
                children: [
                    "Country",
                    /*#__PURE__*/ jsx_runtime_.jsx(form_elements_Abbr, {
                        required: true
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative w-full border-none",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                        onChange: handleOnChange,
                        value: country1,
                        name: "country",
                        className: "bg-gray-100 bg-opacity-50 border border-gray-500 text-gray-500 appearance-none inline-block py-3 pl-3 pr-8 rounded leading-tight w-full",
                        id: inputId,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "",
                                children: "Select a country..."
                            }),
                            !(0,external_lodash_.isEmpty)(countries) && (0,external_lodash_.map)(countries, (country)=>{
                                return(/*#__PURE__*/ jsx_runtime_.jsx("option", {
                                    "data-countrycode": country === null || country === void 0 ? void 0 : country.countryCode,
                                    value: country === null || country === void 0 ? void 0 : country.countryCode,
                                    children: country === null || country === void 0 ? void 0 : country.countryName
                                }, country === null || country === void 0 ? void 0 : country.countryCode));
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "absolute right-0 mr-1 text-gray-500",
                        style: {
                            top: '25%'
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ArrowDown/* default */.Z, {
                            width: 24,
                            height: 24,
                            className: "fill-current"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Error/* default */.Z, {
                errors: errors,
                fieldName: 'country'
            })
        ]
    }));
};
/* harmony default export */ const checkout_CountrySelection = (CountrySelection);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./src/components/checkout/StatesSelection.js






const StateSelection = ({ handleOnChange , input , states , isFetchingStates , isShipping  })=>{
    const { state: state1 , errors  } = input || {
    };
    const inputId = `state-${isShipping ? 'shipping' : 'billing'}`;
    if (isFetchingStates) {
        // Show loading component.
        return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "mb-3",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                    className: "leading-7 text-sm text-gray-700",
                    children: [
                        "State/County",
                        /*#__PURE__*/ jsx_runtime_.jsx(form_elements_Abbr, {
                            required: true
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "relative w-full border-none",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("select", {
                        disabled: true,
                        value: "",
                        name: "state",
                        className: "opacity-50 bg-gray-100 bg-opacity-50 border border-gray-500 text-gray-500 appearance-none inline-block py-3 pl-3 pr-8 rounded leading-tight w-full",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("option", {
                            value: "",
                            children: "Loading..."
                        })
                    })
                })
            ]
        }));
    }
    if (!states.length) {
        return null;
    }
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "mb-3",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                className: "leading-7 text-sm text-gray-600",
                htmlFor: inputId,
                children: [
                    "State/County",
                    /*#__PURE__*/ jsx_runtime_.jsx(form_elements_Abbr, {
                        required: true
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "relative w-full border-none",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                    disabled: isFetchingStates,
                    onChange: handleOnChange,
                    value: state1,
                    name: "state",
                    className: external_classnames_default()('bg-gray-100 bg-opacity-50 border border-gray-400 text-gray-500 appearance-none inline-block py-3 pl-3 pr-8 rounded leading-tight w-full', {
                        'opacity-50': isFetchingStates
                    }),
                    id: inputId,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("option", {
                            value: "",
                            children: "Select a state..."
                        }),
                        states.map((state, index)=>{
                            return(/*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: (state === null || state === void 0 ? void 0 : state.stateName) ?? '',
                                children: state === null || state === void 0 ? void 0 : state.stateName
                            }, (state === null || state === void 0 ? void 0 : state.stateCode) ?? index));
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Error/* default */.Z, {
                errors: errors,
                fieldName: 'state'
            })
        ]
    }));
};
StateSelection.propTypes = {
    handleOnChange: (external_prop_types_default()).func,
    input: (external_prop_types_default()).object,
    states: (external_prop_types_default()).array,
    isFetchingStates: (external_prop_types_default()).bool,
    isShipping: (external_prop_types_default()).bool
};
StateSelection.defaultProps = {
    handleOnChange: ()=>null
    ,
    input: {
    },
    states: [],
    isFetchingStates: false,
    isShipping: true
};
/* harmony default export */ const StatesSelection = (/*#__PURE__*/(0,external_react_.memo)(StateSelection));

;// CONCATENATED MODULE: ./src/components/checkout/form-elements/InputField.js




const InputField = ({ handleOnChange , inputValue , name , type , label , errors , placeholder , required , containerClassNames , isShipping  })=>{
    const inputId = `${name}-${isShipping ? 'shipping' : ''}`;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: containerClassNames,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                className: "leading-7 text-sm text-gray-700",
                htmlFor: inputId,
                children: [
                    label || '',
                    /*#__PURE__*/ jsx_runtime_.jsx(form_elements_Abbr, {
                        required: required
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                onChange: handleOnChange,
                value: inputValue,
                placeholder: placeholder,
                type: type,
                name: name,
                className: "w-full bg-gray-100 bg-opacity-50 rounded border border-gray-500 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",
                id: inputId
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Error/* default */.Z, {
                errors: errors,
                fieldName: name
            })
        ]
    }));
};
InputField.propTypes = {
    handleOnChange: (external_prop_types_default()).func,
    inputValue: (external_prop_types_default()).string,
    name: (external_prop_types_default()).string,
    type: (external_prop_types_default()).string,
    label: (external_prop_types_default()).string,
    placeholder: (external_prop_types_default()).string,
    errors: (external_prop_types_default()).object,
    required: (external_prop_types_default()).bool,
    containerClassNames: (external_prop_types_default()).string
};
InputField.defaultProps = {
    handleOnChange: ()=>null
    ,
    inputValue: '',
    name: '',
    type: 'text',
    label: '',
    placeholder: '',
    errors: {
    },
    required: false,
    containerClassNames: ''
};
/* harmony default export */ const form_elements_InputField = (InputField);

;// CONCATENATED MODULE: ./src/components/checkout/Address.js





const Address = ({ input , countries , states , handleOnChange , isFetchingStates , isShipping  })=>{
    const { errors  } = input || {
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-wrap overflow-hidden sm:-mx-3",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(form_elements_InputField, {
                        name: "firstName",
                        inputValue: input === null || input === void 0 ? void 0 : input.firstName,
                        required: true,
                        handleOnChange: handleOnChange,
                        label: "First name",
                        errors: errors,
                        isShipping: isShipping,
                        containerClassNames: "w-full overflow-hidden sm:my-2 sm:px-2 md:w-1/2"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(form_elements_InputField, {
                        name: "lastName",
                        inputValue: input === null || input === void 0 ? void 0 : input.lastName,
                        required: true,
                        handleOnChange: handleOnChange,
                        label: "Last name",
                        errors: errors,
                        isShipping: isShipping,
                        containerClassNames: "w-full overflow-hidden sm:my-2 sm:px-2 md:w-1/2"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(form_elements_InputField, {
                name: "company",
                inputValue: input === null || input === void 0 ? void 0 : input.company,
                handleOnChange: handleOnChange,
                label: "Company Name (Optional)",
                errors: errors,
                isShipping: isShipping,
                containerClassNames: "mb-4"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(checkout_CountrySelection, {
                input: input,
                handleOnChange: handleOnChange,
                countries: countries,
                isShipping: isShipping
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(form_elements_InputField, {
                name: "address1",
                inputValue: input === null || input === void 0 ? void 0 : input.address1,
                required: true,
                handleOnChange: handleOnChange,
                label: "Street address",
                placeholder: "House number and street name",
                errors: errors,
                isShipping: isShipping,
                containerClassNames: "mb-4"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(form_elements_InputField, {
                name: "address2",
                inputValue: input === null || input === void 0 ? void 0 : input.address2,
                handleOnChange: handleOnChange,
                label: "Street address line two",
                placeholder: "Apartment floor unit building floor etc(optional)",
                errors: errors,
                isShipping: isShipping,
                containerClassNames: "mb-4"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(form_elements_InputField, {
                name: "city",
                required: true,
                inputValue: input === null || input === void 0 ? void 0 : input.city,
                handleOnChange: handleOnChange,
                label: "Town/City",
                errors: errors,
                isShipping: isShipping,
                containerClassNames: "mb-4"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(StatesSelection, {
                input: input,
                handleOnChange: handleOnChange,
                states: states,
                isShipping: isShipping,
                isFetchingStates: isFetchingStates
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-wrap overflow-hidden sm:-mx-3",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(form_elements_InputField, {
                        name: "postcode",
                        inputValue: input === null || input === void 0 ? void 0 : input.postcode,
                        required: true,
                        handleOnChange: handleOnChange,
                        label: "Post code",
                        errors: errors,
                        isShipping: isShipping,
                        containerClassNames: "w-full overflow-hidden sm:my-2 sm:px-2 md:w-1/2"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(form_elements_InputField, {
                        name: "phone",
                        inputValue: input === null || input === void 0 ? void 0 : input.phone,
                        required: true,
                        handleOnChange: handleOnChange,
                        label: "Phone",
                        errors: errors,
                        isShipping: isShipping,
                        containerClassNames: "w-full overflow-hidden sm:my-2 sm:px-2 md:w-1/2"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(form_elements_InputField, {
                name: "email",
                type: "email",
                inputValue: input === null || input === void 0 ? void 0 : input.email,
                required: true,
                handleOnChange: handleOnChange,
                label: "Email",
                errors: errors,
                isShipping: isShipping,
                containerClassNames: "mb-4"
            })
        ]
    }));
};
Address.propTypes = {
    input: (external_prop_types_default()).object,
    countries: (external_prop_types_default()).array,
    handleOnChange: (external_prop_types_default()).func,
    isFetchingStates: (external_prop_types_default()).bool,
    isShipping: (external_prop_types_default()).bool
};
Address.defaultProps = {
    input: {
    },
    countries: [],
    handleOnChange: ()=>null
    ,
    isFetchingStates: false,
    isShipping: false
};
/* harmony default export */ const checkout_Address = (Address);


/***/ }),

/***/ 134:
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
/* harmony import */ var _YourOrder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5225);
/* harmony import */ var _PaymentModes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6258);
/* harmony import */ var _context_AppContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6589);
/* harmony import */ var _validator_checkout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5403);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7392);
/* harmony import */ var _OrderSuccess__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6669);
/* harmony import */ var _queries_get_cart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2321);
/* harmony import */ var _mutations_checkout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(159);
/* harmony import */ var _Address__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9358);
/* harmony import */ var _utils_checkout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6837);
/* harmony import */ var _form_elements_CheckboxField__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(971);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_functions__WEBPACK_IMPORTED_MODULE_7__]);
_functions__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];














// Use this for testing purposes, so you dont have to fill the checkout form over an over again.
// const defaultCustomerInfo = {
// 	firstName: 'Imran',
// 	lastName: 'Sayed',
// 	address1: '123 Abc farm',
// 	address2: 'Hill Road',
// 	city: 'Mumbai',
// 	country: 'IN',
// 	state: 'Maharastra',
// 	postcode: '221029',
// 	email: 'codeytek.academy@gmail.com',
// 	phone: '9883778278',
// 	company: 'The Company',
// 	errors: null
// }
const defaultCustomerInfo = {
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    city: '',
    country: '',
    state: '',
    postcode: '',
    email: '',
    phone: '',
    company: '',
    errors: null
};
const CheckoutForm = ({ countriesData  })=>{
    const { billingCountries , shippingCountries  } = countriesData || {
    };
    const initialState = {
        billing: {
            ...defaultCustomerInfo
        },
        shipping: {
            ...defaultCustomerInfo
        },
        createAccount: false,
        orderNotes: '',
        billingDifferentThanShipping: false,
        paymentMethod: 'cod'
    };
    const { 0: cart , 1: setCart  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_AppContext__WEBPACK_IMPORTED_MODULE_5__/* .AppContext */ .I);
    const { 0: input , 1: setInput  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialState);
    const { 0: orderData , 1: setOrderData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: requestError , 1: setRequestError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: theShippingStates , 1: setTheShippingStates  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: isFetchingShippingStates , 1: setIsFetchingShippingStates  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: theBillingStates , 1: setTheBillingStates  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const { 0: isFetchingBillingStates , 1: setIsFetchingBillingStates  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // Get Cart Data.
    const { data  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useQuery)(_queries_get_cart__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        notifyOnNetworkStatusChange: true,
        onCompleted: ()=>{
            // Update cart in the localStorage.
            const updatedCart = (0,_functions__WEBPACK_IMPORTED_MODULE_7__/* .getFormattedCart */ .W3)(data);
            localStorage.setItem('tenwi-cart', JSON.stringify(updatedCart));
            // Update cart data in React Context.
            setCart(updatedCart);
        }
    });
    // Create New order: Checkout Mutation.
    const [checkout, { data: checkoutResponse , loading: checkoutLoading ,  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useMutation)(_mutations_checkout__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        variables: {
            input: orderData
        },
        onError: (error)=>{
            if (error) {
                var ref, ref1;
                setRequestError((error === null || error === void 0 ? void 0 : (ref = error.graphQLErrors) === null || ref === void 0 ? void 0 : (ref1 = ref[0]) === null || ref1 === void 0 ? void 0 : ref1.message) ?? '');
            }
        }
    });
    /*
     * Handle form submit.
     *
     * @param {Object} event Event Object.
     *
     * @return {void}
     */ const handleFormSubmit = (event)=>{
        event.preventDefault();
        /**
         * Validate Billing and Shipping Details
         *
         * Note:
         * 1. If billing is different than shipping address, only then validate billing.
         * 2. We are passing theBillingStates?.length and theShippingStates?.length, so that
         * the respective states should only be mandatory, if a country has states.
         */ const billingValidationResult = (input === null || input === void 0 ? void 0 : input.billingDifferentThanShipping) ? (0,_validator_checkout__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(input === null || input === void 0 ? void 0 : input.billing, theBillingStates === null || theBillingStates === void 0 ? void 0 : theBillingStates.length) : {
            errors: null,
            isValid: true
        };
        const shippingValidationResult = (0,_validator_checkout__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(input === null || input === void 0 ? void 0 : input.shipping, theShippingStates === null || theShippingStates === void 0 ? void 0 : theShippingStates.length);
        if (!shippingValidationResult.isValid || !billingValidationResult.isValid) {
            setInput({
                ...input,
                billing: {
                    ...input.billing,
                    errors: billingValidationResult.errors
                },
                shipping: {
                    ...input.shipping,
                    errors: shippingValidationResult.errors
                }
            });
            return;
        }
        const checkOutData = (0,_functions__WEBPACK_IMPORTED_MODULE_7__/* .createCheckoutData */ .Wj)(input);
        setRequestError(null);
        /**
         *  When order data is set, checkout mutation will automatically be called,
         *  because 'orderData' is added in useEffect as a dependency.
         */ setOrderData(checkOutData);
    };
    /*
     * Handle onchange input.
     *
     * @param {Object} event Event Object.
     * @param {bool} isShipping If this is false it means it is billing.
     * @param {bool} isBillingOrShipping If this is false means its standard input and not billing or shipping.
     *
     * @return {void}
     */ const handleOnChange = async (event, isShipping = false, isBillingOrShipping = false)=>{
        const { target  } = event || {
        };
        if ('createAccount' === target.name) {
            (0,_utils_checkout__WEBPACK_IMPORTED_MODULE_12__/* .handleCreateAccount */ .Q_)(input, setInput, target);
        } else if ('billingDifferentThanShipping' === target.name) {
            (0,_utils_checkout__WEBPACK_IMPORTED_MODULE_12__/* .handleBillingDifferentThanShipping */ .tp)(input, setInput, target);
        } else if (isBillingOrShipping) {
            if (isShipping) {
                await handleShippingChange(target);
            } else {
                await handleBillingChange(target);
            }
        } else {
            const newState = {
                ...input,
                [target.name]: target.value
            };
            setInput(newState);
        }
    };
    const handleShippingChange = async (target)=>{
        const newState = {
            ...input,
            shipping: {
                ...input === null || input === void 0 ? void 0 : input.shipping,
                [target.name]: target.value
            }
        };
        setInput(newState);
        await (0,_utils_checkout__WEBPACK_IMPORTED_MODULE_12__/* .setStatesForCountry */ .mI)(target, setTheShippingStates, setIsFetchingShippingStates);
    };
    const handleBillingChange = async (target)=>{
        const newState = {
            ...input,
            billing: {
                ...input === null || input === void 0 ? void 0 : input.billing,
                [target.name]: target.value
            }
        };
        setInput(newState);
        await (0,_utils_checkout__WEBPACK_IMPORTED_MODULE_12__/* .setStatesForCountry */ .mI)(target, setTheBillingStates, setIsFetchingBillingStates);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(async ()=>{
        if (null !== orderData) {
            // Call the checkout mutation when the value for orderData changes/updates.
            await checkout();
        }
    }, [
        orderData
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            cart ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                onSubmit: handleFormSubmit,
                className: "checkout-form",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-20",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "billing-details",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "text-xl font-medium mb-4",
                                            children: "Shipping Details"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Address__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                            states: theShippingStates,
                                            countries: shippingCountries,
                                            input: input === null || input === void 0 ? void 0 : input.shipping,
                                            handleOnChange: (event)=>handleOnChange(event, true, true)
                                            ,
                                            isFetchingStates: isFetchingShippingStates,
                                            isShipping: true,
                                            isBillingOrShipping: true
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_form_elements_CheckboxField__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                        name: "billingDifferentThanShipping",
                                        type: "checkbox",
                                        checked: input === null || input === void 0 ? void 0 : input.billingDifferentThanShipping,
                                        handleOnChange: handleOnChange,
                                        label: "Billing different than shipping",
                                        containerClassNames: "mb-4 pt-4"
                                    })
                                }),
                                (input === null || input === void 0 ? void 0 : input.billingDifferentThanShipping) ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "billing-details",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "text-xl font-medium mb-4",
                                            children: "Billing Details"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Address__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                            states: theBillingStates,
                                            countries: billingCountries,
                                            input: input === null || input === void 0 ? void 0 : input.billing,
                                            handleOnChange: (event)=>handleOnChange(event, false, true)
                                            ,
                                            isFetchingStates: isFetchingBillingStates,
                                            isShipping: false,
                                            isBillingOrShipping: true
                                        })
                                    ]
                                }) : null
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "your-orders",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "text-xl font-medium mb-4",
                                    children: "Your Order"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_YourOrder__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    cart: cart
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PaymentModes__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    input: input,
                                    handleOnChange: handleOnChange
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "place-order-btn-wrap mt-5",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "bg-purple-600 text-white px-5 py-3 rounded-sm w-auto xl:w-full",
                                        type: "submit",
                                        children: "Place Order"
                                    })
                                }),
                                checkoutLoading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "Processing Order..."
                                }),
                                requestError && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    children: [
                                        "Error : ",
                                        requestError,
                                        " :( Please try again"
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }) : '',
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_OrderSuccess__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                response: checkoutResponse
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckoutForm);

});

/***/ }),

/***/ 3282:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Error = ({ errors , fieldName  })=>{
    return errors && errors.hasOwnProperty(fieldName) ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "invalid-feedback d-block text-red-500",
        children: errors[fieldName]
    }) : '';
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Error);


/***/ }),

/***/ 6669:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const OrderSuccess = (props)=>{
    const { response  } = props;
    if (!response) {
        return null;
    }
    const responseData = response.checkout;
    window.location.href = responseData.redirect;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container",
        children: 'success' === responseData.result ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                    children: [
                        "Order no: ",
                        responseData.order.orderNumber,
                        " "
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    children: [
                        "Status : ",
                        responseData.order.status
                    ]
                })
            ]
        }) : ''
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderSuccess);


/***/ }),

/***/ 6258:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3282);


const PaymentModes = ({ input , handleOnChange  })=>{
    const { errors , paymentMethod  } = input || {
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mt-3",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Error__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                errors: errors,
                fieldName: 'paymentMethod'
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "form-check payment-input-container mt-2",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                    className: "form-check-label",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            onChange: handleOnChange,
                            value: "bacs",
                            className: "form-check-input mr-3",
                            name: "paymentMethod",
                            type: "radio",
                            checked: 'bacs' === paymentMethod
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "payment-content",
                            children: "Direct Bank Transfer"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "form-check payment-input-container mt-2",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                    className: "form-check-label",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            onChange: handleOnChange,
                            value: "paypal",
                            className: "form-check-input mr-3",
                            name: "paymentMethod",
                            type: "radio",
                            checked: 'paypal' === paymentMethod
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "payment-content",
                            children: "Pay with Paypal"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "form-check payment-input-container mt-2",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                    className: "form-check-label",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            onChange: handleOnChange,
                            value: "cheque",
                            className: "form-check-input mr-3",
                            name: "paymentMethod",
                            type: "radio",
                            checked: 'cheque' === paymentMethod
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "payment-content",
                            children: "Check Payments"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "form-check payment-input-container mt-2",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                    className: "form-check-label",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            onChange: handleOnChange,
                            value: "cod",
                            className: "form-check-input mr-3",
                            name: "paymentMethod",
                            type: "radio",
                            checked: 'cod' === paymentMethod
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "payment-content",
                            children: "Cash on Delivery"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "form-check payment-input-container mt-2",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                    className: "form-check-label",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            onChange: handleOnChange,
                            value: "jccpaymentgatewayredirect",
                            className: "form-check-input mr-3",
                            name: "paymentMethod",
                            type: "radio",
                            checked: 'jccpaymentgatewayredirect' === paymentMethod
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "payment-content",
                            children: "JCC"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "form-check payment-input-container mt-2",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                    className: "form-check-label",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            onChange: handleOnChange,
                            value: "ccavenue",
                            className: "form-check-input mr-3",
                            name: "paymentMethod",
                            type: "radio",
                            checked: 'ccavenue' === paymentMethod
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "payment-content",
                            children: "CC Avenue"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "checkout-payment-instructions mt-2",
                children: "Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode."
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaymentModes);


/***/ }),

/***/ 5225:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ checkout_YourOrder)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/checkout/CheckoutCartItem.js

const CheckoutCartItem = ({ item  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
        className: "cart-item",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                className: "cart-element",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    width: "64",
                    src: item.image.sourceUrl,
                    srcSet: item.image.srcSet,
                    alt: item.image.title
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                className: "cart-element",
                children: item.name
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("td", {
                className: "cart-element",
                children: item.totalPrice
            })
        ]
    }, item.productId));
};
/* harmony default export */ const checkout_CheckoutCartItem = (CheckoutCartItem);

;// CONCATENATED MODULE: ./src/components/checkout/YourOrder.js



const YourOrder = ({ cart  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: cart ? /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                className: "checkout-cart table table-hover w-full mb-10",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                            className: "cart-head-container text-left",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                    className: "cart-heading-el",
                                    scope: "col"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                    className: "cart-heading-el",
                                    scope: "col",
                                    children: "Product"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("th", {
                                    className: "cart-heading-el",
                                    scope: "col",
                                    children: "Total"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tbody", {
                        children: [
                            cart.products.length && cart.products.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(checkout_CheckoutCartItem, {
                                    item: item
                                }, item.productId)
                            ),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("tr", {
                                className: "bg-gray-200",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                        className: ""
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                        className: "checkout-total font-normal text-xl",
                                        children: "Subtotal"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("td", {
                                        className: "checkout-total font-bold text-xl",
                                        children: cart.totalProductsPrice
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        }) : ''
    }));
};
/* harmony default export */ const checkout_YourOrder = (YourOrder);


/***/ }),

/***/ 971:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


const CheckboxField = ({ handleOnChange , checked , name , label , placeholder , containerClassNames  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: containerClassNames,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
            className: "leading-7 text-md text-gray-700 flex items-center cursor-pointer",
            htmlFor: name,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    onChange: handleOnChange,
                    placeholder: placeholder,
                    type: "checkbox",
                    checked: checked,
                    name: name,
                    id: name
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "ml-2",
                    children: label || ''
                })
            ]
        })
    }));
};
CheckboxField.propTypes = {
    handleOnChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
    checked: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
    name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    type: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    containerClassNames: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
CheckboxField.defaultProps = {
    handleOnChange: ()=>null
    ,
    checked: false,
    name: '',
    label: '',
    placeholder: '',
    errors: {
    },
    containerClassNames: ''
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckboxField);


/***/ }),

/***/ 159:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const CHECKOUT_MUTATION = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
mutation CHECKOUT_MUTATION( $input: CheckoutInput! ) {
  checkout(input: $input) {
    clientMutationId
    order {
      id
      orderKey
      orderNumber
      status
      refunds {
        nodes {
          amount
        }
      }
    }
    result
    redirect
  }
}
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CHECKOUT_MUTATION);


/***/ }),

/***/ 5370:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

/**
 * GraphQL countries query.
 */ const GET_COUNTRIES = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`query GET_COUNTRIES{
  wooCountries {
    billingCountries {
      countryCode
      countryName
    }
    shippingCountries {
      countryCode
      countryName
    }
  }
}`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GET_COUNTRIES);


/***/ }),

/***/ 6837:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "tp": () => (/* binding */ handleBillingDifferentThanShipping),
  "Q_": () => (/* binding */ handleCreateAccount),
  "mI": () => (/* binding */ setStatesForCountry)
});

// UNUSED EXPORTS: getStates

// EXTERNAL MODULE: ./src/components/ApolloClient.js
var ApolloClient = __webpack_require__(9747);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
;// CONCATENATED MODULE: ./src/queries/get-states.js

/**
 * GraphQL countries query.
 */ const GET_STATES = client_.gql`query GET_STATES($countryCode: String!) {
  wooStates(countryCode: $countryCode) {
    states {
      stateCode
      stateName
    }
  }
}`;
/* harmony default export */ const get_states = (GET_STATES);

;// CONCATENATED MODULE: ./src/utils/checkout.js


/**
 * Get states
 *
 * @param {String} countryCode Country code
 *
 * @returns {Promise<void>}
 */ const getStates = async (countryCode)=>{
    var ref;
    const { data  } = await ApolloClient/* default.query */.ZP.query({
        query: get_states,
        variables: {
            countryCode: countryCode || ''
        }
    });
    return (data === null || data === void 0 ? void 0 : (ref = data.wooStates) === null || ref === void 0 ? void 0 : ref.states) ?? [];
};
/**
 * Set states for the country.
 *
 * @param {Object} target Target.
 * @param {Function} setTheStates React useState function to set the value of the states basis country selection.
 * @param {Function} setIsFetchingStates React useState function, to manage loading state when request is in process.
 *
 * @return {Promise<void>}
 */ const setStatesForCountry = async (target, setTheStates, setIsFetchingStates)=>{
    if ('country' === target.name) {
        setIsFetchingStates(true);
        const countryCode = target[target.selectedIndex].getAttribute('data-countrycode');
        const states = await getStates(countryCode);
        setTheStates(states || []);
        setIsFetchingStates(false);
    }
};
const handleBillingDifferentThanShipping = (input, setInput, target)=>{
    const newState = {
        ...input,
        [target.name]: !input.billingDifferentThanShipping
    };
    setInput(newState);
};
const handleCreateAccount = (input, setInput, target)=>{
    const newState = {
        ...input,
        [target.name]: !input.createAccount
    };
    setInput(newState);
};


/***/ }),

/***/ 5403:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ checkout)
});

;// CONCATENATED MODULE: external "validator"
const external_validator_namespaceObject = require("validator");
var external_validator_default = /*#__PURE__*/__webpack_require__.n(external_validator_namespaceObject);
;// CONCATENATED MODULE: ./src/validator/isEmpty.js
/**
 * Returns true if the value is undefined/null/empty object/empty string.
 *
 * @param value
 * @return {boolean}
 */ const isEmpty = (value)=>value === undefined || value === null || typeof value === 'object' && Object.keys(value).length === 0 || typeof value === 'string' && value.trim().length === 0
;
/* harmony default export */ const validator_isEmpty = (isEmpty);

;// CONCATENATED MODULE: ./src/validator/checkout.js


const validateAndSanitizeCheckoutForm = (data, hasStates = true)=>{
    let errors = {
    };
    let sanitizedData = {
    };
    /**
	 * Set the firstName value equal to an empty string if user has not entered the firstName, otherwise the Validator.isEmpty() wont work down below.
	 * Note that the isEmpty() here is our custom function defined in is-empty.js and
	 * Validator.isEmpty() down below comes from validator library.
	 * Similarly we do it for for the rest of the fields
	 */ data.firstName = !validator_isEmpty(data.firstName) ? data.firstName : '';
    data.lastName = !validator_isEmpty(data.lastName) ? data.lastName : '';
    data.company = !validator_isEmpty(data.company) ? data.company : '';
    data.country = !validator_isEmpty(data.country) ? data.country : '';
    data.address1 = !validator_isEmpty(data.address1) ? data.address1 : '';
    data.address2 = !validator_isEmpty(data.address2) ? data.address2 : '';
    data.city = !validator_isEmpty(data.city) ? data.city : '';
    data.state = !validator_isEmpty(data.state) ? data.state : '';
    data.postcode = !validator_isEmpty(data.postcode) ? data.postcode : '';
    data.phone = !validator_isEmpty(data.phone) ? data.phone : '';
    data.email = !validator_isEmpty(data.email) ? data.email : '';
    data.createAccount = !validator_isEmpty(data.createAccount) ? data.createAccount : '';
    data.orderNotes = !validator_isEmpty(data.orderNotes) ? data.orderNotes : '';
    // data.paymentMethod = ( ! isEmpty( data.paymentMethod ) ) ? data.paymentMethod : '';
    /**
	 * Checks for error if required is true
	 * and adds Error and Sanitized data to the errors and sanitizedData object
	 *
	 * @param {String} fieldName Field name e.g. First name, last name
	 * @param {String} errorContent Error Content to be used in showing error e.g. First Name, Last Name
	 * @param {Integer} min Minimum characters required
	 * @param {Integer} max Maximum characters required
	 * @param {String} type Type e.g. email, phone etc.
	 * @param {boolean} required Required if required is passed as false, it will not validate error and just do sanitization.
	 */ const addErrorAndSanitizedData = (fieldName, errorContent, min, max, type = '', required)=>{
        /**
		 * Please note that this isEmpty() belongs to validator and not our custom function defined above.
		 *
		 * Check for error and if there is no error then sanitize data.
		 */ if (!external_validator_default().isLength(data[fieldName], {
            min,
            max
        })) {
            errors[fieldName] = `${errorContent} must be ${min} to ${max} characters`;
        }
        if ('email' === type && !external_validator_default().isEmail(data[fieldName])) {
            errors[fieldName] = `${errorContent} is not valid`;
        }
        if ('phone' === type && !external_validator_default().isMobilePhone(data[fieldName])) {
            errors[fieldName] = `${errorContent} is not valid`;
        }
        if (required && external_validator_default().isEmpty(data[fieldName])) {
            errors[fieldName] = `${errorContent} is required`;
        }
        // If no errors
        if (!errors[fieldName]) {
            sanitizedData[fieldName] = external_validator_default().trim(data[fieldName]);
            sanitizedData[fieldName] = 'email' === type ? external_validator_default().normalizeEmail(sanitizedData[fieldName]) : sanitizedData[fieldName];
            sanitizedData[fieldName] = external_validator_default().escape(sanitizedData[fieldName]);
        }
    };
    addErrorAndSanitizedData('firstName', 'First name', 2, 35, 'string', true);
    addErrorAndSanitizedData('lastName', 'Last name', 2, 35, 'string', true);
    addErrorAndSanitizedData('company', 'Company Name', 0, 35, 'string', false);
    addErrorAndSanitizedData('country', 'Country name', 2, 55, 'string', true);
    addErrorAndSanitizedData('address1', 'Street address line 1', 3, 100, 'string', true);
    addErrorAndSanitizedData('address2', '', 0, 254, 'string', false);
    addErrorAndSanitizedData('city', 'City field', 3, 25, 'string', true);
    addErrorAndSanitizedData('state', 'State/County', 0, 254, 'string', hasStates);
    addErrorAndSanitizedData('postcode', 'Post code', 2, 10, 'postcode', true);
    addErrorAndSanitizedData('phone', 'Phone number', 10, 15, 'phone', true);
    addErrorAndSanitizedData('email', 'Email', 11, 254, 'email', true);
    // The data.createAccount is a boolean value.
    sanitizedData.createAccount = data.createAccount;
    addErrorAndSanitizedData('orderNotes', '', 0, 254, 'string', false);
    // @TODO Payment mode error to be handled later.
    // addErrorAndSanitizedData( 'paymentMethod', 'Payment mode field', 2, 50, 'string', false );
    return {
        sanitizedData,
        errors,
        isValid: validator_isEmpty(errors)
    };
};
/* harmony default export */ const checkout = (validateAndSanitizeCheckoutForm);


/***/ }),

/***/ 9114:
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

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

/***/ 580:
/***/ ((module) => {

module.exports = require("prop-types");

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
var __webpack_exports__ = __webpack_require__.X(0, [730,61,498,181], () => (__webpack_exec__(8283)));
module.exports = __webpack_exports__;

})();