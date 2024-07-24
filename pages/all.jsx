import Layout from "../src/components/Layout";
import Product from "../src/components/Product";
import client from "../src/components/ApolloClient";
import PRODUCTS_AND_CATEGORIES_QUERY from "../src/queries/product-and-categories";
import GALLERY_IMAGES from "../src/queries/gallery-images";
import styles from "../src/styles/style.module.css";

export default function Home(props) {
  const { products, tags, categories } =
    props || {};

  return (
    <Layout categories={categories} tags={tags}>
      <div className={`${styles["product-container"]}`}>
        {products.length
          ? products.map((product) => (
              <Product key={product.id} product={product} />
            ))
          : ""}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const {
    data: {
      products: { nodes: products },
    },
  } = await client.query({
    query: PRODUCTS_AND_CATEGORIES_QUERY,
  });
  const {
    data: {
      productTags: { nodes: tags },
      productCategories: { nodes: categories },
    },
  } = await client.query({
    query: PRODUCTS_AND_CATEGORIES_QUERY,
  });
  const gallery = await client.query({
    query: GALLERY_IMAGES,
  });

  return {
    props: {
      products: products || [],
      categories: categories || [],
      tags: tags || [],
    },
    revalidate: 1,
  };
}
