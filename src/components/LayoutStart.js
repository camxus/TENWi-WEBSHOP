import Head from "next/head";
import { AppProvider } from "./context/AppContext";
import HeaderStart from "./HeaderStart";
import client from "./ApolloClient";
import Router from "next/router";
// import NProgress from "nprogress";
import { ApolloProvider } from "@apollo/client";

import { forwardRef } from "react";

// Router.events.on("routeChangeStart", () => NProgress.start());
// Router.events.on("routeChangeComplete", () => NProgress.done());
// Router.events.on("routeChangeError", () => NProgress.done());

const LayoutStart = (props) => {
  // console.log("layout", props);
  return (
    <ApolloProvider client={client}>
      <AppProvider>
        <div>
          <Head>
            <title>TENWi</title>
            <link rel="icon" href="" type="image/gif"></link>
          </Head>
          <HeaderStart {...props} />
          {props.children}
          {/* <Footer /> */}
        </div>
      </AppProvider>
    </ApolloProvider>
  );
};

export default LayoutStart;
