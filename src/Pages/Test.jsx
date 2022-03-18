// imports
import MainHero from "../Components/MainHero/MainHero.jsx";
import NavBar from "../Components/Navbar/Navbar.jsx"

// CSS
import "../stylesheets/Test.css"

function Test() {
    return (
        <div className="testWrapper">
            <section className="section" id="landingSection">
                <NavBar />
                <MainHero />
            </section>
            <section className="section" id="kernelSection">
                KERNEL SECTION
            </section>
        </div>
    )
}
export default Test;