import Layout from "../src/components/Layout";
import client from "../src/components/ApolloClient";
import ParentCategoriesBlock from "../src/components/category/category-block/ParentCategoriesBlock";
import GET_CATEGORIES_QUERY from "../src/queries/get-categories";
import PRODUCTS_AND_CATEGORIES_QUERY from "../src/queries/product-and-categories";
import Link from "next/link";
import styles from "../src/styles/categories.module.css";
import intro from "../src/styles/intro.module.css";
import Image from "next/image";
// import NewsletterSubmit from  "../src/components/NewsletterSubmit.js";

function Categories({ categories, tags }) {
  return (
    <Layout categories={categories} tags={tags}>
      <div className={intro[`intro`]}>
        <div className={intro[`intro-background`]}>
          <div className={intro[`intro-image`]}>
            <Image
              src={require("../public/assets/gif/tenwi.gif")}
              objectFit="cover"
            ></Image>
          </div>
        </div>
      </div>
      {categories
        ? categories.map((category) => (
            <div className={`${styles["category-wrapper"]}`}>
              {/* image */}
              <Image
                className={styles.image}
                src={
                  category.image?.sourceUrl
                    ? category.image.sourceUrl
                    : require("../public/assets/images/categories/jackets/Tenwi_Lookbook0078.jpg")
                }
                objectFit="cover"
                layout="fill"
              />
              <Link href={`/category/${category.slug}`}>
                <div className={`${styles["category-name"]}`}>
                  {category.name}
                </div>
              </Link>
            </div>
          ))
        : ""}
    </Layout>
  );
}
export default Categories;

export async function getStaticProps() {
  const {
    data: {
      productTags: { nodes: tags },
      productCategories: { nodes: categories },
    },
  } = await client.query({
    query: PRODUCTS_AND_CATEGORIES_QUERY,
  });

  return {
    props: {
      categories: categories ? categories : [],
      tags: tags ? tags : [],
    },
    revalidate: 1,
  };
}
