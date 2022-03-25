import { useState, useEffect, useRef } from "react";
import { HashLink as Link } from "react-router-hash-link";

import "./Pagination.css";

function Pagination() {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
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
        <a className="dots" href="#heroSection"></a>
        <a className="dots" href="#aboutus"></a>
        <a className="dots" href="#Videos"></a>
        <a className="dots" href="#kernelEvents"></a>
        <a className="dots" href="#ContactUs"></a>
      </div>
    </div>
  );
}

export default Pagination;
