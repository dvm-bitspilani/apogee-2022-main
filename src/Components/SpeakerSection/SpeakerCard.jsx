import React from "react";
import Photo from "./speakerPhotos/Speaker_image.png"
import './SpeakerCard.css'
function SpeakerCard() {
  
    return (
        <div className="speakerCardMain">
            <div className="speakerInfo">
                <div className="speakerPhoto">
                    <img src={Photo} alt="" />
                </div>
                <div className="speakerPersonal">
                    <h2> Dr. Soumya Swaminathan</h2>
                    <p>Chief Scientist, World Health Organisation</p>
                </div>
            </div>
            <div className="speakerDetails">
 <p>lorem ipsum, dolor sit amet consectetur adipisicing eliaerat fugdipisci reprehenderit reiciendis architecto nobis maxime velit exercitationem repudiandae ipsam! Sapiente ab quidem ex architecto. Itaque exercitationem voluptas, praesentium adipisci expedita ullam deleniti, soluta aperiam accusamus repellendus magni error neque esse est laborum?</p> 
                
            </div>
    </div>
)
}



export default SpeakerCard;