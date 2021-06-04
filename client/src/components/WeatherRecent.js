import React from "react";

export default function WeatherRecent() {
  return (
    <section className="weather-info weather-container flow-content">
      <div className="weather-info__primary">
        <div className="weather-info__time">Sat, February 27 11:15 AM</div>
        <div className="weather-info__temp">
          <span>103</span>&#8457;
        </div>
        <div className="weather-info__description">Cloudy</div>
      </div>
      <div className="weather-info__secondary flow-content">
        <div className="weather-info__feels">
          Feels like: <span>600</span>&#8457;
        </div>
        <div className="weather-info__precipitation">
          Precipitation: <span>15</span>%
        </div>
        <div className="weather-info__humidity">
          Humidity: <span>68</span>%
        </div>
        <div className="weather-info__wind">
          Wind: <span>19</span>mph
        </div>
      </div>
      <div className="weather-info__tertiary">
        <div className="weather-info__location">
          Pussyfoot Saloon, 용산구 대사관로31길 7-6, Yongsan-gu, Seoul 04401,
          South Korea
        </div>
      </div>
    </section>
  );
}
