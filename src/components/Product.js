import Link from 'next/link';
import styles from '../../src/styles/cards.module.css'
import AddToCartButton from '../components/cart/AddToCartButton';
import Price from "./single-product/price";
import Image from "next/image";
import {DEFAULT_PRODUCT_HOME_IMG_URL} from "../constants/urls";
import {getFloatVal} from '../../src/functions.js'
const Product = ( {product} ) => {

	let currency = product?.stockStatus !== "IN_STOCK" ? "" : product?.price ? product.price.slice(-1) : "";
	let price =  product?.stockStatus !== "IN_STOCK" ? "SOLD OUT" : product?.price ? getFloatVal(product.price) : "" ;

	// console.log(product?.name ,product?.stockStatus)
	return (
		// @TODO Need to handle Group products differently.
		undefined !== product && 'GroupProduct' !== product.__typename ? (
		
			<div className={styles["card"]} >
				<Link 
				// as = {`/product?${ product.slug }-${product.id}`} 
				// href={`/product/slug=${ product.slug }-${product.id}`}>
				href={`/product/${ product.slug }`}>
					<a>
						<div className={styles["imagewrapper"]}>
							<Image
							// src={ product.images[0].src }
							src={  product?.image?.sourceUrl? product?.image?.sourceUrl : ""  }
							alt="Product image"
							layout="fill"
							// objectFit="cover"
							/>
						</div>
						<div className={styles["card-main"]}>
							<div className={styles["card-header-wrapper"]}>
								<h1 className={styles["card-header"]}>{product?.name? product.name : ""}</h1>
								<h1 className={styles["subtitle"]}>{ currency? currency : "" }{ price ?price: "-" }</h1>
							</div>
							{/* <a href="" className="btn btn-secondary">View</a> */}
						</div>
					</a>
				</Link>

			</div>
		) : (
			''
		)
	);
};

export default Product;
