import "../src/styles/style.scss";
import "../src/styles/main.scss";
import "../src/styles/startpage.css";
import "../src/styles/swiper.css";

import Router from "next/router";
import NProgress from "nprogress";

import { motion, AnimatePresence } from "framer-motion";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { ApolloProvider } from "@apollo/client";
import client from "../src/components/ApolloClient";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { useEffect } from "react";

NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps, router }: any) {
  const variants = {
    hidden: { opactiy: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
    exit: {
      backgroundColor: "white",
      opacity: 0,
    },
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const ReactPixel = require("react-facebook-pixel").default;
      ReactPixel.init(process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || "");
      ReactPixel.track("PageView");
      ReactPixel.track("Purchase", {
        content_ids: [
          "wc_post_id_1864",
          "wc_post_id_1863",
          "wc_post_id_1923",
          "wc_post_id_1924",
          "wc_post_id_1927",
          "wc_post_id_1926",
        ], // 'REQUIRED': array of product IDs
        value: 1234.99, // REQUIRED, up to 2 decimals optional
        currency: "USD", // REQUIRED
        content_type: "product", // RECOMMENDED: Either product or product_group based on the content_ids or contents being passed.
      });

      ReactPixel.track("ViewContent", {
        content_ids: [
          "wc_post_id_1864",
          "wc_post_id_1863",
          "wc_post_id_1923",
          "wc_post_id_1924",
          "wc_post_id_1927",
          "wc_post_id_1926",
        ], // 'REQUIRED': array of product IDs
        content_type: "product", // RECOMMENDED: Either product or product_group based on the content_ids or contents being passed.
      });
    }
  }, []);

  return (
    <ApolloProvider client={client}>
      <PayPalScriptProvider
        options={{
          clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT ?? "test",
          components: "buttons",
          currency: "EUR",
        }}
      >
        <AnimatePresence exitBeforeEnter>
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants}
          >
            <Component {...pageProps} key={router.route} />
            <GoogleAnalytics
              gaId={process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || ""}
            />
            <GoogleTagManager
              gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID || ""}
            />
          </motion.div>
        </AnimatePresence>
      </PayPalScriptProvider>
    </ApolloProvider>
  );
}

export default MyApp;
