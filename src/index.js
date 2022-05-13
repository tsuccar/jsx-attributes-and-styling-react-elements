import React from "react";
import ReactDOM from "react-dom";
import "../public/styles.css";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading"> My Favourite Foods</h1>
    <img className="photo" alt="random" src={img + "?grayscale"} />
  </div>,
  document.getElementById("root")
);
