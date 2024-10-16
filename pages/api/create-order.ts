import { isEmpty } from "lodash";
import OAuth from "oauth-1.0a";
import crypto from "crypto";
import axios from "axios";

// Setup OAuth
const oauth = new OAuth({
  consumer: {
    key: process.env.NEXT_APP_WC_CONSUMER_KEY || "", // Replace with your WooCommerce consumer key
    secret: process.env.NEXT_APP_WC_CONSUMER_SECRET || "", // Replace with your WooCommerce consumer secret
  },
  signature_method: "HMAC-SHA1",
  hash_function(base_string, key) {
    return crypto.createHmac("sha1", key).update(base_string).digest("base64");
  },
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
  if (isEmpty(req.body)) {
    responseData.error = "Required data not sent";
    return responseData;
  }

  const data = req.body;
  data.status = "pending";
  data.set_paid = true;

  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wc/v3/orders`,
      req.body,
      {
        params: oauth.authorize({
          url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wc/v3/orders`,
          method: "POST",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    responseData.success = true;
    responseData.orderId = data.number;
    responseData.total = data.total;
    responseData.currency = data.currency;

    res.json(responseData);
  } catch (error: any) {
    console.log(error);
    /**
     * Request usually fails if the data in req.body is not sent in the format required.
     *
     * @see Data shape expected: https://stackoverflow.com/questions/49349396/create-an-order-with-coupon-lines-in-woocomerce-rest-api
     */
    responseData.error = error.message;
    res.status(500).json(responseData);
    console.log("error", responseData);
  }
  console.log("data", data);
}
