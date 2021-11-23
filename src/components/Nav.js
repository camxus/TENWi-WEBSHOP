import Link from 'next/link';
import CartIcon from "./cart/CartIcon";
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import navbar from '../../src/styles/navbar.module.css'


const Nav = ({categories}, {tags}) => {
	const categoriesList = categories ? Array.from(categories) : []
	const tagsList = tags ? (Array.from(tags)) : []

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

	// const categoriesList  = [];
	// const categoriesmap = new Map();
	// for(const i in categories) {
		// for (const item in props[i].categories) {
	// 		if(!categoriesmap.has(props[i].categories[item].name)){
	// 			categoriesmap.set(props[i].categories[item].name, true);    // set any value to Map
	// console.log(props[i])
		// categoriesList.push(props[i].name);
	// 		}
		// }

	// const tagsList  = []

	// for(const i in tags) {
		// for (const item in props[i].categories) {
	// 		if(!categoriesmap.has(props[i].categories[item].name)){
	// 			categoriesmap.set(props[i].categories[item].name, true);    // set any value to Map
			// tagsList.push(props[i].name);
	// 		}
		// }
		
	// }
	// // console.log(props)
	// const tags  = [];
	// const tagsmap = new Map();
	// for(const i in props) {
	// 		for (const item in props[i].tags) {
	// 			if(!tagsmap.has(props[i].tags[item].name)){
	// 				tagsmap.set(props[i].tags[item].name, true);    // set any value to Map
	// 				tags.push(props[i].tags[item].name);
	// 			}
	// 		}
		
	// }

	return (
		// <nav className="bg-white p-4">
		// 	<div className="flex items-center justify-between flex-wrap container mx-auto">

		// 		<div className="flex items-center flex-shrink-0 text-black mr-20">
		// 			<svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
		// 			<span className="font-semibold text-xl tracking-tight">
		// 			<Link href="/">
		// 			<a className="">WooNext</a>
		// 			</Link>
		// 			</span>
		// 		</div>

		// 		{/*Menu button*/}
		// 		<div className="block lg:hidden">
		// 			<button onClick={() => setMenuVisibility(! isMenuVisible)} className="flex items-center px-3 py-2 border rounded text-black border-black hover:text-black hover:border-black">
		// 			<svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
		// 			</button>
		// 		</div>

		// 		{/*MMenu in mobile*/}
		// 		<div className={`${ isMenuVisible ? 'max-h-full h-full' : 'h-0' } w-full overflow-hidden lg:h-full flex-grow lg:flex lg:items-center lg:w-auto`}>
		// 			<div className="text-sm font-medium uppercase lg:flex-grow">
		// 			<Link href="/categories">
		// 				<a className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10">
		// 					Categories
		// 				</a>
		// 			</Link>
		// 			<Link href="/">
		// 				<a className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10">
		// 					Women
		// 				</a>
		// 			</Link>
		// 			<Link href="/">
		// 				<a className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10">
		// 					Kids
		// 				</a>
		// 			</Link>
		// 			<Link href="/">
		// 				<a className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10">
		// 					Home & Living
		// 				</a>
		// 			</Link>
		// 			<Link href="/">
		// 				<a className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10">
		// 					Offers
		// 				</a>
		// 			</Link>
		// 			</div>

		// 			<div className="text-sm font-medium">
		// 				<a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10">
		// 				<svg xmlns="http://www.w3.org/2000/svg" className="hidden lg:block m-auto" fill="none" viewBox="0 0 24 24" width="18" height="auto" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
		// 					Profile
		// 				</a>
		// 				<a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10">
		// 				<svg xmlns="http://www.w3.org/2000/svg" className="hidden lg:block m-auto" fill="none" viewBox="0 0 24 24" width="18" height="auto" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
		// 					Wishlist
		// 				</a>
		// 				<CartIcon/>
		// 			</div>
		// 		</div>

		// 	</div>
		// </nav>
		<div>
		<div 
		ref ={el => {navOverlay = el}}
		className={navbar.overlay}></div>
		<div 
		ref={el => {navContainer = el}}
		className={navbar.nav_container}>
			<div
			ref={el => {navBtn = el}}
			onClick={openNav}
			className={navbar.nav_btn}>
				<div className={navbar.dot}></div>
			</div>
			<div className={navbar.navbody}>
				<div className={navbar.nav_items_container}>
					<div className={navbar.nav_items}>
						<ul className={navbar.nav_list}>
							<li className={navbar.nav_item, navbar.active}>
								{/* <a className={navbr.nav_link" href="#">TENWI (LOGO HERE) <span className={navbar.sr_only}>(current)</span></a> */}
								<a className={navbar.nav_link}>
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
							</li>
							<li className={`${navbar.nav_item} ${navbar.head}`}>
								<a className={navbar.nav_link} 
								href="/all"
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
	</div>
	)
};

export default Nav;
