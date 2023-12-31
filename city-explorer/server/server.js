const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const app = express();
app.use(cors());
const axios = require("axios");

app.get("/", (_, response) => response.json("Root route for City Explorer."));

app.get("/weather", async (request, response) => {
  // destructure all the properties from request.query into variables
  const { city } = request.query;
  console.log(city);

  const API_W = `https://api.weatherbit.io/v2.0/current?city="${city}&key=${process.env.VITE_API_KEY_W}`;

  const res_W = await axios.get(API_W);

  console.log(res_W.data);

  response.json(res_W.data);
});

app.listen(PORT, () => console.log(`App is running PORT ${PORT}`));
