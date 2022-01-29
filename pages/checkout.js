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
            src="https://www.paypal.com/sdk/js?currency=EUR&client-id=AR-DOSoRE0QgKrg_ExDP0lwUv3SuSU9aAqv1VlgAxTTtP-enrfwCswJxRugUmyzvMyCfhtMMEWEQFSM-"></script>
            {/* src="https://www.paypal.com/sdk/js?currency=EUR&client-id=AW1ahVNWQpj-bQMZwxDk1DX-EdBz5hbqxBAC5dwHIGMKyoHpt9NQdoOa_r4g77FqdKPr0mfo-4FutmRC"></script> */}
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
