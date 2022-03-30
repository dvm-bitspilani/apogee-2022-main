import React from "react";

import CloseIcon from "@mui/icons-material/Close";
import "../../stylesheets/events.css";
import "../../stylesheets/all-events.css";

function EventContainer(props) {
  const [events, setEvents] = React.useState([]);
  let isMounted = true
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
        console.log(result.data[0].events);
        for (let i = 0; i < result.data[0].events.length; i++) {
          if (result.data[0].events[i].contact === "") {
            result.data[0].events[i].contact = "NA"
          }  
        }
  
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
    return () => { isMounted = false };
  }, []);

  const [eventDesc, setEventDesc] = React.useState("");
  const [eventName, setEventName] = React.useState("");
  const [eventRules, setEventRules] = React.useState("")
  const [eventContact, setEventContact] = React.useState("")
  const modalImg = React.useRef()
  const [tab, setTab] = React.useState({eventDetail: true, guideline: false, contact: false})
  const [isDiabled, setIsDisabled] = React.useState(false);
  const [descriptionDetails, setDescriptionDetails] = React.useState("none");

  const handleOpen = (el) => {
    if (el.description === null) {
      return;
    }
    let img = props.type == "kernel" ? el.image_url : el.img_url
    modalImg.current.style.backgroundImage = changeDriveLink(img)
    setDescriptionDetails("flex");
    setEventName(el.name);
    setEventDesc(el.description);
    setEventRules(el.rules)
    setEventContact(el.contact)
  };
  const handleClose = () => {
    setDescriptionDetails("none");
    setTab({eventDetail: true, guideline: false, contact: false})
  }
  const changeDriveLink = (driveLink) => {
    // console.log(driveLink)
    if (!driveLink.includes("google")) {
      return;
    };
    if (driveLink.includes("bits-apogee") || driveLink.includes("default")) {
      return;
    };
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

  const handleEDClick = () => {
    setTab({eventDetail: true, guideline: false, contact: false})
  }
  const handleGuidelineClick = () => {
    setTab({eventDetail: false, guideline: true, contact: false})
  }
  const handleContactClick = () =>{
    setTab({eventDetail: false, guideline: false, contact: true})
  }

  const tabSelection = ()  =>{
    if(tab.eventDetail) return eventDesc
    else if (tab.guideline) return eventRules
    else if (tab.contact) return eventContact
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
        <div className="SectionHeading heading kernelHeading">{props.heading}</div>
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
                  onClick={() => handleOpen(el)}
                >
                  View Details
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="toCheck"></div>
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
            ref={modalImg}
            className="card-description-img"
          ></div>
          <div className="card-description-text">
          <div>  <div className="card-description-heading">{eventName}</div>
            <div className="card-description-tabs">
              <span onClick={handleEDClick} className={tab.eventDetail ? "card-tab-active" : ""}>Details</span>
              <span onClick={handleGuidelineClick} className={tab.guideline ? "card-tab-active" : ""}>Guidelines</span>
              <span onClick={handleContactClick} className={tab.contact ? "card-tab-active" : ""}>Contact</span>
            </div></div>
            <div className="card-description-details" dangerouslySetInnerHTML={{ __html: tabSelection()}} ></div>
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
