const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");

const app = express();
const port = 2525; // You can change this to your desired port

app.use(
  cors({
    origin: "http://localhost:2525", // Replace with the actual origin of your React app
    methods: "POST",
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  const elasticEmailApiKey =
    "03ED679462C975405FC3D10F3546A85DC30F61617A56BE7393376833B49690885B257DC0491EC1B9FD916519753F6FE1"; // Replace with your Elastic Email API key
  //
  //smtp pas :7440BBB78C8E446F167377E463EDF3E1DAE6
  const elasticEmailApiUrl = "https://api.elasticemail.com/v2/email/send";

  const payload = {
    apiKey: elasticEmailApiKey,
    subject: "New Contact Form Submission",
    to: "victormureithig@gmail.com", // Replace with your email address
    from: { email }, // Replace with your email address
    fromName: { name }, // Replace with your name
    bodyHtml: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
  };

  try {
    const response = await fetch(elasticEmailApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (data.success) {
      res.status(200).json({ success: true });
    } else {
      res.status(500).json({ success: false, error: data.error });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
