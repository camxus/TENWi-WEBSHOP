import Layout from "../src/components/Layout";
import client from '../src/components/ApolloClient';
import ParentCategoriesBlock from "../src/components/category/category-block/ParentCategoriesBlock";
import GET_CATEGORIES_QUERY from "../src/queries/get-categories";
import PRODUCTS_AND_CATEGORIES_QUERY from "../src/queries/product-and-categories";
import Link from 'next/link'
import styles from '../src/styles/categories.module.css'
import intro from '../src/styles/intro.module.css';
import Image from 'next/image'

export default function Categories ( {productCategories, categories, tags} ) {
	console.log(tags)

	return (
		<Layout categories = {categories} tags = {tags}>
			<div className={intro[`intro`]}>
				<div className={intro[`intro-background`]}>
					<div className={intro[`intro-image`]}>
						<Image 
							src={require('../public/assets/gif/tenwi.gif')}
							objectFit="cover"
						></Image>
					</div>
				</div>
			</div>
			{categories ? categories.map( category => (
				<div className={`${styles['category-wrapper']}`}>
					{/* image */}
					<Image 
						className={styles.image}
						src={category.image.sourceUrl}
						objectFit="cover"
						/>
					<Link href={`/category/${category.slug}`}>
						<a>
							<div className={`${styles['category-name']}`}>{category.name}</div>
						</a>
					</Link>
				</div>
			)): ''}
		</Layout>
	
	)
}
export async function getStaticProps() {
	// console.log(client)
	const {data} = await client.query({
		query: GET_CATEGORIES_QUERY,
	});
	var categories = await client.query( {
		query: PRODUCTS_AND_CATEGORIES_QUERY,
	} );

	var tags = categories.data.productTags.nodes
    categories = categories.data.productCategories.nodes

	return {
		props: {
			productCategories: data?.productCategories?.nodes || [],
			categories: categories ? categories : [],
            tags: tags ? tags : [],
		},
		revalidate: 1
	}

};
