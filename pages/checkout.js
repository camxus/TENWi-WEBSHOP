import Layout from "../src/components/Layout";
import CheckoutForm from "../src/components/checkout/CheckoutForm";
import GET_COUNTRIES from "../src/queries/get-countries";
import client from "../src/components/ApolloClient";

import PRODUCTS_AND_CATEGORIES_QUERY from "../src/queries/product-and-categories";
import {GET_SHIPPING_METHODS} from "../src/queries/shipping";


const Checkout = ({data, categories, tags, methods}) => {
	return(
	<Layout categories={categories} tags={tags}>
	<div className="checkout container mx-auto my-32 px-4 xl:px-0">
			<h1 className="mb-5 text-2xl uppercase">Checkout Page</h1>
			<CheckoutForm methods = {methods} countriesData={data?.wooCountries ?? {}}/>
		</div>
		<script
            src="https://www.paypal.com/sdk/js?currency=EUR&client-id=AZLto7F9YhOqVZXQoPA-z0fEUwn7Bdv46P6KIJhSo_CO1zqMj1uQVTQLBfHWxtdQokpmQ-PB7h01VYFR"></script>
	</Layout>
	)

	};

export default Checkout;

export async function getStaticProps() {
	const { data } = await client.query({
		query: GET_COUNTRIES
	});
	var categories = await client.query( {
		query: PRODUCTS_AND_CATEGORIES_QUERY,
	} );

	var tags = categories.data.productTags.nodes
    categories = categories.data.productCategories.nodes

	return {
		props: {
			data: data || {},
			categories: categories ? categories : [],
            tags: tags ? tags : [],
		

		},
		revalidate: 1
	};

}
