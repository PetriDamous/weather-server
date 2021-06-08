import React from "react";

import "./WeatherRecent.scss";

export default function WeatherRecent({ recentWeatherData }) {
  return (
    <section className="weather-info weather-container flow-content">
      <div className="weather-info__primary">
        <div className="weather-info__time">Sat, February 27 11:15 AM</div>
        <div className="weather-info__temp">
          <span>{recentWeatherData.temp}</span>&#8457;
        </div>
        <div className="weather-info__description">
          {recentWeatherData.des_1}
        </div>
      </div>
      <div className="weather-info__secondary flow-content">
        <div className="weather-info__feels">
          Feels like: <span>{recentWeatherData.feelslike}</span>&#8457;
        </div>
        <div className="weather-info__precipitation">
          Precipitation: <span>{recentWeatherData.precip}</span>%
        </div>
        <div className="weather-info__humidity">
          Humidity: <span>{recentWeatherData.humidity}</span>%
        </div>
        <div className="weather-info__wind">
          Wind: <span>{recentWeatherData.wind_speed}</span>mph
        </div>
      </div>
      <div className="weather-info__tertiary">
        <div className="weather-info__location">
          {recentWeatherData.location}
        </div>
      </div>
    </section>
  );
}
