import {useRef, useEffect, useState} from 'react'
import {handlePaypalCheckout} from "../../utils/checkout"
import styles from "../../styles/paypal.module.css"

export default function Paypal({cart, input, products, setRequestError, clearCartMutation,setIsStripeOrderProcessing,setCreatedOrderData}) {
    const paypal = useRef()
    const [isLoaded, setIsLoaded] = useState(null)
    useEffect(()=>{
        if (window.paypal?.Buttons !== undefined) {
            console.log("runnning", paypal)
            window.paypal.Buttons({
                createOrder: (data, actions, err) =>{
                    return actions.order.create({
                        intent: "CAPTURE",
                        purchase_units: [
                            {
                                description: "TENWi",
                                amount: {
                                    currency_code: "EUR",
                                    value: cart.total.replace(",", ".").slice(0, -1)
                                    // value: 1
                                }
                            }
                        ]
                    })
                },
                onApprove: async (data, actions) => {
                    const wooresult = await handlePaypalCheckout(input, products, setRequestError, clearCartMutation,setIsStripeOrderProcessing,setCreatedOrderData)
                    const order = await actions.order.capture()
                    console.log("done", order)
                    window.location.replace(`/thank-you?order_id=${wooresult.orderId}`);
                },
                onError: (err) =>{
                    console.log("error", err)
                }
            }).render(paypal.current)
        }
        else
        {
            // window.location.replace("/checkout");
            setIsLoaded(false)
        }
        }, [paypal])
    return (
        <div>
            <div ref={paypal} className={`${styles["paylpal-container"]}`}></div>
        </div>
    )
}
