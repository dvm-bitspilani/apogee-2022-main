// Libraries
import React from "react"
import { useEffect, useRef } from "react"
// import * as Scroll from 'react-scroll';
import {animateScroll as scroll, scroller } from 'react-scroll'
import Arrow from "./MainHeroAssets/down-arrow.svg"
// Assets
import CityLayer1Laptop from "./MainHeroAssets/city/City Layer 1.svg";
import CityLayer2Laptop from "./MainHeroAssets/city/City Layer 2.svg";
import CityLayer3Laptop from "./MainHeroAssets/city/City Layer 3.svg";
import CityLayer4Laptop from "./MainHeroAssets/city/City Layer 4.svg";
import CityLayer5Laptop from "./MainHeroAssets/city/City Layer 5.svg";
import CityLayer6Laptop from "./MainHeroAssets/city/City Layer 6.svg";
import CityLayer1Mobile from "./MainHeroAssets/MobileBuildings/City 1.svg";
import CityLayer2Mobile from "./MainHeroAssets/MobileBuildings/City 2.svg";
import CityLayer3Mobile from "./MainHeroAssets/MobileBuildings/City 3.svg";
import CityLayer4Mobile from "./MainHeroAssets/MobileBuildings/City 4.svg";
import CityLayer5Mobile from "./MainHeroAssets/MobileBuildings/City 5.svg";
import CityLayer6Mobile from "./MainHeroAssets/MobileBuildings/City 6.svg";
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
import $ from "jquery"
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
        document.querySelector("html").style.overflowY = "scroll"

    }

    const Layer1 = useRef();

    useEffect(() => {
       if(window.pageYOffset===0) document.querySelector("html").style.overflowY = "hidden"
        document.querySelector("#hero-link").classList.add("active")
        // document.documentElement.style.overflowY = "hidden"
        document.getElementsByClassName("clickAndScroll")[0].addEventListener("click", () => {
            document.querySelector("body").style.overflowY = "scroll !important"
            console.log("clicked");
            document.querySelector("#hero-link").classList.remove("active")
        })
        
        
        window.onscroll = function (e) {
            document.getElementById('pagination').style.visibility = 'visible';
            // console.log(window.scrollY)
            if (this.oldScroll <= this.scrollY) {
                // if (window.pageYOffset > 0 && window.pageYOffset < 40) {
                //     scrollTo(2800);

                // }
                // document.getElementsByClassName("clickAndScroll")[0].classList.add("arrowAnimation");
                // setTimeout(document.getElementsByClassName("clickAndScroll")[0].classList.remove("arrowAnimation"), 2200)
            }
            else {
                if ((window.pageYOffset > 3300 && window.pageYOffset < 3650) && window.screen.width > 768) {
                document.getElementsByClassName("dots")[0].classList.add("active");
                    document.body.style.overflowY = "hidden"
                    document.querySelector("html").style.overflowY = "hidden"

                    // document.documentElement.overflowY = "hidden"
                    scroll.scrollToTop({ ignoreCancelEvents: true, smooth: "linear", duration: 1000 });
                }
                if ((window.pageYOffset > 2200 && window.pageYOffset < 2550) && window.screen.width < 768) {
                    document.body.style.overflowY = "hidden"
                    document.querySelector("html").style.overflowY = "hidden"

                    // document.documentElement.overflowY = "hidden"
                    scroll.scrollToTop({ ignoreCancelEvents: true, smooth: "linear", duration: 1000 });
                }

                if (window.pageYOffset >= 0 && window.pageYOffset < 10) {
                    document.body.style.overflowY = "hidden"
                    document.querySelector("html").style.overflowY = "hidden"
                }
            }

            this.oldScroll = this.scrollY;

            // function isScrolledIntoView(elem)
            // {
            //     var docViewTop = $(window).scrollTop();
            //     var docViewBottom = docViewTop + $(window).height();
            
            //     var elemTop = $(elem).offset().top;
            //     var elemBottom = elemTop + $(elem).height();
            
            //     return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
            // }
           
        }

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
                    {/* <img class="cityBuildings layers" id="cityLayer1" ref={Layer1} src={window.screen.width < 768 ? CityLayer1Mobile : CityLayer1Laptop} alt="" />
                    <img class="cityBuildings layers" id="cityLayer2" src={window.screen.width < 768 ? CityLayer2Mobile : CityLayer2Laptop} alt="" />
                    <img class="cityBuildings layers" id="cityLayer3" src={window.screen.width < 768 ? CityLayer3Mobile : CityLayer3Laptop} alt="" />
                    <img class="cityBuildings layers" id="cityLayer4" src={window.screen.width < 768 ? CityLayer4Mobile : CityLayer4Laptop} alt="" />
                    <img class="cityBuildings layers" id="cityLayer5" src={window.screen.width < 768 ? CityLayer5Mobile : CityLayer5Laptop} alt="" />
                    <img class="cityBuildings layers" id="cityLayer6" src={window.screen.width < 768 ? CityLayer6Mobile : CityLayer6Laptop} alt="" /> */}
                    <img class="cityBuildings layers" id="cityLayer1" ref={Layer1} src={CityLayer1Laptop} alt="" />
                    <img class="cityBuildings layers" id="cityLayer2" src={CityLayer2Laptop} alt="" />
                    <img class="cityBuildings layers" id="cityLayer3" src={CityLayer3Laptop} alt="" />
                    <img class="cityBuildings layers" id="cityLayer4" src={CityLayer4Laptop} alt="" />
                    <img class="cityBuildings layers" id="cityLayer5" src={CityLayer5Laptop} alt="" />
                    <img class="cityBuildings layers" id="cityLayer6" src={CityLayer6Laptop} alt="" />

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