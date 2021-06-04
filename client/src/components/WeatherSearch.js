import React, { useState } from "react";

import WeatherForm from "./WeatherForm";
import WeatherRecent from "./WeatherRecent";
import PlaceHolder from "./PlaceHolder";

export default function WeatherSearch() {
  const [searchInput, setSearchInput] = useState("");

  const updateSearchInput = (e) => setSearchInput(e.target.value);

  return (
    <div className="flow-content">
      <WeatherForm
        searchInput={searchInput}
        updateSearchInput={updateSearchInput}
      />
      <WeatherRecent />
    </div>
  );
}
