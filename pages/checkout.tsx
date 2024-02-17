import Layout from "../src/components/Layout";
import CheckoutForm from "../src/components/checkout/CheckoutForm";
import GET_COUNTRIES from "../src/queries/get-countries";
import client from "../src/components/ApolloClient";

import PRODUCTS_AND_CATEGORIES_QUERY from "../src/queries/product-and-categories";
import { GET_SHIPPING_METHODS } from "../src/queries/shipping";
import React from "react";

interface ICheckout {
  data: any;
  categories: any;
  tags: any;
  methods: any;
}

const Checkout = ({ data, methods }: ICheckout) => {
  return (
    <Layout>
      <div className="checkout container mx-auto my-32 px-4 xl:px-0">
        <h1 className="mb-5 text-2xl uppercase">Checkout Page</h1>
        <CheckoutForm
          methods={methods}
          countriesData={data?.wooCountries ?? {}}
        />
      </div>
    </Layout>
  );
};

export default Checkout;

export async function getStaticProps() {
  const { data } = await client.query({
    query: GET_COUNTRIES,
  });

  return {
    props: {
      data: data || {},
    },
    revalidate: 1,
  };
}
