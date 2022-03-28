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
import Footer from "../Components/ContactProfileCard/Footer/Footer.jsx"
import EventContainer from "../Components/EventContainer/EventContainer.jsx";
import "../stylesheets/final.css";
import Videos from "../Components/Videos/Videos.jsx";
import SpeakerSection from "../Components/SpeakerSection/SpeakerSection.jsx";
import rocks from "../Components/MainHero/MainHeroAssets/meteor.png";
import "../stylesheets/meteors.css";

function Test() {



  useEffect(() => {
  
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
      <MainHero className="landing-section" />
      <SocialsHero />
      <CountdownSlate />
      <div className="mainWrapper">
        <div className="section" id="aboutus">
          <AboutUs />
        </div>
        <div className="section" id="Videos">
          <Videos />
        </div>
        <div className="meteors">
            <div className="rock" id='one' >
                <img src= {rocks} alt=""/>
            </div>
            <div className="rock" id="two">
                <img src= {rocks} alt=""/>
            </div>
            <div className="rock" id="three">
                <img src= {rocks} alt=""/>
            </div>
            <div className="rock" id="four">
                <img src= {rocks} alt=""/>
            </div>
            <div className="rock" id='five' >
                <img src= {rocks} alt=""/>
            </div>
            <div className="rock" id="six">
                <img src= {rocks} alt=""/>
            </div>
            <div className="rock" id="seven">
                <img src= {rocks} alt=""/>
            </div>
            <div className="rock" id="eight">
                <img src= {rocks} alt=""/>
            </div>
            <div className="rock" id='nine' >
                <img src= {rocks} alt=""/>
            </div>
            <div className="rock" id="ten">
                <img src= {rocks} alt=""/>
            </div>
            <div className="rock" id="eleven">
                <img src= {rocks} alt=""/>
            </div>
            <div className="rock" id="twelve">
                <img src= {rocks} alt=""/>
            </div>
            <div className="rock" id='thirteen' >
                <img src= {rocks} alt=""/>
            </div>
            <div className="rock" id="fourteen">
                <img src= {rocks} alt=""/>
            </div>
            <div className="rock" id="fifteen">
                <img src= {rocks} alt=""/>
            </div>
            <div className="rock" id="sixteen">
                <img src= {rocks} alt=""/>
            </div>
        </div>
        <div className="section" id="kernelEvents">
          <EventContainer
            className="kernelEvents"
            heading="KERNEL EVENTS"
            type="kernel"
            api="https://bits-apogee.org/registrations/kernel_events/"
          />
        </div>
        <div className="section" id="Speakers">
          <SpeakerSection />
        </div>
        <div className="section" id="ContactUs">
          <ContactUs />
        </div>
        <div className="section" id="Footer">
          <Footer />
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
