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

export async function getStaticProps() {
  return {
    props: {
      images: await getWebshopImages(),
    },
    revalidate: 1,
  };
}
