import { useState, useEffect } from "react";
import CountdownSlate from "../Components/CountdownSlate/CountdownSlate.js";
import MainHero from "../Components/MainHero/MainHero.jsx";
import NavBar from "../Components/Navbar/Navbar.jsx";
import Pagination from './../Components/Pagination/Pagination';
import SocialsHero from "../Components/SocialsHero/SocialsHero.js";
import ScrollScreen from "../Components/ScrollScreen/ScrollScreen.jsx";
import Loader from "./loaderPage.jsx"
import AboutUs from "../Components/AboutUs/AboutUs.jsx"

import EventContainer from "../Components/EventContainer/EventContainer.jsx";
import "../stylesheets/final.css";

function Test() {
  // const [landingSections, setLandingSections] = useState([])
  // useEffect(() => {
  //   let sectionArr = document.querySelectorAll(".landing-section")
  //   setLandingSections(sectionArr)
  //   console.log(sectionArr)
  // }, [])
  return (
    <div className="testWrapper">
      <div className="loaderDiv">
        <Loader />
      </div>
      <NavBar />
      <Pagination />
      <MainHero />
      <SocialsHero />
      <CountdownSlate />
      {/* <AboutUs /> */}
      {/* <div style={{ background: "white", zIndex: "15" }}>
        <div className="background">
          <div className="gridVertical">
                    
                </div>
          <EventContainer
            className="kernelEvents"
            heading="KERNEL-EVENTS"
            type="kernel"
            api="https://bits-apogee.org/registrations/kernel_events/"
          />
        </div>
      </div> */}
      {/* <ScrollScreen /> */}
    </div>
  );
}
export default Test;
