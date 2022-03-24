import React, { Component } from "react";
import { Link } from "react-router-dom";
import Dummy from "../assets/dummy.svg";
import ViewBtn from "../assets/Button.svg";
import Arrow from "../assets/Arrox.svg";
import Modal from "@mui/material/Modal";
import { styled, Box } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import Background from "../assets/laptop/events_balcony.svg";
import EventContainer from "../Components/EventContainer/EventContainer";
import Loader from "./loaderPage.jsx"

import "../stylesheets/events.css";
import "../stylesheets/all-events.css";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: "60vw",
//   height: "60vh",
//   bgcolor: "rgba(7, 9, 73, 0.09)",
//   border: "1px solid rgba(209, 213, 219, 0.3);",
//   backdropFilter: "blur(20px)",
//   borderRadius: "20px",
//   padding: "50px 100px",

//   // boxShadow: 24,
//   // p: 5,
//   // filter:'blur(3px) saturate(180%)'
// };

function Events(props) {
  return (
    <div className='all-events-wrapper'>
      <div className="loaderDivEvents">
        <Loader />
      </div>
      <Link to="/">
        <div className="arrow">
          <img src={Arrow} alt="" />
        </div>
      </Link>
      <EventContainer
        heading={props.heading}
        api={props.link}
        type={props.type}
      />
    </div>
  );
}

export default Events;
