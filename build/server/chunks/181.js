"use strict";
exports.id = 181;
exports.ids = [181];
exports.modules = {

/***/ 7392:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Qn": () => (/* binding */ getFloatVal),
/* harmony export */   "W3": () => (/* binding */ getFormattedCart),
/* harmony export */   "Wj": () => (/* binding */ createCheckoutData),
/* harmony export */   "zn": () => (/* binding */ getUpdatedItems)
/* harmony export */ });
/* unused harmony exports addFirstProduct, createNewProduct, updateCart, getUpdatedProducts, removeItemFromCart */
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6555);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_0__]);
uuid__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

/**
 * Extracts and returns float value from a string.
 *
 * @param {string} string String
 * @return {any}
 */ const getFloatVal = (string)=>{
    let floatValue = string.match(/[+-]?\d+(\.\d+)?/g)[0];
    return null !== floatValue ? parseFloat(parseFloat(floatValue).toFixed(2)) : '';
};
/**
 * Add first product.
 *
 * @param {Object} product Product
 * @return {{totalProductsCount: number, totalProductsPrice: any, products: Array}}
 */ const addFirstProduct = (product)=>{
    let productPrice = getFloatVal(product.price);
    let newCart = {
        products: [],
        totalProductsCount: 1,
        totalProductsPrice: productPrice
    };
    const newProduct = createNewProduct(product, productPrice, 1);
    newCart.products.push(newProduct);
    localStorage.setItem('tenwi-cart', JSON.stringify(newCart));
    return newCart;
};
/**
 * Create a new product object.
 *
 * @param {Object} product Product
 * @param {Integer} productPrice Product Price
 * @param {Integer} qty Quantity
 * @return {{image: *, productId: *, totalPrice: number, price: *, qty: *, name: *}}
 */ const createNewProduct = (product, productPrice, qty)=>{
    return {
        productId: product.productId,
        image: product.image,
        name: product.name,
        price: productPrice,
        qty,
        totalPrice: parseFloat((productPrice * qty).toFixed(2))
    };
};
/**
 * Updates the existing cart with new item.
 *
 * @param {Object} existingCart Existing Cart.
 * @param {Object} product Product.
 * @param {Integer} qtyToBeAdded Quantity.
 * @param {Integer} newQty New Qty to be updated.
 * @return {{totalProductsCount: *, totalProductsPrice: *, products: *}}
 */ const updateCart = (existingCart, product, qtyToBeAdded, newQty = false)=>{
    const updatedProducts = getUpdatedProducts(existingCart.products, product, qtyToBeAdded, newQty);
    const addPrice = (total, item)=>{
        total.totalPrice += item.totalPrice;
        total.qty += item.qty;
        return total;
    };
    // Loop through the updated product array and add the totalPrice of each item to get the totalPrice
    let total1 = updatedProducts.reduce(addPrice, {
        totalPrice: 0,
        qty: 0
    });
    const updatedCart = {
        products: updatedProducts,
        totalProductsCount: parseInt(total1.qty),
        totalProductsPrice: parseFloat(total1.totalPrice)
    };
    localStorage.setItem('tenwi-cart', JSON.stringify(updatedCart));
    return updatedCart;
};
/**
 * Get updated products array
 * Update the product if it exists else,
 * add the new product to existing cart,
 *
 * @param {Object} existingProductsInCart Existing product in cart
 * @param {Object} product Product
 * @param {Integer} qtyToBeAdded Quantity
 * @param {Integer} newQty New qty of the product (optional)
 * @return {*[]}
 */ const getUpdatedProducts = (existingProductsInCart, product, qtyToBeAdded, newQty = false)=>{
    // Check if the product already exits in the cart.
    const productExitsIndex = isProductInCart(existingProductsInCart, product.productId);
    // If product exits ( index of that product found in the array ), update the product quantity and totalPrice
    if (-1 < productExitsIndex) {
        let updatedProducts = existingProductsInCart;
        let updatedProduct = updatedProducts[productExitsIndex];
        // If have new qty of the product available, set that else add the qtyToBeAdded
        updatedProduct.qty = newQty ? parseInt(newQty) : parseInt(updatedProduct.qty + qtyToBeAdded);
        updatedProduct.totalPrice = parseFloat((updatedProduct.price * updatedProduct.qty).toFixed(2));
        return updatedProducts;
    } else {
        // If product not found push the new product to the existing product array.
        let productPrice = getFloatVal(product.price);
        const newProduct = createNewProduct(product, productPrice, qtyToBeAdded);
        existingProductsInCart.push(newProduct);
        return existingProductsInCart;
    }
};
/**
 * Returns index of the product if it exists.
 *
 * @param {Object} existingProductsInCart Existing Products.
 * @param {Integer} productId Product id.
 * @return {number | *} Index Returns -1 if product does not exist in the array, index number otherwise
 */ const isProductInCart = (existingProductsInCart, productId)=>{
    const returnItemThatExits = (item, index)=>{
        if (productId === item.productId) {
            return item;
        }
    };
    // This new array will only contain the product which is matched.
    const newArray = existingProductsInCart.filter(returnItemThatExits);
    return existingProductsInCart.indexOf(newArray[0]);
};
/**
 * Remove Item from the cart.
 *
 * @param {Integer} productId Product Id.
 * @return {any | string} Updated cart
 */ const removeItemFromCart = (productId)=>{
    let existingCart = localStorage.getItem('tenwi-cart');
    existingCart = JSON.parse(existingCart);
    // If there is only one item in the cart, delete the cart.
    if (1 === existingCart.products.length) {
        localStorage.removeItem('tenwi-cart');
        return null;
    }
    // Check if the product already exits in the cart.
    const productExitsIndex = isProductInCart(existingCart.products, productId);
    // If product to be removed exits
    if (-1 < productExitsIndex) {
        const productTobeRemoved = existingCart.products[productExitsIndex];
        const qtyToBeRemovedFromTotal = productTobeRemoved.qty;
        const priceToBeDeductedFromTotal = productTobeRemoved.totalPrice;
        // Remove that product from the array and update the total price and total quantity of the cart
        let updatedCart = existingCart;
        updatedCart.products.splice(productExitsIndex, 1);
        updatedCart.totalProductsCount = updatedCart.totalProductsCount - qtyToBeRemovedFromTotal;
        updatedCart.totalProductsPrice = updatedCart.totalProductsPrice - priceToBeDeductedFromTotal;
        localStorage.setItem('tenwi-cart', JSON.stringify(updatedCart));
        return updatedCart;
    } else {
        return existingCart;
    }
};
/**
 * Returns cart data in the required format.
 * @param {String} data Cart data
 */ const getFormattedCart = (data)=>{
    var ref;
    let formattedCart = null;
    if (undefined === data || !data.cart.contents.nodes.length) {
        return formattedCart;
    }
    const givenProducts = data.cart.contents.nodes;
    // Create an empty object.
    formattedCart = {
    };
    formattedCart.products = [];
    let totalProductsCount = 0;
    for(let i = 0; i < givenProducts.length; i++){
        var ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, ref10;
        const givenProduct = givenProducts === null || givenProducts === void 0 ? void 0 : (ref1 = givenProducts[i]) === null || ref1 === void 0 ? void 0 : (ref2 = ref1.product) === null || ref2 === void 0 ? void 0 : ref2.node;
        const product = {
        };
        const total = getFloatVal(givenProducts[i].total);
        product.productId = (givenProduct === null || givenProduct === void 0 ? void 0 : givenProduct.productId) ?? '';
        product.cartKey = (givenProducts === null || givenProducts === void 0 ? void 0 : (ref3 = givenProducts[i]) === null || ref3 === void 0 ? void 0 : ref3.key) ?? '';
        product.name = (givenProduct === null || givenProduct === void 0 ? void 0 : givenProduct.name) ?? '';
        product.qty = givenProducts === null || givenProducts === void 0 ? void 0 : (ref4 = givenProducts[i]) === null || ref4 === void 0 ? void 0 : ref4.quantity;
        product.price = total / (product === null || product === void 0 ? void 0 : product.qty);
        product.totalPrice = (givenProducts === null || givenProducts === void 0 ? void 0 : (ref5 = givenProducts[i]) === null || ref5 === void 0 ? void 0 : ref5.total) ?? '';
        product.image = {
            sourceUrl: (givenProduct === null || givenProduct === void 0 ? void 0 : (ref6 = givenProduct.image) === null || ref6 === void 0 ? void 0 : ref6.sourceUrl) ?? '',
            srcSet: (givenProduct === null || givenProduct === void 0 ? void 0 : (ref7 = givenProduct.image) === null || ref7 === void 0 ? void 0 : ref7.srcSet) ?? '',
            title: (givenProduct === null || givenProduct === void 0 ? void 0 : (ref8 = givenProduct.image) === null || ref8 === void 0 ? void 0 : ref8.title) ?? '',
            altText: (givenProduct === null || givenProduct === void 0 ? void 0 : (ref9 = givenProduct.image) === null || ref9 === void 0 ? void 0 : ref9.altText) ?? ''
        };
        totalProductsCount += givenProducts === null || givenProducts === void 0 ? void 0 : (ref10 = givenProducts[i]) === null || ref10 === void 0 ? void 0 : ref10.quantity;
        // Push each item into the products array.
        formattedCart.products.push(product);
    }
    formattedCart.totalProductsCount = totalProductsCount;
    formattedCart.totalProductsPrice = (data === null || data === void 0 ? void 0 : (ref = data.cart) === null || ref === void 0 ? void 0 : ref.total) ?? '';
    return formattedCart;
};
const createCheckoutData = (order)=>{
    var ref, ref11, ref12, ref13, ref14, ref15, ref16, ref17, ref18, ref19, ref20;
    // Set the billing Data to shipping, if applicable.
    const billingData = order.billingDifferentThanShipping ? order.billing : order.shipping;
    const checkoutData = {
        clientMutationId: (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)(),
        shipping: {
            firstName: order === null || order === void 0 ? void 0 : (ref = order.shipping) === null || ref === void 0 ? void 0 : ref.firstName,
            lastName: order === null || order === void 0 ? void 0 : (ref11 = order.shipping) === null || ref11 === void 0 ? void 0 : ref11.lastName,
            address1: order === null || order === void 0 ? void 0 : (ref12 = order.shipping) === null || ref12 === void 0 ? void 0 : ref12.address1,
            address2: order === null || order === void 0 ? void 0 : (ref13 = order.shipping) === null || ref13 === void 0 ? void 0 : ref13.address2,
            city: order === null || order === void 0 ? void 0 : (ref14 = order.shipping) === null || ref14 === void 0 ? void 0 : ref14.city,
            country: order === null || order === void 0 ? void 0 : (ref15 = order.shipping) === null || ref15 === void 0 ? void 0 : ref15.country,
            state: order === null || order === void 0 ? void 0 : (ref16 = order.shipping) === null || ref16 === void 0 ? void 0 : ref16.state,
            postcode: order === null || order === void 0 ? void 0 : (ref17 = order.shipping) === null || ref17 === void 0 ? void 0 : ref17.postcode,
            email: order === null || order === void 0 ? void 0 : (ref18 = order.shipping) === null || ref18 === void 0 ? void 0 : ref18.email,
            phone: order === null || order === void 0 ? void 0 : (ref19 = order.shipping) === null || ref19 === void 0 ? void 0 : ref19.phone,
            company: order === null || order === void 0 ? void 0 : (ref20 = order.shipping) === null || ref20 === void 0 ? void 0 : ref20.company
        },
        billing: {
            firstName: billingData === null || billingData === void 0 ? void 0 : billingData.firstName,
            lastName: billingData === null || billingData === void 0 ? void 0 : billingData.lastName,
            address1: billingData === null || billingData === void 0 ? void 0 : billingData.address1,
            address2: billingData === null || billingData === void 0 ? void 0 : billingData.address2,
            city: billingData === null || billingData === void 0 ? void 0 : billingData.city,
            country: billingData === null || billingData === void 0 ? void 0 : billingData.country,
            state: billingData === null || billingData === void 0 ? void 0 : billingData.state,
            postcode: billingData === null || billingData === void 0 ? void 0 : billingData.postcode,
            email: billingData === null || billingData === void 0 ? void 0 : billingData.email,
            phone: billingData === null || billingData === void 0 ? void 0 : billingData.phone,
            company: billingData === null || billingData === void 0 ? void 0 : billingData.company
        },
        shipToDifferentAddress: order.billingDifferentThanShipping,
        paymentMethod: order.paymentMethod,
        isPaid: false
    };
    if (order.createAccount) {
        checkoutData.account = {
            username: order.username,
            password: order.password
        };
    }
    return checkoutData;
};
/**
 * Get the updated items in the below format required for mutation input.
 *
 * [
 * { "key": "33e75ff09dd601bbe6dd51039152189", "quantity": 1 },
 * { "key": "02e74f10e0327ad868d38f2b4fdd6f0", "quantity": 1 },
 * ]
 *
 * Creates an array in above format with the newQty (updated Qty ).
 *
 */ const getUpdatedItems = (products, newQty, cartKey)=>{
    // Create an empty array.
    const updatedItems = [];
    // Loop through the product array.
    products.map((cartItem)=>{
        // If you find the cart key of the product user is trying to update, push the key and new qty.
        if (cartItem.cartKey === cartKey) {
            updatedItems.push({
                key: cartItem.cartKey,
                quantity: parseInt(newQty)
            });
        // Otherwise just push the existing qty without updating.
        } else {
            updatedItems.push({
                key: cartItem.cartKey,
                quantity: cartItem.qty
            });
        }
    });
    // Return the updatedItems array with new Qtys.
    return updatedItems;
};

});

/***/ }),

/***/ 2321:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const GET_CART = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
query GET_CART {
  cart {
    contents {
      nodes {
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
              srcSet
              altText
              title
            }
            galleryImages {
              nodes {
                id
                sourceUrl
                srcSet
                altText
                title
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
              srcSet
              altText
              title
            }
          }
          attributes {
            id
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
    appliedCoupons {
      code
      discountAmount
      discountTax
    }
    subtotal
    subtotalTax
    shippingTax
    shippingTotal
    total
    totalTax
    feeTax
    feeTotal
    discountTax
    discountTotal
  }
}
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GET_CART);


/***/ })

};
;