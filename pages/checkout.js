import Layout from "../src/components/Layout";
import CheckoutForm from "../src/components/checkout/CheckoutForm";
import GET_COUNTRIES from "../src/queries/get-countries";
import client from "../src/components/ApolloClient";
import PRODUCTS_AND_CATEGORIES_QUERY from "../src/queries/product-and-categories";

const Checkout = ({data, categories, tags}) => (

	<Layout categories={categories} tags={tags}>
	<div className="checkout container mx-auto my-32 px-4 xl:px-0">
			<h1 className="mb-5 text-2xl uppercase">Checkout Page</h1>
			<CheckoutForm countriesData={data?.wooCountries ?? {}}/>
		</div>
	</Layout>
);

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
