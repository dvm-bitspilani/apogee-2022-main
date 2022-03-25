import React from "react";
import "./ContactProfileCard.css";

export default function ContactProfileCard(props) {
  return (
    <div>
      {/* <div className="contactUsTitle">CONTACT US</div> */}
      <div className="cardWrapper">
        <div className="profileImage" ><img src={require(`./../../assets/ContactUsAssets/${props.profileImage}.png`)} /></div>

        <div className="profileContent">
          <h1>{props.Name}</h1>
          <p>{props.Designation}</p>

          <p>{props.Mobile}</p>

          <p>
            {props.Email.length == 1 ?
              props.Email[0] :
              `${props.Email[0]}\n${props.Email[1]}`
            }
          </p>
        </div>
      </div>
    </div>
  );
}
