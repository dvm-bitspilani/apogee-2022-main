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
      })
      .catch((error) => {
        console.log("ERROR", error);
        const errorEvent = [{
          about: "<p>NA</p>",
          categories: ['NonWorkshop'],
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
        }];
        setEvents(errorEvent);
        
      });
      document.body.style.overflowY = "scroll"
  }, []);

  const [eventDesc, setEventDesc] = React.useState("");
  const [eventName, setEventName] = React.useState("");
  const [descriptionDetails, setDescriptionDetails] = React.useState("none");
  const handleOpen = (name, desc) => {
    setDescriptionDetails("flex");
    setEventName(name);
    setEventDesc(desc);
  };
  const handleClose = () => setDescriptionDetails("none");
  const changeDriveLink = (driveLink) => {
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

  return (
    <div>
      <div
        className={
          props.type == "kernel"
            ? "kernel-events-container"
            : "all-events-container"
        }
        id={props.type == "kernel" ? "kernel-events" : ""}
      >
        <div className="heading">{props.heading}</div>
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
                  onClick={() => handleOpen(el.name, el.description)}
                >
                  View Details
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        // className={props.type == "kernel" ? "card-description-container kernel-events" : " card-description-container"}
        className={
          "card-description-container" +
          (props.type == "kernel" ? " kernel-events" : "")
        }
        style={{ display: descriptionDetails }}
      >
        <div className="card-description-box">
          <div className="close-card-description" onClick={handleClose}>
            <CloseIcon />
          </div>
          <div className="card-description-heading">{eventName}</div>
          <div className="card-description-details">{eventDesc}</div>
        </div>
      </div>
    </div>
  );
}

export default EventContainer;
