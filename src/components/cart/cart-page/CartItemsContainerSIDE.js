import Link from 'next/link';
import { useContext, useState } from 'react';
import { AppContext } from "../../context/AppContext";
import { getFormattedCart, getUpdatedItems } from '../../../functions';
import CartItem from "./CartItem";
import { v4 } from 'uuid';
import { useMutation, useQuery } from '@apollo/client';
import UPDATE_CART from "../../../mutations/update-cart";
import GET_CART from "../../../queries/get-cart";
import CLEAR_CART_MUTATION from "../../../mutations/clear-cart";
import {isEmpty} from 'lodash'

import {getFloatVal} from '../../../../src/functions.js'

import cartbar from '../../../../src/styles/cartbar.module.css'


const CartItemsContainer = () => {


	// @TODO wil use it in future variations of the project.
	const [ cart, setCart ] = useContext( AppContext );
	const [requestError, setRequestError] = useState( null );

	// Get Cart Data.
	const { loading, error, data, refetch } = useQuery( GET_CART, {
		notifyOnNetworkStatusChange: true,
		onCompleted: () => {

			// Update cart in the localStorage.
			const updatedCart = getFormattedCart( data );
			localStorage.setItem( 'tenwi-cart', JSON.stringify( updatedCart ) );

			// Update cart data in React Context.
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
	let currency = cart?.totalProductsPrice ? cart.totalProductsPrice.slice(-1) : "";
	let price = getFloatVal(cart?.totalProductsPrice ? cart.totalProductsPrice : "0");
	let totalPrice = `${currency}${price}`

	console.log(currency)
	return (
		<div className="cart">
			{ cart ? (
				<div className="cart-wrapper container">
					<div className="cart-header-grid">
						<h1 className="text-2xl mb-5 uppercase">Cart</h1>
						{/*Clear entire cart*/}
						<div className="clear-cart text-right">
							<button className="" onClick={ ( event ) => handleClearCart( event ) } disabled={ clearCartProcessing }>
								<span className="cart">Clear Cart</span>
								<i className="fa fa-arrow-alt-right"/>
							</button>
							{ clearCartProcessing ? <p>Clearing...</p> : '' }
							{ updateCartProcessing ? <p>Updating...</p> : null }
						</div>
					</div>
					<div className="grid">
						<table className="cart-products">
								<thead className="text-left">
								<tr className="cart-head-container">
									<th className="cart-heading-el" scope="col"/>
									<th className="cart-heading-el" scope="col"/>
									<th className="cart-heading-el" scope="col">Product</th>
									<th className="cart-heading-el" scope="col">Price</th>
									<th className="cart-heading-el" scope="col">Quantity</th>
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
						<div className="row cart-total-container" className={cartbar[`cart-total-container`]}>
							<div className="">
								{/* <h2 className="text-2xl">Cart Total</h2> */}
								<table className="table">
									<tbody>
									<tr className="table-light-flex">
										<td className={cartbar[`cart-element-total`]}>Total</td>
										<td className={cartbar[`cart-element-amt`]}>{ ( 'string' !== typeof totalPrice ) ? totalPrice.toFixed(2) : totalPrice }</td>
									</tr>
									{/* <tr className="table-light">
										<td className="cart-element-total">Total</td>
										<td className="cart-element-amt">{ ( 'string' !== typeof cart.totalProductsPrice ) ? cart.totalProductsPrice.toFixed(2) : cart.totalProductsPrice }</td>
									</tr> */}
									</tbody>
								</table>
								<Link href="/checkout">
									<button className="">
										<span className="cart-checkout-txt">Proceed to Checkout</span>
										<i className="fas fa-long-arrow-alt-right"/>
									</button>
								</Link>
							</div>
						</div>
					</div>

					{/* Display Errors if any */}
					{ requestError ? <div className="row cart-total-container mt-5" className={cartbar[`cart-total-container`]}> { requestError } </div> : '' }
				</div>
			) : (
				<div className="container">
					<h2 className="text-2xl mb-5">YOUR CART IS EMPTY</h2>
					<Link href="/">
						<button className="">
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
