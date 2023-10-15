import React, { useState } from "react";
import axios from "axios";
import "./App.css";
export default function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [lastUpdated, setLastUpdated] = useState(null);

  function displayWeather(response) {
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
    const timestamp = response.data.dt * 1000;
    const date = new Date(timestamp);
    const lastUpdatedTime = date.toLocaleString();
    setLastUpdated(lastUpdatedTime);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Weather">
      <form className="mb-3" onSubmit={handleSubmit}>
        <div className="row d-flex">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city.."
              autofocus="on"
              autocomplete="off"
              id="city-input"
              className="form-control shadow-sm"
              onChange={updateCity}
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <div className="overview">
        <h1 id="city">{city}</h1>
        <ul>
          <li>Last updated: {lastUpdated}</li>
          <li id="description">{weather.description}</li>
        </ul>
      </div>
      <div className="row d-flex">
        <div className="col-6">
          <div className="clearfix">
            <img
              src={weather.icon}
              alt={weather.description}
              className="weather-icon float-left"
            />
            <div className="float-left">
              <strong>{Math.round(weather.temperature)}</strong>°C
            </div>
          </div>
        </div>
        <div class="col-6">
          <ul>
            <li>
              Humidity: <span id="humidity">{weather.humidity}</span>%
            </li>
            <li>
              Wind:<span id="speed">{weather.wind}</span> km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
