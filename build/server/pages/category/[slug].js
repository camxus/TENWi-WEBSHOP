(() => {
var exports = {};
exports.id = 24;
exports.ids = [24];
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

/***/ 8785:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CategorySingle),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8394);
/* harmony import */ var _src_components_ApolloClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9747);
/* harmony import */ var _src_components_Product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4884);
/* harmony import */ var _src_queries_product_by_category__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(368);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _src_styles_categories_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5884);
/* harmony import */ var _src_styles_categories_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_src_styles_categories_module_css__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_components_Product__WEBPACK_IMPORTED_MODULE_3__]);
_src_components_Product__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];








function CategorySingle(props) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    // If the page is not yet generated, this will be displayed
    // initially until getStaticProps() finishes running
    if (router.isFallback) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: "Loading..."
        }));
    }
    const { categoryName , products  } = props;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                categoryName ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    className: (_src_styles_categories_module_css__WEBPACK_IMPORTED_MODULE_7___default())[`header`],
                    children: categoryName
                }) : '',
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: undefined !== products && (products === null || products === void 0 ? void 0 : products.length) ? products.map((product)=>{
                        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Product__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            product: product
                        }, product === null || product === void 0 ? void 0 : product.id));
                    }) : ''
                })
            ]
        })
    }));
};
;
async function getStaticProps(context) {
    var ref, ref1, ref2;
    const { params: { slug  }  } = context;
    const { data  } = await _src_components_ApolloClient__WEBPACK_IMPORTED_MODULE_2__/* ["default"].query */ .ZP.query({
        query: _src_queries_product_by_category__WEBPACK_IMPORTED_MODULE_4__/* .PRODUCT_BY_CATEGORY_SLUG */ .A,
        variables: {
            slug
        }
    });
    return {
        props: {
            categoryName: (data === null || data === void 0 ? void 0 : (ref = data.productCategory) === null || ref === void 0 ? void 0 : ref.name) ?? '',
            products: (data === null || data === void 0 ? void 0 : (ref1 = data.productCategory) === null || ref1 === void 0 ? void 0 : (ref2 = ref1.products) === null || ref2 === void 0 ? void 0 : ref2.nodes) ?? []
        },
        revalidate: 1
    };
}
async function getStaticPaths() {
    var ref, ref3;
    const { data  } = await _src_components_ApolloClient__WEBPACK_IMPORTED_MODULE_2__/* ["default"].query */ .ZP.query({
        query: _src_queries_product_by_category__WEBPACK_IMPORTED_MODULE_4__/* .PRODUCT_CATEGORIES_SLUGS */ .z
    });
    const pathsData = [];
    (data === null || data === void 0 ? void 0 : (ref = data.productCategories) === null || ref === void 0 ? void 0 : ref.nodes) && (data === null || data === void 0 ? void 0 : (ref3 = data.productCategories) === null || ref3 === void 0 ? void 0 : ref3.nodes.map((productCategory)=>{
        if (!(0,lodash__WEBPACK_IMPORTED_MODULE_5__.isEmpty)(productCategory === null || productCategory === void 0 ? void 0 : productCategory.slug)) {
            pathsData.push({
                params: {
                    slug: productCategory === null || productCategory === void 0 ? void 0 : productCategory.slug
                }
            });
        }
    }));
    return {
        paths: pathsData,
        fallback: true
    };
}

});

/***/ }),

/***/ 368:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ PRODUCT_BY_CATEGORY_SLUG),
/* harmony export */   "z": () => (/* binding */ PRODUCT_CATEGORIES_SLUGS)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const PRODUCT_BY_CATEGORY_SLUG = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql` query PRODUCT_BY_CATEGORY_SLUG($slug: ID!) {
	productCategory(id: $slug, idType: SLUG) {
	  id
	  name
	  products(first: 50) {
		nodes {
		  id
		  productId: databaseId
		  averageRating
		  slug
		  description
		  image {
			id
			uri
			title
			srcSet
			sourceUrl
		  }
		  name
		  ... on SimpleProduct {
			price
			regularPrice
			id
		  }
		  ... on VariableProduct {
			price
			regularPrice
			id
		  }
		  ... on ExternalProduct {
			price
			id
			regularPrice
			externalUrl
		  }
		  ... on GroupProduct {
			products {
			  nodes {
				... on SimpleProduct {
				  id
				  regularPrice
				  price
				}
			  }
			}
			id
		  }
		}
	  }
	}
  }
  `;
const PRODUCT_CATEGORIES_SLUGS = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql` query PRODUCT_CATEGORIES_SLUGS {
    productCategories {
    nodes {
      id
      slug
    }
  }
}`;


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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,61,394,181,846,516,884], () => (__webpack_exec__(8785)));
module.exports = __webpack_exports__;

})();