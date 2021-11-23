
import Layout from "../src/components/Layout";
import CartItemsContainer from "../src/components/cart/cart-page/CartItemsContainer";
import PRODUCTS_AND_CATEGORIES_QUERY from "../src/queries/product-and-categories";
import client from '../src/components/ApolloClient';

const Cart = ({categories, tags}) => {
	return (
		<Layout categories={categories} tags={tags}>
			<CartItemsContainer/>
		</Layout>
	)
};

export default Cart;

export async function getStaticProps () {
	var categories = await client.query( {
		query: PRODUCTS_AND_CATEGORIES_QUERY,
	} );


	var tags = categories.data.productTags.nodes
    categories = categories.data.productCategories.nodes

	return {
		props: {		
			
			categories: categories ? categories : [],
            tags: tags ? tags : [],
		},
		revalidate: 1
	}

};