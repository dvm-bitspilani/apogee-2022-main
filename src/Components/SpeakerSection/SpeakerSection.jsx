import React from 'react'
import "./SpeakerSection.css"
import SpeakerCard from "./SpeakerCard.jsx"
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import AOS from 'aos';
import "aos/dist/aos.css";

const speakers = [{
    id: 1,
    name: "Dr. Soumya Swaminathan",
    bio: "Chief Scientist, World Health Organisation",
    details: "Chief Scientist at world health organization, She was the formal Deputy Director-General at WHO. She is now the Coordinator of the UNICEF/UNDP/WORLD BANK / WHO Special Programme and known for her Research on Tuberculosis and HIV.",
    profileImage: "soumya"

},
{
    id: 2,
    name: "Zainab Nagin Cox",
    bio: "US Spacecraft and Operations Engineer",
    details: "She is a US Spacecraft and Operations Engineer. She is also the tactical Mission Lead on Mars Missions Curiosity & Perseverance Rover. Asteroid 14061 has been-+ named 14061 Nagincox in her honour as its discoverer",
    profileImage: "zainab"

},
{
    id: 3,
    name: "Jeffrey Archer",
    bio: "Bestselling author",
    details: "He is one of the  Bestselling authors and wrote books like 'Kane and Abel', 'Not a Penny More, Not a penny less '. He was the former Deputy Chairman of the Conservative Party and Former Member of Parliament, UK.",
    profileImage: "jeffrey"

}, {
    id: 4,
    name: "Dr. Henry Throop",
    bio: "American Astronomer-Consultant to NASA",
    details: "He is an American Astronomer and a Consultant to NASA. He was a Member of the first Pluto Mission Team, New Horizons. He is the Discoverer of Pluto's smallest moon, Styx, in 2012.Asteroid 193736 named Henrythroop in his honour.",
    profileImage: "henry"

}]



function SpeakerSection() {
    React.useEffect(() => {
        AOS.init({
          duration : 2000
        });
        AOS.refresh();
      }, []);
    const carouselHeight = (window.screen.width < 768) ? 140 : 40

    return (
        <div className="SpeakerWrapper">
            <div className="SectionHeading speakerHeading" data-aos="fade-up" data-aos-offset="50" data-aos-easing="ease-in-sine" data-aos-duration="400">
                SPEAKERS
            </div>
            <div className="subHeading">Think Again Conclave</div>
            <div className="speakerCarousel">
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={carouselHeight}
                    totalSlides={4}
                    isPlaying={true}
                >
                    <Slider>

                        {speakers.map(e => {
                            return <Slide index={e.id - 1}><SpeakerCard name={e.name} bio={e.bio} profileImage={e.profileImage} details={e.details} /></Slide>
                        })}

                    </Slider>
                    <DotGroup />

                </CarouselProvider>

            </div>
        </div>
    )
}
export default SpeakerSection;