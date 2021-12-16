import Link from 'next/link';
import React, { useState, useRef, forwardRef } from 'react';
import Image from 'next/image';
import cart from '../../../src/styles/cart.module.css'
import CartItemsContainer from "./cart-page/CartItemsContainerSIDE";


const CART = () => {

	let navBtn = useRef(null)
	let cartOverlay = useRef(null)
	let cartContainer = useRef(null)

	
	var statement = false
	const openNav = () => {
			if (cartContainer.style.right !== "0%" && statement === true)
			{
				cartContainer.style.right = "0%";
				cartOverlay.style.opacity = "70%";
				statement = false
			}
			else {
				cartContainer.style.right = "-24.4%";
				cartOverlay.style.opacity = "0%";
				statement = true
		}
		}
	

	const [ isMenuVisible, setMenuVisibility ] = useState(false);


	return (
		<div>
			<div 
			ref={cartContainer}
			className={cart.nav_container}>
				<div
				ref={el => {navBtn = el}}
				className={cart.nav_btn}>
					<div className={cart.dot}></div>
				</div>
				<div className={cart.navbody}>
				{/* <CartItemsContainer/> */}
				<div className={cart.cartText}>
			
				<p id="isPasted">
    REFUNDS
</p>
<p>
    Unfortunately at this moment we cannot offer any refunds. So please choose
    carefully. In order to help you decide, we are happy to assist by answering
    all your questions. Please send your questions to tenwioffice@gmail.com or
    Instagram @tenwiofficial
</p>
<p>
    CHRISTMAS EXPRESS SHIPPING
</p>
<ul type="disc">
    <li>
        29€ EU - countries
    </li>
    <li>
        45€ Non - EU countries
    </li>
</ul>
<p>
    Order should arrive before Christmas. DREFUNDS
</p>
<p>
    Unfortunately at this moment we cannot offer any refunds. So please choose
    carefully. In order to help you decide, we are happy to assist by answering
    all your questions. Please send your questions to tenwioffice@gmail.com or
    Instagram @tenwiofficial
</p>
<p>
    CHRISTMAS EXPRESS SHIPPING
</p>
<ul type="disc">
    <li>
        29€ EU - countries
    </li>
    <li>
        45€ Non - EU countries
    </li>
    <li>
        Order should arrive before Christmas. During this busy period, post
        offices are usually overwhelmed. They are trying their best to make
        orders arrive on time.
    </li>
    <li>
        If you are located outside the EU, please note that additional customs
        fees might apply.
    </li>
</ul>
<p>
    EU SHIPPING
</p>
<ul type="disc">
    <li>
        15€
    </li>
    <li>
        FREE SHIPPING ON ORDERS OVER 210€
    </li>
    <li>
        Each order will be delivered within 5 to 12 working days after the
        client receives the shipping confirmation email.
    </li>
</ul>
<p>
    INTERNATIONAL SHIPPING
</p>
<ul type="disc">
    <li>
        25€
    </li>
    <li>
        FREE SHIPPING ON ORDERS OVER 220€
    </li>
    <li>
        If you are located outside the EU, please note that additional customs
        fees might apply.
    </li>
    <li>
        All orders from America, Asia are subject to 1-2 week delivery
        (depending on location). An example of INTERNATIONAL SHIPPING would be
        a US based customer ordering from our EU-based webshop.
    </li>
</ul>
<p>
    CARE
</p>
<p>
    Wash your garments at 30 - 40 degrees depending on fabric; easy-care
    washing programme. Do not tumble dry.
</p>
<p>
    PRE-ORDER or MADE-TO-ORDER
</p>
<p>
    Many of our pieces are one-of-a-kind or limited run items, which have been
    handmade by us. In such cases, the designer may need a few days to finish
    making your piece, which may extend delivery times. We hope you can bear
    the wait to receive a truly unique item.
</p>
<p>
    COMMISSIONS &amp; SPECIAL CUSTOM ORDERS
</p>
<p>
    For custom requests and commissions please send email to:
    tenwioffice@gmail.com
</p>
<p>
    Follow us on &amp; stay tuned for new projects on Instagram: @tenwiofficial
</p>
<ul type="disc">
    <li>
        uring this busy period, post offices are usually overwhelmed. They are
        trying their best to make orders arrive on time.
    </li>
    <li>
        If you are located outside the EU, please note that additional customs
        fees might apply.
    </li>
</ul>
<p>
    EU SHIPPING
</p>
<ul type="disc">
    <li>
        15€
    </li>
    <li>
        FREE SHIPPING ON ORDERS OVER 210€
    </li>
    <li>
        Each order will be delivered within 5 to 12 working days after the
        client receives the shipping confirmation email.
    </li>
</ul>
<p>
    INTERNATIONAL SHIPPING
</p>
<ul type="disc">
    <li>
        25€
    </li>
    <li>
        FREE SHIPPING ON ORDERS OVER 220€
    </li>
    <li>
        If you are located outside the EU, please note that additional customs
        fees might apply.
    </li>
    <li>
        All orders from America, Asia are subject to 1-2 week delivery
        (depending on location). An example of INTERNATIONAL SHIPPING would be
        a US based customer ordering from our EU-based webshop.
    </li>
</ul>
<p>
    CARE
</p>
<p>
    Wash your garments at 30 - 40 degrees depending on fabric; easy-care
    washing programme. Do not tumble dry.
</p>
<p>
    PRE-ORDER or MADE-TO-ORDER
</p>
<p>
    Many of our pieces are one-of-a-kind or limited run items, which have been
    handmade by us. In such cases, the designer may need a few days to finish
    making your piece, which may extend delivery times. We hope you can bear
    the wait to receive a truly unique item.
</p>
<p>
    COMMISSIONS &amp; SPECIAL CUSTOM ORDERS
</p>
<p>
    For custom requests and commissions please send email to:
    tenwioffice@gmail.com
</p>
<p>
    Follow us on &amp; stay tuned for new projects on Instagram: @tenwiofficial
</p>
<br/>
</div>
				</div>
			</div>
			<div 
			onClick={openNav}
			ref ={el => {cartOverlay = el}}
			className={cart.overlay}></div>
	</div>
	)
	}
export default CART;
