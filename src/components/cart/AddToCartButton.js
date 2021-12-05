import {useState, useContext, useRef} from "react";
import {useQuery, useMutation} from '@apollo/client';
import Link from "next/link";
import {v4} from 'uuid';
import cx from 'classnames';

import {AppContext} from "../context/AppContext";
import {getFormattedCart} from "../../functions";
import GET_CART from "../../queries/get-cart";
import ADD_TO_CART from "../../mutations/add-to-cart";
import {openNav} from "./CART"

const AddToCart = ({product, variationName, sizes}) => {

    let viewCart = useRef(null)
    console.log("sizes", sizes)

    let selectedSize = null;
    let productQryInput = {}
    if (sizes) {
        productQryInput = {
            clientMutationId: v4(), // Generate a unique id.
            productId: product.productId,
            variation: {
                attributeName: variationName,
                attributeValue: selectedSize
            }
        };
    }
    else {
        productQryInput = {
            clientMutationId: v4(), // Generate a unique id.
            productId: product.productId,
        };
    }
    console.log(product.productId)

    const [cart, setCart] = useContext(AppContext);
    const [showViewCart, setShowViewCart] = useState(false);
    const [requestError, setRequestError] = useState(null);

    const [addrtype, setAddrtype] = useState(sizes) //     options: [ 'XS', 'S', 'M', 'L', 'XL' ],
    const Size = addrtype ? addrtype.map(Size => Size) : ""
    const handleSizeChange = (e) => { selectedSize = addrtype[e.target.value]}

        // Get Cart Data.
    const {data, refetch} = useQuery(GET_CART, {
            notifyOnNetworkStatusChange: true,
            onCompleted: () => {

                // Update cart in the localStorage.
                const updatedCart = getFormattedCart(data);
                localStorage.setItem('tenwi-cart', JSON.stringify(updatedCart));

                // Update cart data in React Context.
                setCart(updatedCart);
            }
        });

    // Add to Cart Mutation.
    const [addToCart, {
        data: addToCartRes,
        loading: addToCartLoading,
        error: addToCartError
    }] = useMutation(ADD_TO_CART, {
        variables: {
            input: productQryInput,
        },
        onCompleted: () => {
            console.log("ADD TO CART SUCCESS", data)
            // On Success:
            // 1. Make the GET_CART query to update the cart with new values in React context.
            refetch();

            // 2. Show View Cart Button
            setShowViewCart(true)
        },
        onError: (error) => {
            if (error) {
                setRequestError(error?.graphQLErrors?.[0]?.message ?? '');
            }

            console.log("ERROR ", error, "WITH", error?.graphQLErrors?.[0]?.message ?? '')
        }
    });


    const handleAddToCartClick = async () => {
        setRequestError(null);
        await addToCart();
    };

    return (
        <div>
            {/*	Check if its an external product then put its external buy link */}
            {"ExternalProduct" === product.__typename ? (
                    <a href={product?.externalUrl ?? '/'} target="_blank"
                       className="px-3 py-1 rounded-sm mr-3 text-sm border-solid border border-current inline-block hover:text-white">
						BUY NOW
                    </a>
                ) : 
                <button
					disabled={addToCartLoading}
                    onClick={handleAddToCartClick}
                    className={cx(
                        'px-3 py-1 rounded-sm mr-3 text-sm border-solid border border-current',
                        {'hover:text-white': !addToCartLoading},
                        {'opacity-50 cursor-not-allowed': addToCartLoading}
                    )}
                >
					{ addToCartLoading ? 'ADDING TO CART...' : 'ADD TO CART' }
                </button>
            }
            { sizes ? (
            <div className="sizes">
                < select
                    onChange={e => handleSizeChange(e)}
                    className="browser-default custom-select" >
                    {
                        Size.map((address, key) => <option key={key}value={key}>{address}</option>)
                    }
                </select >
            </div>
            ) : ""
            }

            {showViewCart ? (
                // <Link href="/cart">
                    <button 
                    onClick={openNav}
                    ref={el => {viewCart = el}}
                        className="px-3 py-1 rounded-sm text-sm border-solid border border-current inline-block">VIEW CART
                    </button>
                // </Link>
            ) : ''}
        </div>
    );
};

export default AddToCart;
