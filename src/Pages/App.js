import * as React from "react";
import BalconyLaptop from "../assets/laptop/balcony_grid_full.svg";
import BalconyMobile from "../assets/mobile/Balcony.svg";
import CityLayer1 from "../assets/laptop/City Layer 1.svg";
import CityLayer2 from "../assets/laptop/City Layer 2.svg";
import CityLayer3 from "../assets/laptop/City Layer 3.svg";
import CityLayer4 from "../assets/laptop/City Layer 4.svg";
import CityLayer5 from "../assets/laptop/City Layer 5.svg";
import CityLayer6 from "../assets/laptop/City Layer 6.svg";

import Moon from "../assets/Moon1.png";

import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import EventContainer from "../Components/EventContainer/EventContainer";
// import TextField from '@mui/material/TextField';
import "../stylesheets/Modal.css";
import "../stylesheets/App.css";
import "../stylesheets/events.css";
import "../stylesheets/all-events.css";
// import '/landing.js'
import RegModalButton from "../Components/RegModalButton/RegModalButton";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;


const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

var collegeList = ["BITS Pilani"];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  height: "90vh",
  bgcolor: "rgba(7, 9, 73, 0.09)",
  border: "1px solid rgba(209, 213, 219, 0.3);",
  backdropFilter: "blur(20px)",
  borderRadius: "20px",
  padding: "50px 100px",

  // boxShadow: 24,
  // p: 5,
  // filter:'blur(3px) saturate(180%)'
};

function App(props) {
  const options = [{ label: "Test 1" }, { label: "Test 2" }];
  const [open, setOpen] = React.useState(false);
  let [data, setData] = React.useState({});
  const [colleges, setColleges] = React.useState([]);
  const [events, setEvents] = React.useState([]);
  const [finalNames, setNames] = React.useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const theme = useTheme();
  const [eventName, setEventName] = React.useState([]);
  const [workshopName, setWorkshopName] = React.useState([]);
  var selectedEvents = [];
  var selectedWorkshops = [];
  const [openField, setOpenField] = React.useState(false);
  const [optionsField, setOptionsField] = React.useState([]);
  const [collegeName, setCollegeName] = React.useState([]);
  // const [registerDisabled, setRegisterDisabled] = React.useState(true);

  const loading = openField && optionsField.length === 0;
  
  React.useEffect(() => {
    props.handleCities();
  }, [document.getElementsByClassName(".city")]);

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }
    return () => {
      active = false;
    };
  }, [loading]);
  React.useEffect(() => {
    if (!openField) {
      setOptionsField([]);
    }
  }, [openField]);

  const handleChangeEvents = (event) => {
    const {
      target: { value },
    } = event;
    setEventName(
      typeof value === "string" ? value.split(",") : value,
      (selectedEvents = value)
    );
  };
  const names = [];

  const handleChangeWorkshops = (event) => {
    const {
      target: { value },
    } = event;
    setWorkshopName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value,
      (selectedEvents = value)
    );
  };
  React.useEffect(() => {
    // fetch("https://bits-apogee.org/registrations/get_college_by_char/", {
    //   headers: { "content-type": "application/json" },
    //   method: "POST",
    //   mode: "cors",
    //   data: {
    //     letters: variable
    //   }
    // })
    //   .then(function (response) {
    //     return response.json();
    //   })
    //   .then(function (result) {
    //     setColleges(result.data);
    //   });
    fetch("https://bits-apogee.org/registrations/events/", {
      headers: { "content-type": "application/json" },
      method: "GET",
      mode: "cors",
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (result) {
        setEvents(result.data[0]);
        result.data[0].events.forEach((item) => {
          names.push(item.name);
        });
        setNames(names);
      });

    fetch("https://bits-apogee.org/registrations/kernel_events/", {
      headers: { "content-type": "application/json" },
      method: "GET",
      mode: "cors",
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (result) {
        // console.log(result.data[0].events);
      });

    let hamburger = document.querySelector(".hamburger");
    let isMenuOpen = false;
    hamburger.addEventListener("click", () => {
      if (!isMenuOpen) {
        hamburger.classList.add("open");
        openNav();
      } else {
        hamburger.classList.remove("open");
        closeNav();
      }
      isMenuOpen = !isMenuOpen;
    });

    function openNav() {
      document.getElementById("drawer").style.transform = "translateX(00px)";
      if (window.screen.width < 768)
        document.getElementById("drawer").style.width = "300px";
      else {
        // for (let index = 0; index < 6; index++) {
        document.getElementsByClassName("city1")[0].style.transform =
          "translateX(-62%)";
        document.getElementsByClassName("city2")[0].style.transform =
          "translateX(-63%)";
        document.getElementsByClassName("city3")[0].style.transform =
          "translate(-67%,15%)";
        document.getElementsByClassName("city4")[0].style.transform =
          "translate(-71%,8%)";
        document.getElementsByClassName("city5")[0].style.transform =
          "translate(-96%,5%)";
        document.getElementsByClassName("city6")[0].style.transform =
          "translate(-50%,-3%)";
        document.getElementsByClassName("moon")[0].style.transform =
          "translateX(-57%)";

        // }
      }
    }

    function closeNav() {
      document.getElementById("drawer").style.transform = "translateX(500px)";
      document.getElementsByClassName("city1")[0].style.transform =
        "translateX(-45%)";
      document.getElementsByClassName("city2")[0].style.transform =
        "translateX(-46%)";
      document.getElementsByClassName("city3")[0].style.transform =
        "translate(-50%,15%)";
      document.getElementsByClassName("city4")[0].style.transform =
        "translate(-54%,8%)";
      document.getElementsByClassName("city5")[0].style.transform =
        "translate(-75%,5%)";
      document.getElementsByClassName("city6")[0].style.transform =
        "translate(-7%,-3%)";
      document.getElementsByClassName("moon")[0].style.transform =
        "translateX(-50%)";
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(collegeName);
    data = {
      ...data,
      events: eventName,
      college_id: collegeName.id,
      workshops: [],
    };
    // console.log(eventName);
    // console.log(data);
    // console.log(JSON.stringify(data));
    fetch("https://bits-apogee.org/registrations/Register/", {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify(data),
      mode: "cors",
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (result) {
        console.log(result);
        if (result.message) {
          alert(result.message.split(":")[0]);
        }
        if (
          result.message ==
          `A confirmation link has been sent to ${data.email_id}. Kindly click on it to verify your email address.`
        ) {
          console.log("submitted");
          document.getElementById("registerForm").reset();
        }
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(data);
  };

  return (
    <div className="App">
      <div id="wrapper">
        <div className="sky"></div>
        <div className="stars"></div>
        <nav>
          <div className="logo">
            <img src={require("../assets/Apogee Logo.png")} alt="" />
          </div>

        <RegModalButton />  

          <div className="hamburger">
            <div class="line-menu half start"></div>
            <div class="line-menu"></div>
            <div class="line-menu half end"></div>
          </div>

          <div id="drawer">
            <a
              href="https://bits-apogee.org/registrations/login/"
              target="_blank"
            >
              <div class="nav-links">Login</div>
            </a>
            {/* <a href="/">
              <div class="nav-links">APOGEE Innovation Challenge</div>
            </a> */}
            <Link to="/events">
              <div class="nav-links nav-events">
                All Events
              </div>
            </Link>
            <a
              href="https://bits-apogee.org/campusambassador2022/"
              target="_blank"
            >
              <div class="nav-links">Campus Ambassador</div>
            </a>
            {/* <div>Developers</div> */}
          </div>
        </nav>
        {/* <div className="registerBtnBorder register-lp">
          <button className="registerBtn" onClick={handleOpen}>REGISTER</button>
        </div> */}
        <div>
          {/* <!-- <div className="moon"><img src={require("../assets/laptop/Moon.svg")} alt=""/></div> --> */}
          <div className="moon">
            {" "}
            <img id="moon" src={Moon} />{" "}
          </div>
          
         
          {/* <div className="balcony">
            <div className="horizon-glow"></div>
            <div className="balcony-lp">
              <img src={BalconyLaptop} alt="" />
            </div>
            <div className="balcony-mobile">
              <img src={BalconyMobile} alt="" />
            </div>
            <div className="glow"></div>
          </div> */}
          {/* <!-- <div className="horizon-glow-buildings"></div> --> */}
          <div className="city city1">
            <img src={CityLayer1} alt="" />
          </div>
          <div className="city city2">
            <img src={CityLayer2} alt="" />
          </div>
          <div className="city city3">
            <img src={CityLayer3} alt="" />
          </div>
          <div className="city city4">
            <img src={CityLayer4} alt="" />
          </div>
          <div className="city city5">
            <img src={CityLayer5} alt="" />
          </div>
          <div className="city city6">
            <img src={CityLayer6} alt="" />
          </div>
        </div>
        <div className="balcony">
          <div className="horizon-glow"></div>
          <div className="balcony-lp">
            <img src={BalconyLaptop} alt="" />
          </div>
          <div className="balcony-mobile">
            <img src={BalconyMobile} alt="" />
          </div>
          <div className="glow"></div>
        </div>
      </div>
    </div>
  );
}
export default App;
