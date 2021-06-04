import React, { useState, useEffect } from "react";

import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function something() {
      const res = await fetch("/api");

      const data = await res.json();

      setData(data.message);
    }

    something();
  });

  return (
    <div class="container flow-content">
      <Header />
    </div>
  );
}

export default App;
