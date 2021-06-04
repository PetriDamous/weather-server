import React from "react";

export default function WeatherForm({ searchInput, updateSearchInput }) {
  return (
    <section className="weather-search">
      <form className="split">
        <div className="search__input">
          <div className="search__icon">
            <img src="img/loupe.svg" alt="search icon" />
          </div>
          <input
            className="search__box"
            type="text"
            value={searchInput}
            onChange={updateSearchInput}
          />
          <div className="search__clear">
            <img src="img/close.svg" alt="close icon" />
          </div>
        </div>
        <button className="btn btn-submit">Submit</button>
      </form>
    </section>
  );
}
