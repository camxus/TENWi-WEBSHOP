import {v4} from 'uuid';

import {useState, useContext, useEffect} from 'react';
import {useMutation, useQuery, useLazyQuery} from '@apollo/client';

import {AppContext} from "../context/AppContext";
import {UserContext} from "../context/UserContext.js"

import YourOrder from "./YourOrder";
import PaymentModes from "./PaymentModes";
import ShippingModes from "./ShippingModes";
import Paypal from "./Paypal";


import validateAndSanitizeCheckoutForm from '../../validator/checkout';
import {getFloatVal, getFormattedCart, createCheckoutData} from "../../functions";
import OrderSuccess from "./OrderSuccess";

import GET_CART from "../../queries/get-cart";
import CHECKOUT_MUTATION from "../../mutations/checkout";
import {POST_SHIPPING_METHOD} from "../../mutations/shipping";

import Address from "./Address";
import {
    handleBillingDifferentThanShipping,
    handleCreateAccount, handleStripeCheckout,
    setStatesForCountry
} from "../../utils/checkout";
import CheckboxField from "./form-elements/CheckboxField";
import CLEAR_CART_MUTATION from "../../mutations/clear-cart";


import Link from "next/link"


// Use this for testing purposes, so you dont have to fill the checkout form over an over again.
// const defaultCustomerInfo = {
// 	firstName: 'Imran',
// 	lastName: 'Sayed',
// 	address1: '123 Abc farm',
// 	address2: 'Hill Road',
// 	city: 'Mumbai',
// 	country: 'IN',
// 	state: 'Maharastra',
// 	postcode: '221029',
// 	email: 'codeytek.academy@gmail.com',
// 	phone: '9883778278',
// 	company: 'The Company',
// 	errors: null
// }

const defaultCustomerInfo = {
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    city: '',
    country: '',
    state: '',
    postcode: '',
    email: '',
    phone: '',
    company: '',
    errors: null
}

const CheckoutForm = ({methods, countriesData}) => {

    const {billingCountries, shippingCountries} = countriesData || {}
    const countryCodes = require("../../utils/country_codes.json")

    const initialState = {
        billing: {
            ...defaultCustomerInfo,
        },
        shipping: {
            ...defaultCustomerInfo
        },
        createAccount: false,
        orderNotes: '',
        billingDifferentThanShipping: false,
        paymentMethod: 'ppcp-gateway',
    };

    const [cart, setCart] = useContext(AppContext);
    const [input, setInput] = useState(initialState);
    const [orderData, setOrderData] = useState(null);
    const [requestError, setRequestError] = useState(null);
    const [theShippingStates, setTheShippingStates] = useState([]);
    const [isFetchingShippingStates, setIsFetchingShippingStates] = useState(false);
    const [theBillingStates, setTheBillingStates] = useState([]);
    const [isStripeOrderProcessing, setIsStripeOrderProcessing] = useState(false);
    const [isFetchingBillingStates, setIsFetchingBillingStates] = useState(false);
    const [createdOrderData, setCreatedOrderData] = useState({});
	const [errorHandler, setErrorHandler] = useState("");
    // const [ chosenShippingMethod, setChosenShippingMethod ] = useState("Express Shipping")
    // const [ shippingMethod, setShippingMethod ] = useState("free_shipping:16")
    const [ shippingAmount, setShippingAmount ] = useState(0)

    const [paypalLoaded, setPaypalLoaded ] = useState(false)

    const ShippingMethods = ["Express Shipping", "Standard Shipping"]

    

    // Create New order: Checkout Mutation.
    const [checkout, {
        data: checkoutResponse,
        loading: checkoutLoading,
    }] = useMutation(CHECKOUT_MUTATION, {
        variables: {
            input: orderData
        },
        onError: (error) => {
            if(error?.graphQLErrors?.[0]?.message  === "Für diese E-Mail-Adresse existiert bereits ein Kundenkonto. <a href=\"#\" class=\"showlogin\">Bitte anmelden.</a>")
				{
					setErrorHandler("email-exists")
                    setRequestError(error?.graphQLErrors?.[0]?.message ?? '');
				}
            else{
                setRequestError(error?.graphQLErrors?.[0]?.message ?? '');
            }
            console.log("ERROR ", error, "WITH", error?.graphQLErrors?.[0]?.message ?? '', "WITH", orderData)

        }
    });

    const [ clearCartMutation ] = useMutation( CLEAR_CART_MUTATION );

    /*
     * Handle form submit.
     *
     * @param {Object} event Event Object.
     *
     * @return {void}
     */
    const handleFormSubmit = async (event) => {
        console.log(event)
        event.preventDefault();

        /**
         * Validate Billing and Shipping Details
         *
         * Note:
         * 1. If billing is different than shipping address, only then validate billing.
         * 2. We are passing theBillingStates?.length and theShippingStates?.length, so that
         * the respective states should only be mandatory, if a country has states.
         */
        const billingValidationResult = input?.billingDifferentThanShipping ? validateAndSanitizeCheckoutForm(input?.billing, theBillingStates?.length) : {errors: null, isValid: true};
        const shippingValidationResult = validateAndSanitizeCheckoutForm(input?.shipping, theShippingStates?.length);

        if (!shippingValidationResult.isValid || !billingValidationResult.isValid) {
            setInput({
                ...input,
                billing: {...input.billing, errors: billingValidationResult.errors},
                shipping: {...input.shipping, errors: shippingValidationResult.errors}
            });

            return;
        }

        if ( 'stripe-mode' === input.paymentMethod ) {
            console.log(shippingAmount)
            setOrderData(await handleStripeCheckout(input, cart?.products, setRequestError, clearCartMutation, setIsStripeOrderProcessing, setCreatedOrderData));
        	return null;
        }
        if ( 'ppcp-gateway' === input.paymentMethod ) {
            console.log(input)
            localStorage.setItem( 'user-info', JSON.stringify( input ) );
            setPaypalLoaded(true)
            return null;
        }
        const checkOutData = createCheckoutData(input);
        console.log(checkOutData)
        setRequestError(null);
        /**
         *  When order data is set, checkout mutation will automatically be called,
         *  because 'orderData' is added in useEffect as a dependency.
         */
        setOrderData(checkOutData);
    };

    /*
     * Handle onchange input.
     *
     * @param {Object} event Event Object.
     * @param {bool} isShipping If this is false it means it is billing.
     * @param {bool} isBillingOrShipping If this is false means its standard input and not billing or shipping.
     *
     * @return {void}
     */
    const handleOnChange = async (event, isShipping = false, isBillingOrShipping = false) => {
        
        const {target} = event || {};

        if ('createAccount' === target.name) {
            handleCreateAccount(input, setInput, target)
        } else if ('billingDifferentThanShipping' === target.name) {
            handleBillingDifferentThanShipping(input, setInput, target);
        } else if (isBillingOrShipping) {
            if (isShipping) {
                await handleShippingChange(target)
            } else {
                await handleBillingChange(target)
            }
        } else {
            const newState = {...input, [target.name]: target.value};
            setInput(newState);
            console.log(input)
        }
    };
    
    
    const handleShippingChange = async (target) => {
        const newState = {...input, shipping: {...input?.shipping, [target.name]: target.value}};
        setInput(newState);
        await setStatesForCountry(target, setTheShippingStates, setIsFetchingShippingStates);
    }

    const handleBillingChange = async (target) => {
        const newState = {...input, billing: {...input?.billing, [target.name]: target.value}};
        setInput(newState);
        await setStatesForCountry(target, setTheBillingStates, setIsFetchingBillingStates);
    }

    useEffect(async () => {

        if (null !== orderData) {
            // Call the checkout mutation when the value for orderData changes/updates.
            console.log("data",orderData)
            await checkout();
        }

    }, [orderData]);


    // Loading Data
    const isOrderProcessing = checkoutLoading || isStripeOrderProcessing;

    const initialOptions = {
        "client-id": `${process.env.PAYPAL_CLIENT}` ,
        currency: "EUR",
        intent: "capture",
        "data-client-token": `email`,
    };

    // useEffect(()=> {
    //     cart?.products.push({
    //         cartKey: "",
    //         image: 
    //         {altText: "",        
    //         sourceUrl: "",        
    //         srcSet: "",        
    //         title: ""   
    //         },   
    //         name: "Shipping",        
    //         price: cart.shippingPrice,         
    //         productId: 9999,        
    //         qty: 1,        
    //         slug: "",        
    //         totalPrice: cart.shippingPrice + "€"})
    // },[cart])
    
    const [ user, setUser ] = useContext(UserContext)
    return (
        <>
            {cart ? (
                <form onSubmit={handleFormSubmit} className="checkout-form">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                        <div>
                            {/*Shipping Details*/}
                            <div className="billing-details">
                                <h2 className="text-xl font-medium mb-4">Shipping Details</h2>
                                <Address
                                    states={theShippingStates}
                                    countries={shippingCountries}
                                    input={user.shipping ??input?.shipping}
                                    handleOnChange={(event) => handleOnChange(event, true, true)}
                                    isFetchingStates={isFetchingShippingStates}
                                    isShipping
                                    isBillingOrShipping
                                />
                            </div>
                            <div>
                                <CheckboxField
                                    name="billingDifferentThanShipping"
                                    type="checkbox"
                                    checked={input?.billingDifferentThanShipping}
                                    handleOnChange={handleOnChange}
                                    label="Billing different than shipping"
                                    containerClassNames="mb-4 pt-4"
                                />
                            </div>
                            {/*Billing Details*/}
                            {input?.billingDifferentThanShipping ? (
                                <div className="billing-details">
                                    <h2 className="text-xl font-medium mb-4">Billing Details</h2>
                                    <Address
                                        states={theBillingStates}
                                        countries={billingCountries}
                                        input={user.billing ?? input?.billing}
                                        handleOnChange={(event) => handleOnChange(event, false, true)}
                                        isFetchingStates={isFetchingBillingStates}
                                        isShipping={false}
                                        isBillingOrShipping
                                    />
                                </div>
                            ) : null}

                        </div>
                        {/* Order & Payments*/}
                        <div className="your-orders">
                            {/*	Order*/}
                            <h2 className="text-xl font-medium mb-4">Your Order</h2>
                            <YourOrder cart={cart}/>

                            {/*Payment*/}
                            {/* { getFloatVal(cart.totalProductsPrice) < 200 && <ShippingModes methods={ShippingMethods} chosenShippingMethod={chosenShippingMethod} handleOnChange={handleOnShippingChange}/>}                             */}
                            {/* <PaymentModes input={input} handleOnChange={handleOnChange}/> */}
                            
                            <div className="place-order-btn-wrap mt-5">
                                {!paypalLoaded &&
                                <button disabled={isOrderProcessing} className="bg-black text-white px-5 py-3 rounded-sm w-auto xl:w-full"
                                        type="submit">
                                    Place Order
                                </button>
                                }
                             
                                {paypalLoaded &&
                                 <Paypal cart={cart} input ={ input } products={ cart?.products } setRequestError={setRequestError} clearCartMutation={ clearCartMutation } setIsStripeOrderProcessing={ setIsStripeOrderProcessing} setCreatedOrderData={setCreatedOrderData}/>
                                  } 
                            </div> 
                 
                            {/* Checkout Loading*/}
                            {isOrderProcessing && <p>Processing Order...</p>}
                            {requestError && <p>Error : {requestError}</p>}
                        </div>
                    </div>
                </form>
            ) : 
            <div className="container mx-auto my-32 px-4 xl:px-0">
					<h2 className="text-2xl mb-5">YOUR CART IS EMPTY</h2>
					<Link href="/shop">
						<button className="bg-purple-600 text-white px-5 py-3 rounded-sm">
							<span className="cart-checkout-txt">ADD NEW PRODUCTS</span>
							<i className="fas fa-long-arrow-alt-right"/>
						</button>
					</Link>
				</div>
            }

            {/*	Show message if Order Success*/}
            <OrderSuccess response={checkoutResponse}/>
        </>
    );
};

export default CheckoutForm;
