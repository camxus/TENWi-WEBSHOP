import Error from "./Error";

const ShippingModes = ( { methods, chosenShippingMethod, handleOnChange } ) => {
	console.log(methods)
	return (
		<div className="mt-3">
				<td className="cart-element-total text-2xl font-normal">Shipping</td>
				<div className="form-check payment-input-container mt-2">
					{/* <div key={"free_shipping:16"}>
						<label className="form-check-label">
							<input onChange={ e => handleOnChange(e)} value={"free_shipping:16"} className="form-check-input mr-3" title="shippingMethod" type="radio" checked={"free_shipping:16" === chosenShippingMethod}/>
							<span className="payment-content">Free Shipping</span>
						</label>
					</div> */}

					{methods && methods.map(method =>
						<div key={method}>
							<label className="form-check-label">
								<input onChange={ e => handleOnChange(e)} value={method} className="form-check-input mr-3" title="shippingMethod" type="radio" checked={method === chosenShippingMethod}/>
								<span className="payment-content">{method}</span>
							</label>
						</div>
						)}
						{/* <input onChange={ handleOnChange } value="bacs" className="form-check-input mr-3" title="shippingMethod" type="radio" checked={'bacs' === shippingMethod}/> */}
				</div>
		</div>
	);
};

export default ShippingModes;
