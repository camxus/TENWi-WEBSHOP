import Link from 'next/link';
import styles from '../../src/styles/cards.module.css'
import AddToCartButton from '../components/cart/AddToCartButton';
import Price from "./single-product/price";
import Image from "next/image";
import {DEFAULT_PRODUCT_HOME_IMG_URL} from "../constants/urls";
import {getFloatVal} from '../../src/functions.js'
const Product = ( props ) => {
	const { product } = props;

	let currency = product?.price ? product.price.slice(-1) : "";
	let price = product?.price ? getFloatVal(product.price) : "SOLD OUT" ;

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
								<h1 className={styles["subtitle"]}>{ currency }{ price }</h1>
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
