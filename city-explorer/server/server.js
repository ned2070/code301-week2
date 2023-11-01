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
  response.json("test");
});

app.get("/weather", (request, response) => {
  const searchQuery = request.query.searchQuery;

  const filteredCity = data.find((city) => {
    return city.city_name === searchQuery;
  });

  const wrangledData = filteredCity.data.map((day) => {
    return {
      description: day.weather.description,
      date: day.datetime,
    };
  });
  response.json(wrangledData);
});

app.listen(PORT, () => console.log(`App is running PORT ${PORT}`));
