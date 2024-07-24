import Head from "next/head";
import { AppProvider } from "./context/AppContext";
import { FooterProvider } from "./context/FooterContext";
import { UserProvider } from "./context/UserContext";
import Header from "./Header";
import Footer from "./Footer";
import client from "./ApolloClient";
import Router from "next/router";
// import NProgress from "nprogress";
import { ApolloProvider } from "@apollo/client";
import { ReactNode, forwardRef } from "react";
import React from "react";
import { NavProvider } from "./context/NavContext";

// Router.events.on("routeChangeStart", () => NProgress.start());
// Router.events.on("routeChangeComplete", () => NProgress.done());
// Router.events.on("routeChangeError", () => NProgress.done());

interface ILayout {
  children: ReactNode;
}

const Layout = (props: ILayout) => {
  return (
    <ApolloProvider client={client}>
      <AppProvider>
        <UserProvider>
          <FooterProvider>
            <NavProvider>
              <div>
                <Head>
                  <title>TENWi</title>
                  <link
                    rel="icon"
                    href="../../public/assets/png/tenwi-logo-frontal.png"
                    type="image/png"
                  ></link>
                  <meta
                    name="description"
                    content="By Wirat Tengchiang - A sublime melange of masculinity and femininity whilst tackling cross-cultural issues such as gender, identity, spirituality and environmentalism, through the creation of eccentric unisex looks"
                  />
                  <meta
                    name="keywords"
                    content="TENWi, Vienna, Austria, Fashion, Clothes
            , Shop, Artist, Unisex"
                  />
                  <meta
                    property="og:image"
                    content="../../public/assets/png/tenwi-logo-frontal.png"
                  />
                </Head>
                <Header {...props} />
                {props.children}
              </div>
              <Footer />
            </NavProvider>
          </FooterProvider>
        </UserProvider>
      </AppProvider>
    </ApolloProvider>
  );
};

export default Layout;
