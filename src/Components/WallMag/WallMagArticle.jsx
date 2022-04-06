import React, { useState } from "react";
import quote from "../../assets/laptop/quote.svg";

export default function WallMagArticle(props) {
  const [isOpen, setOpen] = useState(false);

  const changeDriveLink = (driveLink) => {
    // console.log(driveLink)
    if (driveLink) {
      if (!driveLink.includes("google")) {
        return;
      }
      if (driveLink.includes("bits-apogee") || driveLink.includes("default")) {
        return;
      }
      let firstHalf = driveLink.split(".com/")[0];
      let secondHalf = driveLink.split("?")[1];
      let finalLink = firstHalf + ".com/uc?" + secondHalf;
      // console.log("Final Link", finalLink);
      return finalLink;
    }
  };

  return (
    <div
      className="c-item"
      onClick={() => {
        setOpen(!isOpen);
      }}
    >
      <div className="c-header">
        <div
          className="c-button"
          style={{ transform: isOpen ? "rotate(0deg)" : "rotate(-90deg)" }}
          onClick={() => setOpen(!isOpen)}
        />
        <h3>{props.depName}</h3>
      </div>
      <div
        className="c-content"
        style={{
          display: isOpen ? "flex" : "none",
        }}
      >
        <div className="header">
          <img
            className="square-img"
            src={changeDriveLink(props.imgLink) || props.imgLink}
          />
          <div>
            <h1>{props.coord}</h1>
            <p>{props.depName2}</p>
          </div>
        </div>
        <div className="main">
          <img className="quote" src={quote} />
          <p dangerouslySetInnerHTML={{ __html: props.article }} />
        </div>
      </div>
    </div>
  );
}
