// styles
import "./SpeakerSection.css"
import SpeakerCard from "./SpeakerCard.jsx"


function SpeakerSection() {
    return (
        <div className="SpeakerWrapper">
            <div className="SectionHeading speakerHeading">
                SPEAKERS
            </div>
            <div className="subHeading">Think Again Live</div>
            <div className="speakerCarousel">
                <SpeakerCard />   
          </div>
        </div>
    )
}
export default SpeakerSection;