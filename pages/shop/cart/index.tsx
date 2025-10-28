import Layout from "../../../src/components/Layouts/LayoutShop";
import CartItemsContainer from "../../../src/components/cart/cart-page/CartItemsContainer";
import { getWebshopImages } from "../../../src/utils";

const Cart = ({ images }: any) => {
  return (
    <Layout
      newsletterImage={
        images.find((image: { newsletter: any }) => !!image.newsletter)?.node
          .sourceUrl || ""
      }
    >
      <CartItemsContainer />
    </Layout>
  );
};

export default Cart;

export async function getStaticProps(context: { params: { slug: any } }) {
  const {
    params: { slug },
  } = context;

  return {
    props: {
      images: await getWebshopImages(),
      slug: slug,
    },
    revalidate: 1,
  };
}
