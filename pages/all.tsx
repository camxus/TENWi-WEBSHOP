import Layout from "../src/components/Layout";
import Product from "../src/components/Product";
import client from "../src/components/ApolloClient";
import PRODUCTS_AND_CATEGORIES_QUERY from "../src/queries/product-and-categories";
import styles from "../src/styles/style.module.css";

interface IHome {
  products: any;
}

export default function Home({ products }: IHome) {
  return (
    <Layout>
      <div className={`${styles["product-container"]}`}>
        {products.length
          ? products.map((product: { id: string }) => (
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

  return {
    props: {
      products: products || [],
    },
    revalidate: 1,
  };
}
