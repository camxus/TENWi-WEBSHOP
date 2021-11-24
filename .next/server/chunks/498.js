exports.id = 498;
exports.ids = [498];
exports.modules = {

/***/ 5843:
/***/ ((module) => {

// Exports
module.exports = {
	"header_image": "header_header_image__KXHhp"
};


/***/ }),

/***/ 2290:
/***/ ((module) => {

// Exports
module.exports = {
	"nav_container": "navbar_nav_container__x8x0b",
	"overlay": "navbar_overlay__aiN2m",
	"navbody": "navbar_navbody__CpJdT",
	"nav_items_container": "navbar_nav_items_container__gbntM",
	"nav_items": "navbar_nav_items__aum1f",
	"nav_list": "navbar_nav_list__zTeBK",
	"nav_link": "navbar_nav_link___EN3D",
	"nav_item": "navbar_nav_item___b221",
	"head": "navbar_head__Ep45R",
	"sub_box": "navbar_sub_box__mJh5X",
	"nav_btn": "navbar_nav_btn__qi7en",
	"dot": "navbar_dot__Tm2_s",
	"header_image": "navbar_header_image__HlktP"
};


/***/ }),

/***/ 8294:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/tenwi.4ae06b19.gif","height":376,"width":600});

/***/ }),

/***/ 9747:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports middleware, afterware */
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4809);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Middleware operation
 * If we have a session token in localStorage, add it to the GraphQL request as a Session header.
 */ const middleware = new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloLink((operation, forward)=>{
    /**
	 * If session data exist in local storage, set value as session header.
	 */ const session =  false ? 0 : null;
    if (session) {
        operation.setContext(({ headers ={
        }  })=>({
                headers: {
                    "woocommerce-session": `Session ${session}`
                }
            })
        );
    }
    return forward(operation);
});
/**
 * Afterware operation.
 *
 * This catches the incoming session token and stores it in localStorage, for future GraphQL requests.
 */ const afterware = new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloLink((operation, forward)=>{
    return forward(operation).map((response)=>{
        if (true) {
            return response;
        }
        /**
		 * Check for session header and update session in local storage accordingly.
		 */ const context = operation.getContext();
        const { response: { headers  }  } = context;
        const session = headers.get("woocommerce-session");
        if (session) {
            // Remove session data if session destroyed.
            if ("false" === session) {
                localStorage.removeItem("tenwi-session");
            // Update session new data if changed.
            } else if (localStorage.getItem("tenwi-session") !== session) {
                localStorage.setItem("tenwi-session", headers.get("woocommerce-session"));
            }
        }
        return response;
    });
});
// Apollo GraphQL client.
const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloClient({
    link: middleware.concat(afterware.concat((0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.createHttpLink)({
        uri: `${"https://tenwi.eu"}/graphql/`,
        fetch: (node_fetch__WEBPACK_IMPORTED_MODULE_0___default())
    }))),
    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.InMemoryCache()
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);


/***/ }),

/***/ 8394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./src/components/context/AppContext.js
var context_AppContext = __webpack_require__(6589);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/cart/CartIcon.js




const CartIcon = ()=>{
    const { 0: cart  } = useContext(AppContext);
    const productsCount = null !== cart && Object.keys(cart).length ? cart.totalProductsCount : '';
    const totalPrice = null !== cart && Object.keys(cart).length ? cart.totalProductsPrice : '';
    return(/*#__PURE__*/ _jsx(Link, {
        href: "/cart",
        children: /*#__PURE__*/ _jsxs("a", {
            className: "block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10",
            children: [
                /*#__PURE__*/ _jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "hidden lg:block m-auto",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    width: "18",
                    height: "auto",
                    stroke: "currentColor",
                    children: /*#__PURE__*/ _jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    })
                }),
                "Bag",
                productsCount ? /*#__PURE__*/ _jsxs("span", {
                    className: "ml-1",
                    children: [
                        "(",
                        productsCount,
                        ")"
                    ]
                }) : ''
            ]
        })
    }));
};
/* harmony default export */ const cart_CartIcon = ((/* unused pure expression or super */ null && (CartIcon)));

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./src/styles/navbar.module.css
var navbar_module = __webpack_require__(2290);
var navbar_module_default = /*#__PURE__*/__webpack_require__.n(navbar_module);
;// CONCATENATED MODULE: ./src/components/Nav.js






const Nav = ({ categories  }, { tags  })=>{
    const categoriesList = categories ? Array.from(categories) : [];
    const tagsList = tags ? Array.from(tags) : [];
    let navBtn = (0,external_react_.useRef)(null);
    let navContainer = (0,external_react_.useRef)(null);
    let navOverlay = (0,external_react_.useRef)(null);
    var statement = false;
    const openNav = ()=>{
    // 	if (navContainer.style.left !== "0%" && statement === true)
    // 	{
    // 		navContainer.style.left = "0%";
    // 		navOverlay.style.opacity = "70%";
    // 		statement = false
    // 	}
    // 	else {
    // 		navContainer.style.left = "-21.2%";
    // 		navOverlay.style.opacity = "0%";
    // 		statement = true
    // }
    };
    const { 0: isMenuVisible , 1: setMenuVisibility  } = (0,external_react_.useState)(false);
    // const categoriesList  = [];
    // const categoriesmap = new Map();
    // for(const i in categories) {
    // for (const item in props[i].categories) {
    // 		if(!categoriesmap.has(props[i].categories[item].name)){
    // 			categoriesmap.set(props[i].categories[item].name, true);    // set any value to Map
    // console.log(props[i])
    // categoriesList.push(props[i].name);
    // 		}
    // }
    // const tagsList  = []
    // for(const i in tags) {
    // for (const item in props[i].categories) {
    // 		if(!categoriesmap.has(props[i].categories[item].name)){
    // 			categoriesmap.set(props[i].categories[item].name, true);    // set any value to Map
    // tagsList.push(props[i].name);
    // 		}
    // }
    // }
    // // console.log(props)
    // const tags  = [];
    // const tagsmap = new Map();
    // for(const i in props) {
    // 		for (const item in props[i].tags) {
    // 			if(!tagsmap.has(props[i].tags[item].name)){
    // 				tagsmap.set(props[i].tags[item].name, true);    // set any value to Map
    // 				tags.push(props[i].tags[item].name);
    // 			}
    // 		}
    // }
    return(// <nav className="bg-white p-4">
    // 	<div className="flex items-center justify-between flex-wrap container mx-auto">
    // 		<div className="flex items-center flex-shrink-0 text-black mr-20">
    // 			<svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
    // 			<span className="font-semibold text-xl tracking-tight">
    // 			<Link href="/">
    // 			<a className="">WooNext</a>
    // 			</Link>
    // 			</span>
    // 		</div>
    // 		{/*Menu button*/}
    // 		<div className="block lg:hidden">
    // 			<button onClick={() => setMenuVisibility(! isMenuVisible)} className="flex items-center px-3 py-2 border rounded text-black border-black hover:text-black hover:border-black">
    // 			<svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    // 			</button>
    // 		</div>
    // 		{/*MMenu in mobile*/}
    // 		<div className={`${ isMenuVisible ? 'max-h-full h-full' : 'h-0' } w-full overflow-hidden lg:h-full flex-grow lg:flex lg:items-center lg:w-auto`}>
    // 			<div className="text-sm font-medium uppercase lg:flex-grow">
    // 			<Link href="/categories">
    // 				<a className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10">
    // 					Categories
    // 				</a>
    // 			</Link>
    // 			<Link href="/">
    // 				<a className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10">
    // 					Women
    // 				</a>
    // 			</Link>
    // 			<Link href="/">
    // 				<a className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10">
    // 					Kids
    // 				</a>
    // 			</Link>
    // 			<Link href="/">
    // 				<a className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10">
    // 					Home & Living
    // 				</a>
    // 			</Link>
    // 			<Link href="/">
    // 				<a className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10">
    // 					Offers
    // 				</a>
    // 			</Link>
    // 			</div>
    // 			<div className="text-sm font-medium">
    // 				<a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10">
    // 				<svg xmlns="http://www.w3.org/2000/svg" className="hidden lg:block m-auto" fill="none" viewBox="0 0 24 24" width="18" height="auto" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
    // 					Profile
    // 				</a>
    // 				<a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10">
    // 				<svg xmlns="http://www.w3.org/2000/svg" className="hidden lg:block m-auto" fill="none" viewBox="0 0 24 24" width="18" height="auto" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
    // 					Wishlist
    // 				</a>
    // 				<CartIcon/>
    // 			</div>
    // 		</div>
    // 	</div>
    // </nav>
    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                ref: (el)=>{
                    navOverlay = el;
                },
                className: (navbar_module_default()).overlay
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                ref: (el)=>{
                    navContainer = el;
                },
                className: (navbar_module_default()).nav_container,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        ref: (el)=>{
                            navBtn = el;
                        },
                        onClick: openNav,
                        className: (navbar_module_default()).nav_btn,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (navbar_module_default()).dot
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (navbar_module_default()).navbody,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (navbar_module_default()).nav_items_container,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (navbar_module_default()).nav_items,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                    className: (navbar_module_default()).nav_list,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: ((navbar_module_default()).nav_item, (navbar_module_default()).active),
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: (navbar_module_default()).nav_link,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                                    href: "/",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                                            className: (navbar_module_default()).header_image,
                                                            src: __webpack_require__(8294),
                                                            objectFit: "cover"
                                                        })
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: `${(navbar_module_default()).nav_item} ${(navbar_module_default()).head}`,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: (navbar_module_default()).nav_link,
                                                href: "/all",
                                                children: "ALL"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: `${(navbar_module_default()).nav_item} ${(navbar_module_default()).head}`,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: (navbar_module_default()).nav_link,
                                                children: "UNISEXWEAR"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: `${(navbar_module_default()).nav_item} ${(navbar_module_default()).sub_box}`,
                                            children: categoriesList !== undefined && categoriesList.length ? categoriesList.map((category)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    className: (navbar_module_default()).nav_item,
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: `${(navbar_module_default()).nav_link} ${(navbar_module_default()).sub}`,
                                                            href: `/category/${category.slug}`,
                                                            children: category.name
                                                        })
                                                    ]
                                                })
                                            ) : ''
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: `${(navbar_module_default()).nav_item} ${(navbar_module_default()).head}`,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: (navbar_module_default()).nav_link,
                                                children: "FEATURES"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: `${(navbar_module_default()).nav_item} ${(navbar_module_default()).sub_box}`,
                                            children: tagsList !== undefined && tagsList.length ? tagsList.map((tag)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                    className: (navbar_module_default()).nav_item,
                                                    children: [
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            className: `${(navbar_module_default()).nav_link} ${(navbar_module_default()).sub}`,
                                                            href: `/feature/${tag.slug}`,
                                                            children: tag.name
                                                        })
                                                    ]
                                                })
                                            ) : ''
                                        })
                                    ]
                                })
                            })
                        })
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const components_Nav = (Nav);

// EXTERNAL MODULE: ./src/styles/header.module.css
var header_module = __webpack_require__(5843);
var header_module_default = /*#__PURE__*/__webpack_require__.n(header_module);
;// CONCATENATED MODULE: ./src/components/Header.js




const Header = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Nav, {
                ...props
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (header_module_default()).header_image,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                        src: __webpack_require__(8294),
                        objectFit: "cover"
                    })
                })
            })
        ]
    }));
};
/* harmony default export */ const components_Header = (Header);

// EXTERNAL MODULE: ./src/components/icons/index.js + 5 modules
var icons = __webpack_require__(4921);
;// CONCATENATED MODULE: ./src/components/Footer.js


const Footer = ()=>/*#__PURE__*/ _jsx("div", {
        className: "footer bg-gray-800 p-6 text-white",
        children: /*#__PURE__*/ _jsxs("div", {
            className: "container mx-auto",
            children: [
                /*#__PURE__*/ _jsxs("div", {
                    className: "footer-text flex-none md:flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ _jsx("p", {
                            children: "\xa9 Codeytek Academy 2020"
                        }),
                        /*#__PURE__*/ _jsx("p", {
                            className: "text-gray",
                            children: "Learn the latest tech skills"
                        }),
                        /*#__PURE__*/ _jsx("span", {
                            className: "text-gray",
                            children: "Follow on social links to support the work"
                        })
                    ]
                }),
                /*#__PURE__*/ _jsxs("ul", {
                    className: "social-links mt-8 flex align-center",
                    children: [
                        /*#__PURE__*/ _jsx("li", {
                            children: /*#__PURE__*/ _jsx("a", {
                                href: "https://www.facebook.com/codeytek",
                                className: "fa fa-facebook",
                                target: "_blank",
                                children: /*#__PURE__*/ _jsx(Facebook, {
                                })
                            })
                        }),
                        /*#__PURE__*/ _jsx("li", {
                            className: "ml-2 mt-1",
                            children: /*#__PURE__*/ _jsx("a", {
                                href: "https://twitter.com/codeytek",
                                target: "_blank",
                                children: /*#__PURE__*/ _jsx(Twitter, {
                                })
                            })
                        }),
                        /*#__PURE__*/ _jsx("li", {
                            className: "ml-2 mt-1",
                            children: /*#__PURE__*/ _jsx("a", {
                                href: "https://youtube.com/ImranSayedDev",
                                className: "fa fa-youtube",
                                target: "_blank",
                                children: /*#__PURE__*/ _jsx(Youtube, {
                                })
                            })
                        }),
                        /*#__PURE__*/ _jsx("li", {
                            className: "ml-2",
                            children: /*#__PURE__*/ _jsx("a", {
                                href: "https://www.instagram.com/codeytek_academy/",
                                className: "fa fa-instagram",
                                target: "_blank",
                                children: /*#__PURE__*/ _jsx(Instagram, {
                                })
                            })
                        })
                    ]
                })
            ]
        })
    })
;
/* harmony default export */ const components_Footer = ((/* unused pure expression or super */ null && (Footer)));

// EXTERNAL MODULE: ./src/components/ApolloClient.js
var ApolloClient = __webpack_require__(9747);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: external "nprogress"
var external_nprogress_ = __webpack_require__(808);
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
;// CONCATENATED MODULE: ./src/components/Layout.js









router_default().events.on("routeChangeStart", ()=>external_nprogress_default().start()
);
router_default().events.on("routeChangeComplete", ()=>external_nprogress_default().done()
);
router_default().events.on("routeChangeError", ()=>external_nprogress_default().done()
);
const Layout = (props)=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(context_AppContext/* AppProvider */.w, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(client_.ApolloProvider, {
            client: ApolloClient/* default */.ZP,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                            children: "TENWi"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Header, {
                        ...props
                    }),
                    props.children
                ]
            })
        })
    }));
};
/* harmony default export */ const components_Layout = (Layout);


/***/ }),

/***/ 6589:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ AppContext),
/* harmony export */   "w": () => (/* binding */ AppProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const AppContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext([
    {
    },
    ()=>{
    }
]);
const AppProvider = (props)=>{
    const { 0: cart , 1: setCart  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // @TODO Will add option to show the cart with localStorage later.
        if (false) {}
    }, []);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AppContext.Provider, {
        value: [
            cart,
            setCart
        ],
        children: props.children
    }));
};


/***/ }),

/***/ 3447:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function SvgArrowDown(props) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        height: "1em",
        viewBox: "0 0 24 24",
        width: "1em",
        className: "arrow-down_svg__fill-current arrow-down_svg__text-3xl",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M24 24H0V0h24v24z",
                fill: "none",
                opacity: 0.87
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"
            })
        ]
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgArrowDown);


/***/ }),

/***/ 4921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "X1": () => (/* reexport */ Cross)
});

// UNUSED EXPORTS: ArrowDown, Facebook, Instagram, Twitter, Youtube

// EXTERNAL MODULE: ./src/components/icons/ArrowDown.js
var ArrowDown = __webpack_require__(3447);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/icons/Cross.js


function SvgCross(props) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16pt",
        height: "16pt",
        viewBox: "0 0 16 16",
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
            fill: "#7e7e7e",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M8 0C3.578 0 0 3.578 0 8c0 4.422 3.578 8 8 8 4.422 0 8-3.578 8-8 0-4.422-3.578-8-8-8zm0 14.75c-3.73 0-6.75-3.02-6.75-6.75S4.27 1.25 8 1.25 14.75 4.27 14.75 8 11.73 14.75 8 14.75zm0 0"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M10.738 9.852L8.883 8l1.855-1.852a.632.632 0 000-.886.632.632 0 00-.886 0L8 7.117 6.148 5.262a.632.632 0 00-.886 0 .632.632 0 000 .886L7.117 8 5.262 9.852a.632.632 0 000 .886c.246.242.64.242.886 0L8 8.883l1.852 1.855c.246.242.64.242.886 0a.632.632 0 000-.886zm0 0"
                })
            ]
        })
    }));
}
/* harmony default export */ const Cross = (SvgCross);

;// CONCATENATED MODULE: ./src/components/icons/Facebook.js


function SvgFacebook(props) {
    return(/*#__PURE__*/ _jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 18 18",
        ...props,
        children: /*#__PURE__*/ _jsx("path", {
            d: "M2.637 18h5.87v-6.398H6.399v-2.11h2.11V6.855a2.64 2.64 0 012.637-2.636h2.636v2.11h-2.11c-.581 0-1.054.472-1.054 1.054v2.11h3.07l-.351 2.109h-2.719V18h4.746A2.64 2.64 0 0018 15.363V2.637A2.64 2.64 0 0015.363 0H2.637A2.64 2.64 0 000 2.637v12.726A2.64 2.64 0 002.637 18zM1.055 2.637c0-.871.71-1.582 1.582-1.582h12.726c.871 0 1.582.71 1.582 1.582v12.726c0 .871-.71 1.582-1.582 1.582h-3.691v-4.289h2.555l.703-4.219h-3.258V7.383h3.164V3.164h-3.691a3.696 3.696 0 00-3.692 3.691v1.582h-2.11v4.22h2.11v4.288H2.637c-.871 0-1.582-.71-1.582-1.582zm0 0",
            fill: "#fff"
        })
    }));
}
/* harmony default export */ const Facebook = ((/* unused pure expression or super */ null && (SvgFacebook)));

;// CONCATENATED MODULE: ./src/components/icons/Instagram.js


function SvgInstagram(props) {
    return(/*#__PURE__*/ _jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 18 18",
        ...props,
        children: /*#__PURE__*/ _jsxs("g", {
            fill: "#fff",
            children: [
                /*#__PURE__*/ _jsx("path", {
                    d: "M2.637 18h12.726A2.64 2.64 0 0018 15.363V2.637A2.64 2.64 0 0015.363 0H2.637A2.64 2.64 0 000 2.637v12.726A2.64 2.64 0 002.637 18zM1.055 2.637c0-.871.71-1.582 1.582-1.582h12.726c.871 0 1.582.71 1.582 1.582v12.726c0 .871-.71 1.582-1.582 1.582H2.637c-.871 0-1.582-.71-1.582-1.582zm0 0"
                }),
                /*#__PURE__*/ _jsx("path", {
                    d: "M9 13.746A4.751 4.751 0 0013.746 9 4.751 4.751 0 009 4.254 4.751 4.751 0 004.254 9 4.751 4.751 0 009 13.746zM9 5.31A3.696 3.696 0 0112.691 9 3.696 3.696 0 019 12.691 3.696 3.696 0 015.309 9 3.696 3.696 0 019 5.309zm0 0M14.273 5.309c.872 0 1.582-.711 1.582-1.582 0-.872-.71-1.582-1.582-1.582-.87 0-1.582.71-1.582 1.582 0 .87.711 1.582 1.582 1.582zm0-2.11a.53.53 0 01.528.528.53.53 0 01-.528.527.53.53 0 01-.527-.527.53.53 0 01.527-.528zm0 0"
                })
            ]
        })
    }));
}
/* harmony default export */ const Instagram = ((/* unused pure expression or super */ null && (SvgInstagram)));

;// CONCATENATED MODULE: ./src/components/icons/Twitter.js


function SvgTwitter(props) {
    return(/*#__PURE__*/ _jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 18 18",
        ...props,
        children: /*#__PURE__*/ _jsx("path", {
            d: "M18 1.969c-1.133.05-1.11.047-1.234.058L17.434.11s-2.09.774-2.622.91C13.418-.233 11.348-.288 9.864.622 8.653 1.367 8 2.648 8.22 4.145 5.859 3.816 3.87 2.695 2.3.813L1.805.215l-.371.68a4.142 4.142 0 00-.442 2.773c.078.379.207.742.387 1.082l-.426-.164-.05.71c-.051.724.19 1.567.644 2.259.129.195.293.406.5.617l-.219-.031.27.816a3.957 3.957 0 002.039 2.36c-.953.402-1.719.66-2.98 1.074L0 12.773l1.066.582c.407.223 1.844.965 3.262 1.188 3.156.496 6.711.09 9.102-2.063 2.015-1.816 2.675-4.394 2.539-7.082-.02-.406.09-.793.312-1.093.45-.594 1.715-2.332 1.719-2.336zm-2.559 1.707a2.712 2.712 0 00-.523 1.777c.137 2.707-.602 4.809-2.191 6.246-1.864 1.672-4.864 2.332-8.235 1.801-.61-.094-1.242-.309-1.762-.523 1.06-.364 1.875-.688 3.196-1.313l1.84-.871-2.036-.129c-.972-.062-1.785-.535-2.28-1.305.265-.011.519-.054.773-.129l1.941-.539-1.957-.48a2.915 2.915 0 01-2.164-2.086c.195.05.422.09.793.125l1.809.18L3.21 5.313c-1.035-.81-1.45-2.02-1.145-3.184 3.227 3.348 7.012 3.094 7.395 3.183-.086-.816-.086-.816-.11-.894-.488-1.727.583-2.602 1.067-2.898 1.008-.622 2.605-.715 3.715.308a.95.95 0 00.867.23c.27-.066.496-.14.71-.218l-.452 1.3h.582c-.11.15-.242.325-.399.536zm0 0",
            fill: "#fff"
        })
    }));
}
/* harmony default export */ const Twitter = ((/* unused pure expression or super */ null && (SvgTwitter)));

;// CONCATENATED MODULE: ./src/components/icons/Youtube.js


function SvgYoutube(props) {
    return(/*#__PURE__*/ _jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 18 18",
        ...props,
        children: /*#__PURE__*/ _jsxs("g", {
            fill: "#fff",
            children: [
                /*#__PURE__*/ _jsx("path", {
                    d: "M2.637 13.71h12.726A2.64 2.64 0 0018 11.075V2.637A2.64 2.64 0 0015.363 0H2.637A2.64 2.64 0 000 2.637v8.437a2.64 2.64 0 002.637 2.637zM1.055 2.638c0-.871.71-1.582 1.582-1.582h12.726c.871 0 1.582.71 1.582 1.582v8.437c0 .871-.71 1.582-1.582 1.582H2.637c-.871 0-1.582-.71-1.582-1.582zm0 0"
                }),
                /*#__PURE__*/ _jsx("path", {
                    d: "M6.363 3.324v7.168l6.348-3.644zm1.055 1.79l3.144 1.75-3.144 1.804zm0 0"
                })
            ]
        })
    }));
}
/* harmony default export */ const Youtube = ((/* unused pure expression or super */ null && (SvgYoutube)));

;// CONCATENATED MODULE: ./src/components/icons/index.js








/***/ }),

/***/ 6462:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

/**
 * GraphQL categories and products query.
 */ const PRODUCTS_AND_CATEGORIES_QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`query {
  heroCarousel: productCategories(where: {slug: "offers"}) {
    nodes {
      id
      children {
        nodes {
          id
          name
          slug
          databaseId
          description
          image {
            id
            sourceUrl
            srcSet
          }
        }
      }
    }
  }
  productCategories(first: 50) {
    nodes {
      id
      name
      slug
      image {
        id
        sourceUrl
        srcSet
      }
    }
  }
  productTags(first: 50) {
    nodes {
      id
      name
      slug
    }
  }
  products(first: 50) {
    nodes {
      id
      productId: databaseId
      averageRating
      slug
      description
      image {
        id
        altText
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
        id
        regularPrice
      }
      ... on ExternalProduct {
        price
        id
        externalUrl
        regularPrice
      }
      ... on GroupProduct {
        id
        products {
          nodes {
            ... on SimpleProduct {
              id
              price
              regularPrice
            }
          }
        }
      }
    }
  }
}
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PRODUCTS_AND_CATEGORIES_QUERY);


/***/ })

};
;