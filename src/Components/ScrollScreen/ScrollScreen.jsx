import React from "react";
import Meteor1 from "./assets/Meteor_5.svg"
import Meteor2 from "./assets/Meteor_6.svg"
import Meteor3 from "./assets/Meteor_3-2.svg"
import Meteor4 from "./assets/Meteor_2.svg"
import Meteor5 from "./assets/Meteor_6.svg"
import Meteor6 from "./assets/Meteor_3-1.svg"
import Meteor7 from "./assets/Meteor_3.svg"
import Meteor8 from "./assets/Meteor_2.svg"
import Meteor9 from "./assets/Meteor_4.svg"
import Meteor10 from "./assets/Meteor_1.svg"
import Meteor11 from "./assets/Meteor_5.svg"
import grid from "./assets/Vector.svg"
import "./scroll.css"

function ScrollScreen() {
    
    return (<div className="scrollMain">

        <img src={Meteor1} alt="" className="meteor" id="meteor1" />
        <img src={Meteor2} alt="" className="meteor" id="meteor2"/>
        <img src={Meteor3} alt="" className="meteor" id="meteor3"/>
        <img src={Meteor4} alt="" className="meteor" id="meteor4"/>
        <img src={Meteor5} alt="" className="meteor" id="meteor5"/>
        <img src={Meteor6} alt="" className="meteor" id="meteor6"/>
        <img src={Meteor7} alt="" className="meteor" id="meteor7"/>
        <img src={Meteor8} alt="" className="meteor" id="meteor8"/>
        <img src={Meteor9} alt="" className="meteor" id="meteor9"/>
        <img src={Meteor10} alt="" className="meteor" id="meteor10"/>
        <img src={Meteor11} alt="" className="meteor" id="meteor11"/>
   
        


        <div className="mainGrid">
            <img src={grid} alt=""/>
</div>

    </div>)
}
export default ScrollScreen

