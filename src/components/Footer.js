import {Facebook, Instagram, Twitter, Youtube} from "./icons";
import {useContext} from "react"
import {FooterContext} from "../components/context/FooterContext";

import styles from "../styles/footer.module.css"
const Footer = () => {

	const [footerLeft,setFooterLeft, footerRight,setFooterRight] = useContext(FooterContext)
	return(
	<div className="footer bg-black p-6 text-white">
		{console.log(footerLeft)}
		<div className="container mx-auto">
			{/* <div className="footer-text flex-none md:flex items-center justify-between">
				<p>© Codeytek Academy 2020</p>
				<p className="text-gray">Learn the latest tech skills</p>
				<span className="text-gray">Follow on social links to support the work</span>
			</div> */}
			<div className={styles.footerContainer}>
				<div className={styles.rightContainer}>
					<div className={styles.rightContent}>
					<ul>
						{footerRight && footerRight.map(post => 
							<a href={`/post/${post.node.slug}`}>
								<li>{post.node.title}</li>
							</a>
							)}
						</ul>
					</div>
				</div>	
				<div className={styles.leftContainer}>
					<div className={styles.leftContent}>
						<ul>
						{footerLeft && footerLeft.map(post => 
							<a href={`/post/${post.node.slug}`}>
								<li>{post.node.title}</li>
							</a>
							)}
						</ul>
					</div>
					<ul className="social-links flex align-center justify-center">
						{/* <li><a href="https://www.facebook.com/codeytek" className="fa fa-facebook" target="_blank"><Facebook/></a></li> */}
						<li className="ml-2 mt-1"><a href="https://twitter.com/tenwiarchive" target="_blank"><Twitter/></a></li>
						<li className="ml-2 mt-1"><a href="https://www.youtube.com/channel/UCvqRwEJd3kUlFzb98HnxuKQ" className="fa fa-youtube" target="_blank"><Youtube/></a></li>
						<li className="ml-2"><a href="https://www.instagram.com/tenwiofficial/" className="fa fa-instagram" target="_blank"><Instagram/></a></li>
					</ul>
				</div>
				
			</div>
			
		</div>
	</div>)
};

export default Footer;
