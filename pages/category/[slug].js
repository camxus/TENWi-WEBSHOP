import Layout from "../../src/components/Layout";
import client from "../../src/components/ApolloClient";
import Product from "../../src/components/Product";
import IntroImage from "../../src/components/IntroImage";
import {PRODUCT_BY_CATEGORY_SLUG, PRODUCT_CATEGORIES_SLUGS} from "../../src/queries/product-by-category";
import PRODUCTS_AND_CATEGORIES_QUERY from "../../src/queries/product-and-categories";
import {isEmpty} from "lodash";
import {useRouter} from "next/router";
import cat from "../../src/styles/categories.module.css"
import styles from '../../src/styles/style.module.css';

import {motion, AnimatePresence} from "framer-motion"


export default function CategorySingle( { categoryName, products, categories, tags } ) {

    const router = useRouter()
    // If the page is not yet generated, this will be displayed
    // initially until getStaticProps() finishes running
    if (router.isFallback) {
        // return <IntroImage></IntroImage>
        return <></>

    }

    const variants = {
        visible: i => ({
          opacity: 1,
          transition: {
            delay: i * 0.1,
          },
        }),
        hidden: { opacity: 0 },
      }

    return (
        <Layout categories={categories} tags = {tags}>
            <div>
                { categoryName ? <h3 className={cat[`header`]}>{ categoryName }</h3> : '' }
                <div className={`${styles["product-container"]}`}>
					{ products.length ? (
						products.map( (product, i) => (
                        <motion.div
                            custom={i}
                            initial="hidden"
                            animate="visible"
                            variants={variants}
                        >
                        <Product key={ product.id } product={ product } />
                        </motion.div>
                        ) )
					) : ''}
				</div>
            </div>
        </Layout>
    )
};

export async function getStaticProps(context) {

    const {params: { slug }} = context

    const {data} = await client.query(({
        query: PRODUCT_BY_CATEGORY_SLUG,
        variables: { slug }
    }));

     var categories = await client.query( {
		query: PRODUCTS_AND_CATEGORIES_QUERY,
	} );
    // console.log(categories.data.productCategories)
    var tags = categories.data.productTags.nodes
    categories = categories.data.productCategories.nodes



    return {
        props: {
            categoryName: data?.productCategory?.name ?? '',
            products: data?.productCategory?.products?.nodes ?? [],
            categories: categories ? categories : [],
            tags: tags ? tags : [],
        },
        revalidate: 1
    }

}

export async function getStaticPaths () {
    const { data } = await client.query({
        query: PRODUCT_CATEGORIES_SLUGS
    })

    const pathsData = []

    data?.productCategories?.nodes && data?.productCategories?.nodes.map((productCategory) => {
        if (!isEmpty(productCategory?.slug)) {
            pathsData.push({ params: { slug: productCategory?.slug } })
        }
    })

    return {
        paths: pathsData,
        fallback: true
    }
}
