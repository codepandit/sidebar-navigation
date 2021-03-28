import React, { useState, useEffect } from "react";

import { CloudyIcon } from "../../../assets/Icon";
import { mockWeatherData } from "../../../assets/mock-api";
import "./weather-style.scss";

function Weather() {
  const initialState = {
    city: "Brisbane",
    temp: "",
    weather: "sunny",
    time: "",
    humidity: "",
    chanceOfRain: "",
    wind: "",
    tomorrowTemp: "",
  };

  const [weatherData, setWeatherData] = useState(initialState);

  // Mocking api request to fetch the weather data
  async function fetchData() {
    await mockWeatherData()
      .then((response) => setWeatherData(response))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  const {
    city,
    temp,
    weather,
    time,
    humidity,
    chanceOfRain,
    wind,
    tomorrowTemp,
  } = weatherData;

  return (
    <div>
      <div className="weather-grid">
        <div className="weather-info">
          <span className="weather-city-label">{city || "city"}</span>
          <span className="weather-temp">{temp || "0"}</span>
          <span className="weather-time-label">Tue 16th 3.46 PM</span>
          <span className="weather-time-label">{time || "0"}</span>
        </div>
        <div className="weather-icon">
          <CloudyIcon height="130" width="130" />
        </div>
      </div>
      <div className="weather-extra-info">
        <span className="weather-extra-info-label">Humidity</span>
        <span className="weather-extra-info-value">{humidity}%</span>
      </div>
      <div className="weather-extra-info">
        <span className="weather-extra-info-label">Chance of Rain</span>
        <span className="weather-extra-info-value">{chanceOfRain}%</span>
      </div>
      <div className="weather-extra-info">
        <span className="weather-extra-info-label">Wind</span>
        <span className="weather-extra-info-value">
          {wind} <span className="weather-extra-info-value-wind">kmh</span>
        </span>
      </div>
      <div className="weather-extra-info">
        <span className="weather-extra-info-label">Tomorrow</span>
        <span className="weather-extra-info-value">
          <span className="weather-extra-info-value-temp">{tomorrowTemp}</span>
          <span className="weather-extra-info-value-temp-icon">
            <CloudyIcon height="24" width="24" />
          </span>
        </span>
      </div>
    </div>
  );
}

export default Weather;
