import CountdownSlate from "../Components/CountdownSlate/CountdownSlate.js";
import MainHero from "../Components/MainHero/MainHero.jsx";
import NavBar from "../Components/Navbar/Navbar.jsx";
import SocialsHero from "../Components/SocialsHero/SocialsHero.js";
import EventContainer from "../Components/EventContainer/EventContainer.jsx";
import '../stylesheets/test.css';

function Test() {
  return (
    <div className="testWrapper">
      <NavBar />
      <MainHero />
      <SocialsHero />
      <CountdownSlate />
      <EventContainer
        className ="kernelEvents"
        heading="KERNEL EVENTS"
        type="kernel"
        api="https://bits-apogee.org/registrations/kernel_events/"
      />
    </div>
  );
}
export default Test;
