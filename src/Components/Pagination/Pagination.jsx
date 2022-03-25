import { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom'

import "./Pagination.css";

function Pagination() {


    useEffect(() => {

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
        
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

    }, [])
    
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


                
              {/* <div><a className="dots anchorHome"  href="#heroSection"> </a> <div className="homeLink pageLink">Home</div></div> 
               <div><a className="dots anchorAbout" href="#aboutus"></a> <div className="aboutLink pageLink">About</div></div> 
              <div><a className="dots anchorVideos" href="#videos"></a> <div className="videosLink pageLink">Videos</div></div>  
              <div><a className="dots anchorKernel" href="#kernelEvents"></a> <div className="kernelLink pageLink">Kernel Events</div></div>  
              <div><a className="dots anchorContact" href="#ContactUs"></a> <div className="contactLink pageLink">Contact Us</div></div>   */}
            
              <a className="dots anchorHome"  href="#heroSection"></a> 
               <a className="dots anchorAbout" href="#aboutus"></a> 
              <a className="dots anchorVideos" href="#videos"></a> 
              <a className="dots anchorKernel" href="#kernelEvents"></a> 
              <a className="dots anchorContact" href="#ContactUs"></a>  
            
            </div>
        </div>
    )
}

export default Pagination;