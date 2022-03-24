import React from "react";
import "./ContactProfileCard.css";

export default function ContactProfileCard() {
  return (
    <div>
      <div className="contactUsTitle">CONTACT US</div>
      <div className="cardWrapper">
        <div className="profileImage"></div>

        <div className="profileContent">
          <h1>Priyanshu Shukla</h1>
          <p>Guest Lectures and Paper Presentations</p>

          <p>+91 88727 11250</p>

          <p>
            pep@bits-apogee.org <br></br> pep@bits-apogee.org
          </p>
        </div>
      </div>
    </div>
  );
}
