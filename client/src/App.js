import React from "react";

import "./App.scss";

import Header from "./components/Header";
import WeatherSearch from "./components/WeatherSearch";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="container flow-content">
      <Header />
      <WeatherSearch />
      <Footer />
    </div>
  );
}
