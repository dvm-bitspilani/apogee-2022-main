// styles
import "./SpeakerSection.css"
import SpeakerCard from "./SpeakerCard.jsx"
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


const speakers = [{
    id:1,
    name: "Dr. Soumya Swaminathan",
    bio: "Chief Scientist, World Health Organisation",
    details: "Lorem ipsum dolor sit amet, cotetur adipiscing elit. Consequat, ut egestas vel venes hac euismod. In magna lorem imperdiet amet commodo. Suspendisse purus vitae mi sit sollicitudin ultrices. Eros t Suspendisse purus vitae mi sit sollicitudin ultrices Suspendisse purus viltrices",
    profileImage: "Speaker_image"

},
    {
    id:2,
    name: "Dr. Soumya Swaminathan",
    bio: "Chief Scientist, World Health Organisation",
    details: "Lorem ipsum dolor sit amet, cotetur adipiscing elit. Consequat, ut egestas vel venes hac euismod. In magna lorem imperdiet amet commodo. Suspendisse purus vitae mi sit sollicitudin ultrices. Eros t Suspendisse purus vitae mi sit sollicitudin ultrices Suspendisse purus viltrices",
    profileImage: "Speaker_image"

    },
    {
        id:3,
    name: "Dr. Soumya Swaminathan",
    bio: "Chief Scientist, World Health Organisation",
    details: "Lorem ipsum dolor sit amet, cotetur adipiscing elit. Consequat, ut egestas vel venes hac euismod. In magna lorem imperdiet amet commodo. Suspendisse purus vitae mi sit sollicitudin ultrices. Eros t Suspendisse purus vitae mi sit sollicitudin ultrices Suspendisse purus viltrices",
    profileImage: "Speaker_image"

    }]


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
};
const styles = {
          

    backgroundColor:"transparent"
      }


function SpeakerSection() {
    return (
        <div className="SpeakerWrapper">
            <div className="SectionHeading speakerHeading">
                SPEAKERS
            </div>
            <div className="subHeading">Think Again Live</div>
            <div className="speakerCarousel">
           <AwesomeSlider  cssModule={styles} bullets={false}>
                {speakers.map(e => {
                    return <div key={e.id}><SpeakerCard name={e.name} bio={e.bio} profileImage={e.profileImage} details={e.details}/></div> 
              })}
             </AwesomeSlider>
          </div>
        </div>
    )
}
export default SpeakerSection;