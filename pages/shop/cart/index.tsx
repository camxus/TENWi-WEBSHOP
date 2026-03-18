import Layout from "../../../src/components/Layouts/LayoutShop";
import CartItemsContainer from "../../../src/components/cart/cart-page/CartItemsContainer";
import { getPrefs, getWebshopImages, TenwiPreferences } from "../../../src/utils";

const Cart = ({ prefs }: {prefs: TenwiPreferences}) => {
  return (
    <Layout
      newsletterImage={
        prefs.newsletterImage || ""
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
      prefs: await getPrefs(),
    },
    revalidate: 1,
  };
}
