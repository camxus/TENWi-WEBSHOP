import Layout from '../../src/components/Layout';
import { useRouter } from 'next/router';
import client from '../../src/components/ApolloClient';
import AddToCartButton from '../../src/components/cart/AddToCartButton';
import {PRODUCT_BY_SLUG_QUERY, PRODUCT_SLUGS} from '../../src/queries/product-by-slug';
import PRODUCTS_AND_CATEGORIES_QUERY from "../../src/queries/product-and-categories";
import { isEmpty } from 'lodash';
import GalleryCarousel from "../../src/components/single-product/gallery-carousel";
import Price from "../../src/components/single-product/price";

import prodstyles from "../../src/styles/product.module.css"


export default function Product(props) {
	// const { product } = props;

    const router = useRouter()

    // If the page is not yet generated, this will be displayed
    // initially until getStaticProps() finishes running
    if (router.isFallback) {
        return <div>Loading...</div>
    }

    // const products  = props.products.productsData 
    const { product } = props
    const { categories } = props
    const { tags } = props
    // console.log('products', products)
    // const {images} = props
    var images = []
    images = images.concat(product.image, product?.galleryImages?.nodes)
    console.log(images)
    // console.log(images)

	return (
        // <div>
            /* <Layout>
                { product ? (
                    <div className="single-product container mx-auto my-32 px-4 xl:px-0">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="product-images">

                                { !isEmpty( product?.galleryImages?.nodes ) && !isEmpty( product?.image )? (
                                    <div>
                                        <img
                                        src={ product?.image?.sourceUrl }
                                        alt="Product Image"
                                        width="100%"
                                        height="auto"
                                        srcSet={ product?.image?.srcSet }
                                        />
                                        <GalleryCarousel gallery={product?.galleryImages?.nodes}/>
                                    </div>
                                ) : !isEmpty( product.image ) ? (
                                    <img
                                        src={ product?.image?.sourceUrl }
                                        alt="Product Image"
                                        width="100%"
                                        height="auto"
                                        srcSet={ product?.image?.srcSet }
                                    />
                                ) : null }
                            </div>
                            <div className="product-info">
                                <h4 className="products-main-title text-2xl uppercase">{ product.name }</h4>
                                <div

                                    dangerouslySetInnerHTML={ {
                                        __html: product.description,
                                    } }
                                    className="product-description mb-5"
                                />
                                <Price salesPrice={product?.price} regularPrice={product?.regularPrice}/>
                                <AddToCartButton product={ product }/>
                            </div>
                        </div>

                    </div>
                ) : (
                    ''
                ) }
            </Layout> */
        <Layout categories = {categories} tags = {tags}>
            { product ? (
                <div className={prodstyles.card}>
                    {/* <div className={prodstyles.card_header}>{product.name}</div> */}
                    <div className={prodstyles.card_body}>
                        <div className={prodstyles.image_container}>
                        { 
                        // !isEmpty(images) ? (
                            images.map( image => 
                                <img
                                src={image ? image.sourceUrl: ""} alt="Product Image" className={prodstyles.image}
                                // objectFit="cover"
                                /> 
                                ) 
                        }
                        </div>
                        <div className={prodstyles.rightContainer}>
                            <h4 className={prodstyles.card_title}>{product.name}</h4>
                            <div className={prodstyles.card_text} dangerouslySetInnerHTML={{ __html: product.description }} />
                            <div className={prodstyles.add_to_cart}>
                                <AddToCartButton product={product}></AddToCartButton>
                            </div>
                        </div>
                    </div>
                </div>
                ): ''
            }
        </Layout>
	);
};


export async function getStaticProps(context) {

    const {params: { slug }} = context

    const {data} = await client.query({
        query: PRODUCT_BY_SLUG_QUERY,
        variables: { slug }
    })
    var categories = await client.query( {
		query: PRODUCTS_AND_CATEGORIES_QUERY,
	} );
    // console.log(categories.data.productCategories)
    var tags = categories.data.productTags.nodes
    categories = categories.data.productCategories.nodes


    return {
        props: {
            product: data?.product || {},
            categories: categories ? categories : [],
            tags: tags ? tags : [],
        },
        revalidate: 1
    };
}

export async function getStaticPaths () {
    const { data } = await client.query({
        query: PRODUCT_SLUGS
    })

    const pathsData = []

    data?.products?.nodes && data?.products?.nodes.map((product) => {
        if (!isEmpty(product?.slug)) {
            pathsData.push({ params: { slug: product?.slug } })
        }
    })

    return {
        paths: pathsData,
        fallback: true
    }
}
