import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter, Routes, HashRouter } from "react-router-dom";
import Events from "./Pages/all-events.jsx";
import Test from "./Pages/Test.jsx";
import "./stylesheets/index.css";
import App from "./Pages/App";
import reportWebVitals from "./reportWebVitals";

import "./fonts/BARTKEY.ttf";

function handleCities() {
  let cities = document.querySelectorAll(".city");

  for (let i = 0; i < 6; i++) {
    cities[i].style.transition = "1.5s";
  }
  cities[0].style.transform = "translate(-45%, 0)";
  setTimeout(() => {
    cities[1].style.transform = "translate(-46%, 0)";
  }, 200);
  setTimeout(() => {
    cities[2].style.transform = "translate(-50%, 15%)";
  }, 1000);
  setTimeout(() => {
    cities[3].style.transform = "translate(-54%, 8%)";
  }, 1800);
  setTimeout(() => {
    cities[4].style.transform = "translate(-75%, 5%)";
  }, 2600);
  setTimeout(() => {
    cities[5].style.transform = "translate(-7%, -3%)";
  }, 3200);
}

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Test />} />
      <Route path="/events" element={<Events />} />
      {/* <Route path="/Test" element={<Test />} /> */}

      {/* <Route path="invoices" element={<Invoices />} /> */}
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
