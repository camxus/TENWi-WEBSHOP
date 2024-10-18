import Layout from '../../src/components/Layout';
import IntroImage from '../../src/components/IntroImage';
import { useRouter } from 'next/router';
import client from '../../src/components/ApolloClient';
import {GET_POST_BY_SLUG, POSTS_SLUGS} from '../../src/queries/get-posts';
import PRODUCTS_AND_CATEGORIES_QUERY from "../../src/queries/product-and-categories";
import { isEmpty } from 'lodash';
import {useState} from "react"

import style from "../../src/styles/posts.module.css"

import {motion} from "framer-motion"


export default function Product({post, categories, tags}) {
	// const { product } = props;

    const router = useRouter()

    // If the page is not yet generated, this will be displayed
    // initially until getStaticProps() finishes running
    if (router.isFallback) {
        // return <IntroImage></IntroImage>
        // setLoading(true)
        return <></>
    }

    // const products  = props.products.productsData 
  
	return (
            <Layout categories = {categories} tags = {tags}>
                { post && (
                    <div className={style[`post-wrapper`]}>
                        <div className={style[`post-container`]}>
                            <div className={style[`post-title`]}>{post.title}</div>
                            <div className={style[`post-content`]} dangerouslySetInnerHTML={{ __html: post.content }}></div>
                        </div>
                    </div>
                )}
            </Layout>
	);
};


export async function getStaticProps(context) {

    const {params: { slug }} = context

    const {data} = await client.query({
        query: GET_POST_BY_SLUG,
        variables: { slug }
    })
    var categories = await client.query( {
		query: PRODUCTS_AND_CATEGORIES_QUERY,
	} );

    var tags = categories.data.productTags.nodes
    categories = categories.data.productCategories.nodes


    return {
        props: {
            post: data ? data.post : [],
            categories: categories ? categories : [],
            tags: tags ? tags : [],
        },
        revalidate: 0
    };
}

export async function getStaticPaths () {
    // const { data } = await client.query({
    //     query: POSTS_SLUGS
    // })

    const pathsData = []

    // data?.products?.nodes && data?.products?.nodes.map((product) => {
    //     if (!isEmpty(product?.slug)) {
    //         pathsData.push({ params: { slug: product?.slug } })
    //     }
    // })
    return {
        paths: pathsData,
        fallback: true
    }
}
