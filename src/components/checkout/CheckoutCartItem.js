const CheckoutCartItem = ( { item } ) => {

	return (
		<tr className="cart-item" key={ item.productId }>
			<td className="cart-element">
				<img width="64" src={ item.image.sourceUrl } srcSet={ item.image.srcSet } alt={item.image.title}/>
			</td>
			<td className="cart-element">{ item.name }</td>
			<td className="cart-element">{ item.totalPrice }</td>
		</tr>
	)
};

export default CheckoutCartItem;
