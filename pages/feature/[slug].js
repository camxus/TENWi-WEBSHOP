import Layout from "../../src/components/Layout";
import client from "../../src/components/ApolloClient";
import Product from "../../src/components/Product";
import {PRODUCT_BY_CATEGORY_SLUG, PRODUCT_CATEGORIES_SLUGS} from "../../src/queries/product-by-category";
import PRODUCTS_AND_CATEGORIES_QUERY from "../../src/queries/product-and-categories";
import {isEmpty} from "lodash";
import {useRouter} from "next/router";
import categories from "../../src/styles/categories.module.css"
import styles from '../../src/styles/style.module.css';
import IntroImage from '../../src/components/IntroImage.js'

export default function CategorySingle( props ) {

    const router = useRouter()

    // If the page is not yet generated, this will be displayed
    // initially until getStaticProps() finishes running
    if (router.isFallback) {
        // return <IntroImage></IntroImage>
        return <></>
    }

    const { categoryName, products, categories, tags } = props;

    return (
        <Layout categories={categories} tags = {tags}>
            <div>
                { categoryName ? <h3 className={categories[`header`]}>{ categoryName }</h3> : '' }
                <div className={`${styles["product-container"]}`}>
					{ products.length ? (
						products.map( product => <Product key={ product.id } product={ product } /> )
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
