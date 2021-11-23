"use strict";
exports.id = 516;
exports.ids = [516];
exports.modules = {

/***/ 1516:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./src/constants/urls.js
const DEFAULT_IMG_URL = 'https://via.placeholder.com/400x225';
const DEFAULT_CATEGORY_IMG_URL = 'https://via.placeholder.com/416x224';
const DEFAULT_PRODUCT_HOME_IMG_URL = 'https://via.placeholder.com/308x308';

;// CONCATENATED MODULE: ./src/image/index.js





/**
 * Image Component.
 * We don't need to add srcSet, as Next js will generate that.
 * @see https://nextjs.org/docs/api-reference/next/image#other-props
 * @see https://nextjs.org/docs/basic-features/image-optimization#device-sizes
 *
 * @param {Object} props Component props.
 *
 * @return {jsx}
 */ const Image = (props)=>{
    const { altText , title , width , height , sourceUrl , className , layout , objectFit , containerClassNames , showDefault , defaultImgUrl , ...rest } = props;
    if (!sourceUrl && !showDefault) {
        return null;
    }
    /**
     * If we use layout = fill then, width and height of the image cannot be used.
     * and the image fills on the entire width and the height of its parent container.
     * That's we need to wrap our image in a container and give it a height and width.
     * Notice that in this case, the given height and width is being used for container and not img.
     */ if ('fill' === layout) {
        const attributes = {
            alt: altText || title,
            src: sourceUrl || (showDefault ? defaultImgUrl || DEFAULT_IMG_URL : ''),
            layout: 'fill',
            className: external_classnames_default()('object-cover', className),
            ...rest
        };
        return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: external_classnames_default()('relative', containerClassNames),
            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                ...attributes
            })
        }));
    } else {
        const attributes = {
            alt: altText || title,
            src: sourceUrl || (showDefault ? DEFAULT_IMG_URL : ''),
            width: width || 'auto',
            height: height || 'auto',
            className,
            ...rest
        };
        return(/*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
            ...attributes
        }));
    }
};
Image.propTypes = {
    altText: (external_prop_types_default()).string,
    title: (external_prop_types_default()).string,
    sourceUrl: (external_prop_types_default()).string,
    layout: (external_prop_types_default()).string,
    showDefault: (external_prop_types_default()).bool,
    defaultImgUrl: (external_prop_types_default()).string,
    containerClassName: (external_prop_types_default()).string,
    className: (external_prop_types_default()).string
};
Image.defaultProps = {
    altText: '',
    title: '',
    sourceUrl: '',
    showDefault: true,
    defaultImgUrl: '',
    containerClassNames: '',
    className: 'post__image'
};
/* harmony default export */ const src_image = ((/* unused pure expression or super */ null && (Image)));


/***/ })

};
;