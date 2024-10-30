import Head from "next/head";
import { AppProvider } from "../context/AppContext";
import { FooterProvider } from "../context/FooterContext";
import Header from "../Headers/Header";
import Footer from "../Footers/FooterShop";
import client from "../ApolloClient";
import Router from "next/router";
// import NProgress from "nprogress";
import { ApolloProvider } from "@apollo/client";
import {forwardRef} from 'react'

// Router.events.on("routeChangeStart", () => NProgress.start());
// Router.events.on("routeChangeComplete", () => NProgress.done());
// Router.events.on("routeChangeError", () => NProgress.done());

const LayoutPortfolio = (props) => {
  return (
    <FooterProvider>
      <AppProvider>
        <ApolloProvider client={client}>
          <div className="flex flex-col" style={{minHeight: "100vh"}}>
            <Head>
              <title>TENWi</title>
              <link rel="icon" href="../../public/assets/gif/tenwi.gif" type="image/gif" ></link>
            </Head>
            {/* <Header {...props}/> */}
            {props.children}
            <Footer className="mt-auto overflow-hidden" style={{maxHeight: "200px"}}/>
          </div>
        </ApolloProvider>
      </AppProvider>
    </FooterProvider>
  );
};

export default LayoutPortfolio;
