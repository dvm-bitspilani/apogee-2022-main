import React from "react";
import "./CountdownSlate.css";
import Sign from "../../assets/laptop/Sign.svg";

const CURRENT_DATE = new Date();
const APOGEE_DATE = new Date(2022, 3, 7);
var Difference_In_Time = APOGEE_DATE.getTime() - CURRENT_DATE.getTime();
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
const DAYS_LEFT = Math.round(Difference_In_Days);

export default function CountdownSlate() {
  React.useEffect(() => {
    // Update the document title using the browser API and transition of all the layers
    document.getElementsByClassName(
      "signDate"
    )[0].innerHTML = `${DAYS_LEFT} DAYS <br/> TO GO`;
  });
  return (
    <div className="sign">
      <img src={Sign} alt="" />
      <div className="signDate">
        27 DAYS
        <br /> TO GO{" "}
      </div>
    </div>
  );
}
