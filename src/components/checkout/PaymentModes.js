import Error from "./Error";

const PaymentModes = ( { input, handleOnChange } ) => {

	const { errors, paymentMethod } = input || {}

	return (
		<div className="mt-3">
			<Error errors={ errors } fieldName={ 'paymentMethod' }/>
			{/*Direct bank transfers*/}
			<div className="form-check payment-input-container mt-2">
				<label className="form-check-label">
					<input onChange={ handleOnChange } value="bacs" className="form-check-input mr-3" name="paymentMethod" type="radio" checked={'bacs' === paymentMethod}/>
					<span className="payment-content">Direct Bank Transfer</span>
				</label>
			</div>
			{/*Pay with Paypal*/}
			{/* <div className="form-check payment-input-container mt-2">
				<label className="form-check-label">
					<input onChange={ handleOnChange } value="ppcp-gateway" className="form-check-input mr-3" name="paymentMethod" type="radio" checked={'ppcp-gateway' === paymentMethod}/>
					<span className="payment-content">Pay with Paypal</span>
				</label>
			</div> */}
			{/* Check Payments */}
			{/* <div className="form-check payment-input-container mt-2">
				<label className="form-check-label">
					<input onChange={ handleOnChange } value="cheque" className="form-check-input mr-3" name="paymentMethod" type="radio" checked={'cheque' === paymentMethod}/>
					<span className="payment-content">Check Payments</span>
				</label>
			</div> */}
			{/*Pay with Stripe*/}
			{/* <div className="form-check payment-input-container mt-2">
				<label className="form-check-label">
					<input onChange={ handleOnChange } value="cod" className="form-check-input mr-3" name="paymentMethod" type="radio" checked={'cod' === paymentMethod}/>
					<span className="payment-content">Cash on Delivery</span>
				</label>
			</div> */}
			{/* <div className="form-check payment-input-container mt-2">
				<label className="form-check-label">
					<input onChange={ handleOnChange } value="jccpaymentgatewayredirect" className="form-check-input mr-3" name="paymentMethod" type="radio" checked={'jccpaymentgatewayredirect' === paymentMethod}/>
					<span className="payment-content">JCC</span>
				</label>
			</div> */}
			{/* <div className="form-check payment-input-container mt-2">
				<label className="form-check-label">
					<input onChange={ handleOnChange } value="ccavenue" className="form-check-input mr-3" name="paymentMethod" type="radio" checked={'ccavenue' === paymentMethod}/>
					<span className="payment-content">CC Avenue</span>
				</label>
			</div> */}
				{/* Payment Instructions
			<div className="checkout-payment-instructions mt-2">
				Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
			</div> */}
		</div>
	);
};

export default PaymentModes;
