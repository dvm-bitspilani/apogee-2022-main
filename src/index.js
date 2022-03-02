import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Events from './components/events'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/events" element={<Events />} />
      {/* <Route path="invoices" element={<Invoices />} /> */}
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);




window.onload = function () {
  let cities = document.querySelectorAll(".city");

  console.log(cities);

  for (let i = 0; i < 6; i++) {
    cities[i].style.transition = "1.5s"
    console.log(cities[i]);
  }
  cities[0].style.transform = "translate(-45%, 0)";
  setTimeout(() => {
    cities[1].style.transform = "translate(-45%, 0)";
  }, 200);
  setTimeout(() => {
    cities[2].style.transform = "translate(-50%, 15%)";
  }, 1000);
  setTimeout(() => {
    cities[3].style.transform = "translate(-53%, 8%)";
  }, 1800);
  setTimeout(() => {
    cities[4].style.transform = "translate(-75%, 5%)";
  }, 2600);
  setTimeout(() => {
    cities[5].style.transform = "translate(-2%, -3%)";;
  }, 3200);


  // cities[2].style.transform = "translate(-50%, 15%)";
  // cities[3].style.transform = "translate(-53%, 8%)";
  // cities[4].style.transform = "translate(-75%, 5%)";
  // cities[5].style.transform = "translate(-2%, -3%)";
}

console.log("HAHAHHAHAHHAH");

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
