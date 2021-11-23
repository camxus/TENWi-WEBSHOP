import Layout from "../src/components/Layout";
import Product from "../src/components/Product";
import client from '../src/components/ApolloClient';
import ParentCategoriesBlock from "../src/components/category/category-block/ParentCategoriesBlock";
import PRODUCTS_AND_CATEGORIES_QUERY from "../src/queries/product-and-categories";
import HeroCarousel from "../src/components/home/hero-carousel";
import styles from '../src/styles/style.module.css';


export default function Home (props) {

	const { products, productCategories, heroCarousel, tags, categories } = props || {};

	return (
			<Layout categories={categories} tags={tags}>
				<div className={`${styles["product-container"]}`}>
					{ products.length ? (
						products.map( product => <Product key={ product.id } product={ product } /> )
					) : ''}
				</div>
			</Layout>
	)
};

export async function getStaticProps () {

	const { data } = await client.query( {
		query: PRODUCTS_AND_CATEGORIES_QUERY,
	} );
	var categories = await client.query( {
		query: PRODUCTS_AND_CATEGORIES_QUERY,
	} );


	var tags = categories.data.productTags.nodes
    categories = categories.data.productCategories.nodes

	return {
		props: {
			// productCategories: data?.productCategories?.nodes ? data.productCategories.nodes : [],
			products: data?.products?.nodes ? data.products.nodes : [],
			// heroCarousel: data?.heroCarousel?.nodes[0]?.children?.nodes ? data.heroCarousel.nodes[0].children.nodes : []
			categories: categories ? categories : [],
            tags: tags ? tags : [],
		},
		revalidate: 1
	}

};
