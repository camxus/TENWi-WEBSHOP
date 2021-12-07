import Link from 'next/link';
import CartIcon from "./cart/CartIcon";
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import navbar from '../../src/styles/navbar.module.css'


const Nav = ({categories, tags}) => {
	var categoriesList = categories ? Array.from(categories) : []
	const tagsList = tags ? (Array.from(tags)) : []
	for ( let i = 0; i < categoriesList.length; i++){
		if (categoriesList[i].name === "ALL"){
			categoriesList = categoriesList.filter(item => item !== categoriesList[i])
		}
	}
	let navBtn = useRef(null)
	let navContainer = useRef(null)
	let navOverlay = useRef(null)

	
	var statement = false
	const openNav = () => {
	// 	if (navContainer.style.left !== "0%" && statement === true)
	// 	{
	// 		navContainer.style.left = "0%";
	// 		navOverlay.style.opacity = "70%";
	// 		statement = false
	// 	}
	// 	else {
	// 		navContainer.style.left = "-21.2%";
	// 		navOverlay.style.opacity = "0%";
	// 		statement = true
	// }
	}

	const [ isMenuVisible, setMenuVisibility ] = useState(false);


	return (
	
		<div>
		
		<div 
		ref={el => {navContainer = el}}
		className={navbar.nav_container}>
			<div
			ref={el => {navBtn = el}}
			
			className={navbar.nav_btn}>
				<div className={navbar.dot}></div>
			</div>
			<div className={navbar.navbody}>
				<div className={navbar.nav_items_container}>
					<div className={navbar.nav_items}>
								<a className={navbar.nav_header}>
									{/* <img
									src={require('../public/assets/gif/tenwi_c4d_big_rh.gif')}
									className='nav_header'
									></img> */}
									<Link href="/">
										<a>
											<Image 
											className={navbar.header_image}
											src={require('../../public/assets/gif/tenwi.gif')}
											objectFit="cover"
											></Image>
										</a>
									</Link>
								</a>
						<ul className={navbar.nav_list}>
							
							<li className={`${navbar.nav_item} ${navbar.head}`}>
								<a className={navbar.nav_link} 
								href="category/all"
								>ALL</a>
							</li>
							<li className={`${navbar.nav_item} ${navbar.head}`}>
								<p className={navbar.nav_link} 
								// href=""
								>UNISEXWEAR</p>
							</li>
							<div className={`${navbar.nav_item} ${navbar.sub_box}`}>
								{ categoriesList !== undefined && categoriesList.length ?(
									categoriesList.map( category => 
									<li className={navbar.nav_item}> <a className={`${navbar.nav_link} ${navbar.sub}`} href={`/category/${category.slug}`}>{ category.name }</a></li>
									//  {console.log('category', category.slug)}
									)
									): ''}
							</div>
							<li className={`${navbar.nav_item} ${navbar.head}`}>
								<p className={navbar.nav_link} 
								// href=""
								>FEATURES</p>
							</li>
							<div className={`${navbar.nav_item} ${navbar.sub_box}`}>
								{  tagsList !== undefined && tagsList.length ? (
									tagsList.map( tag => <li className={navbar.nav_item}> <a className={`${navbar.nav_link} ${navbar.sub}`} href={`/feature/${tag.slug}`}>{ tag.name }</a></li> )
								): ''}
							</div>

						</ul>
					</div>
				</div>
			</div>
		</div>
		<div 
		ref ={el => {navOverlay = el}}
		className={navbar.overlay}></div>
	</div>
	)
};

export default Nav;
