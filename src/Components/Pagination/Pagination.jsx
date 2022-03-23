import { useState, useEffect, useRef } from "react";

import "./Pagination.css";

function Pagination(){
    return(
        <div id="pagination">
            <div id="line">
            <div className="dots active"></div>
            <div className="dots"></div>
            <div className="dots"></div>
            <div className="dots"></div>
            <div className="dots"></div>
            <div className="dots"></div>
            </div>
        </div>
    )
}

export default Pagination;