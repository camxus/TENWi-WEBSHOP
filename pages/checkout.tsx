import Layout from "../src/components/Layout";
import CheckoutForm from "../src/components/checkout/CheckoutForm";
import GET_COUNTRIES from "../src/queries/get-countries";
import client from "../src/components/ApolloClient";

import React from "react";

interface ICheckout {
  countries: any;
  categories: any;
  tags: any;
  methods: any;
}

const Checkout = ({ countries }: ICheckout) => {
  return (
    <Layout>
      <div className="checkout container mx-auto my-32 px-4 xl:px-0">
        <h1 className="mb-5 text-2xl uppercase">Checkout Page</h1>
        <CheckoutForm countriesData={countries ?? {}} />
      </div>
    </Layout>
  );
};

export default Checkout;

export async function getStaticProps() {
  const {
    data: { wooCountries },
  } = await client.query({
    query: GET_COUNTRIES,
  });

  return {
    props: {
      countries: wooCountries || {},
    },
    revalidate: 1,
  };
}