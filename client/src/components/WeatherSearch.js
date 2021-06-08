import React, { useState } from "react";

import WeatherForm from "./WeatherForm/WeatherForm";
import WeatherRecent from "./WeatherRecent/WeatherRecent";
import PlaceHolder from "./PlaceHolder/PlaceHolder";

import { isObjEmpty } from "../utility/utility";

export default function WeatherSearch() {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState({});
  const [message, setMessage] = useState("Please Enter Location Above.");

  const updateSearchInput = (e) => setSearchInput(e.target.value);

  const clearSearchInput = () => setSearchInput("");

  const searchForWeather = async (e) => {
    e.preventDefault();

    try {
      const req = await fetch(`/weather?address=${searchInput}`);

      if (req.ok === false) {
        throw new Error(req.statusText);
      }

      const data = await req.json();

      if (data.error) {
        setMessage(data.error);
      }

      setSearchResults(data);
    } catch (e) {
      setSearchResults({ error: e.message });
      setMessage(e.message);
    }
  };

  return (
    <div className="flow-content">
      <WeatherForm
        submit={searchForWeather}
        searchInput={searchInput}
        updateSearchInput={updateSearchInput}
        clearSearchInput={clearSearchInput}
      />
      {searchResults.error || isObjEmpty(searchResults) ? (
        <PlaceHolder message={message} />
      ) : (
        <WeatherRecent recentWeatherData={searchResults} />
      )}
    </div>
  );
}
