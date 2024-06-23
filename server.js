import dotenv from "dotenv";
import express from "express";
import fs from "fs";
import Stripe from "stripe";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY;

const app = express();
const stripe = Stripe(stripeSecretKey);

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.static("public"));

app.get("/store", (_, res) => {
  fs.readFile("items.json", (error, data) => {
    if (error) {
      res.status(500).end();
    } else {
      res.render("store.ejs", {
        stripePublicKey: stripePublicKey,
        items: JSON.parse(data),
      });
    }
  });
});

app.post("/purchase", async (req, res) => {
  fs.readFile("items.json", async (error, data) => {
    if (error) {
      res.status(500).end();
    } else {
      const itemsJson = JSON.parse(data);
      const itemsArray = itemsJson.music.concat(itemsJson.merch);
      const lineItems = req.body.items.map((item) => {
        const storeItem = itemsArray.find((i) => i.id == item.id);
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: storeItem.name,
            },
            unit_amount: storeItem.price,
          },
          quantity: item.quantity,
        };
      });

      try {
        const session = await stripe.checkout.sessions.create({
          payment_method_types: ["card"],
          line_items: lineItems,
          mode: "payment",
          success_url: `${req.headers.origin}/success.html`,
          cancel_url: `${req.headers.origin}/cancel.html`,
        });

        res.json({ id: session.id });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  });
});

app.listen(3000);
