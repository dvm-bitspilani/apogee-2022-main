import { useState, useEffect } from "react";
import CountdownSlate from "../Components/CountdownSlate/CountdownSlate.js";
import MainHero from "../Components/MainHero/MainHero.jsx";
import NavBar from "../Components/Navbar/Navbar.jsx";
import Pagination from './../Components/Pagination/Pagination';
import SocialsHero from "../Components/SocialsHero/SocialsHero.js";
import { useInView } from 'react-intersection-observer'
import ScrollScreen from "../Components/ScrollScreen/ScrollScreen.jsx";
import Loader from "./loaderPage.jsx"
import AboutUs from "../Components/AboutUs/AboutUs.jsx"
import ContactUs from "../Components/ContactProfileCard/ContactUs.jsx"

import EventContainer from "../Components/EventContainer/EventContainer.jsx";
import "../stylesheets/final.css";
import Videos from "../Components/Videos/Videos.jsx";

function Test() {



  useEffect(() => {
    window.addEventListener("wheel", () => {
      // console.log(window.pageYOffset + "this");
    })
  })
  const [ref, inView] = useInView({
    threshold: 0,
  })
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
      <div className="mainWrapper">
          <div className="section" id="aboutus">
          <AboutUs />
          </div>
          <div className="section" id="Videos">
            <Videos/>
          </div>
          <div className="section" id="kernelEvents">
          <EventContainer
            className="kernelEvents"
            heading="KERNEL-EVENTS"
            type="kernel"
            api="https://bits-apogee.org/registrations/kernel_events/"
          />
          </div>
          <div className="section" id="ContactUs">
            <ContactUs/>
          </div>
      </div>
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
