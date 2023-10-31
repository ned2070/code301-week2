const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const app = express();
app.use(cors());

// import our json data
const data = require("./assets/weather.json");

// add your endpoints here

app.get("/", (request, response) => {
  response.json(data);
});

app.listen(PORT, () => console.log(`App is running PORT ${PORT}`));
