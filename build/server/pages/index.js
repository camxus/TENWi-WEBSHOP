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
	"category-wrapper": "categories_category-wrapper__sOpad"
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

/***/ 4922:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Categories),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/Layout.js + 4 modules
var Layout = __webpack_require__(8394);
// EXTERNAL MODULE: ./src/components/ApolloClient.js
var ApolloClient = __webpack_require__(9747);
// EXTERNAL MODULE: ./src/components/category/category-block/ParentCategoriesBlock.js + 1 modules
var ParentCategoriesBlock = __webpack_require__(7507);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
;// CONCATENATED MODULE: ./src/queries/get-categories.js

/**
 * GraphQL categories query.
 */ const GET_CATEGORIES_QUERY = client_.gql`query {

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
/* harmony default export */ const get_categories = (GET_CATEGORIES_QUERY);

// EXTERNAL MODULE: ./src/queries/product-and-categories.js
var product_and_categories = __webpack_require__(6462);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./src/styles/categories.module.css
var categories_module = __webpack_require__(5884);
var categories_module_default = /*#__PURE__*/__webpack_require__.n(categories_module);
// EXTERNAL MODULE: ./src/styles/intro.module.css
var intro_module = __webpack_require__(4805);
var intro_module_default = /*#__PURE__*/__webpack_require__.n(intro_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./pages/index.js










function Categories({ productCategories , categories , tags  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
        categories: categories,
        tags: tags,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (intro_module_default())[`intro`],
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (intro_module_default())[`intro-background`],
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (intro_module_default())[`intro-image`],
                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            src: __webpack_require__(8294),
                            objectFit: "cover"
                        })
                    })
                })
            }),
            categories ? categories.map((category)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `${(categories_module_default())["category-wrapper"]}`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            className: (categories_module_default()).image,
                            src: __webpack_require__(665),
                            objectFit: "cover"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                            href: `/category/${category.slug}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: `${(categories_module_default())["category-name"]}`,
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
    const { data  } = await ApolloClient/* default.query */.ZP.query({
        query: get_categories
    });
    var categories = await ApolloClient/* default.query */.ZP.query({
        query: product_and_categories/* default */.Z
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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,61,394,462,516,507], () => (__webpack_exec__(4922)));
module.exports = __webpack_exports__;

})();