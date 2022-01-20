import Head from "next/head";
import { AppProvider } from "./context/AppContext";
import { FooterProvider } from "./context/FooterContext";
import Header from "./Header";
import Footer from "./Footer";
import client from "./ApolloClient";
import Router from "next/router";
import NProgress from "nprogress";
import { ApolloProvider } from "@apollo/client";
import {forwardRef} from 'react'

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const LayoutPortfolio = (props) => {
  return (
    <FooterProvider>
      <AppProvider>
        <ApolloProvider client={client}>
          <div>
            <Head>
              <title>TENWi</title>
              <link rel="icon" href="../../public/assets/gif/tenwi.gif" type="image/gif" ></link>
            </Head>
            {/* <Header {...props}/> */}
            {props.children}
          </div>
          {/* <Footer/> */}
        </ApolloProvider>
      </AppProvider>
    </FooterProvider>
  );
};

export default LayoutPortfolio;
