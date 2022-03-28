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
import Loader from "../Components/Loader/loader.jsx"
import ContactProfileCard from "../Components/ContactProfileCard/ContactProfileCard";
import Footer from "../Components/ContactProfileCard/Footer/Footer.jsx"
function Staging() {
  return (
    <div className="Stage">
      <Loader />
    </div>
  );
}

export default Staging;
