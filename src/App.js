import logo from './logo.svg';
import * as React from 'react';
import BalconyLaptop from './assets/laptop/balcony_grid_full.svg';
// import BalconyMobile from './assets/mobile/Balcony_full.svg';
import BalconyMobile from './assets/mobile/Balcony.svg'
import CityLayer1 from './assets/laptop/City Layer 1.svg';
import CityLayer2 from './assets/laptop/City Layer 2.svg';
import CityLayer3 from './assets/laptop/City Layer 3.svg';
import CityLayer4 from './assets/laptop/City Layer 4.svg';
import CityLayer5 from './assets/laptop/City Layer 5.svg';
import CityLayer6 from './assets/laptop/City Layer 6.svg';
import Sign from './assets/laptop/Sign.svg';
import Moon from './assets/Moon.svg';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from '@mui/material/styles';
import { styled, Box } from '@mui/system';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Link } from 'react-router-dom'
import Autocomplete from '@mui/material/Autocomplete'
import CircularProgress from '@mui/material/CircularProgress';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
// import TextField from '@mui/material/TextField';
import "./Modal.css";
import "./App.css";
import "./events.css"
import "./Components/Events/all-events.css"
// import '/landing.js'
import { createTheme } from "@mui/material/styles";
import Chip from "@mui/material/Chip";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const CURRENT_DATE = new Date();
const APOGEE_DATE = new Date(2022, 3, 7);
console.log(CURRENT_DATE, "CURRENT");
console.log(APOGEE_DATE, "APOGEE");
var Difference_In_Time = APOGEE_DATE.getTime() - CURRENT_DATE.getTime();
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
const DAYS_LEFT = Math.round(Difference_In_Days);

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

var collegeList = [
  'BITS Pilani',
];

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
  const [kernelEvents, setKernelEvents] = React.useState([]);
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
    // Update the document title using the browser API and transition of all the layers
    document.getElementsByClassName(
      "signDate"
    )[0].innerHTML = `${DAYS_LEFT} DAYS <br/> TO GO`;
  });

  React.useEffect(() => {
    props.handleCities();
  }, [document.getElementsByClassName(".city")]);

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    };
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

    fetch("https://bits-apogee.org/registrations/events_details/", {
      headers: { "content-type": "application/json" },
      method: "GET",
      mode: "cors",
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (result) {
        console.log(result[0].events);
        setKernelEvents(result[0].events);
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
    }
    console.log(eventName);
    console.log(data);
    console.log(JSON.stringify(data));
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
          alert(result.message.split(':')[0])
        }
        if(result.message == `A confirmation link has been sent to ${data.email_id}. Kindly click on it to verify your email address.`){
          console.log("submitted")
          document.getElementById("registerForm").reset();
        }
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value)
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(data);
  };

  const [eventDesc, setEventDesc] = React.useState("");
  const [kernelEventName, setKernelEventName] = React.useState("");
  const [descriptionDetails, setDescriptionDetails] = React.useState("none");
  const handleOpenEvents = (name, desc) => {
    setDescriptionDetails("flex");
    setKernelEventName(name);
    setEventDesc(desc);
  };
  const handleCloseEvents = () => setDescriptionDetails("none");
  const changeDriveLink = (driveLink) => {
    let firstHalf = driveLink.split(".com/")[0];
    let secondHalf = driveLink.split("?")[1];
    let finalLink = "url(" + firstHalf + ".com/uc?" + secondHalf + ")";
    return finalLink;
  };
  const handleLargeDescription = (desc) => {
    if (desc.split(" ").length > 15) {
      let finalDesc = desc.split(" ").slice(0, 15).join(" ") + "...";
      return finalDesc;
    }
    return desc;
  };

  return (
    <div className="App">
      <div id="wrapper">
        <div className="sky"></div>
        <div className="stars"></div>
        <nav>
          <div className="logo">
            <img src={require("./assets/Apogee Logo.png")} alt="" />
          </div>

          <div className="ModalBox">
            <div className="registerBtnWrapper">
              <div className="registerBtnBorder register-lp" id="registerTop">
                <button className="registerBtn" onClick={handleOpen}>REGISTER</button>
              </div>
            </div>

            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <div className="modalHeading">
                  REGISTRATION
                  <Box>
                    <IconButton onClick={handleClose}>
                      <CloseIcon color="action" fontSize="large"/>
                    </IconButton>
                  </Box>
                </div>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <form onSubmit={handleSubmit} id="registerForm">
                    <div className="wrapper">
                      <div className="cell">
                        <span>
                          Name*
                        </span>
                        <TextField type="text" id="nameVal" onChange={handleChange} name="name" label="Name" sx={{ width: 300, border: '1px solid white', color: 'white', borderRadius: '2px' }}
                        />
                      </div>
                      <div className="cell">
                        <span>
                          Year of Study*
                        </span>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label=" "
                          name="year"
                          placeholder="Year of Study"
                          onChange={handleChange}
                          sx={{
                            width: 300,
                            border: "1px solid white",
                            color: "white",
                            borderRadius: "2px",
                          }}
                        >
                          <MenuItem value={1}>1st</MenuItem>
                          <MenuItem value={2}>2nd</MenuItem>
                          <MenuItem value={3}>3rd</MenuItem>
                          <MenuItem value={4}>4th</MenuItem>
                        </Select>
                      </div>
                      <div className="cell">
                        <span>
                          College*
                        </span>
                        <Autocomplete
                          onChange={(event, value) => {
                            console.log(
                              value,
                              "value",
                              document.getElementById("asynchronous-demo").value
                            );
                            setCollegeName(value);
                            console.log(collegeName, "collegeName");
                          }}
                          id="asynchronous-demo"
                          sx={{ width: 300 }}
                          open={openField}
                          onOpen={() => {
                            setOpenField(true);
                          }}
                          onClose={() => {
                            setOpenField(false);
                          }}
                          isOptionEqualToValue={(option, value) => option.name === value.name}
                          getOptionLabel={(option) => option.name}
                          options={optionsField}
                          loading={loading}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label="Type your College"
                              onChange={async () => {
                                console.log("on Change")
                                // setCollegeName(document.getElementById('asynchronous-demo').value);
                                if (document.getElementById('asynchronous-demo').value.length >= 3) {
                                  console.log("fetch");
                                  // setCollegeName(document.getElementById('asynchronous-demo').value);
                                  console.log("RUN", document.getElementById('asynchronous-demo').value);
                                  const dataCollege = {
                                    letters: document.getElementById('asynchronous-demo').value
                                  }
                                  await fetch("https://bits-apogee.org/registrations/get_college_by_char/", {
                                    headers: { "content-type": "application/json" },
                                    method: "POST",
                                    mode: "cors",
                                    body: JSON.stringify(dataCollege)
                                  })
                                    .then(function (response) {
                                      return response.json();
                                    })
                                    .then(function (result) {
                                      // setColleges(result.data);
                                      collegeList = result.data;
                                      console.log(collegeList)
                                    });
                                }


                                setOptionsField([...collegeList]);

                              }}
                              InputProps={{
                                ...params.InputProps,
                                endAdornment: (
                                  <React.Fragment>
                                    {loading ? (
                                      <CircularProgress
                                        color="inherit"
                                        size={20}
                                      />
                                    ) : null}
                                    {params.InputProps.endAdornment}
                                  </React.Fragment>
                                ),
                              }}
                            />
                          )}
                        />
                      </div>
                      <div className="cell">
                        <span>
                          City*
                        </span>
                        <TextField type="text" onChange={handleChange} name="city" label="Type your City" sx={{ width: 300, border: '1px solid white', color: 'white' }}
                        />
                      </div>
                      <div className="cell">
                        <span>
                          Email*
                        </span>
                        <TextField type="email" onChange={handleChange} name="email_id" label="Type your email" sx={{ width: 300, border: '1px solid white', color: 'white' }}
                        />
                      </div>
                      <div className="cell">
                        <span>
                          Events*
                        </span>
                        <div>
                          <FormControl sx={{ m: 0, width: 300 }}>
                            <InputLabel id="demo-multiple-chip-label">
                              You can select more than one events
                            </InputLabel>
                            <Select
                              labelId="demo-multiple-chip-label"
                              id="eventsArr"
                              multiple
                              value={eventName}
                              onChange={handleChangeEvents}
                              input={
                                <OutlinedInput
                                  id="select-multiple-events"
                                  label="You can select more than one events"
                                />
                              }
                              renderValue={(selected) => (
                                <Box
                                  sx={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: 0.5,
                                  }}
                                >
                                  {selected.map((value) => (
                                    <Chip key={value} label={value} />
                                  ))}
                                </Box>
                              )}
                              MenuProps={MenuProps}
                            >
                              {finalNames.map((name) => (
                                <MenuItem
                                  key={name}
                                  value={name}
                                  style={getStyles(name, eventName, theme)}
                                >
                                  {name}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </div>
                      </div>

                      <div className="cell">
                        <span>
                          Phone*
                        </span>
                        <TextField type="text" variant="outlined" onChange={handleChange} name="phone" label="Type your phone number" sx={{ width: 300, color: 'white', border: '1px solid white' }}
                        />
                      </div>

                      {/* <div className="cell">
                        <span>
                          Workshops
                        </span>
                        <div>
                          <FormControl sx={{ m: 0, width: 300 }}>
                            <InputLabel id="demo-multiple-chip-label">You can select more than one workshops</InputLabel>
                            <Select
                              labelId="demo-multiple-chip-label"
                              id="workshopsArr"
                              multiple
                              value={workshopName}
                              onChange={handleChangeWorkshops}
                              input={<OutlinedInput id="select-multiple-workshops" label="You can select more than one workshops" />}
                              renderValue={(selected) => (
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                  {selected.map((value) => (
                                    <Chip key={value} label={value} />
                                  ))}
                                </Box>
                              )}
                              MenuProps={MenuProps}
                            >
                              {names.map((name) => (
                                <MenuItem
                                  key={name}
                                  value={name}
                                  style={getStyles(name, workshopName, theme)}
                                >
                                  {name}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </div>
                      </div> */}
                      {/* <div className="cell">
                        <span>
                          Workshop
                        </span>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label="Age"
                          name="workshop"
                          onChange={handleChange}
                          sx={{ width: 300, border: '1px solid white', color: 'white', borderRadius: '2px' }}
                        >
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </div> */}
                      <div className="genderContainer">
                        <span>
                          Gender*
                        </span>
                        <div className="genderContainerInput">
                          <input
                            type="radio"
                            onChange={handleChange}
                            name="gender"
                            value="Male"
                          />
                          <label>Male</label>
                          <input
                            type="radio"
                            onChange={handleChange}
                            name="gender"
                            value="Female"
                          />
                          <label>Female</label>
                          <input
                            type="radio"
                            onChange={handleChange}
                            name="gender"
                            value="Other"
                          />
                          <label>Other</label>
                        </div>
                      </div>
                      <div className="cell">
                        <span>Referral Code</span>
                        <TextField
                          type="text"
                          onChange={handleChange}
                          name="referral"
                          label="Type your Referral Code"
                          sx={{
                            width: 300,
                            border: "1px solid white",
                            color: "white",
                            borderRadius: "2px",
                          }}
                        />
                      </div>
                      <div className="cell">
                        <span>
                          Commitments
                        </span>
                        <TextField type="text" variant="outlined" onChange={handleChange} name="commitments" label="Type your Tech-teams/Clubs" sx={{ width: 300, color: 'white', border: '1px solid white' }}
                        />
                      </div>
                    </div>
                    <div id="submitBtn">
                      <div className="registerBtnBorder">
                        <button id="submitButton" type="submit">
                          <input
                            type="submit"
                            value="REGISTER"
                            id="submit-form"
                            data-bs-dismiss="modal"
                          />
                        </button>
                      </div>
                    </div>
                  </form>
                </Typography>
              </Box>
            </Modal>
          </div>
          <div className="hamburger">
            <div class="line-menu half start"></div>
            <div class="line-menu"></div>
            <div class="line-menu half end"></div>
          </div>

          <div id="drawer">
            <a href="https://bits-apogee.org/registrations/login/" target="_blank">
              <div class="nav-links">Login</div>
            </a>
            {/* <a href="/">
              <div class="nav-links">APOGEE Innovation Challenge</div>
            </a> */}
            <Link to="/events">
              <div class="nav-links">All Events</div>
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
          {/* <!-- <div className="moon"><img src={require("./assets/laptop/Moon.svg")} alt=""/></div> --> */}
          <div className="moon">
            {" "}
            <img id="moon" src={Moon} />{" "}
          </div>
          <div className="socials">
            <a href="https://twitter.com/bitsapogee?lang=en" target="_blank">
              <div className="twitter">
                <svg
                  width="46"
                  height="46"
                  viewBox="0 0 46 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="23" cy="23" r="23" fill="#00002C" />
                  <path
                    d="M23 0C10.2987 0 0 10.2987 0 23C0 35.7013 10.2987 46 23 46C35.7013 46 46 35.7013 46 23C46 10.2987 35.7013 0 23 0ZM34.0533 17.3373C34.0687 17.5786 34.0687 17.8301 34.0687 18.0766C34.0687 25.6132 28.329 34.2946 17.8404 34.2946C14.606 34.2946 11.6078 33.3551 9.08192 31.7379C9.54397 31.7893 9.98549 31.8098 10.4578 31.8098C13.1275 31.8098 15.5815 30.9062 17.5375 29.3763C15.0321 29.325 12.9272 27.6821 12.2085 25.4232C13.0864 25.5516 13.877 25.5516 14.7806 25.3205C13.4906 25.0585 12.3311 24.3578 11.4991 23.3377C10.6671 22.3176 10.2139 21.0409 10.2165 19.7246V19.6527C10.9712 20.0788 11.8594 20.3406 12.7886 20.3766C12.0075 19.856 11.3668 19.1506 10.9235 18.3231C10.4802 17.4957 10.248 16.5716 10.2473 15.6328C10.2473 14.5701 10.5246 13.5998 11.0225 12.7578C12.4544 14.5205 14.2412 15.9621 16.2667 16.989C18.2922 18.0159 20.5111 18.6051 22.7792 18.7183C21.9732 14.8422 24.8688 11.7054 28.3496 11.7054C29.9924 11.7054 31.471 12.3933 32.5132 13.5022C33.8018 13.2609 35.0339 12.7783 36.1326 12.1315C35.7065 13.4509 34.8132 14.565 33.6272 15.2683C34.7772 15.1451 35.8862 14.8268 36.9129 14.3801C36.1377 15.5199 35.1674 16.5313 34.0533 17.3373Z"
                    fill="white"
                  />
                </svg>
              </div>
            </a>
            <a
              href="https://www.instagram.com/bitsapogee/?hl=en"
              target="_blank"
            >
              <div className="insta">
                <svg
                  width="46"
                  height="46"
                  viewBox="0 0 46 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="23" cy="23" r="23" fill="#00002C" />
                  <path
                    d="M20.3652 19.0569C21.145 18.5355 22.0619 18.257 23 18.2566C24.258 18.2571 25.4644 18.7569 26.3542 19.6463C27.2439 20.5357 27.7442 21.742 27.7451 23C27.7451 23.9381 27.467 24.8551 26.9459 25.6351C26.4247 26.4151 25.684 27.0231 24.8174 27.3821C23.9508 27.7412 22.9971 27.8352 22.077 27.6524C21.157 27.4695 20.3118 27.0179 19.6483 26.3547C18.9849 25.6915 18.533 24.8465 18.3498 23.9265C18.1665 23.0065 18.2602 22.0528 18.619 21.186C18.9777 20.3193 19.5854 19.5783 20.3652 19.0569Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M33.0188 12.9777C33.484 13.4429 33.8486 13.9987 34.0901 14.6106L34.0936 14.6115C34.7308 16.2192 34.6955 19.7196 34.6727 21.9888C34.6689 22.3643 34.6654 22.7061 34.6654 23C34.6654 23.2939 34.6689 23.6357 34.6727 24.0113C34.6955 26.2817 34.7308 29.7861 34.0936 31.3885C33.8522 32.0004 33.4875 32.5563 33.0223 33.0214C32.5571 33.4866 32.0013 33.8513 31.3894 34.0928C29.7833 34.7303 26.2889 34.6949 24.0189 34.6719C23.6419 34.668 23.2987 34.6646 23.0036 34.6646C22.7139 34.6646 22.3779 34.6678 22.0091 34.6713C19.7384 34.6932 16.2234 34.7269 14.6169 34.0928C14.0049 33.8513 13.4491 33.4866 12.9839 33.0214C12.5187 32.5563 12.1541 32.0004 11.9126 31.3885C11.2755 29.775 11.309 26.2545 11.3306 23.9858C11.3341 23.6199 11.3372 23.2866 11.3372 22.9991C11.3372 22.7107 11.334 22.3762 11.3305 22.0088C11.3089 19.7391 11.2753 16.218 11.909 14.6106C12.1505 13.9987 12.5151 13.4429 12.9803 12.9777C13.4455 12.5125 14.0013 12.1478 14.6133 11.9064C16.2194 11.2688 19.7152 11.3042 21.9851 11.3273C22.3619 11.3311 22.705 11.3346 23 11.3346C23.2895 11.3346 23.6254 11.3313 23.9941 11.3278C26.2642 11.306 29.7793 11.2722 31.3858 11.9064C31.9978 12.1478 32.5536 12.5125 33.0188 12.9777ZM18.9488 29.0631C20.1479 29.8643 21.5578 30.292 23 30.292C23.9579 30.2932 24.9067 30.1054 25.7919 29.7393C26.6772 29.3733 27.4815 28.8362 28.1588 28.1588C28.8362 27.4815 29.3733 26.6772 29.7393 25.7919C30.1054 24.9067 30.2932 23.9579 30.292 23C30.292 21.5578 29.8643 20.1479 29.0631 18.9488C28.2618 17.7496 27.123 16.815 25.7905 16.2631C24.4581 15.7111 22.9919 15.5667 21.5774 15.8481C20.1629 16.1295 18.8636 16.824 17.8438 17.8438C16.824 18.8636 16.1295 20.1629 15.8481 21.5774C15.5667 22.9919 15.7111 24.4581 16.2631 25.7905C16.815 27.123 17.7496 28.2618 18.9488 29.0631ZM29.6467 16.8177C29.9267 17.0046 30.2559 17.1043 30.5926 17.1041L30.5961 17.1077C30.8197 17.1076 31.0411 17.0633 31.2475 16.9775C31.4539 16.8916 31.6414 16.7659 31.7991 16.6074C31.9568 16.4489 32.0817 16.2609 32.1666 16.054C32.2515 15.8472 32.2947 15.6257 32.2938 15.4021C32.2938 15.0654 32.1939 14.7363 32.0068 14.4564C31.8198 14.1764 31.5539 13.9583 31.2428 13.8295C30.9318 13.7007 30.5895 13.667 30.2593 13.7328C29.9291 13.7985 29.6258 13.9607 29.3878 14.1989C29.1498 14.437 28.9878 14.7403 28.9222 15.0706C28.8567 15.4008 28.8905 15.7431 29.0195 16.054C29.1484 16.365 29.3667 16.6308 29.6467 16.8177Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M42.9196 14.0942V31.9058C40.7306 36.7946 36.7946 40.7306 31.9058 42.9196H14.0942C9.20538 40.7306 5.26942 36.7946 3.08036 31.9058V14.0942C5.26942 9.20538 9.20538 5.26942 14.0942 3.08036H31.9058C36.7946 5.26942 40.7306 9.20538 42.9196 14.0942ZM34.83 34.8273C36.4938 33.1679 37.014 31.1484 37.1287 28.8692C37.2612 26.518 37.2612 19.482 37.1287 17.1415C37.0202 14.8623 36.4902 12.8419 34.83 11.1789C33.1697 9.516 31.151 8.99489 28.8719 8.88017C26.5233 8.74767 19.482 8.74767 17.1335 8.88017C14.8632 8.98867 12.8454 9.51333 11.1754 11.1727C9.50533 12.8321 8.99133 14.8516 8.87662 17.1308C8.74412 19.4776 8.74412 26.5197 8.87662 28.8692C8.98511 31.1439 9.50889 33.1644 11.1754 34.8273C12.8419 36.4902 14.8543 37.0113 17.1335 37.126C19.482 37.2586 26.5233 37.2586 28.8719 37.126C31.1484 37.0176 33.1661 36.4867 34.83 34.8273Z"
                    fill="white"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M23 46C35.7026 46 46 35.7026 46 23C46 10.2975 35.7026 0 23 0C10.2975 0 0 10.2975 0 23C0 35.7026 10.2975 46 23 46ZM23 40.6607C32.7537 40.6607 40.6607 32.7537 40.6607 23C40.6607 13.2463 32.7537 5.33929 23 5.33929C13.2463 5.33929 5.33929 13.2463 5.33929 23C5.33929 32.7537 13.2463 40.6607 23 40.6607Z"
                    fill="white"
                  />
                </svg>
              </div>
            </a>
            <a href="https://www.facebook.com/bitsapogee/" target="_blank">
              <div className="facebook">
                <svg
                  width="46"
                  height="46"
                  viewBox="0 0 46 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="23" cy="23" r="23" fill="#00002C" />
                  <path
                    d="M46 23.0576C46 10.3298 35.696 0 23 0C10.304 0 0 10.3298 0 23.0576C0 34.2175 7.912 43.5098 18.4 45.6541V29.9749H13.8V23.0576H18.4V17.2932C18.4 12.8431 22.011 9.22306 26.45 9.22306H32.2V16.1404H27.6C26.335 16.1404 25.3 17.1779 25.3 18.4461V23.0576H32.2V29.9749H25.3V46C36.915 44.8471 46 35.0246 46 23.0576Z"
                    fill="white"
                  />
                </svg>
              </div>
            </a>
          </div>
          <div className="sign">
            <img src={Sign} alt="" />
            <div className="signDate">
              27 DAYS
              <br /> TO GO{" "}
            </div>
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
          {/* <!-- <div className="horizon-glow-buildings"></div> --> */}
          <div className="horizon-glow"></div>
          <div className="balcony-lp">
            <img src={BalconyLaptop} alt="" />
          </div>
          <div className="balcony-mobile">
            <img src={BalconyMobile} alt="" />
          </div>
          <div className="glow"></div>
        </div>
        <div className="events-container">
          <div className="heading">KERNEL EVENTS</div>
          <div className="card-container">
            {kernelEvents.map((el) => (
              <div className="card">
                <div
                  className="card-img"
                  style={{
                    backgroundImage: changeDriveLink(el.img_url),
                  }}
                ></div>
                <div className="card-text">
                  <h3>{el.name}</h3>
                  <p>{handleLargeDescription(el.description)}</p>
                  <div
                    className="view-btn"
                    onClick={() => handleOpenEvents(el.name, el.description)}
                  >
                    View Details
                  </div>

                  {/* <Modal
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                    >
                                        <Box sx={style}>
                                            <div className="modalHeading">
                                                {el.name}
                                            </div>

                                        </Box>
                                    </Modal> */}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="card-description-container kernel-events"
          style={{ display: descriptionDetails }}
        >
          <div className="card-description-box">
            <div className="close-card-description" onClick={handleCloseEvents}>
              <CloseIcon/>
            </div>
            <div className="card-description-heading">{kernelEventName}</div>
            <div className="card-description-details">{eventDesc}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
