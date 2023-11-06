import { useState } from "react";
import axios from "axios";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CityLocation from "./components/CityLocation";
import CityMap from "./components/CityMap";
import CityWeather from "./components/CityWeather";

const API_KEY = import.meta.env.VITE_API_KEY;
// import weatherbit key
const API_KEY_W = import.meta.env.VITE_API_KEY_W;

function App() {
  const [city, setCity] = useState({});
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState([]);

  function handleChange(event) {
    setSearch(event.target.value);
  }

  async function getCity(event) {
    event.preventDefault();

    const API = `https://eu1.locationiq.com/v1/search?q=${search}&key=${API_KEY}&format=json`;
    const res = await axios.get(API);
    setCity(res.data[0]);
    getWeather(res.data[0]);
  }

  async function getWeather(city) {
    const API_W = `http://localhost:8080/weather`;

    const res_W = await axios.get(API_W, { params: { city: search } });

    setWeather(res_W).data;
    console.log(res_W);
    console.log(weather);
  }

  return (
    <div>
      <Header />
      <form onSubmit={getCity}>
        <label>
          {" "}
          Enter the name of a city
          <p></p>
          <input
            type="search"
            name="cityName"
            id="cityName"
            placeholder="Location"
            onChange={handleChange}
          ></input>
        </label>

        <button>Find City</button>
      </form>
      <CityLocation
        display_name={city.display_name}
        lat={city.lat}
        lon={city.lon}
      />

      <CityWeather weather={weather} />
      <CityMap API_KEY={API_KEY} lat={city.lat} lon={city.lon} />
      <Footer />
    </div>
  );
}

export default App;
