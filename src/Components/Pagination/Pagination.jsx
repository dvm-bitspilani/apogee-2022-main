import { useState, useEffect, useRef } from "react";

import "./Pagination.css";

function Pagination() {
  // const isInViewport = (el) => {
  //   let something = el.getBoundingClientRect().top;
  //   console.log(something)
  // }
  var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    console.log(bounding.top,bounding.bottom)
    return bounding.top<=0 && (bounding.bottom <= document.documentElement.clientHeight && (bounding.bottom>=0))
        // bounding.top >= 0 &&
        // bounding.left >= 0 &&
        // bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        // bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    ;
};

  const landing = useRef()
  const about = useRef()
  const videos = useRef()
  const kernelEvents = useRef()
  const speakers = useRef()
  const contact = useRef()

  useEffect(() => {
    const Sections = ['heroSection','aboutUs','Videos','kernelEvents','Speakers','ContactUs'];
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

    for (let i = 0; i < 6; i++) {
      document.getElementsByClassName("dots")[i].addEventListener("click", () => {
        document.querySelector("body").style.overflowY = "scroll"
        document.documentElement.style.overflowY = "scroll"
      })
    }
    // window.onscroll = () => {
    //   // console.log(isInViewport(document.querySelector("#aboutus")));
    //   for(let i = 0; i < Sections.length;i++){
    //     console.log(Sections[i]);
    //     if(isInViewport(document.querySelector(`#${Sections[i]}`))){
    //       document.querySelector(`#PageHeader${i+1}}`).style.display = 'block';
    //     }
    //   }

    // }
    // window.onscroll = () => {
    //   if (isInViewport(document.querySelector(".wrapperMainHero"))) landing.current.classList.add("active")
    //   else landing.current.classList.remove("active")
    //   if (isInViewport(document.querySelector("#aboutus .SectionHeading"))) about.current.classList.add("active")
    //   else about.current.classList.remove("active")
    //   if (isInViewport(document.querySelector("#Videos .SectionHeading"))) videos.current.classList.add("active")
    //   else videos.current.classList.remove("active")
    //   if (isInViewport(document.querySelector("#kernelEvents .SectionHeading"))) kernelEvents.current.classList.add("active")
    //   else kernelEvents.current.classList.remove("active")
    //   if (isInViewport(document.querySelector("#Speakers .SectionHeading"))) speakers.current.classList.add("active")
    //   else speakers.current.classList.remove("active")
    //   if (isInViewport(document.querySelector("#ContactUs .SectionHeading"))) contact.current.classList.add("active")
    //   else contact.current.classList.remove("active")
    // }
  }, []);

  return (
    <div id="pagination">
      <div id="line">
        <a className="dots" href="#heroSection" ref={landing} id="hero-link"><span className="PageHeader" id="PageHeader1">HOME</span></a>
        <a className="dots" href="#aboutus" ref={about}><span className="PageHeader" id="PageHeader2">ABOUT US</span></a>
        <a className="dots" href="#Videos" ref={videos}><span className="PageHeader" id="PageHeader3">VIDEO</span></a>
        <a className="dots" href="#kernelEvents" ref={kernelEvents}><span className="PageHeader" id="PageHeader4">KERNEL EVENTS</span></a>
        <a className="dots" href="#Speakers" ref={speakers}><span className="PageHeader" id="PageHeader5">SPEAKERS</span></a>
        <a className="dots" href="#ContactUs" ref={contact}><span className="PageHeader" id="PageHeader6">CONTACT US</span></a>
      </div>
    </div>
  );
}

export default Pagination;
