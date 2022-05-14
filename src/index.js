import React from "react";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom/client";

import "./assets/boxicons-2.1.1/css/boxicons.min.css";
import "./sass/index.scss";

import Layout from "./components/Layout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
);

reportWebVitals();
