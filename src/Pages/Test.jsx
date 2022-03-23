import CountdownSlate from "../Components/CountdownSlate/CountdownSlate.js";
import MainHero from "../Components/MainHero/MainHero.jsx";
import NavBar from "../Components/Navbar/Navbar.jsx";
import SocialsHero from "../Components/SocialsHero/SocialsHero.js";
import ScrollScreen from "../Components/ScrollScreen/ScrollScreen.jsx";

import EventContainer from "../Components/EventContainer/EventContainer.jsx";
import "../stylesheets/final.css";

function Test() {
  return (
    <div className="testWrapper">
      <NavBar />
      <MainHero />
      <SocialsHero />
      <CountdownSlate />
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
      <ScrollScreen />
    </div>
  );
}
export default Test;
