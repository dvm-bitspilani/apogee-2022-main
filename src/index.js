import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter, Routes, HashRouter } from "react-router-dom";
import Events from "./Pages/all-events.jsx";
import Staging from "./Pages/staging.js";
import Test from "./Pages/Test.jsx";
import "./stylesheets/index.css";
import App from "./Pages/App";
import reportWebVitals from "./reportWebVitals";
import Loader from "./Components/Loader/loader.jsx";
import AboutUs from "./Components/AboutUs/AboutUs.jsx";
import { createBrowserHistory } from "history";
import "./fonts/BARTKEY.ttf";
import { Sponsors } from "./Components/Sponsors/Sponsors.js";
import DeveloperContainer from "./Components/Developers/DeveloperContainer.jsx";
import ArmageddonRegister from './Pages/armageddon-register'
import { HealthAndSafetyRounded } from "@mui/icons-material";
const history = createBrowserHistory();

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

  <BrowserRouter basename='/' history={history}>
    {/* <HashRouter> */}
    <Routes>
      <Route path="/" element={<Test />} />
      <Route
        path="/events/"
        element={
          <Events
            heading="All Events"
            link="https://bits-apogee.org/registrations/events_details/"
            type="   "
          />
        }
      />
      <Route
        path="/kernel-events"
        element={
          <Events
            heading="Kernel Events"
            link="https://bits-apogee.org/registrations/kernel_events/"
            type="kernel"
          />
        }
      />
      <Route path="/loader" element={<Loader />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/staging" element={<Staging />} />
      <Route path="/developers/" element={<DeveloperContainer />} />
      <Route path="/armageddon" element={<ArmageddonRegister />} />
      <Route path="/sponsors/" element={<Sponsors />} />
      {/* <Route path="/Test" element={<Test />} /> */}

      {/* <Route path="invoices" element={<Invoices />} /> */}
    </Routes>
    {/* </HashRouter>, */}
  </BrowserRouter>,
  document.getElementById("root")
);
