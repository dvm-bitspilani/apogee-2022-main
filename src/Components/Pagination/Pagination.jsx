import { useState, useEffect, useRef } from "react";

import "./Pagination.css";

function Pagination() {
  // const [about, setAbout] =  useState()
  // const [videos, setVideos] =  useState()
  // const [kernelEvents, setKernelEvents] =  useState()
  // const [speakers, setSpeakers] =  useState()
  // const [contact, setContact] =  useState()

  const landing = useRef()
  const about = useRef()
  const videos = useRef()
  const kernelEvents = useRef()
  const speakers = useRef()
  const contact = useRef()

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
        for (let i = 0; i < (document.getElementsByClassName("dots").length); i++) {
          document.getElementsByClassName("dots")[i].classList.remove("active");
        }
        console.log(this.classList);
        this.classList.add("active");
        console.log(this.classList);
      });
    });


    document.getElementById("hero-link").addEventListener("click", () => {
      document.querySelector("body").style.overflowY = "hidden"
      document.documentElement.style.overflowY = "scroll"
    })

    for (let i = 1; i < 5; i++) {
      document.getElementsByClassName("dots")[i].addEventListener("click", () => {
        document.querySelector("body").style.overflowY = "scroll"
        document.documentElement.style.overflowY = "scroll"
      })
    }
    console.log(isInViewport(document.querySelector("#aboutus")))
    window.onscroll = () => {
      if (isInViewport(document.querySelector(".wrapperMainHero"))) landing.current.classList.add("active")
      else landing.current.classList.remove("active")
      if (isInViewport(document.querySelector("#aboutus .SectionHeading"))) about.current.classList.add("active")
      else about.current.classList.remove("active")
      if (isInViewport(document.querySelector("#Videos .SectionHeading"))) videos.current.classList.add("active")
      else videos.current.classList.remove("active")
      if (isInViewport(document.querySelector("#kernelEvents .SectionHeading"))) kernelEvents.current.classList.add("active")
      else kernelEvents.current.classList.remove("active")
      if (isInViewport(document.querySelector("#Speakers .SectionHeading"))) speakers.current.classList.add("active")
      else speakers.current.classList.remove("active")
      if (isInViewport(document.querySelector("#ContactUs .SectionHeading"))) contact.current.classList.add("active")
      else contact.current.classList.remove("active")
    }
    // setAbout(isInViewport(document.querySelector("#aboutus")))
    // setVideos(isInViewport(document.querySelector("#Videos")))
    // setKernelEvents(isInViewport(document.querySelector("#kernelEvents")))
    // setSpeakers(isInViewport(document.querySelector("#Speakers")))
    // setContact(isInViewport(document.querySelector("#ContactUs")))
  }, []);

    const isInViewport = (el) => {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;
  
    while(el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }
  
    return (
      top < (window.pageYOffset + window.innerHeight) &&
      left < (window.pageXOffset + window.innerWidth) &&
      (top + height) > window.pageYOffset &&
      (left + width) > window.pageXOffset
    );
  }

  console.log(about)
  // console.log(isInViewport(bruh))

  return (
    <div id="pagination">
      <div id="line">
        <a className="dots" href="#heroSection" ref={landing} id="hero-link"></a>
        <a className="dots" href="#aboutus" ref={about}></a>
        <a className="dots" href="#Videos" ref={videos}></a>
        <a className="dots" href="#kernelEvents" ref={kernelEvents}></a>
        <a className="dots" href="#Speakers" ref={speakers}></a>
        <a className="dots" href="#ContactUs" ref={contact}></a>
      </div>
    </div>
  );
}

export default Pagination;
