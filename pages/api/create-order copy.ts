import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { isEmpty } from "lodash";

const api = new WooCommerceRestApi({
  url: process.env.NEXT_PUBLIC_WORDPRESS_URL ?? "",
  consumerKey: process.env.NEXT_APP_WC_CONSUMER_KEY ?? "",
  consumerSecret: process.env.NEXT_APP_WC_CONSUMER_SECRET ?? "",
  version: "wc/v3",
});

/**
 * Create order endpoint.
 *
 * @see http://woocommerce.github.io/woocommerce-rest-api-docs/?javascript#create-an-order
 *
 * @param {Object} req Request.
 * @param {Object} res Response.
 *
 * @return {Promise<{orderId: string, success: boolean, error: string}>}
 */

export default async function handler(req: { body: any }, res: Response) {
  const responseData = {
    success: false,
    orderId: "",
    total: "",
    currency: "",
    error: "",
  };
  console.log("body", api);
  if (isEmpty(req.body)) {
    responseData.error = "Required data not sent";
    return responseData;
  }

  const data = req.body;
  data.status = "pending";
  data.set_paid = true;

  try {
    const response = await api.post("orders", req.body);

    const { data } = response

    responseData.success = true;
    responseData.orderId = data.number;
    responseData.total = data.total;
    responseData.currency = data.currency;

    res.json(responseData);
  } catch (error: any) {
    console.log(error)
    /**
     * Request usually fails if the data in req.body is not sent in the format required.
     *
     * @see Data shape expected: https://stackoverflow.com/questions/49349396/create-an-order-with-coupon-lines-in-woocomerce-rest-api
     */
    responseData.error = error.message;
    res.status(500).json(responseData);
  }
  console.log("error", responseData);
  console.log("data", data);
}
