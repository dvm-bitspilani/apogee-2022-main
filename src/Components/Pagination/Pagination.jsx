import { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom'

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
                <a className="dots" href="#heroSection"></a> 
                <a className="dots" href="#aboutus"></a> 
                <a className="dots" href="#videos"></a> 
                <a className="dots" href="#kernelEvents"></a> 
                <a className="dots" href="#ContactUs"></a> 

            </div>
        </div>
    )
}

export default Pagination;