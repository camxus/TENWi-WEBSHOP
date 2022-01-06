import Nav from "./Nav";
import header from "../styles/header.module.css";
import Image from 'next/image';
import CART from './cart/CART'
import {forwardRef} from 'react'

const Header = (props) => {
	// console.log("header", props);

	return (
	<div>
			<a href="/">
			<div className={header.header_image}>
			
				<Image 
				src={require('../../public/assets/gif/tenwi.gif')}
				objectFit="cover"
				></Image>
			</div>
			{/* <CartIcon/> */}
			</a>
	</div>
	)
};

export default Header;
