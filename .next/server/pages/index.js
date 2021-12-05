(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 5884:
/***/ ((module) => {

// Exports
module.exports = {
	"image": "categories_image__hSlGF",
	"category-name": "categories_category-name__Vu_zu",
	"category-wrapper": "categories_category-wrapper__sOpad",
	"header": "categories_header__BH6w0",
	"fadeOut": "categories_fadeOut__G0X4U"
};


/***/ }),

/***/ 4805:
/***/ ((module) => {

// Exports
module.exports = {
	"intro": "intro_intro__x6JjR",
	"fadeOut": "intro_fadeOut__eHNv3",
	"intro-image": "intro_intro-image__oAf2b"
};


/***/ }),

/***/ 665:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/Tenwi_Lookbook0078.ad0c85b0.jpg","height":5472,"width":3648,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABQMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABwEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAAp4T/xAAbEAABBAMAAAAAAAAAAAAAAAATAQIEFAARcf/aAAgBAQABPwCJasTitUZGD4jE3n//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q=="});

/***/ }),

/***/ 3678:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Categories),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5553);
/* harmony import */ var _src_components_ApolloClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9747);
/* harmony import */ var _src_components_category_category_block_ParentCategoriesBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7507);
/* harmony import */ var _src_queries_get_categories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9610);
/* harmony import */ var _src_queries_product_and_categories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6462);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var _src_styles_categories_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5884);
/* harmony import */ var _src_styles_categories_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_src_styles_categories_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _src_styles_intro_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4805);
/* harmony import */ var _src_styles_intro_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_src_styles_intro_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5675);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_components_Layout__WEBPACK_IMPORTED_MODULE_1__]);
_src_components_Layout__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];










function Categories({ productCategories , categories , tags  }) {
    console.log(tags);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_components_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        categories: categories,
        tags: tags,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_src_styles_intro_module_css__WEBPACK_IMPORTED_MODULE_8___default())[`intro`],
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_src_styles_intro_module_css__WEBPACK_IMPORTED_MODULE_8___default())[`intro-background`],
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_src_styles_intro_module_css__WEBPACK_IMPORTED_MODULE_8___default())[`intro-image`],
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_7__["default"], {
                            src: __webpack_require__(8294),
                            objectFit: "cover"
                        })
                    })
                })
            }),
            categories ? categories.map((category)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `${(_src_styles_categories_module_css__WEBPACK_IMPORTED_MODULE_9___default()["category-wrapper"])}`,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_7__["default"], {
                            className: (_src_styles_categories_module_css__WEBPACK_IMPORTED_MODULE_9___default().image),
                            src: __webpack_require__(665),
                            objectFit: "cover"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_6__["default"], {
                            href: `/category/${category.slug}`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `${(_src_styles_categories_module_css__WEBPACK_IMPORTED_MODULE_9___default()["category-name"])}`,
                                    children: category.name
                                })
                            })
                        })
                    ]
                })
            ) : ''
        ]
    }));
};
async function getStaticProps() {
    var ref;
    // console.log(client)
    const { data  } = await _src_components_ApolloClient__WEBPACK_IMPORTED_MODULE_2__/* ["default"].query */ .ZP.query({
        query: _src_queries_get_categories__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z
    });
    var categories = await _src_components_ApolloClient__WEBPACK_IMPORTED_MODULE_2__/* ["default"].query */ .ZP.query({
        query: _src_queries_product_and_categories__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z
    });
    var tags = categories.data.productTags.nodes;
    categories = categories.data.productCategories.nodes;
    return {
        props: {
            productCategories: (data === null || data === void 0 ? void 0 : (ref = data.productCategories) === null || ref === void 0 ? void 0 : ref.nodes) || [],
            categories: categories ? categories : [],
            tags: tags ? tags : []
        },
        revalidate: 1
    };
}
;

});

/***/ }),

/***/ 9610:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

/**
 * GraphQL categories query.
 */ const GET_CATEGORIES_QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`query {

	productCategories(first: 3) {
		nodes {
			id
			name
			slug
			image {
				sourceUrl
				altText
			}
		}
	}
	
}`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GET_CATEGORIES_QUERY);


/***/ }),

/***/ 9114:
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 6517:
/***/ ((module) => {

"use strict";
module.exports = require("lodash");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 3018:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 4809:
/***/ ((module) => {

"use strict";
module.exports = require("node-fetch");

/***/ }),

/***/ 808:
/***/ ((module) => {

"use strict";
module.exports = require("nprogress");

/***/ }),

/***/ 580:
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6555:
/***/ ((module) => {

"use strict";
module.exports = import("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,61,500,516,507], () => (__webpack_exec__(3678)));
module.exports = __webpack_exports__;

})();