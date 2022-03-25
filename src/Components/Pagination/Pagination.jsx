import { useState, useEffect, useRef } from "react";
import { HashLink as Link } from "react-router-hash-link";

import "./Pagination.css";

function Pagination() {
    // console.log(props.sectionArr)
    const [landingSections, setLandingSections] = useState([])
    useEffect(() => {
        let sectionArr = document.querySelectorAll(".landing-section")
        let arr = Array.from(sectionArr)
        setLandingSections(arr)
        console.log(arr)
    }, [])
    return (
      <div id="pagination">
        <div id="line">
          <Link to="#heroSection">
            <a className="dots"></a>
          </Link>
          <Link to="#aboutus">
            <a className="dots"></a>
          </Link>{" "}
          <Link to="#videos">
            <a className="dots"></a>
          </Link>{" "}
          <Link to="#kernelEvents">
            <a className="dots"></a>
          </Link>{" "}
          <Link to="#ContactUs">
            <a className="dots"></a>
          </Link>
          <a className="dots" href="#aboutus"></a>
          <a className="dots" href="#videos"></a>
          <a className="dots" href="#kernelEvents"></a>
          <a className="dots" href="#ContactUs"></a>
        </div>
      </div>
    );
}

export default Pagination;