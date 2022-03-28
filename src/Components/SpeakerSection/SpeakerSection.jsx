import React from 'react'
import "./SpeakerSection.css"
import SpeakerCard from "./SpeakerCard.jsx"
import AwesomeSlider from 'react-awesome-slider';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


const speakers = [{
    id:1,
    name: "Dr. Soumya Swaminathan",
    bio: "Chief Scientist, World Health Organisation",
    details: "Lorem ipsum dolor sit amet, cotetur adipiscing elit. Consequat, ut egestas vel venes hac euismod. In magna lorem imperdiet amet commodo. Suspendisse purus vitae mi sit sollicitudin ultrices. Eros t Suspendisse purus vitae mi sit sollicitudin ultrices Suspendisse purus viltrices",
    profileImage: "soumya"

},
    {
    id:2,
    name: "Zainab Nagin Cox",
    bio: "US Spacecraft and Operations Engineer",
    details: "Lorem ipsum dolor sit amet, cotetur adipiscing elit. Consequat, ut egestas vel venes hac euismod. In magna lorem imperdiet amet commodo. Suspendisse purus vitae mi sit sollicitudin ultrices. Eros t Suspendisse purus vitae mi sit sollicitudin ultrices Suspendisse purus viltrices",
    profileImage: "zainab"

    },
    {
        id:3,
    name: "Jeffrey Archer",
    bio: "Bestselling author",
    details: "Lorem ipsum dolor sit amet, cotetur adipiscing elit. Consequat, ut egestas vel venes hac euismod. In magna lorem imperdiet amet commodo. Suspendisse purus vitae mi sit sollicitudin ultrices. Eros t Suspendisse purus vitae mi sit sollicitudin ultrices Suspendisse purus viltrices",
    profileImage: "jeffrey"

    }, {
        id:4,
    name: "Dr. Henry Throop",
    bio: "American Astronomer-Consultant to NASA",
    details: "Lorem ipsum dolor sit amet, cotetur adipiscing elit. Consequat, ut egestas vel venes hac euismod. In magna lorem imperdiet amet commodo. Suspendisse purus vitae mi sit sollicitudin ultrices. Eros t Suspendisse purus vitae mi sit sollicitudin ultrices Suspendisse purus viltrices",
    profileImage: "henry"

    }]

function handleClick() {
   var org_html = document.getElementsByClassName("carousel__dot")[0].innerHTML;
   var new_html = "<div id='selectedDot'>" + org_html + "</div>";
    org_html = new_html;

}



function SpeakerSection() {
        const carouselHeight=(window.screen.width<768)?150:40

    return (
        <div className="SpeakerWrapper">
            <div className="SectionHeading speakerHeading">
                SPEAKERS
            </div>
            <div className="subHeading">Think Again Live</div>
            <div className="speakerCarousel">
            <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={carouselHeight}
        totalSlides={4}
      >
                    <Slider>
         
                        {speakers.map(e => {
                    return <Slide index={e.id-1}><SpeakerCard name={e.name} bio={e.bio} profileImage={e.profileImage} details={e.details}/></Slide>
              })}
      
                    </Slider>
                    <DotGroup onClick={handleClick}/>

      </CarouselProvider>
         
          </div>
        </div>
    )
}
export default SpeakerSection;