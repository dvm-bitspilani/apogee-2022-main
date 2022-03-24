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
import ContactProfileCard from "../Components/ContactProfileCard/ContactProfileCard";

function Staging() {
  return (
    <div className='all-events-wrapper'>
      <ContactProfileCard />
    </div>
  );
}

export default Staging;
