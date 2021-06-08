import React from "react";

import "./Footer.scss";

export default function Footer() {
  return (
    <div className="md-space-top">
      <footer className="footer flow-content">
        <p>Powred by the PetriD stack</p>
        <div className="split">
          <a
            href="https://openweathermap.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="img/OpenWeather-Logo.jpg" />
          </a>
          <a
            href="https://www.mapbox.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="img/Mapbox_logo_2019.svg" />
          </a>
        </div>
      </footer>
    </div>
  );
}
