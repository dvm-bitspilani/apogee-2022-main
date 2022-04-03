import React from "react";
import "./DeveloperCard.css";

export default function DeveloperCard(props) {
  return (
    <div className={`dev-container dev-${props.team}`}>
      <div className="dev-img-cont">
        <img
          src={require(`./../../assets/team/${props.team}/${props.img}`)}
          alt={`${props.name}`}
          className="dev-img"
        />
        <img
          src={require(`./../../assets/teamBG/${props.team}.svg`)}
          alt="BG"
          className="dev-team-circ"
        />
      </div>
      <div className="dev-name">{props.name}</div>
    </div>
  );
}
