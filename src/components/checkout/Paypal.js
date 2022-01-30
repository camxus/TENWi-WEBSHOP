import {useRef, useEffect} from 'react'
import {handlePaypalCheckout} from "../../utils/checkout"
import styles from "../../styles/paypal.module.css"

export default function Paypal({cart, input, products, setRequestError, clearCartMutation,setIsStripeOrderProcessing,setCreatedOrderData}) {
    const paypal = useRef()
    
    if (window.paypal?.Buttons !== undefined) {
    useEffect(()=>{
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
                    await handlePaypalCheckout(input, products, setRequestError, clearCartMutation,setIsStripeOrderProcessing,setCreatedOrderData)
                    const order = await actions.order.capture()
                    console.log("done", order)
                    window.location.replace("/shop");
                },
                onError: (err) =>{
                    console.log("error", err)
                }
            }).render(paypal.current)
        }, [paypal])
    }
    else{
        // window.location.replace("/checkout");
        paypal = useRef()
    }
    return (
        <div>
            <div ref={paypal} className={`${styles["paylpal-container"]}`}></div>
        </div>
    )
}
