exports.id = 884;
exports.ids = [884];
exports.modules = {

/***/ 2126:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "cards_card__BhUOb",
	"card-main": "cards_card-main__n7bkR",
	"card-header": "cards_card-header__UDPlu",
	"subtitle": "cards_subtitle__9y0WE"
};


/***/ }),

/***/ 4884:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var _src_styles_cards_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2126);
/* harmony import */ var _src_styles_cards_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_src_styles_cards_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_cart_AddToCartButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4747);
/* harmony import */ var _single_product_price__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(940);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1516);
/* harmony import */ var _src_functions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7392);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_functions_js__WEBPACK_IMPORTED_MODULE_5__, _components_cart_AddToCartButton__WEBPACK_IMPORTED_MODULE_2__]);
([_src_functions_js__WEBPACK_IMPORTED_MODULE_5__, _components_cart_AddToCartButton__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);








const Product = (props)=>{
    var ref, ref1;
    const { product  } = props;
    let currency = (product === null || product === void 0 ? void 0 : product.price) ? product.price[0] : "";
    let price = (0,_src_functions_js__WEBPACK_IMPORTED_MODULE_5__/* .getFloatVal */ .Qn)((product === null || product === void 0 ? void 0 : product.price) ? product.price : "0");
    return(// @TODO Need to handle Group products differently.
    undefined !== product && 'GroupProduct' !== product.__typename ? // <div className="product mb-5">
    // 	<Link href={ `/product/${ product?.slug }`} >
    // 		<a>
    // 			<Image
    // 				className="object-cover bg-gray-100"
    // 				width="308"
    // 				height="308"
    // 				loading="lazy"
    // 				sourceUrl={ product?.image?.sourceUrl ?? '' }
    // 				defaultImgUrl={DEFAULT_PRODUCT_HOME_IMG_URL}
    // 				altText={product?.image?.altText ?? product?.slug}
    // 			/>
    // 		</a>
    // 	</Link>
    // 	<div className="product-info">
    // 		<h3 className="product-title mt-3 font-medium text-gray-800">
    // 			{ product.name ? product.name : '' }
    // 		</h3>
    // 		<div className="product-description text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: (product?.description)}}/>
    // 		<Price salesPrice={product?.price} regularPrice={product?.regularPrice}/>
    // 		<AddToCartButton product={ product }/>
    // 	</div>
    // </div>
    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_src_styles_cards_module_css__WEBPACK_IMPORTED_MODULE_6___default().card),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
            // as = {`/product?${ product.slug }-${product.id}`} 
            // href={`/product/slug=${ product.slug }-${product.id}`}>
            href: `/product/${product.slug}`,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_src_styles_cards_module_css__WEBPACK_IMPORTED_MODULE_6___default().imagewrapper),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            // src={ product.images[0].src }
                            src: (product === null || product === void 0 ? void 0 : (ref = product.image) === null || ref === void 0 ? void 0 : ref.sourceUrl) ? product === null || product === void 0 ? void 0 : (ref1 = product.image) === null || ref1 === void 0 ? void 0 : ref1.sourceUrl : "",
                            alt: "Product image",
                            loading: "lazy"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_src_styles_cards_module_css__WEBPACK_IMPORTED_MODULE_6___default()["card-main"]),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: (_src_styles_cards_module_css__WEBPACK_IMPORTED_MODULE_6___default()["card-header"]),
                                children: (product === null || product === void 0 ? void 0 : product.name) ? product.name : ""
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                className: (_src_styles_cards_module_css__WEBPACK_IMPORTED_MODULE_6___default().subtitle),
                                children: [
                                    currency,
                                    price
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    }) : '');
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Product);

});

/***/ })

};
;