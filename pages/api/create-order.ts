import { isEmpty } from "lodash";
import OAuth from "oauth-1.0a";
import crypto from "crypto";
import axios from "axios";

const oauth = new OAuth({
  consumer: {
    key: process.env.NEXT_APP_WC_CONSUMER_KEY || "",
    secret: process.env.NEXT_APP_WC_CONSUMER_SECRET || "",
  },
  signature_method: "HMAC-SHA1",
  hash_function(base_string, key) {
    return crypto.createHmac("sha1", key).update(base_string).digest("base64");
  },
});

export default async function handler(req: any, res: any) {
  const responseData = {
    success: false,
    orderId: "",
    total: "",
    currency: "",
    error: "",
  };

  if (isEmpty(req.body)) {
    responseData.error = "Required data not sent";
    return res.status(400).json(responseData);
  }

  const data = {
    ...req.body,
    customer_id: 0,       // guest checkout
    status: "pending",    // keep pending unless payment is processed
    set_paid: true,      // true if you want it marked paid immediately
  };

  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wc/v3/orders`,
      data,
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

    const order = response.data;

    responseData.success = true;
    responseData.orderId = order.id.toString(); // or order.number if you prefer
    responseData.total = order.total;
    responseData.currency = order.currency;

    return res.json(responseData);
  } catch (error: any) {
    console.error(error.response?.data || error.message);
    responseData.error = error.message;
    return res.status(500).json(responseData);
  }
}
