import Stripe from "stripe";

const stripe = new Stripe(process.env.NEXT_APP_STRIPE_SECRET || "", {
  apiVersion: "2020-08-27",
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send({ error: "Method not allowed" });
  }

  try {
    // Set the amount and currency according to your needs
    const paymentIntent = await stripe.paymentIntents.create(req.body);

    // Send the client secret to the client
    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Error creating payment intent:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
