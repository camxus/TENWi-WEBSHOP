import Link from 'next/link';
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import cart from '../../../src/styles/cart.module.css'
import CartItemsContainer from "./cart-page/CartItemsContainerSIDE";


const CART = () => {

	let navBtn = useRef(null)
	let viewCart = useRef(null)
	let cartContainer = useRef(null)
	let cartOverlay = useRef(null)

	
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
			ref={el => {cartContainer = el}}
			className={cart.nav_container}>
				<div
				ref={el => {navBtn = el}}
				className={cart.nav_btn}>
					<div className={cart.dot}></div>
				</div>
				<div className={cart.navbody}>
				<CartItemsContainer/>
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
