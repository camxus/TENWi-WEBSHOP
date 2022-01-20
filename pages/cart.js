
import Layout from "../src/components/Layout";
import CartItemsContainer from "../src/components/cart/cart-page/CartItemsContainer";
import PRODUCTS_AND_CATEGORIES_QUERY from "../src/queries/product-and-categories";
import {GET_SHIPPING_METHODS} from "../src/queries/shipping";
import GET_COUNTRIES from "../src/queries/get-countries";
import client from '../src/components/ApolloClient';

const Cart = ({categories, tags, methods, countries}) => {
	return (
		<Layout categories={categories} tags={tags}>
			<CartItemsContainer methods={methods} countries={countries}/>
		</Layout>
	)
};

export default Cart;

export async function getStaticProps () {
	var categories = await client.query( {
		query: PRODUCTS_AND_CATEGORIES_QUERY,
	} );

	var methods = await client.query( {
		query: GET_SHIPPING_METHODS,
	} );

	var countries = await client.query( {
		query: GET_COUNTRIES,
	} );


	console.log(countries)
	var tags = categories.data.productTags.nodes
    categories = categories.data.productCategories.nodes

	return {
		props: {		
			categories: categories ? categories : [],
            tags: tags ? tags : [],
			methods:  methods.data.cart.availableShippingMethods[0]?.rates ? methods.data.cart.availableShippingMethods[0].rates : [],
			countries: countries?.data? countries.data.wooCountries.shippingCountries : []
		},
		revalidate: 1
	}

};