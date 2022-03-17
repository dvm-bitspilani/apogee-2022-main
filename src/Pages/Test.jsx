import CountdownSlate from "../Components/CountdownSlate/CountdownSlate.js";
import MainHero from "../Components/MainHero/MainHero.jsx";
import NavBar from "../Components/Navbar/Navbar.jsx"
import SocialsHero from "../Components/SocialsHero/SocialsHero.js";


function Test() {
    return (
        <div className="testWrapper">
            <NavBar/>
            <MainHero/>
            <SocialsHero />
            <CountdownSlate />
        </div>
    )
}
export default Test;