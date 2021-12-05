import { useEffect, useContext } from "react";
import {useMutation, useQuery} from '@apollo/client';
import {AppContext} from "../context/AppContext";
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import OrderSuccess from "./OrderSuccess";
import ORDER_MUTATION from "../../mutations/order";






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

const currency = "EUR";
const style = {"layout":"vertical","color":"black"};
let response = ""

// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({ currency, showSpinner, orderData }) => {
    const [cart, setCart] = useContext(AppContext);

    // This values are the props in the UI
    const amount = cart.totalAmount;

    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    const [order, {
        data: orderResponse,
        loading: orderLoading,
    }] = useMutation(ORDER_MUTATION, {
        variables: {
            // input: orderData
            input: null
        },
        onError: (error) => {
            if (error) {
                setRequestError(error?.graphQLErrors?.[0]?.message ?? '');
            }
            console.log("ERROR ", error, "WITH", error?.graphQLErrors?.[0]?.message ?? '')
    
        }
    });

    response = orderResponse

    useEffect(() => {
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: currency,
            },
        });
    }, [currency, showSpinner]);

    
    return (<>
            { ((showSpinner && isPending) || orderLoading) && <div className="spinner" /> }
            <PayPalButtons
                style={style}
                disabled={false}
                forceReRender={[amount, currency, style]}
                fundingSource={undefined}
                createOrder={(data, actions) => {
                    return actions.order
                        .create({
                            purchase_units: [
                                {
                                    amount: {
                                        currency_code: currency,
                                        value: amount,
                                    },
                                },
                            ],
                        })
                        .then((orderId) => {
                            // Your code here after create the order
                            console.log('order',data);
                            return orderId;
                        });
                }}
                onApprove={function (data, actions) {
                    return actions.order.capture().then(async function () {
                        // Your code here after capture the order
                        console.log('onApprove',data);
                        await order()
                    });
                }}
            />
        </>
    );
}

export default function Paypal({orderData}) {
	return (
		<div style={{ maxWidth: "750px", minHeight: "200px" }}>
            <PayPalScriptProvider
                options={{
                    "client-id": process.env.PAYPAL_CLIENT,
                    components: "buttons",
                    currency: "EUR"
                }}
            >
				<ButtonWrapper
                    currency={currency}
                    showSpinner={false}
                    orderData={orderData}
                />
			</PayPalScriptProvider>

            <OrderSuccess response={response}/>
		</div>
	);
}
