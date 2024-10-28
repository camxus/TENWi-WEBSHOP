import Layout from "../../src/components/Layout";
import client from "../../src/components/ApolloClient";
import Product from "../../src/components/Product";
import IntroImage from "../../src/components/IntroImage";
import {
  PRODUCT_BY_CATEGORY_SLUG,
  PRODUCT_CATEGORIES_SLUGS,
} from "../../src/queries/product-by-category";
import PRODUCTS_AND_CATEGORIES_QUERY from "../../src/queries/product-and-categories";
import { isEmpty } from "lodash";
import { useRouter } from "next/router";
import cat from "../../src/styles/categories.module.css";
import styles from "../../src/styles/style.module.css";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

export default function CategoryPage({ slug }: any) {
  const router = useRouter();

  const { data, loading, error } = useQuery(PRODUCT_BY_CATEGORY_SLUG, {
    variables: { slug },
  });

  const products = data?.productCategory?.products?.nodes || [];

  const variants = {
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.1,
      },
    }),
    hidden: { opacity: 0 },
  };

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback || !products.length) {
    // return <IntroImage></IntroImage>
    return <></>;
  }

  return (
    <Layout>
      <div>
        <div className={`${styles["product-container"]}`}>
          {products.length
            ? [...products].map((product: { id: any }, i: any) => (
                <motion.div
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={variants}
                >
                  <Product key={product.id} product={product} />
                </motion.div>
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

  return {
    props: {
      slug: slug,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const {
    data: {
      productCategories: { nodes: categories },
    },
  } = await client.query({
    query: PRODUCT_CATEGORIES_SLUGS,
  });

  const pathsData: { params: { slug: any } }[] = [];

  categories.length &&
    categories.map(({ slug }: any) => {
      if (slug) {
        pathsData.push({ params: { slug } });
      }
    });

  return {
    paths: pathsData,
    fallback: true,
  };
}
