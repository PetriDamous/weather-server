import React from "react";

import "./PlaceHolder.scss";

export default function PlaceHolder({ message }) {
  return (
    <section className="place-holder">
      <p>{message}</p>
    </section>
  );
}
