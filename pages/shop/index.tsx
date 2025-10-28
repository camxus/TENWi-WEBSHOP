import Layout from "../../src/components/Layouts/LayoutShop";
import client from "../../src/components/ApolloClient";
import PRODUCTS_AND_CATEGORIES_QUERY from "../../src/queries/product-and-categories";
import Link from "next/link";
import styles from "../../src/styles/categories.module.css";
import intro from "../../src/styles/intro.module.css";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import VimeoEmbed from "../../src/components/VimeoEmbed";
import { getWebshopImages } from "../../src/utils";
// import NewsletterSubmit from  "../src/components/NewsletterSubmit.js";

function Categories({ categories, images }: any) {
  return (
    <Layout
      newsletterImage={
        images.find((image: { newsletter: any }) => !!image.newsletter)?.node
          .sourceUrl || ""
      }
    >
      <div className={intro[`intro`]}>
        <div className={intro[`intro-background`]}>
          <div className={intro[`intro-image`]}>
            <Image
              src={require("../../public/assets/gif/tenwi.gif")}
              objectFit="cover"
              alt={""}
            ></Image>
          </div>
        </div>
      </div>
      <div
        className="w-full overflow-hidden"
        style={{ borderBottom: "1px black solid" }}
      >
        <div
          className="flex items-center justify-center"
          style={{ height: "100vh" }}
        >
          <Image
            className="w-full h-full object-cover"
            layout="fill"
            src={"/assets/images/png/webshop.png"}
            alt={""}
          />
          {/* <VimeoEmbed videoId={424448504} className={styles.vimeo} /> */}
          <Link href={`/shop/category/all`}>
            <div className={`${styles["category-name"]}`}>{"ALL"}</div>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
export default Categories;

export async function getStaticProps() {
  const {
    data: {
      productCategories: { nodes: categories },
    },
  } = await client.query({
    query: PRODUCTS_AND_CATEGORIES_QUERY,
  });

  return {
    props: {
      images: await getWebshopImages(),
      categories: categories ? categories : [],
    },
    revalidate: 1,
  };
}
