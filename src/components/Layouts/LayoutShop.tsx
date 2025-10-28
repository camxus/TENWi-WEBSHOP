import Head from "next/head";
import { AppProvider } from "../context/AppContext";
import { FooterProvider } from "../context/FooterContext";
import { UserProvider } from "../context/UserContext";
import Header from "../Headers/Header";
import Footer from "../Footers/FooterShop";
import client from "../ApolloClient";
import Router from "next/router";
// import NProgress from "nprogress";
import { ApolloProvider } from "@apollo/client";
import { ReactNode, forwardRef } from "react";
import React from "react";
import { NavProvider } from "../context/NavContext";

// Router.events.on("routeChangeStart", () => NProgress.start());
// Router.events.on("routeChangeComplete", () => NProgress.done());
// Router.events.on("routeChangeError", () => NProgress.done());

interface ILayout {
  children: ReactNode;
  newsletterImage: string
}

const LayoutShop = (props: ILayout) => {
  return (
    <AppProvider>
      <UserProvider>
        <FooterProvider>
          <NavProvider>
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
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
              }}
            >
              <Header {...props} />
              <div style={{ flex: 1 }}>{props.children}</div>
              <Footer newsletterImage={newsletterImage} />
            </div>
          </NavProvider>
        </FooterProvider>
      </UserProvider>
    </AppProvider>
  );
};

export default LayoutShop;
