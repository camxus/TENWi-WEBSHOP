import Layout from "../../../src/components/Layouts/LayoutShop";
import CheckoutForm from "../../../src/components/checkout/CheckoutForm";
import GET_COUNTRIES from "../../../src/queries/get-countries";
import client from "../../../src/components/ApolloClient";

import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { getPrefs, getWebshopImages, TenwiPreferences } from "../../../src/utils";

interface ICheckout {
  countries: any;
  categories: any;
  tags: any;
  methods: any;
  prefs: TenwiPreferences;
}
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_CLIENT || "pk_test_6pRNASCoBOKtIshFeQd4XMUh"
);

const Checkout = ({ countries, prefs }: ICheckout) => {
  const [open, setOpen] = useState(false);
  const [stripeOptions, setStripeOptions] = useState({
    mode: "payment",
    amount: 100,
    currency: "eur",
    payment_method_types: ["card"],
    // Fully customizable with appearance API.
    appearance: {
      /*...*/
    },
  });

  return (
    <Elements stripe={stripePromise} options={stripeOptions}>
      <Layout
        newsletterImage={
          prefs.newsletterImage || ""
        }
      >
        <div className="checkout container mx-auto my-32 px-4 xl:px-0">
          <h1 className="mb-5 text-2xl uppercase">Checkout Page</h1>
          <CheckoutForm
            stripeOptions={stripeOptions}
            setStripeOptions={setStripeOptions}
            countriesData={countries ?? {}}
            dialogState={[open, setOpen]}
          />
        </div>
      </Layout>
    </Elements>
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
      prefs: await getPrefs(),
      countries: wooCountries || {},
    },
    revalidate: 1,
  };
}
