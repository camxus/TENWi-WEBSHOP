import {useRef, useEffect} from 'react'
import {handlePaypalCheckout} from "../../utils/checkout"
import styles from "../../styles/paypal.module.css"

export default function Paypal({cart, input, products, setRequestError, clearCartMutation,setIsStripeOrderProcessing,setCreatedOrderData}) {
    const paypal = useRef()

    useEffect(()=>{
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
                            }
                        }
                    ]
                })
            },
            onApprove: async (data, actions) => {
                handlePaypalCheckout(input, products, setRequestError, clearCartMutation,setIsStripeOrderProcessing,setCreatedOrderData)
                const order = await actions.order.capture()
                console.log(order)
            },
            onError: (err) =>{
                console.log(err)
            }
        }).render(paypal.current)
    }, [])
    return (
        <div>
            <div ref={paypal} className={`${styles["paylpal-container"]}`}></div>
        </div>
    )
}
