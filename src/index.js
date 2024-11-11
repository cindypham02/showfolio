// index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";  // Correct import
import "./index.css"; // If you have any global CSS

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

