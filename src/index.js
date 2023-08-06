import React from "react";
import { createRoot } from "react-dom";
import "./index.css";
import App from "./App";
import { HashRouter as Router } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
);
