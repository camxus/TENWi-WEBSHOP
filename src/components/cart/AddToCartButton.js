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
import Select from 'react-select'


const AddToCart = ({product, variationName, sizes}) => {

    let viewCart = useRef(null)

    let selectedSize = null;
    let productQryInput = {}
    
    
    
    console.log(product.productId)

    const [cart, setCart] = useContext(AppContext);
    const [showViewCart, setShowViewCart] = useState(false);
    const [requestError, setRequestError] = useState(null);

//NATIVE
    const [addrtype, setAddrtype] = useState(sizes) //     options: [ 'XS', 'S', 'M', 'L', 'XL' ],
    const Size = addrtype ? addrtype.map(Size => Size) : ""


    const handleSizeChange = (e) => { selectedSize = addrtype[e.target.value]
        console.log("sizes", selectedSize)
    }

//
//REACT SELECT
    const [valueState,setValueState] = useState("")

    const handler = (event) => {
        const value = event.value
        setValueState(value)
    }
    
    let options = []

    //HYDRATE OPTIONS
    Size.map(size => {
        let tempSize = {value: size, label: size}; 
        options.push(tempSize);
    })     
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
//

    if (sizes) {
        productQryInput = {
            clientMutationId: v4(), // Generate a unique id.
            productId: product.productId,
            variation: [{
                attributeName: variationName,
                attributeValue: valueState                  //REACT-SELECT
                // attributeValue: selectedSize             //NATIVE
            }]
        };
    }
    else {
        productQryInput = {
            clientMutationId: v4(), // Generate a unique id.
            productId: product.productId,
        };
    }
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
            console.log("input", productQryInput)
            if (error) {
                setRequestError(error?.graphQLErrors?.[0]?.message ?? '');
            }

            console.log("ERROR ", error, "WITH", error?.graphQLErrors?.[0]?.message ?? '')
        }
    });


    const handleAddToCartClick = async () => {
        setRequestError(null);
        console.log("selectedSize", valueState)
        console.log("prodid", product.productId)
        
        await addToCart();
    };

    const customStyles = {
        option: (provided, state, base) => ({
          ...provided,
        //   borderBottom: '1px solid black',
          borderTop: '1px solid grey',
          borderLeft: '0',
          borderRight: '0',
          color: state.isSelected ? 'white' : 'black',
          backgroundColor: state.isSelected ? 'black' : 'white',
          borderRadius: "0",
          textAlign: 'center',
          padding: "2% 0",
          transition: 'all 300ms ease-in-out',
          ...base,
          "&:hover": {
            backgroundColor: "black",
            color: "white",
            textAlign: 'center',
          }
        }),
        control: (provided, state, base) => ({
          // none of react-select's styles are passed to <Control />
          ...provided,
          borderTop: '1px solid black',
          borderBottom: '0',
          borderLeft: '0',
          borderRight: '0',
          borderRadius: "0",
          color: state.isSelected ? 'white' : 'black',
          backgroundColor: state.isSelected ? 'black' : 'white',
          borderColor: state.isFocused ? "black" : null,
          padding: "2% 0",
          transition: 'all 300ms ease-in-out',
          ...base,
          "&:hover": {
            // boxShadow: "0px 0px 3px 0px black",
            borderColor: "black",
          }
        }),
        menu: base => ({
            ...base,
            marginTop: 0,
            textAlign: "left",
        }),

        dropdownIndicator: base => ({
            ...base,
            margin: "0 10px 0 0",
        }),
        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = 'all 300ms ease-in-out';
      
          return { ...provided, opacity, transition };
        },

        menuList: base => ({
            ...base,
            // kill the white space on first and last option
            padding: 0
          }),

        placeholder: (provided) => ({
            ...provided,
            transform: "translateX(3%)",
            padding: "0",
            textAlign: "center",
          }),
        singleValue: (provided) => ({
              ...provided,
            //   marginLeft: "36px",
            transform: "translateX(3%)",
            padding: "0",
            textAlign: "center",
          }),

        input: (provided) => ({
            ...provided,
            marginLeft: "36px",
            padding: "0",
          })
      }
    
      
    return (
        <div>
            {/*	Check if its an external product then put its external buy link */}
            { sizes ? (
            <div className="sizes">
                {/* < select
                    onChange={e => handleSizeChange(e)}
                    className="browser-default custom-select" >
                    {
                        Size.map((address, key) => <option key={key}value={key}>{address}</option>)
                    }
                </select > */}
                <Select
                    styles={customStyles}
                    options={options}
                    onChange={handler}
                    className="browser-default custom-select" 
                    isSearchable={false}>
                </Select>
            </div>
            ) : ""
            }
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
                        // 'px-3 py-1 rounded-sm mr-3 text-sm border-solid border border-current',
                        {'hover:text-white': !addToCartLoading},
                        {'opacity-50 cursor-not-allowed': addToCartLoading}
                    )}
                >
					{ addToCartLoading ? 'ADDING TO CART...' : 'ADD TO CART' }
                </button>
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
