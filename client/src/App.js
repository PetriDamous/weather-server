import React, { useState, useEffect } from "react";

import "./App.css";

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
    <div>
      <p>{data ? data : "Loading...."}</p>
    </div>
  );
}

export default App;
