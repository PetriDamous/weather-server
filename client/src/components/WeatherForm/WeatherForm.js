import React from "react";

import "./WeatherForm.scss";

export default function WeatherForm({
  submit,
  searchInput,
  updateSearchInput,
  clearSearchInput,
}) {
  return (
    <section className="weather-search">
      <form className="split" onSubmit={submit}>
        <div className="search__input">
          <div className="search__icon">
            <img src="img/loupe.svg" alt="search icon" />
          </div>
          <input
            className="search__box"
            type="text"
            placeholder="ex: San Antonio"
            value={searchInput}
            onChange={updateSearchInput}
          />
          {searchInput ? (
            <div className="search__clear" onClick={clearSearchInput}>
              <img src="img/close.svg" alt="close icon" />
            </div>
          ) : null}
        </div>
        <button className="btn btn-submit">Submit</button>
      </form>
    </section>
  );
}
