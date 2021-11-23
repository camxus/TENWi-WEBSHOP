(() => {
var exports = {};
exports.id = 915;
exports.ids = [915];
exports.modules = {

/***/ 2117:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "product_card__azyoF",
	"card_body": "product_card_body__ICt6H",
	"card_title": "product_card_title__Nuauz",
	"image_container": "product_image_container___uT7j",
	"image": "product_image__xkZA3",
	"card_text": "product_card_text__OpmBV",
	"rightContainer": "product_rightContainer__kzVUb",
	"add_to_cart": "product_add_to_cart__WZaFn"
};


/***/ }),

/***/ 8846:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Product),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8394);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_components_ApolloClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9747);
/* harmony import */ var _src_components_cart_AddToCartButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4747);
/* harmony import */ var _src_queries_product_by_slug__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6860);
/* harmony import */ var _src_queries_product_and_categories__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6462);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _src_components_single_product_gallery_carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6236);
/* harmony import */ var _src_components_single_product_price__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(940);
/* harmony import */ var _src_styles_product_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2117);
/* harmony import */ var _src_styles_product_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_src_styles_product_module_css__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_components_cart_AddToCartButton__WEBPACK_IMPORTED_MODULE_4__]);
_src_components_cart_AddToCartButton__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];











function Product(props) {
    var ref;
    // const { product } = props;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    // If the page is not yet generated, this will be displayed
    // initially until getStaticProps() finishes running
    if (router.isFallback) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: "Loading..."
        }));
    }
    // const products  = props.products.productsData 
    const { product  } = props;
    const { categories  } = props;
    const { tags  } = props;
    // console.log('products', products)
    // const {images} = props
    var images = [];
    images = images.concat(product.image, product === null || product === void 0 ? void 0 : (ref = product.galleryImages) === null || ref === void 0 ? void 0 : ref.nodes);
    console.log(images);
    // console.log(images)
    return(// <div>
    /* <Layout>
                { product ? (
                    <div className="single-product container mx-auto my-32 px-4 xl:px-0">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="product-images">

                                { !isEmpty( product?.galleryImages?.nodes ) && !isEmpty( product?.image )? (
                                    <div>
                                        <img
                                        src={ product?.image?.sourceUrl }
                                        alt="Product Image"
                                        width="100%"
                                        height="auto"
                                        srcSet={ product?.image?.srcSet }
                                        />
                                        <GalleryCarousel gallery={product?.galleryImages?.nodes}/>
                                    </div>
                                ) : !isEmpty( product.image ) ? (
                                    <img
                                        src={ product?.image?.sourceUrl }
                                        alt="Product Image"
                                        width="100%"
                                        height="auto"
                                        srcSet={ product?.image?.srcSet }
                                    />
                                ) : null }
                            </div>
                            <div className="product-info">
                                <h4 className="products-main-title text-2xl uppercase">{ product.name }</h4>
                                <div

                                    dangerouslySetInnerHTML={ {
                                        __html: product.description,
                                    } }
                                    className="product-description mb-5"
                                />
                                <Price salesPrice={product?.price} regularPrice={product?.regularPrice}/>
                                <AddToCartButton product={ product }/>
                            </div>
                        </div>

                    </div>
                ) : (
                    ''
                ) }
            </Layout> */ /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        categories: categories,
        tags: tags,
        children: product ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (_src_styles_product_module_css__WEBPACK_IMPORTED_MODULE_10___default().card),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_src_styles_product_module_css__WEBPACK_IMPORTED_MODULE_10___default().card_body),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_src_styles_product_module_css__WEBPACK_IMPORTED_MODULE_10___default().image_container),
                        children: // !isEmpty(images) ? (
                        images.map((image)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: image ? image.sourceUrl : "",
                                alt: "Product Image",
                                className: (_src_styles_product_module_css__WEBPACK_IMPORTED_MODULE_10___default().image)
                            })
                        )
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_src_styles_product_module_css__WEBPACK_IMPORTED_MODULE_10___default().rightContainer),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                className: (_src_styles_product_module_css__WEBPACK_IMPORTED_MODULE_10___default().card_title),
                                children: product.name
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_src_styles_product_module_css__WEBPACK_IMPORTED_MODULE_10___default().card_text),
                                dangerouslySetInnerHTML: {
                                    __html: product.description
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_src_styles_product_module_css__WEBPACK_IMPORTED_MODULE_10___default().add_to_cart),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_cart_AddToCartButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    product: product
                                })
                            })
                        ]
                    })
                ]
            })
        }) : ''
    }));
};
;
async function getStaticProps(context) {
    const { params: { slug  }  } = context;
    const { data  } = await _src_components_ApolloClient__WEBPACK_IMPORTED_MODULE_3__/* ["default"].query */ .ZP.query({
        query: _src_queries_product_by_slug__WEBPACK_IMPORTED_MODULE_5__/* .PRODUCT_BY_SLUG_QUERY */ ._,
        variables: {
            slug
        }
    });
    var categories = await _src_components_ApolloClient__WEBPACK_IMPORTED_MODULE_3__/* ["default"].query */ .ZP.query({
        query: _src_queries_product_and_categories__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z
    });
    // console.log(categories.data.productCategories)
    var tags = categories.data.productTags.nodes;
    categories = categories.data.productCategories.nodes;
    return {
        props: {
            product: (data === null || data === void 0 ? void 0 : data.product) || {
            },
            categories: categories ? categories : [],
            tags: tags ? tags : []
        },
        revalidate: 1
    };
}
async function getStaticPaths() {
    var ref, ref1;
    const { data  } = await _src_components_ApolloClient__WEBPACK_IMPORTED_MODULE_3__/* ["default"].query */ .ZP.query({
        query: _src_queries_product_by_slug__WEBPACK_IMPORTED_MODULE_5__/* .PRODUCT_SLUGS */ .l
    });
    const pathsData = [];
    (data === null || data === void 0 ? void 0 : (ref = data.products) === null || ref === void 0 ? void 0 : ref.nodes) && (data === null || data === void 0 ? void 0 : (ref1 = data.products) === null || ref1 === void 0 ? void 0 : ref1.nodes.map((product)=>{
        if (!(0,lodash__WEBPACK_IMPORTED_MODULE_7__.isEmpty)(product === null || product === void 0 ? void 0 : product.slug)) {
            pathsData.push({
                params: {
                    slug: product === null || product === void 0 ? void 0 : product.slug
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

/***/ 6236:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const GalleryCarousel = ({ gallery  })=>{
    if (isEmpty(gallery) || !isArray(gallery)) {
        return null;
    }
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
        if (1 === gallery.length) {
            return null;
        }
        /**
         * If if autoplay is set to true
         * and all slides are finished playing,
         * set the activeIndex to one and restart the slide from start.
         */ if (activeIndexRef.current.activeIndex === gallery.length - 1) {
            activeIndexRef.current.activeIndex = 0;
            setRestartSlide(restartSlide + 1);
        } else {
            // If its not the last slide increment active index by one.
            activeIndexRef.current.activeIndex = activeIndexRef.current.activeIndex + 1;
        }
        slideRef.current = slideRef.current + 1;
        setSlide(slideRef.current);
    };
    return(/*#__PURE__*/ _jsx("div", {
        className: "banner flex flex-col sm:flex-row justify-between overflow-hidden md:mr-4",
        children: /*#__PURE__*/ _jsxs("div", {
            className: "banner-img w-full",
            children: [
                gallery.map((item, index)=>{
                    const opacity = activeIndex === index || 1 === gallery.length ? 'opacity-100' : 'opacity-0';
                    return(/*#__PURE__*/ _jsx("div", {
                        className: `${opacity} banner-img-container absolute top-0 left-0`,
                        children: /*#__PURE__*/ _jsx("img", {
                            src: item === null || item === void 0 ? void 0 : item.mediaItemUrl,
                            loading: "lazy",
                            alt: (item === null || item === void 0 ? void 0 : item.altText) ? item === null || item === void 0 ? void 0 : item.altText : item === null || item === void 0 ? void 0 : item.title
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
        })
    }));
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (GalleryCarousel)));


/***/ }),

/***/ 6860:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ PRODUCT_BY_SLUG_QUERY),
/* harmony export */   "l": () => (/* binding */ PRODUCT_SLUGS)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const PRODUCT_BY_SLUG_QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql` query Product($slug: ID!) {
	product(id: $slug, idType: SLUG) {
	  id
	  productId: databaseId
	  averageRating
	  slug
	  description
	  galleryImages {
          nodes {
            id
            title
            altText
            mediaItemUrl
			sourceUrl
          }
      }
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
		id
		regularPrice
	  }
	  ... on VariableProduct {
		price
		id
		regularPrice
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
			  price
			  regularPrice
			}
		  }
		}
		id
	  }
	}
  }
`;
const PRODUCT_SLUGS = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql` query Products {
  products(first: 5000) {
    nodes {
      id
      slug
    }
  }
}
`;


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
var __webpack_exports__ = __webpack_require__.X(0, [730,61,394,181,462,846], () => (__webpack_exec__(8846)));
module.exports = __webpack_exports__;

})();