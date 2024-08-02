import Layout from "../../src/components/Layout";
import client from "../../src/components/ApolloClient";
import Product from "../../src/components/Product";
import { PRODUCT_BY_TAG_SLUG } from "../../src/queries/product-by-tag";
import { isEmpty } from "lodash";
import { useRouter } from "next/router";
import styles from "../../src/styles/style.module.css";
import { PRODUCT_CATEGORIES_SLUGS } from "../../src/queries/product-by-category";

export default function CategorySingle({  products }: any) {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    // return <IntroImage></IntroImage>
    return <></>;
  }

  return (
    <Layout>
      <div>
        <div className={`${styles["product-container"]}`}>
          {products.length
            ? products.map((product: { id: any }) => (
                <Product key={product.id} product={product} />
              ))
            : ""}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps(context: { params: { slug: any } }) {
  const {
    params: { slug },
  } = context;

  const {
    data: {
      productTag: {
        products: { nodes: products },
      },
    },
  } = await client.query({
    query: PRODUCT_BY_TAG_SLUG,
    variables: { slug },
  });

  return {
    props: {
      products: products || [],
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: PRODUCT_CATEGORIES_SLUGS,
  });

  const pathsData: { params: { slug: any } }[] = [];

  data?.productCategories?.nodes &&
    data?.productCategories?.nodes.map((productCategory: { slug: any }) => {
      if (!isEmpty(productCategory?.slug)) {
        pathsData.push({ params: { slug: productCategory?.slug } });
      }
    });

  return {
    paths: pathsData,
    fallback: true,
  };
}
