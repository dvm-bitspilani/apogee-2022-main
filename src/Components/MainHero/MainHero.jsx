// Libraries
import { useEffect, useRef } from "react"
// Assets
import CityLayer1 from "./MainHeroAssets/city/City Layer 1.svg";
import CityLayer2 from "./MainHeroAssets/city/City Layer 2.svg";
import CityLayer3 from "./MainHeroAssets/city/City Layer 3.svg";
import CityLayer4 from "./MainHeroAssets/city/City Layer 4.svg";
import CityLayer5 from "./MainHeroAssets/city/City Layer 5.svg";
import CityLayer6 from "./MainHeroAssets/city/City Layer 6.svg";
import Moon from "../../assets/Moon1.png";
import floor from "./MainHeroAssets/floorGrid.png";
import floorGlow from "./MainHeroAssets/GroupFloorGlow.svg";
// Styles
import "./MainHero.css"





function MainHero() {
    const Layer1 = useRef();


    useEffect(() => {
        console.log("hello");
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        Layer1.current.style.transform = "bottom: 0";
        console.log(Layer1.current, screenWidth, screenHeight);
        setTimeout(() => {
            document.getElementById("cityLayer1").style.transform = "translate(5%, 0px)"
        }, 50);
        setTimeout(() => {
            document.getElementById("cityLayer2").style.transform = "translate(1%,0px)"
        }, 600);
        setTimeout(() => {
            document.getElementById("cityLayer3").style.transform = "  translate(-2%,000px)"
        }, 900);
        setTimeout(() => {
            document.getElementById("cityLayer4").style.transform = "translate(-6%,000px) "
        }, 1200);
        setTimeout(() => {
            document.getElementById("cityLayer5").style.transform = "translate(-21.5%,000px)"
        }, 1500);
        setTimeout(() => {
            document.getElementById("cityLayer6").style.transform = "translate(30%,000px)"
        }, 1800);

    });

    return (
        <div className="wrapperMainHero">
            <div className="upperHero">
            <div className="skyWrapper">
            <div class="sky"></div>
            <div className="stars"></div>
            </div>
            <div className="moon">
            <img id="moon" src={Moon} />{" "}
          </div>
            </div>
            <div className="buildings">
                {/* <div className="city city1">
                    <img src={CityLayer1} alt="" />
                </div>
                <div className="city city2">
                    <img src={CityLayer2} alt="" />
                </div>
                <div className="city city3">
                    <img src={CityLayer3} alt="" />
                </div>
                <div className="city city4">
                    <img src={CityLayer4} alt="" />
                </div>
                <div className="city city5">
                    <img src={CityLayer5} alt="" />
                </div>
                <div className="city city6">
                    <img src={CityLayer6} alt="" />
                </div> */}
                <div className="buildings">
                    <img class="cityBuildings layers" id="cityLayer1" ref={Layer1} src={CityLayer1} alt="" />
                    <img class="cityBuildings layers" id="cityLayer2" src={CityLayer2} alt="" />
                    <img class="cityBuildings layers" id="cityLayer3" src={CityLayer3} alt="" />
                    <img class="cityBuildings layers" id="cityLayer4" src={CityLayer4} alt="" />
                    <img class="cityBuildings layers" id="cityLayer5" src={CityLayer5} alt="" />
                    <img class="cityBuildings layers" id="cityLayer6" src={CityLayer6} alt="" />
                </div>
            </div>


            <div className="floor">
                <img className="floorGlow" src={floor} alt="" />
                {/* <img className="floorGlow" src={floorGlow} alt="" /> */}
            </div>
        </div>
    )
}

export default MainHero;