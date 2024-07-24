import Layout from "../src/components/Layout";
import CartItemsContainer from "../src/components/cart/cart-page/CartItemsContainer";
import PRODUCTS_AND_CATEGORIES_QUERY from "../src/queries/product-and-categories";
import { GET_SHIPPING_METHODS } from "../src/queries/shipping";
import GET_COUNTRIES from "../src/queries/get-countries";
import client from "../src/components/ApolloClient";

const Cart = ({ categories, tags, countries }: any) => {
  return (
    <Layout>
      <CartItemsContainer countries={countries} />
    </Layout>
  );
};

export default Cart;

export async function getStaticProps() {
  const {
    data: {
      wooCountries: { shippingCountries },
    },
  } = await client.query({
    query: GET_COUNTRIES,
  });

  return {
    props: {
      countries: shippingCountries || [],
    },
    revalidate: 1,
  };
}
