(() => {
var exports = {};
exports.id = 599;
exports.ids = [599];
exports.modules = {

/***/ 231:
/***/ ((module) => {

// Exports
module.exports = {
	"product-container": "style_product-container__DB_Ld",
	"imagewrapper": "style_imagewrapper__xJzy3"
};


/***/ }),

/***/ 861:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8394);
/* harmony import */ var _src_components_Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4884);
/* harmony import */ var _src_components_ApolloClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9747);
/* harmony import */ var _src_components_category_category_block_ParentCategoriesBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7507);
/* harmony import */ var _src_queries_product_and_categories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6462);
/* harmony import */ var _src_components_home_hero_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2977);
/* harmony import */ var _src_styles_style_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(231);
/* harmony import */ var _src_styles_style_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_src_styles_style_module_css__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_components_Product__WEBPACK_IMPORTED_MODULE_2__]);
_src_components_Product__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];








function Home(props) {
    const { products , productCategories , heroCarousel , tags , categories  } = props || {
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        categories: categories,
        tags: tags,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: `${(_src_styles_style_module_css__WEBPACK_IMPORTED_MODULE_7___default()["product-container"])}`,
            children: products.length ? products.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Product__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    product: product
                }, product.id)
            ) : ''
        })
    }));
};
;
async function getStaticProps() {
    var ref;
    const { data  } = await _src_components_ApolloClient__WEBPACK_IMPORTED_MODULE_3__/* ["default"].query */ .ZP.query({
        query: _src_queries_product_and_categories__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z
    });
    var categories = await _src_components_ApolloClient__WEBPACK_IMPORTED_MODULE_3__/* ["default"].query */ .ZP.query({
        query: _src_queries_product_and_categories__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z
    });
    var tags = categories.data.productTags.nodes;
    categories = categories.data.productCategories.nodes;
    return {
        props: {
            // productCategories: data?.productCategories?.nodes ? data.productCategories.nodes : [],
            products: (data === null || data === void 0 ? void 0 : (ref = data.products) === null || ref === void 0 ? void 0 : ref.nodes) ? data.products.nodes : [],
            // heroCarousel: data?.heroCarousel?.nodes[0]?.children?.nodes ? data.heroCarousel.nodes[0].children.nodes : []
            categories: categories ? categories : [],
            tags: tags ? tags : []
        },
        revalidate: 1
    };
}
;

});

/***/ }),

/***/ 2977:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




const HeroCarousel = ({ heroCarousel  })=>{
    var ref4, ref1, ref2;
    if (isEmpty(heroCarousel) || !isArray(heroCarousel)) {
        return null;
    }
    const autoPlay = true;
    const slideDuration = 2; // in seconds
    const activeIndexRef = useRef({
        activeIndex: 0
    });
    const slideRef = useRef(0);
    const { 0: slide , 1: setSlide  } = useState(0);
    const { 0: restartSlide , 1: setRestartSlide  } = useState(0);
    const { activeIndex  } = activeIndexRef.current;
    /**
     * Change to next slide.
     */ const nextSlide = ()=>{
        if (1 === heroCarousel.length) {
            return null;
        }
        /**
         * If if autoplay is set to true
         * and all slides are finished playing,
         * set the activeIndex to one and restart the slide from start.
         */ if (activeIndexRef.current.activeIndex === heroCarousel.length - 1) {
            activeIndexRef.current.activeIndex = 0;
            setRestartSlide(restartSlide + 1);
        } else {
            // If its not the last slide increment active index by one.
            activeIndexRef.current.activeIndex = activeIndexRef.current.activeIndex + 1;
        }
        slideRef.current = slideRef.current + 1;
        setSlide(slideRef.current);
    };
    useEffect(()=>{
        if (autoPlay) {
            const interval = setInterval(()=>nextSlide()
            , slideDuration * 1000);
            return ()=>clearInterval(interval)
            ;
        }
    }, []);
    return(/*#__PURE__*/ _jsxs("div", {
        className: "banner flex flex-col sm:flex-row justify-between overflow-hidden",
        children: [
            /*#__PURE__*/ _jsxs("div", {
                className: "banner-img sm:w-8/12",
                children: [
                    heroCarousel.map((item, index)=>{
                        var ref, ref3;
                        const opacity = activeIndex === index || 1 === heroCarousel.length ? 'opacity-100' : 'opacity-0';
                        return(/*#__PURE__*/ _jsx("div", {
                            className: `${opacity} banner-img-container absolute top-0 left-0`,
                            children: /*#__PURE__*/ _jsx("img", {
                                src: item === null || item === void 0 ? void 0 : (ref = item.image) === null || ref === void 0 ? void 0 : ref.sourceUrl,
                                srcSet: item === null || item === void 0 ? void 0 : (ref3 = item.image) === null || ref3 === void 0 ? void 0 : ref3.srcSet,
                                loading: "lazy"
                            })
                        }, item === null || item === void 0 ? void 0 : item.id));
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: "slider-button",
                        children: [
                            /*#__PURE__*/ _jsx("button", {
                                className: "focus:outline-none",
                                onClick: nextSlide,
                                children: /*#__PURE__*/ _jsx("svg", {
                                    width: "25px",
                                    className: "inline-block mr-3",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: /*#__PURE__*/ _jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        d: "M7 16l-4-4m0 0l4-4m-4 4h18"
                                    })
                                })
                            }),
                            /*#__PURE__*/ _jsx("button", {
                                className: "focus:outline-none",
                                onClick: nextSlide,
                                children: /*#__PURE__*/ _jsx("svg", {
                                    width: "25px",
                                    className: "inline-block",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor",
                                    children: /*#__PURE__*/ _jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: "2",
                                        d: "M17 8l4 4m0 0l-4 4m4-4H3"
                                    })
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "banner-content pt-10 sm:pt-0 px-10 sm:w-4/12",
                children: [
                    /*#__PURE__*/ _jsx("h2", {
                        className: "banner-content__title text-base md:text-4xl uppercase",
                        children: (ref4 = heroCarousel[activeIndex]) === null || ref4 === void 0 ? void 0 : ref4.name
                    }),
                    /*#__PURE__*/ _jsx("p", {
                        className: "banner-content__description text-base md:text-2xl text-gray-700",
                        children: (ref1 = heroCarousel[activeIndex]) === null || ref1 === void 0 ? void 0 : ref1.description
                    }),
                    /*#__PURE__*/ _jsx(Link, {
                        href: `/category/${(ref2 = heroCarousel[activeIndex]) === null || ref2 === void 0 ? void 0 : ref2.slug}/`,
                        children: /*#__PURE__*/ _jsx("a", {
                            className: "banner-content__link text-gray-700",
                            children: "+ Explore"
                        })
                    })
                ]
            })
        ]
    }));
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (HeroCarousel)));


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
var __webpack_exports__ = __webpack_require__.X(0, [730,61,394,181,462,846,516,884,507], () => (__webpack_exec__(861)));
module.exports = __webpack_exports__;

})();