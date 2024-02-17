import { Fragment } from 'react';
import CheckoutCartItem from "./CheckoutCartItem";

const YourOrder = ( { cart } ) => {

	return (
		<>
			{ cart ? (
				<>
					{/*Product Listing*/}
					<table className="checkout-cart table table-hover w-full mb-10">
						<thead>
						<tr className="cart-head-container text-left">
							<th className="cart-heading-el" scope="col"/>
							<th className="cart-heading-el" scope="col">Product</th>
							<th className="cart-heading-el" scope="col">Total</th>
						</tr>
						</thead>
						<tbody>
						{ cart.products.length && (
							cart.products.map( item => (
								<CheckoutCartItem key={ item.productId } item={ item } />
							) )
						) }
						{/*Total*/}
						<tr className="bg-gray-200">
							<td className=""/>
							<td className="checkout-total font-normal text-xl">Total</td>
							<td className="checkout-total font-bold text-xl">{ cart.total }</td>
						</tr>
						{/* <tr className="">
							<td className=""/>
							<td className="checkout-total">Total</td>
							<td className="checkout-total">{ cart.totalProductsPrice }</td>
						</tr> */}
						</tbody>
					</table>
				</>
			) : '' }
		</>
	)
};

export default YourOrder;
