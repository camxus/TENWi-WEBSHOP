"use strict";
exports.id = 507;
exports.ids = [507];
exports.modules = {

/***/ 7507:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./src/image/index.js + 1 modules
var src_image = __webpack_require__(1516);
;// CONCATENATED MODULE: ./src/components/category/category-block/ParentCategoryBlock.js




const ParentCategoryBlock = (props)=>{
    var ref, ref1;
    const { category  } = props;
    return(/*#__PURE__*/ _jsx("div", {
        className: "product mb-5",
        children: /*#__PURE__*/ _jsx(Link, {
            href: `/category/${category === null || category === void 0 ? void 0 : category.slug}`,
            children: /*#__PURE__*/ _jsxs("a", {
                children: [
                    /*#__PURE__*/ _jsx(Image, {
                        className: "object-cover h-40 md:h-64",
                        layout: "fill",
                        containerClassNames: "w-96 h-56",
                        sourceUrl: (category === null || category === void 0 ? void 0 : (ref = category.image) === null || ref === void 0 ? void 0 : ref.sourceUrl) ?? '',
                        defaultImgUrl: DEFAULT_CATEGORY_IMG_URL,
                        altText: (category === null || category === void 0 ? void 0 : (ref1 = category.image) === null || ref1 === void 0 ? void 0 : ref1.altText) ?? category.slug
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: "product-title-container p-3",
                        children: [
                            /*#__PURE__*/ _jsx("h3", {
                                className: "product-title text-lg font-medium",
                                children: category === null || category === void 0 ? void 0 : category.name
                            }),
                            /*#__PURE__*/ _jsx("span", {
                                className: "shop-now text-sm",
                                children: "+ Explore"
                            })
                        ]
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const category_block_ParentCategoryBlock = ((/* unused pure expression or super */ null && (ParentCategoryBlock)));

;// CONCATENATED MODULE: ./src/components/category/category-block/ParentCategoriesBlock.js


const ParentCategoriesBlock = (props)=>{
    const { productCategories  } = props || {
    };
    return(/*#__PURE__*/ _jsx("div", {
        className: "product-categories grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4",
        children: productCategories.length ? productCategories.map((productCategory, index)=>{
            return(/*#__PURE__*/ _jsx(ProductCategoryBlock, {
                category: productCategory
            }, (productCategory === null || productCategory === void 0 ? void 0 : productCategory.id) ?? index));
        }) : null
    }));
};
/* harmony default export */ const category_block_ParentCategoriesBlock = ((/* unused pure expression or super */ null && (ParentCategoriesBlock)));


/***/ })

};
;