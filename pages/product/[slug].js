import Layout from '../../src/components/Layout';
import IntroImage from '../../src/components/IntroImage';
import { useRouter } from 'next/router';
import client from '../../src/components/ApolloClient';
import AddToCartButton from '../../src/components/cart/AddToCartButton';
import {PRODUCT_BY_SLUG_QUERY, PRODUCT_SLUGS} from '../../src/queries/product-by-slug';
import PRODUCTS_AND_CATEGORIES_QUERY from "../../src/queries/product-and-categories";
import RELATED_ITEMS_QUERY from "../../src/queries/related-items.js";
import { isEmpty } from 'lodash';
import GalleryCarousel from "../../src/components/single-product/gallery-carousel";
import Price from "../../src/components/single-product/price";

// import {Tween, Power3} from 'gsap'
// import { useRef, useEffect } from 'react'
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import prodstyles from "../../src/styles/product.module.css"

import { useRef, useEffect} from 'react'
import Image from "next/image"

import Product from '../../src/components/Product' 



export default function product({product, categories, tags, variationName, sizes, relatedItems}) {
    // console.log(product)
    const router = useRouter()

    // If the page is not yet generated, this will be displayed
    // initially until getStaticProps() finishes running
    if (router.isFallback) {
        // return <IntroImage></IntroImage>
        return <></>
    }

    // const products  = props.products.productsData 
    // console.log('products', products)
    // const {images} = props
    var images = []
    images = images.concat(product.image, product?.galleryImages?.nodes)
    // console.log(images)
    // console.log(images)

    let imageContainer = useRef(null)
    let changedTitle = []
    let repeatAmount = 20
    for (let i = 0; i < repeatAmount; i++){
        changedTitle.push(product.name)
    }
    

	return (
        <Layout categories = {categories} tags = {tags}>
            { product ? (
            <div>
                <div className={prodstyles.card}>
                    {/* <div className={prodstyles.card_header}>{product.name}</div> */}
                    <div className={prodstyles.card_body}>
                        <div 
                        id="element"
                        ref={el => {imageContainer = el}}
                        className={prodstyles.image_container}>
                        { 
                        !isEmpty(images) ? (
                            images.map( image => 
                                <img
                                src={image ? image.sourceUrl: ""} alt="Product Image" className={prodstyles.image}
                                // objectFit="cover"
                                layout="fill"
                                /> 
                                ) 
                            ) : ""
                        }
                        </div>
                        <div className={`${prodstyles["right-wrapper"]}`}>
                            <div className={prodstyles.rightContainer}>
                                <div className={prodstyles.rightContent}>
                                    <div className={prodstyles["TITLE"]}>
                                        <Controller container = "#element">
                                            <Scene duration="1000%" triggerElement={imageContainer} >
                                            {/* <Timeline wrapper={<div id="pinContainer" />}> */}
                                            <Tween
                                                
                                                from={{ x: '0%' }}
                                                to={{ x: '-100%' }}
                                            >
                                                <h4 className={prodstyles["left"]} className={prodstyles.card_title}  >
                                                { changedTitle.map( name =>
                                                product.name + "  "
                                                )}
                                                </h4>
                                            </Tween>
                                            </Scene>
                                        </Controller>
                                        <Controller container = "#element">
                                            <Scene duration="1000%" triggerElement={imageContainer} 
                                            // indicators
                                            >
                                            <Tween
                                                from={{ x: '-100%' }}
                                                to={{ x: '0%' }}
                                            >
                                                <h4 className={`${prodstyles["card_title"]} ${prodstyles["right"]}`}  >
                                                { changedTitle.map( name =>
                                                product.name + "  "
                                                )}  
                                                </h4>
                                            </Tween>
                                            {/* </Timeline> */}
                                            </Scene>
                                        </Controller>
                                    
                                    </div>
                                        <div className={prodstyles.card_text} dangerouslySetInnerHTML={{ __html: product.description ? product.description : "" }} />
                                        <div className={prodstyles.card_price} dangerouslySetInnerHTML={{ __html: product.price ? product.price : "SOLD OUT" }} />
                                </div>
                            </div>
                                <div className={prodstyles.add_to_cart}>
                                    {product.stockStatus === "IN_STOCK" && <AddToCartButton sizes={sizes} variationName={variationName} product={product}/>}
                                </div>
                        </div>
                    </div>
                </div>
                                        <div>
                                            {relatedItems ?<div>
                                            <div className={`${prodstyles["related-items-header"]}`}>
                                                <h1>
                                                RELATED ITEMS
                                                </h1>
                                                </div>
                                            <div className={`${prodstyles["related-items"]}`}>
                                            {relatedItems.map(item => 
                                                <Product key={ item.id } product={ item.node } /> 
                                            ) }
                                            </div>
                                            </div>
                                            : ""}
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

    let id = data.product.productId
    const relatedItems = await client.query({
        query: RELATED_ITEMS_QUERY,
        variables: {input : id}
    })

    // console.log("relatedItems", relatedItems.data.product.related.edges)

    var variations = null
    data.product.localAttributes ? variations = data.product.localAttributes.nodes[0] : "";
    const sizes = variations?.options
    const variationName = variations?.name
    // console.log(data.product.localAttributes)
    
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
            sizes: sizes ? sizes : null,
            variationName: variationName ? variationName : null,
            relatedItems: relatedItems ? relatedItems.data.product.related.edges : null,
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
