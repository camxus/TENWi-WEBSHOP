import Head from "next/head";
import HeaderStart from "../Headers/HeaderStart";
import { FooterProvider } from "../context/FooterContext";
import FooterStart from "../Footers/FooterStart";

// Router.events.on("routeChangeStart", () => NProgress.start());
// Router.events.on("routeChangeComplete", () => NProgress.done());
// Router.events.on("routeChangeError", () => NProgress.done());

const LayoutStart = (props) => {
  return (
    <FooterProvider>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Head>
          <title>TENWi</title>
          <link rel="icon" href="" type="image/gif"></link>
        </Head>
        <HeaderStart {...props} />
        <div style={{ flex: 1 }}>{props.children}</div>
        <FooterStart />
      </div>
    </FooterProvider>
  );
};

export default LayoutStart;