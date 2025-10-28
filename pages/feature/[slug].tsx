import Layout from "../../src/components/Layouts/LayoutShop";
import client from "../../src/components/ApolloClient";
import Product from "../../src/components/Product";
import {
  PRODUCT_BY_TAG_SLUG,
  PRODUCT_TAGS_SLUGS,
} from "../../src/queries/product-by-tag";
import { isEmpty } from "lodash";
import { useRouter } from "next/router";
import styles from "../../src/styles/style.module.css";
import { PRODUCT_CATEGORIES_SLUGS } from "../../src/queries/product-by-category";
import { getWebshopImages } from "../../src/utils";

export default function CategorySingle({ products, images }: any) {
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    // return <IntroImage></IntroImage>
    return <></>;
  }

  return (
    <Layout
      newsletterImage={
        images.find((image: { newsletter: any }) => !!image.newsletter)?.node
          .sourceUrl || ""
      }
    >
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
      images: await getWebshopImages(),
      products: products || [],
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const {
    data: {
      productTags: { nodes: tags },
    },
  } = await client.query({
    query: PRODUCT_TAGS_SLUGS,
  });

  const pathsData: { params: { slug: any } }[] = [];

  tags.length &&
    tags.map(({ slug }: any) => {
      if (slug) {
        pathsData.push({ params: { slug } });
      }
    });

  return {
    paths: pathsData,
    fallback: true,
  };
}
