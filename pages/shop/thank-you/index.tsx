import { useContext, useEffect } from "react";
import Router from "next/router";
import Link from "next/link";
import Layout from "../../../src/components/Layouts/LayoutShop";
import { AppContext } from "../../../src/components/context/AppContext";
import { getWebshopImages } from "../../../src/utils";

const ThankYouContent = () => {
  const {
    cartState: [cart, setCart],
  } = useContext(AppContext);
  const order_id = process.browser ? Router.query.order_id : null;

  if (process.browser) {
    localStorage.removeItem("tenwi-cart");
    setCart(null);
  }

  return (
    <div className="h-almost-screen">
      <div className="p-20 w-600px mt-10 m-auto">
        {
          // isSessionFetching ? <Loading/> : (
          <>
            <h2 className="mb-6 text-xl">
              {/* <ShoppingCart className="inline-block mr-1"/> */}
              <span>Thank you for placing the order.</span>
            </h2>
            <p>
              Your payment is successful
              {/* and your order details are: */}
            </p>
            <table className="table-auto w-full text-left whitespace-no-wrap mb-8">
              <thead>
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                    Name
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-3">ORDER NO.</td>
                  <td className="px-4 py-3">{order_id}</td>
                </tr>
                {/* <tr>
                                <td className="px-4 py-3">EMAIL</td>
                                <td className="px-4 py-3">{sessionData?.customer_email}</td>
                            </tr> */}
              </tbody>
            </table>
            <Link
              href="/shop"
              className="bg-black text-white px-5 py-3 rounded-sm w-auto"
            >
              SHOP MORE
            </Link>
          </>
          // )
        }
      </div>
    </div>
  );
};

const ThankYou = ({ images }: any) => {
  return (
    <Layout
      newsletterImage={
        images.find((image: { newsletter: any }) => !!image.newsletter)?.node
          .sourceUrl || ""
      }
    >
      <ThankYouContent />
    </Layout>
  );
};

export default ThankYou;

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
