import Link from 'next/link';
import styles from '../../src/styles/cards.module.css'
import AddToCartButton from '../components/cart/AddToCartButton';
import Price from "./single-product/price";
import Image from "../image";
import {DEFAULT_PRODUCT_HOME_IMG_URL} from "../constants/urls";
import {getFloatVal} from '../../src/functions.js'
const Product = ( props ) => {
	const { product } = props;

	let currency = product?.price ? product.price[0] : "";
	let price = getFloatVal(product?.price ? product.price : "0");

	return (
		// @TODO Need to handle Group products differently.
		undefined !== product && 'GroupProduct' !== product.__typename ? (
			// <div className="product mb-5">


			// 	<Link href={ `/product/${ product?.slug }`} >
			// 		<a>
			// 			<Image
			// 				className="object-cover bg-gray-100"
			// 				width="308"
			// 				height="308"
			// 				loading="lazy"
			// 				sourceUrl={ product?.image?.sourceUrl ?? '' }
			// 				defaultImgUrl={DEFAULT_PRODUCT_HOME_IMG_URL}
			// 				altText={product?.image?.altText ?? product?.slug}
			// 			/>
			// 		</a>
			// 	</Link>
			// 	<div className="product-info">
			// 		<h3 className="product-title mt-3 font-medium text-gray-800">
			// 			{ product.name ? product.name : '' }
			// 		</h3>
			// 		<div className="product-description text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: (product?.description)}}/>
			// 		<Price salesPrice={product?.price} regularPrice={product?.regularPrice}/>
			// 		<AddToCartButton product={ product }/>
			// 	</div>

			// </div>
			<div className={styles["card"]} >
				<Link 
				// as = {`/product?${ product.slug }-${product.id}`} 
				// href={`/product/slug=${ product.slug }-${product.id}`}>
				href={`/product/${ product.slug }`}>
					<a>
						<div className={styles["imagewrapper"]}>
							<img
							// src={ product.images[0].src }
							src={  product?.image?.sourceUrl? product?.image?.sourceUrl : ""  }
							alt="Product image"
							loading="lazy"
							// objectFit="cover"
							/>
						</div>
						<div className={styles["card-main"]}>
							<h1 className={styles["card-header"]}>{product?.name? product.name : ""}</h1>
							<h1 className={styles["subtitle"]}>{ currency }{ price }</h1>

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