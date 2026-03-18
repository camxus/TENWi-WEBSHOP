import client from "../../../src/components/ApolloClient";
import Layout from "../../../src/components/Layouts/LayoutShop";
import PostPage from "../../../src/components/PostPage";
import { GET_POST_BY_SLUG, POSTS_SLUGS } from "../../../src/queries/get-posts";
import PRODUCTS_AND_CATEGORIES_QUERY from "../../../src/queries/product-and-categories";
import { getPrefs, getWebshopImages, TenwiPreferences } from "../../../src/utils";

export default function Post(props: { post: any, prefs: TenwiPreferences }) {
  return (
    <Layout
      {...props}
      newsletterImage={
        props.prefs.newsletterImage || ""
      }
    >
      <PostPage {...props} />;
    </Layout>
  );
}

export async function getServerSideProps(context: any) {
  const {
    params: { slug },
    req: {
      headers: { referer },
    },
  } = context;

  const {
    data: { post },
  } = await client.query({
    query: GET_POST_BY_SLUG,
    variables: { slug },
  });
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
      prefs: await getPrefs(),
      post: post ?? {},
      categories: categories ?? [],
      tags: tags ?? [],
      referer,
    },
  };
}
