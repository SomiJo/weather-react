import React from "react";
import "./App.css";
export default function Weather() {
  return (
    <div className="Weather">
      <form className="mb-3">
        <div className="row d-flex">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city.."
              autofocus="on"
              autocomplete="off"
              id="city-input"
              className="form-control shadow-sm"
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
        <h1 id="city">New York</h1>
        <ul>
          <li>Last updated: Tuesday 10:00</li>
          <li id="description">Partly Cloudy</li>
        </ul>
      </div>
      <div className="row d-flex">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Cloudy icon"
              className="weather-icon float-left"
              id="weatherIcon"
            />
            <div className="float-left">
              <strong>19</strong>
              <span class="units">
                <a href="#" id="celsius-link">
                  °C
                </a>
                |
                <a href="#" id="fahrenheit-link">
                  °F
                </a>
              </span>
            </div>
          </div>
        </div>
        <div class="col-6">
          <ul>
            <li>
              Precipitation: <span id="precipitation">0</span>%
            </li>
            <li>
              Humidity: <span id="humidity">77</span>%
            </li>
            <li>
              Wind:<span id="speed">8</span> km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
