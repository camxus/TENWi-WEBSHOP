import Head from "next/head";
import { AppProvider } from "./context/AppContext";
import HeaderStart from "./HeaderStart";
import Footer from "./Footer";
import client from "./ApolloClient";
import Router from "next/router";
import NProgress from "nprogress";
import { ApolloProvider } from "@apollo/client";

import {forwardRef} from 'react'

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const Layout = (props) => {
  // console.log("layout", props);
  return (
    <AppProvider>
      <ApolloProvider client={client}>
        <div>
          <Head>
            <title>TENWi</title>
            <link rel="icon" href="" type="image/gif" ></link>
          </Head>
          <HeaderStart {...props}/>
          {props.children}
          {/* <Footer /> */}
        </div>
      </ApolloProvider>
    </AppProvider>
  );
};

export default Layout;
