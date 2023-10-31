import { useState } from "react";
import axios from "axios";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CityLocation from "./components/CityLocation";
import CityMap from "./components/CityMap";
import CityWeather from "./components/CityWeather";

const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [city, setCity] = useState({});
  const [search, setSearch] = useState("");
  const [Weather, setWeather] = useState([]);

  function handleChange(event) {
    setSearch(event.target.value);
  }

  async function getCity(event) {
    event.preventDefault();

    const API = `https://eu1.locationiq.com/v1/search?q=${search}&key=${API_KEY}&format=json`;
    const res = await axios.get(API);
    setCity(res.data[0]);

    const API_weather = `http://localhost:8080/weather.json`;
    const resw = await axios.get(API_weather);
    setWeather(resw.data);
    console.log(resw.data);
  }

  return (
    <div>
      <Header />

      <form onSubmit={getCity}>
        <label>
          {" "}
          Enter the name of a city
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
      <CityWeather display_name={city.display_name} />
      <CityMap API_KEY={API_KEY} lat={city.lat} lon={city.lon} />
      <Footer />
    </div>
  );
}

export default App;
