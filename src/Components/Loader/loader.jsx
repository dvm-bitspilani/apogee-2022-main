// imports 
import React from "react";
import lottie from "lottie-web";
import LoaderVideo from "./loader.mp4"
import Animation from './newlottie.json';
import LoaderGif from "./latestloader.gif"
import "./loader.css"

function Loader() {
  // React.useEffect(() => {
  //   lottie.loadAnimation({
  //     container: document.querySelector("#loaderAnimation"),
  //     animationData: Animation,
  //     renderer: "svg", // "canvas", "html"
  //     loop: true, // boolean
  //     autoplay: true,

  //   });
  // }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div className="LoaderWrapper" id="loaderAnimation">
      {/* <video src={LoaderVideo} autoPlay loop></video> */}
      <div className="loaderImg"></div>

    </div>
  )
}
export default Loader