import React from "react";
import Photo from "./speakerPhotos/Speaker_image.png"
import './SpeakerCard.css'
function SpeakerCard(props) {
  
    return (
        <div className="speakerCardMain">
            <div className="speakerInfo">
                <div className="speakerPhoto">
                    <img src={require(`./../../assets/speakerPhotos/${props.profileImage}.png`)} alt="" />
                </div>
                <div className="speakerPersonal">
                    <h2> {props.name}</h2>
                    <p>{props.bio}</p>
                </div>
            </div>
            <div className="speakerDetails">
                <p>{props.details}</p> 
                
            </div>
    </div>
)
}



export default SpeakerCard;