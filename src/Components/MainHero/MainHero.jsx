// Libraries
import React from "react"
import { useEffect, useRef } from "react"
// import * as Scroll from 'react-scroll';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Arrow from "./MainHeroAssets/down-arrow.svg"
// Assets
import CityLayer1 from "./MainHeroAssets/city/City Layer 1.svg";
import CityLayer2 from "./MainHeroAssets/city/City Layer 2.svg";
import CityLayer3 from "./MainHeroAssets/city/City Layer 3.svg";
import CityLayer4 from "./MainHeroAssets/city/City Layer 4.svg";
import CityLayer5 from "./MainHeroAssets/city/City Layer 5.svg";
import CityLayer6 from "./MainHeroAssets/city/City Layer 6.svg";
import Moon from "../../assets/Moon1.png";
import Div100vh from 'react-div-100vh';
import ScrollScreen from "../ScrollScreen/ScrollScreen.jsx";
import floor from "./MainHeroAssets/floorGrid.png";
import bigFloor from "./MainHeroAssets/finalGrid.svg";
import bigFloorMobile from "./MainHeroAssets/bigFloorMobile.svg";

import floorGlow from "./MainHeroAssets/GroupFloorGlow.svg";
// Styles
import "./MainHero.css"
import AboutUs from "../AboutUs/AboutUs";

function MainHero() {
    function scrollTo(offset) {
        scroller.scrollTo("random", {
            duration: 2000,
            delay: 0,
            smooth: "easeOutCubic",
            offset: offset,
            ignoreCancelEvents: true
        })

    }


    const handleScrollClick = () => {
        if (window.screen.width < 768) {
            scrollTo(1800);
        }
        else scrollTo(3000);
        document.body.style.overflowY = "scroll";
    }

    const Layer1 = useRef();


    useEffect(() => {
        // document.documentElement.style.overflowY = "hidden"
        document.getElementsByClassName("clickAndScroll")[0].addEventListener("click", () => {
            document.querySelector("body").style.overflowY = "scroll !important"
            document.documentElement.style.overflowY = "scroll"
            console.log("clicked");
        })
        window.onscroll = function (e) {
            // console.log(window.scrollY)
            if (this.oldScroll <= this.scrollY) {
                // if (window.pageYOffset > 0 && window.pageYOffset < 40) {
                //     scrollTo(2800);

                // }
                document.getElementsByClassName("clickAndScroll")[0].classList.add("arrowAnimation");
                setTimeout(document.getElementsByClassName("clickAndScroll")[0].classList.remove("arrowAnimation"), 2200)
            }
            else {
                if ((window.pageYOffset > 3300 && window.pageYOffset < 3650) && window.screen.width > 768) {
                    document.body.style.overflowY = "hidden"
                    // document.documentElement.overflowY = "hidden"
                    scroll.scrollToTop({ ignoreCancelEvents: true, smooth: "linear", duration: 1000 });
                }
                if ((window.pageYOffset > 2200 && window.pageYOffset < 2550) && window.screen.width < 768) {
                    document.body.style.overflowY = "hidden"
                    // document.documentElement.overflowY = "hidden"
                    scroll.scrollToTop({ ignoreCancelEvents: true, smooth: "linear", duration: 1000 });
                }

                if (window.pageYOffset >= 0 && window.pageYOffset < 10) {
                    document.body.style.overflowY = "hidden"
                    // document.documentElement.style.overflowY = "hidden"
                }
            }

            this.oldScroll = this.scrollY;
        }



        Events.scrollEvent.register("begin", function () {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register("end", function () {
            console.log("end", arguments);
        });



        Layer1.current.style.transform = "bottom: 0";
        // console.log(Layer1.current, screenWidth, screenHeight);
        // setTimeout(() => {
        //     document.getElementById("cityLayer1").style.transform = "translate(5%, 0px)"
        // }, 50);
        // setTimeout(() => {
        //     document.getElementById("cityLayer2").style.transform = "translate(1%,0px)"
        // }, 600);
        // setTimeout(() => {
        //     document.getElementById("cityLayer3").style.transform = "  translate(-2%,000px)"
        // }, 900);
        // setTimeout(() => {
        //     document.getElementById("cityLayer4").style.transform = "translate(-6%,000px) "
        // }, 1200);
        // setTimeout(() => {
        //     document.getElementById("cityLayer5").style.transform = "translate(-21.5%,000px)"
        // }, 1500);
        // setTimeout(() => {
        //     document.getElementById("cityLayer6").style.transform = "translate(30%,000px)"
        // }, 1800);

    });

    return (
        <Div100vh>
            <div className="wrapperMainHero landing-section" id="heroSection">
                <div className="upperHero">
                    <div className="skyWrapper">
                        <div class="sky"></div>
                        <div className="stars"></div>
                    </div>
                    <div className="moon">
                        <img id="moon" src={Moon} />{" "}
                    </div>
                </div>
                {/* <div className="buildings"> */}
                <div className="buildings">
                    <img class="cityBuildings layers" id="cityLayer1" ref={Layer1} src={CityLayer1} alt="" />
                    <img class="cityBuildings layers" id="cityLayer2" src={CityLayer2} alt="" />
                    <img class="cityBuildings layers" id="cityLayer3" src={CityLayer3} alt="" />
                    <img class="cityBuildings layers" id="cityLayer4" src={CityLayer4} alt="" />
                    <img class="cityBuildings layers" id="cityLayer5" src={CityLayer5} alt="" />
                    <img class="cityBuildings layers" id="cityLayer6" src={CityLayer6} alt="" />
                </div>
                {/* </div> */}


                <div className="floor">
                    {/* <div className="horizon-glow-buildings"></div>
                <div className="horizon-glow"></div>
                <div className="glow"></div>
                <img className="floorGlow" src={floor} alt="" /> */}
                    <img alt="" id="bigFloorLaptop" src={bigFloor} />
                    <img id="bigFloorMobile" src={bigFloorMobile} />
                    {/* <img className="floorGlow" src={floorGlow} alt="" /> */}

                    {/* <div className="upperHero">
                <div className="skyWrapper">
                    <div class="sky"></div>
                    <div className="stars"></div>
                </div>
                <div className="moon">
                    <img id="moon" src={Moon} />{" "}
                </div>
            </div> */}
                </div>


                <div id="clickAndScroll">
                    <div className="dimension">Click to enter the Encrypted Dimension</div>
                    <div id="clickAndScrollBtn" className="clickAndScroll" onClick={handleScrollClick}>
                        <img src={Arrow} alt="" />
                    </div>
                </div>
                <div id="random"></div>

            </div>
        </Div100vh>
    )
}

export default MainHero;