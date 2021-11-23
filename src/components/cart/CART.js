import Link from 'next/link';
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import cart from '../../../src/styles/cart.module.css'


const CART = ({categories}, {tags}) => {
	const categoriesList = categories ? Array.from(categories) : []
	const tagsList = tags ? (Array.from(tags)) : []

	let navBtn = useRef(null)
	let navContainer = useRef(null)
	let navOverlay = useRef(null)

	
	var statement = false

	const [ isMenuVisible, setMenuVisibility ] = useState(false);


	return (
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
											src={require('../../public/assets/gif/tenwi_c4d_big_rh.gif')}
											objectFit="cover"
											></Image>
										</a>
									</Link>
								</a>
							</li>
							<li className={`${navbar.nav_item} ${navbar.head}`}>
								<a className={navbar.nav_link} 
								href="/all"
								>ALL PRODUCTS</a>
							</li>
							<li className={`${navbar.nav_item} ${navbar.head}`}>
								<p className={navbar.nav_link} 
								// href=""
								>UNISEXWEAR</p>
							</li>
							<div className={`${navbar.nav_item} ${navbar.sub_box}`}>
								{ categoriesList !== undefined && categoriesList.length ?(
									categoriesList.map( category => 
									<li className={navbar.nav_item}> <a className={`${navbar.nav_link} ${navbar.sub}`} href={`${process.env.CURRENT_URL}/category/${category.slug}`}>{ category.name }</a></li>
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
									tagsList.map( tag => <li className={navbar.nav_item}> <a className={`${navbar.nav_link} ${navbar.sub}`} href={`${process.env.CURRENT_URL}/feature/${tag.slug}`}>{ tag.name }</a></li> )
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

export default CART;
