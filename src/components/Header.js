import Nav from "./Nav";
import header from "../styles/header.module.css";
import Image from 'next/image';

const Header = (props) => {
	return (
	<div>
		<Nav {...props}></Nav>
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
