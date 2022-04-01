import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Input from "@mui/material/Input";
import TextField from "@mui/material/TextField";
import "../../stylesheets/Modal.css";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { useTheme } from "@mui/material/styles";

import Chip from "@mui/material/Chip";
import { styled, Box } from "@mui/system";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Link } from "react-router-dom";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import ModalUnstyled from "@mui/base/ModalUnstyled";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

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

const gameStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  background: "#ffffff",
  boxShadow: 24,
  borderRadius: "10px",
  p: 4,
  width: '60vw'
};

export default function RegModalButton(props) {
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
  var selectedEvents = [];
  const [openField, setOpenField] = React.useState(false);
  const [optionsField, setOptionsField] = React.useState([]);
  const [collegeName, setCollegeName] = React.useState([]);
  // const [registerDisabled, setRegisterDisabled] = React.useState(true);

  const loading = openField && optionsField.length === 0;

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
    // if (selectedEvents.includes("ARMAGEDDON")) document.getElementsByClassName("extraMenu")[0].style.display = "flex"
    // else document.getElementsByClassName("extraMenu")[0].style.display = "none"
  };
  const names = [];

  React.useEffect(async () => {
    await fetch("https://bits-apogee.org/registrations/events/", {
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

    await fetch("https://bits-apogee.org/registrations/kernel_events/", {
      headers: { "content-type": "application/json" },
      method: "GET",
      mode: "cors",
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (result) {
        // console.log(result.data[0].events);
        setKernelEvents(result.data[0].events);
      });

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
        console.log(response.status)
        if (response.status === 500 || response.status === 403) alert("Please try again in incognito mode or a different browser, if fails, contact DVM")
        return response.json();
      })
      .then(function (result) {
        // console.log(result);
        if (result.message) {
          alert(result.message.split(":")[0]);
        }
        if (
          result.message ==
          `A confirmation link has been sent to ${data.email_id}. Kindly click on it to verify your email address.`
        ) {
          // console.log("submitted");
          document.getElementById("registerForm").reset();
        }
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="ModalBox">
      <div className="registerBtnWrapper">
        <div className="registerBtnBorder register-lp" id="registerTop">
          <button className="registerBtn" onClick={handleOpen}>
            REGISTER
          </button>
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
                <CloseIcon color="action" fontSize="large" />
              </IconButton>
            </Box>
          </div>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <form onSubmit={handleSubmit} id="registerForm">
              <div className="wrapper">
                <div className="cell">
                  <span>Name*</span>
                  <TextField
                    type="text"
                    id="nameVal"
                    onChange={handleChange}
                    name="name"
                    label="Name"
                    sx={{
                      width: 300,
                      border: "1px solid white",
                      color: "white",
                      borderRadius: "2px",
                    }}
                  />
                </div>
                <div className="cell">
                  <span>Year of Study*</span>
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
                  <span>College*</span>
                  <Autocomplete
                    onChange={(event, value) => {
                      // console.log(
                      //   value,
                      //   "value",
                      //   document.getElementById("asynchronous-demo").value
                      // );
                      setCollegeName(value);
                      // console.log(collegeName, "collegeName");
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
                    isOptionEqualToValue={(option, value) =>
                      option.name === value.name
                    }
                    getOptionLabel={(option) => option.name}
                    options={optionsField}
                    loading={loading}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Type your College"
                        onChange={async () => {
                          // console.log("on Change");
                          // setCollegeName(document.getElementById('asynchronous-demo').value);
                          if (
                            document.getElementById("asynchronous-demo").value
                              .length >= 3
                          ) {
                            console.log("fetch");
                            // setCollegeName(document.getElementById('asynchronous-demo').value);
                            console.log(
                              "RUN",
                              document.getElementById("asynchronous-demo")
                                .value
                            );
                            const dataCollege = {
                              letters:
                                document.getElementById("asynchronous-demo")
                                  .value,
                            };
                            await fetch(
                              "https://bits-apogee.org/registrations/get_college_by_char/",
                              {
                                headers: {
                                  "content-type": "application/json",
                                },
                                method: "POST",
                                mode: "cors",
                                body: JSON.stringify(dataCollege),
                              }
                            )
                              .then(function (response) {
                                return response.json();
                              })
                              .then(function (result) {
                                // setColleges(result.data);
                                collegeList = result.data;
                                // console.log(collegeList);
                              });
                          }

                          setOptionsField([...collegeList]);
                        }}
                        InputProps={{
                          ...params.InputProps,
                          endAdornment: (
                            <React.Fragment>
                              {loading ? (
                                <CircularProgress color="inherit" size={20} />
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
                  <span>City*</span>
                  <TextField
                    type="text"
                    onChange={handleChange}
                    name="city"
                    label="Type your City"
                    sx={{
                      width: 300,
                      border: "1px solid white",
                      color: "white",
                    }}
                  />
                </div>
                <div className="cell">
                  <span>Email*</span>
                  <TextField
                    type="email"
                    onChange={handleChange}
                    name="email_id"
                    label="Type your email"
                    sx={{
                      width: 300,
                      border: "1px solid white",
                      color: "white",
                    }}
                  />
                </div>
                <div className="cell">
                  <span>Events*</span>
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
                            {/* {name == ("Armageddon" || "ARMAGEDDON") ? <Link to="/armageddon">{name}</Link> : name} */}
                          </MenuItem>
                        ))}

                      </Select>

                    </FormControl>
                    {/* <div className="extraMenu">
                      <div>Valorant</div>
                      <div>BGMI</div>
                      <div>CS-GO</div>
                      <div>Clash Royal</div>
                      <b><span>BITSian only events</span></b>
                      <div>Tekken</div>
                      <div>FIFA</div>
                      <div>Rocket League</div>
                    </div> */}
                  </div>

                </div>

                <div className="cell">
                  <span>Phone*</span>
                  <TextField
                    type="text"
                    variant="outlined"
                    onChange={handleChange}
                    name="phone"
                    label="Type your phone number"
                    sx={{
                      width: 300,
                      color: "white",
                      border: "1px solid white",
                    }}
                  />
                </div>

                <div className="genderContainer">
                  <span>Gender*</span>
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
                  <span>Commitments</span>
                  <TextField
                    type="text"
                    variant="outlined"
                    onChange={handleChange}
                    name="commitments"
                    label="Type your Tech-teams/Clubs"
                    sx={{
                      width: 300,
                      color: "white",
                      border: "1px solid white",
                    }}
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
  );
}
