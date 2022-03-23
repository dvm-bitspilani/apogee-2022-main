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
        console.log(sectionArr)
    }, [])
    return (
        <div id="pagination">
            <div id="line">
                {/* ~ */}
                {landingSections.map(el => <div className="dots"></div> )}
            </div>
        </div>
    )
}

export default Pagination;