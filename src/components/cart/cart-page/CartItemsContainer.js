import Link from 'next/link';
import { useContext, useState, useEffect } from 'react';
import { AppContext } from "../../context/AppContext";
import { getFormattedCart, getUpdatedItems } from '../../../functions';
import CartItem from "./CartItem";
import { v4 } from 'uuid';
import { useMutation, useQuery } from '@apollo/client';
import UPDATE_CART from "../../../mutations/update-cart";
import {POST_SHIPPING_METHOD} from "../../../mutations/shipping.js";
import GET_CART from "../../../queries/get-cart";
import CLEAR_CART_MUTATION from "../../../mutations/clear-cart";
import {isEmpty} from 'lodash'

import {getFloatVal} from "../../../functions"

import ShippingModes from "../../checkout/ShippingModes"
import CountrySelection from "../../checkout/CountrySelection"
import countryCodes from "../../../utils/country_codes.json"

import axios from 'axios'


const CartItemsContainer = ({countries}) => {

	// @TODO wil use it in future variations of the project.
	const [ cart, setCart ] = useContext( AppContext );
	const [ shippingAmount, setShippingAmount ] = useState( 0 );
	const [ chosenShippingMethod, setChosenShippingMethod ] = useState( null );
	const [ shippingMethod, setShippingMethod ] = useState( null );
	const [ requestError, setRequestError ] = useState( null );
	const [ countryName, setCountryName ] = useState( null );
	const [ countryCode, setCountryCode ] = useState( null );
	



	useEffect( ()=> {
		const getCC = async () => {
		axios.get('https://ipapi.co/json/').then((response) => {
			let data = response.data;
			setCountryName(data.country_name)
			setCountryCode(data.country_code)
		}).catch((error) => {
			console.log(error);
		});
		
		}
		getCC()
	}, [])

	
	// Get Cart Data.
		const { loading, error, data, refetch } = useQuery( GET_CART, {
			notifyOnNetworkStatusChange: true,
			onCompleted: () => {

				// Update cart in the localStorage.
				const updatedCart = getFormattedCart( data, shippingAmount );
				localStorage.setItem( 'tenwi-cart', JSON.stringify( updatedCart ) );

				// Update cart data in React Context.
				console.log(cart)
				setCart( updatedCart );
			}
		} );
	

	// Update Cart Mutation.
	const [updateCart, { data: updateCartResponse, loading: updateCartProcessing, error: updateCartError }] = useMutation( UPDATE_CART, {
		onCompleted: () => {
			refetch();
		},
		onError: ( error ) => {
			if ( error ) {
				const errorMessage = error?.graphQLErrors?.[ 0 ]?.message ? error.graphQLErrors[ 0 ].message : '';
				setRequestError( errorMessage );
			}
		}
	} );

	// Update Cart Mutation.
	const [clearCart, { data: clearCartRes, loading: clearCartProcessing, error: clearCartError }] = useMutation( CLEAR_CART_MUTATION, {
		onCompleted: () => {
			refetch();
		},
		onError: ( error ) => {
			if ( error ) {
				const errorMessage = ! isEmpty(error?.graphQLErrors?.[ 0 ]) ? error.graphQLErrors[ 0 ]?.message : '';
				setRequestError( errorMessage );
			}
		}
	} );

	/*
	 * Handle remove product click.
	 *
	 * @param {Object} event event
	 * @param {Integer} Product Id.
	 *
	 * @return {void}
	 */
	const handleRemoveProductClick = ( event, cartKey, products ) => {

		event.stopPropagation();
		if ( products.length ) {

			// By passing the newQty to 0 in updateCart Mutation, it will remove the item.
			const newQty = 0;
			const updatedItems = getUpdatedItems( products, newQty, cartKey );

			updateCart( {
				variables: {
					input: {
						clientMutationId: v4(),
						items: updatedItems
					}
				},
			} );
		}
	};

	// Clear the entire cart.
	const handleClearCart = ( event ) => {

		event.stopPropagation();

		if ( clearCartProcessing ) {
			return;
		}

		clearCart( {
			variables: {
				input: {
					clientMutationId: v4(),
					all: true
				}
			},
		} );
	}

	const handleOnShippingChange = (event) => {
		console.log(countryCode)
        setChosenShippingMethod(event.target.value)
        if(countryCode !== undefined){
            console.log("event", countryCode)
            if (!countryCodes.EU.find(element => element = countryCode)){
				// INTERNATIONAL
                if(event.target.value === "Express Shipping"){
                    setShippingMethod("flat_rate:26");          
                    setShippingAmount(61)
                    
                }
                else if(event.target.value === "Standard Shipping"){
                    setShippingMethod("flat_rate:27");          
                    setShippingAmount(27)
                }
            }
            else if (countryCodes.EU.find(element => element = countryCode)){
				// EU
                if(event.target.value === "Express Shipping"){
                    setShippingMethod("flat_rate:28");             
                    setShippingAmount(31)
					console.log("Express Shipping")

                    
                }
                if(event.target.value === "Standard Shipping"){
                    setShippingMethod("flat_rate:29");   
                    setShippingAmount(16)
					console.log("Standard Shipping")
                    
                }
            }
            else if (getFloatVal(cart.totalProductsPrice) > 200){
				console.log(cart.totalProductsPrice)
                setShippingMethod("free_shipping:30");                        
                // await postShipping()
            }
        }
    }
    useEffect( async () => {
		console.log(shippingMethod)
		console.log(shippingAmount)
		await postShipping()
    }, [shippingMethod]);

    
    const [postShipping, { data: postShippingResponse, loading: postShippingProcessing, error: postShippingError }] = useMutation( POST_SHIPPING_METHOD, {
            variables: {
                input: {shippingMethods: shippingMethod, clientMutationId: v4()}
            },
            onCompleted: () => {
                refetch();
                console.log("completed");
            },
            onError: ( error ) => {
                if ( error ) {
                    const errorMessage = error?.graphQLErrors?.[ 0 ]?.message ? error.graphQLErrors[ 0 ].message : '';
                    setRequestError( errorMessage );
                }
            }
        } );
		
		let methods = ["Express Shipping", "Standard Shipping"]

		const handleOnCountryChange = (event) => {
			event.persist()
			setCountryCode(event.target.value) 
		}
	return (
		<div className="cart product-cart-container container mx-auto my-32 px-4 xl:px-0">
			{ cart ? (
				<div className="cart-wrapper container">
					<div className="cart-header grid grid-cols-2 gap-4">
						<h1 className="text-2xl mb-5 uppercase">Cart</h1>
						{/*Clear entire cart*/}
						<div className="clear-cart text-right">
							<button className="px-4 py-1 bg-gray-500 text-white rounded-sm w-auto" onClick={ ( event ) => handleClearCart( event ) } disabled={ clearCartProcessing }>
								<span className="cart">Clear Cart</span>
								<i className="fa fa-arrow-alt-right"/>
							</button>
							{ clearCartProcessing ? <p>Clearing...</p> : '' }
							{ updateCartProcessing ? <p>Updating...</p> : null }
						</div>
					</div>
					<div className="grid grid-cols-1 xl:grid-cols-4 gap-0 xl:gap-4 mb-5">
						<table className="cart-products table-auto col-span-3 mb-5">
								<thead className="text-left">
								<tr className="cart-head-container">
									<th className="cart-heading-el" scope="col"/>
									<th className="cart-heading-el" scope="col"/>
									<th className="cart-heading-el" scope="col">Product</th>
									<th className="cart-heading-el" scope="col">Quantity</th>
									<th className="cart-heading-el" scope="col">Price</th>
									<th className="cart-heading-el" scope="col">Total</th>
								</tr>
								</thead>
								<tbody>
								{ cart.products.length && (
									cart.products.map( item => (
										<CartItem
											key={ item.productId }
											item={ item }
											updateCartProcessing={ updateCartProcessing }
											products={ cart.products }
											handleRemoveProductClick={ handleRemoveProductClick }
											updateCart={ updateCart }
										/>
									) )
								) }
								</tbody>
							</table>

						{/*Cart Total*/ }
						<div className="row cart-total-container border p-5 bg-gray-200">
							<div className="">
								{/* <h2 className="text-2xl">Cart Total</h2> */}
								<table className="table table-hover mb-5">
									<tbody>
									<tr className="table-light flex flex-col">
										<td className="cart-element-total text-2xl font-normal">Subtotal</td>
										<td className="cart-element-amt text-2xl font-bold">{ ( 'string' !== typeof cart.total ) ? cart.total : cart.total }</td>
									</tr>
									{!countryCode && <CountrySelection input="" handleOnChange={handleOnCountryChange} countries={countries} isShipping=""/>}
									{ countryCode && (getFloatVal(cart.totalProductsPrice) < 200) && <ShippingModes methods={methods} chosenShippingMethod={chosenShippingMethod} handleOnChange={handleOnShippingChange}/>}                            
									{/* <tr className="table-light">
										<td className="cart-element-total">Total</td>
										<td className="cart-element-amt">{ ( 'string' !== typeof cart.totalProductsPrice ) ? cart.totalProductsPrice.toFixed(2) : cart.totalProductsPrice }</td>
									</tr> */}
									</tbody>
								</table>
								{ (((getFloatVal(cart.totalProductsPrice) < 200) && chosenShippingMethod ) || (getFloatVal(cart.totalProductsPrice) > 200) ) && 
								<Link href="/checkout">
									<button className="bg-black text-white px-5 py-3 rounded-sm w-auto xl:w-full">
										<span className="cart-checkout-txt">Proceed to Checkout</span>
										<i className="fas fa-long-arrow-alt-right"/>
									</button>
								</Link>
								}
							</div>
						</div>
					</div>

					{/* Display Errors if any */}
					{/* { requestError ? <div className="row cart-total-container mt-5"> { requestError } </div> : '' } */}
				</div>
			) : (
				<div className="container mx-auto my-32 px-4 xl:px-0">
					<h2 className="text-2xl mb-5">YOUR CART IS EMPTY</h2>
					<Link href="/shop">
						<button className="bg-black text-white px-5 py-3 rounded-sm">
							<span className="cart-checkout-txt">ADD NEW PRODUCTS</span>
							<i className="fas fa-long-arrow-alt-right"/>
						</button>
					</Link>
				</div>
			) }
		</div>

	);
};

export default CartItemsContainer;
