(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[222],{354:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/checkout",function(){return t(2060)}])},2060:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return le},default:function(){return se}});var a=t(5893),i=t(8394),r=t(5666),l=t.n(r),s=t(7294),o=t(6829),c=function(e){var n=e.item;return(0,a.jsxs)("tr",{className:"cart-item",children:[(0,a.jsx)("td",{className:"cart-element",children:(0,a.jsx)("img",{width:"64",src:n.image.sourceUrl,srcSet:n.image.srcSet,alt:n.image.title})}),(0,a.jsx)("td",{className:"cart-element",children:n.name}),(0,a.jsx)("td",{className:"cart-element",children:n.totalPrice})]},n.productId)},d=function(e){var n=e.cart;return(0,a.jsx)(s.Fragment,{children:n?(0,a.jsx)(s.Fragment,{children:(0,a.jsxs)("table",{className:"checkout-cart table table-hover w-full mb-10",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{className:"cart-head-container text-left",children:[(0,a.jsx)("th",{className:"cart-heading-el",scope:"col"}),(0,a.jsx)("th",{className:"cart-heading-el",scope:"col",children:"Product"}),(0,a.jsx)("th",{className:"cart-heading-el",scope:"col",children:"Total"})]})}),(0,a.jsxs)("tbody",{children:[n.products.length&&n.products.map((function(e){return(0,a.jsx)(c,{item:e},e.productId)})),(0,a.jsxs)("tr",{className:"bg-gray-200",children:[(0,a.jsx)("td",{className:""}),(0,a.jsx)("td",{className:"checkout-total font-normal text-xl",children:"Subtotal"}),(0,a.jsx)("td",{className:"checkout-total font-bold text-xl",children:n.totalProductsPrice})]})]})]})}):""})},u=function(e){var n=e.errors,t=e.fieldName;return n&&n.hasOwnProperty(t)?(0,a.jsx)("div",{className:"invalid-feedback d-block text-red-500",children:n[t]}):""},p=function(e){var n=e.input,t=e.handleOnChange,i=n||{},r=i.errors,l=i.paymentMethod;return(0,a.jsxs)("div",{className:"mt-3",children:[(0,a.jsx)(u,{errors:r,fieldName:"paymentMethod"}),(0,a.jsx)("div",{className:"form-check payment-input-container mt-2",children:(0,a.jsxs)("label",{className:"form-check-label",children:[(0,a.jsx)("input",{onChange:t,value:"bacs",className:"form-check-input mr-3",name:"paymentMethod",type:"radio",checked:"bacs"===l}),(0,a.jsx)("span",{className:"payment-content",children:"Direct Bank Transfer"})]})}),(0,a.jsx)("div",{className:"form-check payment-input-container mt-2",children:(0,a.jsxs)("label",{className:"form-check-label",children:[(0,a.jsx)("input",{onChange:t,value:"paypal",className:"form-check-input mr-3",name:"paymentMethod",type:"radio",checked:"paypal"===l}),(0,a.jsx)("span",{className:"payment-content",children:"Pay with Paypal"})]})}),(0,a.jsx)("div",{className:"form-check payment-input-container mt-2",children:(0,a.jsxs)("label",{className:"form-check-label",children:[(0,a.jsx)("input",{onChange:t,value:"cheque",className:"form-check-input mr-3",name:"paymentMethod",type:"radio",checked:"cheque"===l}),(0,a.jsx)("span",{className:"payment-content",children:"Check Payments"})]})}),(0,a.jsx)("div",{className:"form-check payment-input-container mt-2",children:(0,a.jsxs)("label",{className:"form-check-label",children:[(0,a.jsx)("input",{onChange:t,value:"cod",className:"form-check-input mr-3",name:"paymentMethod",type:"radio",checked:"cod"===l}),(0,a.jsx)("span",{className:"payment-content",children:"Cash on Delivery"})]})}),(0,a.jsx)("div",{className:"form-check payment-input-container mt-2",children:(0,a.jsxs)("label",{className:"form-check-label",children:[(0,a.jsx)("input",{onChange:t,value:"jccpaymentgatewayredirect",className:"form-check-input mr-3",name:"paymentMethod",type:"radio",checked:"jccpaymentgatewayredirect"===l}),(0,a.jsx)("span",{className:"payment-content",children:"JCC"})]})}),(0,a.jsx)("div",{className:"form-check payment-input-container mt-2",children:(0,a.jsxs)("label",{className:"form-check-label",children:[(0,a.jsx)("input",{onChange:t,value:"ccavenue",className:"form-check-input mr-3",name:"paymentMethod",type:"radio",checked:"ccavenue"===l}),(0,a.jsx)("span",{className:"payment-content",children:"CC Avenue"})]})}),(0,a.jsx)("div",{className:"checkout-payment-instructions mt-2",children:"Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode."})]})},h=t(6589),m=t(8966),v=t.n(m),g=function(e){return void 0===e||null===e||"object"===typeof e&&0===Object.keys(e).length||"string"===typeof e&&0===e.trim().length},f=function(e,n){var t=void 0===n||n,a={},i={};e.firstName=g(e.firstName)?"":e.firstName,e.lastName=g(e.lastName)?"":e.lastName,e.company=g(e.company)?"":e.company,e.country=g(e.country)?"":e.country,e.address1=g(e.address1)?"":e.address1,e.address2=g(e.address2)?"":e.address2,e.city=g(e.city)?"":e.city,e.state=g(e.state)?"":e.state,e.postcode=g(e.postcode)?"":e.postcode,e.phone=g(e.phone)?"":e.phone,e.email=g(e.email)?"":e.email,e.createAccount=g(e.createAccount)?"":e.createAccount,e.orderNotes=g(e.orderNotes)?"":e.orderNotes;var r=function(n,t,r,l,s,o){var c=void 0===s?"":s;v().isLength(e[n],{min:r,max:l})||(a[n]="".concat(t," must be ").concat(r," to ").concat(l," characters")),"email"!==c||v().isEmail(e[n])||(a[n]="".concat(t," is not valid")),"phone"!==c||v().isMobilePhone(e[n])||(a[n]="".concat(t," is not valid")),o&&v().isEmpty(e[n])&&(a[n]="".concat(t," is required")),a[n]||(i[n]=v().trim(e[n]),i[n]="email"===c?v().normalizeEmail(i[n]):i[n],i[n]=v().escape(i[n]))};return r("firstName","First name",2,35,"string",!0),r("lastName","Last name",2,35,"string",!0),r("company","Company Name",0,35,"string",!1),r("country","Country name",2,55,"string",!0),r("address1","Street address line 1",3,100,"string",!0),r("address2","",0,254,"string",!1),r("city","City field",3,25,"string",!0),r("state","State/County",0,254,"string",t),r("postcode","Post code",2,10,"postcode",!0),r("phone","Phone number",10,15,"phone",!0),r("email","Email",11,254,"email",!0),i.createAccount=e.createAccount,r("orderNotes","",0,254,"string",!1),{sanitizedData:i,errors:a,isValid:g(a)}},x=t(5413),y=function(e){var n=e.response;if(!n)return null;var t=n.checkout;return window.location.href=t.redirect,(0,a.jsx)("div",{className:"container",children:"success"===t.result?(0,a.jsxs)("div",{children:[(0,a.jsxs)("h2",{children:["Order no: ",t.order.orderNumber," "]}),(0,a.jsxs)("p",{children:["Status : ",t.order.status]})]}):""})},b=t(2321),j=t(1439);function N(){var e,n,t=(e=["\nmutation CHECKOUT_MUTATION( $input: CheckoutInput! ) {\n  checkout(input: $input) {\n    clientMutationId\n    order {\n      id\n      orderKey\n      orderNumber\n      status\n      refunds {\n        nodes {\n          amount\n        }\n      }\n    }\n    result\n    redirect\n  }\n}\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return N=function(){return t},t}var C=(0,j.Ps)(N()),S=t(5697),w=t.n(S),k=t(6486),O=function(e){return e.required?(0,a.jsx)("abbr",{className:"text-red-500",style:{textDecoration:"none"},title:"required",children:"*"}):null};O.propTypes={required:w().bool},O.defaultProps={required:!1};var P=O,T=t(3447),q=function(e){var n=e.input,t=e.handleOnChange,i=e.countries,r=e.isShipping,l=n||{},s=l.country,o=l.errors,c="country-".concat(r?"shipping":"billing");return(0,a.jsxs)("div",{className:"mb-3",children:[(0,a.jsxs)("label",{className:"leading-7 text-sm text-gray-700",htmlFor:c,children:["Country",(0,a.jsx)(P,{required:!0})]}),(0,a.jsxs)("div",{className:"relative w-full border-none",children:[(0,a.jsxs)("select",{onChange:t,value:s,name:"country",className:"bg-gray-100 bg-opacity-50 border border-gray-500 text-gray-500 appearance-none inline-block py-3 pl-3 pr-8 rounded leading-tight w-full",id:c,children:[(0,a.jsx)("option",{value:"",children:"Select a country..."}),!(0,k.isEmpty)(i)&&(0,k.map)(i,(function(e){return(0,a.jsx)("option",{"data-countrycode":null===e||void 0===e?void 0:e.countryCode,value:null===e||void 0===e?void 0:e.countryCode,children:null===e||void 0===e?void 0:e.countryName},null===e||void 0===e?void 0:e.countryCode)}))]}),(0,a.jsx)("span",{className:"absolute right-0 mr-1 text-gray-500",style:{top:"25%"},children:(0,a.jsx)(T.Z,{width:24,height:24,className:"fill-current"})})]}),(0,a.jsx)(u,{errors:o,fieldName:"country"})]})},E=t(4184),F=t.n(E),D=function(e){var n,t,i=e.handleOnChange,r=e.input,l=e.states,s=e.isFetchingStates,o=e.isShipping,c=r||{},d=c.state,p=c.errors,h="state-".concat(o?"shipping":"billing");return s?(0,a.jsxs)("div",{className:"mb-3",children:[(0,a.jsxs)("label",{className:"leading-7 text-sm text-gray-700",children:["State/County",(0,a.jsx)(P,{required:!0})]}),(0,a.jsx)("div",{className:"relative w-full border-none",children:(0,a.jsx)("select",{disabled:!0,value:"",name:"state",className:"opacity-50 bg-gray-100 bg-opacity-50 border border-gray-500 text-gray-500 appearance-none inline-block py-3 pl-3 pr-8 rounded leading-tight w-full",children:(0,a.jsx)("option",{value:"",children:"Loading..."})})})]}):l.length?(0,a.jsxs)("div",{className:"mb-3",children:[(0,a.jsxs)("label",{className:"leading-7 text-sm text-gray-600",htmlFor:h,children:["State/County",(0,a.jsx)(P,{required:!0})]}),(0,a.jsx)("div",{className:"relative w-full border-none",children:(0,a.jsxs)("select",{disabled:s,onChange:i,value:d,name:"state",className:F()("bg-gray-100 bg-opacity-50 border border-gray-400 text-gray-500 appearance-none inline-block py-3 pl-3 pr-8 rounded leading-tight w-full",{"opacity-50":s}),id:h,children:[(0,a.jsx)("option",{value:"",children:"Select a state..."}),l.map((function(e,i){return(0,a.jsx)("option",{value:null!==(n=null===e||void 0===e?void 0:e.stateName)&&void 0!==n?n:"",children:null===e||void 0===e?void 0:e.stateName},null!==(t=null===e||void 0===e?void 0:e.stateCode)&&void 0!==t?t:i)}))]})}),(0,a.jsx)(u,{errors:p,fieldName:"state"})]}):null};D.propTypes={handleOnChange:w().func,input:w().object,states:w().array,isFetchingStates:w().bool,isShipping:w().bool},D.defaultProps={handleOnChange:function(){return null},input:{},states:[],isFetchingStates:!1,isShipping:!0};var A=(0,s.memo)(D),I=function(e){var n=e.handleOnChange,t=e.inputValue,i=e.name,r=e.type,l=e.label,s=e.errors,o=e.placeholder,c=e.required,d=e.containerClassNames,p=e.isShipping,h="".concat(i,"-").concat(p?"shipping":"");return(0,a.jsxs)("div",{className:d,children:[(0,a.jsxs)("label",{className:"leading-7 text-sm text-gray-700",htmlFor:h,children:[l||"",(0,a.jsx)(P,{required:c})]}),(0,a.jsx)("input",{onChange:n,value:t,placeholder:o,type:r,name:i,className:"w-full bg-gray-100 bg-opacity-50 rounded border border-gray-500 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out",id:h}),(0,a.jsx)(u,{errors:s,fieldName:i})]})};I.propTypes={handleOnChange:w().func,inputValue:w().string,name:w().string,type:w().string,label:w().string,placeholder:w().string,errors:w().object,required:w().bool,containerClassNames:w().string},I.defaultProps={handleOnChange:function(){return null},inputValue:"",name:"",type:"text",label:"",placeholder:"",errors:{},required:!1,containerClassNames:""};var _=I,M=function(e){var n=e.input,t=e.countries,i=e.states,r=e.handleOnChange,l=e.isFetchingStates,s=e.isShipping,o=(n||{}).errors;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"flex flex-wrap overflow-hidden sm:-mx-3",children:[(0,a.jsx)(_,{name:"firstName",inputValue:null===n||void 0===n?void 0:n.firstName,required:!0,handleOnChange:r,label:"First name",errors:o,isShipping:s,containerClassNames:"w-full overflow-hidden sm:my-2 sm:px-2 md:w-1/2"}),(0,a.jsx)(_,{name:"lastName",inputValue:null===n||void 0===n?void 0:n.lastName,required:!0,handleOnChange:r,label:"Last name",errors:o,isShipping:s,containerClassNames:"w-full overflow-hidden sm:my-2 sm:px-2 md:w-1/2"})]}),(0,a.jsx)(_,{name:"company",inputValue:null===n||void 0===n?void 0:n.company,handleOnChange:r,label:"Company Name (Optional)",errors:o,isShipping:s,containerClassNames:"mb-4"}),(0,a.jsx)(q,{input:n,handleOnChange:r,countries:t,isShipping:s}),(0,a.jsx)(_,{name:"address1",inputValue:null===n||void 0===n?void 0:n.address1,required:!0,handleOnChange:r,label:"Street address",placeholder:"House number and street name",errors:o,isShipping:s,containerClassNames:"mb-4"}),(0,a.jsx)(_,{name:"address2",inputValue:null===n||void 0===n?void 0:n.address2,handleOnChange:r,label:"Street address line two",placeholder:"Apartment floor unit building floor etc(optional)",errors:o,isShipping:s,containerClassNames:"mb-4"}),(0,a.jsx)(_,{name:"city",required:!0,inputValue:null===n||void 0===n?void 0:n.city,handleOnChange:r,label:"Town/City",errors:o,isShipping:s,containerClassNames:"mb-4"}),(0,a.jsx)(A,{input:n,handleOnChange:r,states:i,isShipping:s,isFetchingStates:l}),(0,a.jsxs)("div",{className:"flex flex-wrap overflow-hidden sm:-mx-3",children:[(0,a.jsx)(_,{name:"postcode",inputValue:null===n||void 0===n?void 0:n.postcode,required:!0,handleOnChange:r,label:"Post code",errors:o,isShipping:s,containerClassNames:"w-full overflow-hidden sm:my-2 sm:px-2 md:w-1/2"}),(0,a.jsx)(_,{name:"phone",inputValue:null===n||void 0===n?void 0:n.phone,required:!0,handleOnChange:r,label:"Phone",errors:o,isShipping:s,containerClassNames:"w-full overflow-hidden sm:my-2 sm:px-2 md:w-1/2"})]}),(0,a.jsx)(_,{name:"email",type:"email",inputValue:null===n||void 0===n?void 0:n.email,required:!0,handleOnChange:r,label:"Email",errors:o,isShipping:s,containerClassNames:"mb-4"})]})};M.propTypes={input:w().object,countries:w().array,handleOnChange:w().func,isFetchingStates:w().bool,isShipping:w().bool},M.defaultProps={input:{},countries:[],handleOnChange:function(){return null},isFetchingStates:!1,isShipping:!1};var V=M,z=t(9747);function U(){var e,n,t=(e=["query GET_STATES($countryCode: String!) {\n  wooStates(countryCode: $countryCode) {\n    states {\n      stateCode\n      stateName\n    }\n  }\n}"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return U=function(){return t},t}var K=(0,j.Ps)(U());function Z(e,n,t,a,i,r,l){try{var s=e[r](l),o=s.value}catch(c){return void t(c)}s.done?n(o):Promise.resolve(o).then(a,i)}function B(e){return function(){var n=this,t=arguments;return new Promise((function(a,i){var r=e.apply(n,t);function l(e){Z(r,a,i,l,s,"next",e)}function s(e){Z(r,a,i,l,s,"throw",e)}l(void 0)}))}}function L(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function W(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){L(e,n,t[n])}))}return e}var $=B(l().mark((function e(n){var t,a,i;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,z.ZP.query({query:K,variables:{countryCode:n||""}});case 3:return a=e.sent.data,e.abrupt("return",null!==(i=null===a||void 0===a||null===(t=a.wooStates)||void 0===t?void 0:t.states)&&void 0!==i?i:[]);case 6:case"end":return e.stop()}}),e)}))),G=B(l().mark((function e(n,t,a){var i,r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("country"!==n.name){e.next=8;break}return a(!0),i=n[n.selectedIndex].getAttribute("data-countrycode"),e.next=5,$(i);case 5:r=e.sent,t(r||[]),a(!1);case 8:case"end":return e.stop()}}),e)}))),Q=function(e,n,t){n(W({},e,L({},t.name,!e.billingDifferentThanShipping)))},H=function(e,n,t){n(W({},e,L({},t.name,!e.createAccount)))},J=function(e){var n=e.handleOnChange,t=e.checked,i=e.name,r=e.label,l=e.placeholder,s=e.containerClassNames;return(0,a.jsx)("div",{className:s,children:(0,a.jsxs)("label",{className:"leading-7 text-md text-gray-700 flex items-center cursor-pointer",htmlFor:i,children:[(0,a.jsx)("input",{onChange:n,placeholder:l,type:"checkbox",checked:t,name:i,id:i}),(0,a.jsx)("span",{className:"ml-2",children:r||""})]})})};J.propTypes={handleOnChange:w().func,checked:w().bool,name:w().string,type:w().string,label:w().string,placeholder:w().string,containerClassNames:w().string},J.defaultProps={handleOnChange:function(){return null},checked:!1,name:"",label:"",placeholder:"",errors:{},containerClassNames:""};var R=J;function X(e,n,t,a,i,r,l){try{var s=e[r](l),o=s.value}catch(c){return void t(c)}s.done?n(o):Promise.resolve(o).then(a,i)}function Y(e){return function(){var n=this,t=arguments;return new Promise((function(a,i){var r=e.apply(n,t);function l(e){X(r,a,i,l,s,"next",e)}function s(e){X(r,a,i,l,s,"throw",e)}l(void 0)}))}}function ee(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function ne(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){ee(e,n,t[n])}))}return e}function te(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],a=!0,i=!1,r=void 0;try{for(var l,s=e[Symbol.iterator]();!(a=(l=s.next()).done)&&(t.push(l.value),!n||t.length!==n);a=!0);}catch(o){i=!0,r=o}finally{try{a||null==s.return||s.return()}finally{if(i)throw r}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var ae,ie={firstName:"",lastName:"",address1:"",address2:"",city:"",country:"",state:"",postcode:"",email:"",phone:"",company:"",errors:null},re=function(e){var n=e.countriesData||{},t=n.billingCountries,i=n.shippingCountries,r={billing:ne({},ie),shipping:ne({},ie),createAccount:!1,orderNotes:"",billingDifferentThanShipping:!1,paymentMethod:"cod"},c=(0,s.useContext)(h.I),u=c[0],m=c[1],v=(0,s.useState)(r),g=v[0],j=v[1],N=(0,s.useState)(null),S=N[0],w=N[1],k=(0,s.useState)(null),O=k[0],P=k[1],T=(0,s.useState)([]),q=T[0],E=T[1],F=(0,s.useState)(!1),D=F[0],A=F[1],I=(0,s.useState)([]),_=I[0],M=I[1],z=(0,s.useState)(!1),U=z[0],K=z[1],Z=(0,o.useQuery)(b.Z,{notifyOnNetworkStatusChange:!0,onCompleted:function(){var e=(0,x.W3)(Z);localStorage.setItem("tenwi-cart",JSON.stringify(e)),m(e)}}).data,B=te((0,o.useMutation)(C,{variables:{input:S},onError:function(e){var n,t,a;e&&P(null!==(a=null===e||void 0===e||null===(n=e.graphQLErrors)||void 0===n||null===(t=n[0])||void 0===t?void 0:t.message)&&void 0!==a?a:"")}}),2),L=B[0],W=B[1],$=W.data,J=W.loading,X=Y(l().mark((function e(n,t,a){var i,r,s,o;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=void 0!==t&&t,r=void 0!==a&&a,"createAccount"!==(s=(n||{}).target).name){e.next=6;break}H(g,j,s),e.next=21;break;case 6:if("billingDifferentThanShipping"!==s.name){e.next=10;break}Q(g,j,s),e.next=21;break;case 10:if(!r){e.next=20;break}if(!i){e.next=16;break}return e.next=14,ae(s);case 14:e.next=18;break;case 16:return e.next=18,re(s);case 18:e.next=21;break;case 20:o=ne({},g,ee({},s.name,s.value)),j(o);case 21:case"end":return e.stop()}}),e)}))),ae=Y(l().mark((function e(n){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=ne({},g,{shipping:ne({},null===g||void 0===g?void 0:g.shipping,ee({},n.name,n.value))}),j(t),e.next=4,G(n,E,A);case 4:case"end":return e.stop()}}),e)}))),re=Y(l().mark((function e(n){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=ne({},g,{billing:ne({},null===g||void 0===g?void 0:g.billing,ee({},n.name,n.value))}),j(t),e.next=4,G(n,M,K);case 4:case"end":return e.stop()}}),e)})));return(0,s.useEffect)(Y(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===S){e.next=3;break}return e.next=3,L();case 3:case"end":return e.stop()}}),e)}))),[S]),(0,a.jsxs)(a.Fragment,{children:[u?(0,a.jsx)("form",{onSubmit:function(e){e.preventDefault();var n=(null===g||void 0===g?void 0:g.billingDifferentThanShipping)?f(null===g||void 0===g?void 0:g.billing,null===_||void 0===_?void 0:_.length):{errors:null,isValid:!0},t=f(null===g||void 0===g?void 0:g.shipping,null===q||void 0===q?void 0:q.length);if(t.isValid&&n.isValid){var a=(0,x.Wj)(g);P(null),w(a)}else j(ne({},g,{billing:ne({},g.billing,{errors:n.errors}),shipping:ne({},g.shipping,{errors:t.errors})}))},className:"checkout-form",children:(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-20",children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"billing-details",children:[(0,a.jsx)("h2",{className:"text-xl font-medium mb-4",children:"Shipping Details"}),(0,a.jsx)(V,{states:q,countries:i,input:null===g||void 0===g?void 0:g.shipping,handleOnChange:function(e){return X(e,!0,!0)},isFetchingStates:D,isShipping:!0,isBillingOrShipping:!0})]}),(0,a.jsx)("div",{children:(0,a.jsx)(R,{name:"billingDifferentThanShipping",type:"checkbox",checked:null===g||void 0===g?void 0:g.billingDifferentThanShipping,handleOnChange:X,label:"Billing different than shipping",containerClassNames:"mb-4 pt-4"})}),(null===g||void 0===g?void 0:g.billingDifferentThanShipping)?(0,a.jsxs)("div",{className:"billing-details",children:[(0,a.jsx)("h2",{className:"text-xl font-medium mb-4",children:"Billing Details"}),(0,a.jsx)(V,{states:_,countries:t,input:null===g||void 0===g?void 0:g.billing,handleOnChange:function(e){return X(e,!1,!0)},isFetchingStates:U,isShipping:!1,isBillingOrShipping:!0})]}):null]}),(0,a.jsxs)("div",{className:"your-orders",children:[(0,a.jsx)("h2",{className:"text-xl font-medium mb-4",children:"Your Order"}),(0,a.jsx)(d,{cart:u}),(0,a.jsx)(p,{input:g,handleOnChange:X}),(0,a.jsx)("div",{className:"place-order-btn-wrap mt-5",children:(0,a.jsx)("button",{className:"bg-purple-600 text-white px-5 py-3 rounded-sm w-auto xl:w-full",type:"submit",children:"Place Order"})}),J&&(0,a.jsx)("p",{children:"Processing Order..."}),O&&(0,a.jsxs)("p",{children:["Error : ",O," :( Please try again"]})]})]})}):"",(0,a.jsx)(y,{response:$})]})},le=!0,se=function(e){var n=e.data,t=e.categories,r=e.tags;return(0,a.jsx)(i.Z,{categories:t,tags:r,children:(0,a.jsxs)("div",{className:"checkout container mx-auto my-32 px-4 xl:px-0",children:[(0,a.jsx)("h1",{className:"mb-5 text-2xl uppercase",children:"Checkout Page"}),(0,a.jsx)(re,{countriesData:null!==(ae=null===n||void 0===n?void 0:n.wooCountries)&&void 0!==ae?ae:{}})]})})}},5413:function(e,n,t){"use strict";t.d(n,{Qn:function(){return i},W3:function(){return r},Wj:function(){return l},zn:function(){return s}});var a=t(5934),i=function(e){var n=e.match(/[+-]?\d+(\.\d+)?/g)[0];return null!==n?parseFloat(parseFloat(n).toFixed(2)):""},r=function(e){var n,t=null;if(void 0===e||!e.cart.contents.nodes.length)return t;var a=e.cart.contents.nodes;(t={}).products=[];for(var r,l=0,s=0;s<a.length;s++){var o,c,d,u,p,h,m,v,g,f,x,y,b,j,N,C,S,w,k=null===a||void 0===a||null===(o=a[s])||void 0===o||null===(c=o.product)||void 0===c?void 0:c.node,O={},P=i(a[s].total);O.productId=null!==(x=null===k||void 0===k?void 0:k.productId)&&void 0!==x?x:"",O.cartKey=null!==(y=null===a||void 0===a||null===(d=a[s])||void 0===d?void 0:d.key)&&void 0!==y?y:"",O.name=null!==(b=null===k||void 0===k?void 0:k.name)&&void 0!==b?b:"",O.qty=null===a||void 0===a||null===(u=a[s])||void 0===u?void 0:u.quantity,O.price=P/(null===O||void 0===O?void 0:O.qty),O.totalPrice=null!==(j=null===a||void 0===a||null===(p=a[s])||void 0===p?void 0:p.total)&&void 0!==j?j:"",O.image={sourceUrl:null!==(N=null===k||void 0===k||null===(h=k.image)||void 0===h?void 0:h.sourceUrl)&&void 0!==N?N:"",srcSet:null!==(C=null===k||void 0===k||null===(m=k.image)||void 0===m?void 0:m.srcSet)&&void 0!==C?C:"",title:null!==(S=null===k||void 0===k||null===(v=k.image)||void 0===v?void 0:v.title)&&void 0!==S?S:"",altText:null!==(w=null===k||void 0===k||null===(g=k.image)||void 0===g?void 0:g.altText)&&void 0!==w?w:""},l+=null===a||void 0===a||null===(f=a[s])||void 0===f?void 0:f.quantity,t.products.push(O)}return t.totalProductsCount=l,t.totalProductsPrice=null!==(r=null===e||void 0===e||null===(n=e.cart)||void 0===n?void 0:n.total)&&void 0!==r?r:"",t},l=function(e){var n,t,i,r,l,s,o,c,d,u,p,h=e.billingDifferentThanShipping?e.billing:e.shipping,m={clientMutationId:(0,a.Z)(),shipping:{firstName:null===e||void 0===e||null===(n=e.shipping)||void 0===n?void 0:n.firstName,lastName:null===e||void 0===e||null===(t=e.shipping)||void 0===t?void 0:t.lastName,address1:null===e||void 0===e||null===(i=e.shipping)||void 0===i?void 0:i.address1,address2:null===e||void 0===e||null===(r=e.shipping)||void 0===r?void 0:r.address2,city:null===e||void 0===e||null===(l=e.shipping)||void 0===l?void 0:l.city,country:null===e||void 0===e||null===(s=e.shipping)||void 0===s?void 0:s.country,state:null===e||void 0===e||null===(o=e.shipping)||void 0===o?void 0:o.state,postcode:null===e||void 0===e||null===(c=e.shipping)||void 0===c?void 0:c.postcode,email:null===e||void 0===e||null===(d=e.shipping)||void 0===d?void 0:d.email,phone:null===e||void 0===e||null===(u=e.shipping)||void 0===u?void 0:u.phone,company:null===e||void 0===e||null===(p=e.shipping)||void 0===p?void 0:p.company},billing:{firstName:null===h||void 0===h?void 0:h.firstName,lastName:null===h||void 0===h?void 0:h.lastName,address1:null===h||void 0===h?void 0:h.address1,address2:null===h||void 0===h?void 0:h.address2,city:null===h||void 0===h?void 0:h.city,country:null===h||void 0===h?void 0:h.country,state:null===h||void 0===h?void 0:h.state,postcode:null===h||void 0===h?void 0:h.postcode,email:null===h||void 0===h?void 0:h.email,phone:null===h||void 0===h?void 0:h.phone,company:null===h||void 0===h?void 0:h.company},shipToDifferentAddress:e.billingDifferentThanShipping,paymentMethod:e.paymentMethod,isPaid:!1};return e.createAccount&&(m.account={username:e.username,password:e.password}),m},s=function(e,n,t){var a=[];return e.map((function(e){e.cartKey===t?a.push({key:e.cartKey,quantity:parseInt(n)}):a.push({key:e.cartKey,quantity:e.qty})})),a}},2321:function(e,n,t){"use strict";function a(){var e,n,t=(e=["\nquery GET_CART {\n  cart {\n    contents {\n      nodes {\n        key\n        product {\n          node {\n            id\n            productId: databaseId\n            name\n            description\n            type\n            onSale\n            slug\n            averageRating\n            reviewCount\n            image {\n              id\n              sourceUrl\n              srcSet\n              altText\n              title\n            }\n            galleryImages {\n              nodes {\n                id\n                sourceUrl\n                srcSet\n                altText\n                title\n              }\n            }\n          }\n        }\n        variation {\n          node {\n            id\n            variationId: databaseId\n            name\n            description\n            type\n            onSale\n            price\n            regularPrice\n            salePrice\n            image {\n              id\n              sourceUrl\n              srcSet\n              altText\n              title\n            }\n          }\n          attributes {\n            id\n            name\n            value\n          }\n        }\n        quantity\n        total\n        subtotal\n        subtotalTax\n      }\n    }\n    appliedCoupons {\n      code\n      discountAmount\n      discountTax\n    }\n    subtotal\n    subtotalTax\n    shippingTax\n    shippingTotal\n    total\n    totalTax\n    feeTax\n    feeTotal\n    discountTax\n    discountTotal\n  }\n}\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return a=function(){return t},t}var i=(0,t(1439).Ps)(a());n.Z=i}},function(e){e.O(0,[662,170,641,394,774,888,179],(function(){return n=354,e(e.s=n);var n}));var n=e.O();_N_E=n}]);