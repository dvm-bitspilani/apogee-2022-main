import React from "react";

import CloseIcon from "@mui/icons-material/Close";
import "../../stylesheets/events.css";
import "../../stylesheets/all-events.css";

function EventContainer(props) {
  const [events, setEvents] = React.useState([]);

  React.useEffect(async () => {
    const response = await fetch(props.api, {
      headers: { "content-type": "application/json" },
      method: "GET",
      mode: "cors",
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (result) {
        if (props.type == "kernel") setEvents(result.data[0].events);
        else setEvents(result[0].events);
        console.log(result);
        if (document.getElementsByClassName("loaderDivEvents")[0]) {
          document.getElementsByClassName("loaderDivEvents")[0].style.display = "none";
        }
      })
      .catch((error) => {
        console.log("ERROR", error);
        const errorEvent = [
          {
            about: "<p>NA</p>",
            categories: ["NonWorkshop"],
            contact: "",
            date_time: "TBA",
            description: "Server is Busy",
            details: "<p>NA</p>",
            duration: 0,
            end_time: "TBA",
            id: 1,
            image_url: "",
            name: "SERVER IS BUSY",
            rules: "<p>NA</p>",
            time: "All day",
            timings: "TBA",
            venue: "TBA",
          },
        ];
        setEvents(errorEvent);
      });

  }, []);

  const [eventDesc, setEventDesc] = React.useState("");
  const [eventName, setEventName] = React.useState("");
  const [eventImg, setEventImg] = React.useState()
  const [eventRules, setEventRules] = React.useState("")
  const [isEventDetails, setIsEventDetails] = React.useState(true)
  const [isDiabled, setIsDisabled] = React.useState(false);
  const [descriptionDetails, setDescriptionDetails] = React.useState("none");
  const handleOpen = (name, desc, img, rules) => {
    if (desc === null) {
      return;
    }
    setDescriptionDetails("flex");

    setEventName(name);
    setEventDesc(desc);
    setEventImg(img)
    setEventRules(rules)
  };
  const handleClose = () => setDescriptionDetails("none");
  const changeDriveLink = (driveLink) => {
    console.log(driveLink)
    console.log(eventImg)
    if (!driveLink.includes("google")) {
      return;
    }
    if (driveLink.includes("bits-apogee") || driveLink.includes("default")) {
      return;
    }
    let firstHalf = driveLink.split(".com/")[0];
    let secondHalf = driveLink.split("?")[1];
    let finalLink = "url(" + firstHalf + ".com/uc?" + secondHalf + ")";
    // console.log("Final Link", finalLink);
    return finalLink;
  };
  const handleLargeDescription = (desc) => {
    if (desc) {
      if (desc.split(" ").length > 20) {
        let finalDesc = desc.split(" ").slice(0, 20).join(" ") + "...";
        return finalDesc;
      }
    }
    if (desc === "" || desc == null) {
      return "No description yet";
    }
    return desc;
  };

  const handleEDClick = () =>{
    setIsEventDetails(true)
  }

  const handleGuidelineClick = () =>{
    setIsEventDetails(false)
  }

  return (
    <div>
      <div
        className={
          (props.type == "kernel"
            ? "kernel-events-container"
            : "all-events-container") + " landing-sec"
        }
        id={props.type == "kernel" ? "kernel-events" : "all-events"}
      >
        <div className="SectionHeading heading">{props.heading}</div>
        <div className="card-container">
          {events.map((el) => (
            <div className="card">
              <div
                className="card-img"
                style={{
                  backgroundImage: changeDriveLink(
                    props.type == "kernel" ? el.image_url : el.img_url
                  ),
                }}
              ></div>
              <div className="card-text">
                <h3>{el.name}</h3>
                <p>{handleLargeDescription(el.description)}</p>
                <div
                  className="view-btn"
                  onClick={() => handleOpen(el.name, el.description, el.image_url, el.rules)}
                >
                  View Details
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className={
          "card-description-container" +
          (props.type == "kernel" ? " kernel-events" : "")
        }
        style={{ display: descriptionDetails }}
      >
        <div className="card-description-box">
          <div
            className="card-description-img"
          // style={{
          //   backgroundImage: changeDriveLink(eventImg),
          // }}
          ></div>
          <div className="card-description-text">
            <div className="card-description-heading">{eventName}</div>
            <div className="card-description-tabs">
              <span onClick={handleEDClick} className={isEventDetails ? "card-tab-active" : ""}>Event Details</span>
              <span onClick={handleGuidelineClick} className={!isEventDetails ? "card-tab-active" : ""}>Guidelines</span>
            </div>
            <div className="card-description-details">{isEventDetails ? eventDesc : eventRules}</div>
          </div>
          <div className="close-card-description" onClick={handleClose}>
            <CloseIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventContainer;
