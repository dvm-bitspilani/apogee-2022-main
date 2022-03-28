import { useState, useEffect, useRef } from "react";

import "./Pagination.css";

function Pagination() {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
        for (let i= 0; i< (document.getElementsByClassName("dots").length); i++) {
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

    for (let i= 1; i< 5; i++) {
        document.getElementsByClassName("dots")[i].addEventListener("click", () => {
            document.querySelector("body").style.overflowY = "scroll"
            document.documentElement.style.overflowY = "scroll"
        })
    }  
      
      
  }, []);

  // console.log(props.sectionArr)
  const [landingSections, setLandingSections] = useState([]);
    useEffect(() => {
    

    let sectionArr = document.querySelectorAll(".landing-section");
    let arr = Array.from(sectionArr);
    setLandingSections(arr);
    console.log(arr);
  }, []);
  return (
    <div id="pagination">
      <div id="line">
       <a className="dots" href="#heroSection" id="hero-link"></a> 
        <a className="dots" href="#aboutus"></a>
        <a className="dots" href="#Videos"></a>
        <a className="dots" href="#kernelEvents"></a>
        <a className="dots" href="#Speakers"></a>
        <a className="dots" href="#ContactUs"></a>
      </div>
    </div>
  );
}

export default Pagination;
