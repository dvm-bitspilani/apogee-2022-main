// styles
import "./AboutUs.css"
import AOS from 'aos';
import "aos/dist/aos.css";
import {useEffect} from "react"
function AboutUs() {
    useEffect(() => {
        AOS.refresh();
        AOS.init({
          duration : 4000
        });
        AOS.refresh();
      }, []);
    return (
        <div className="AboutUsWrapper" >
            <div className="SectionHeading aboutUsHeading" data-aos="fade-up" data-aos-offset="50" data-aos-easing="ease-in-sine" data-aos-duration="400" >
                ABOUT US
            </div>
            <div className="aboutUsDetails">
                BITS Pilani, India is back with the 40th edition of APOGEE(A Professions Oriented Gathering over Educational Experiences)- the institute’s annual technical extravaganza, from 7th to 10th April 2022, this time as The Encrypted Dimension! A melange of technology, innovation and inspiration across space and time of humankind, this technical conference will, as always, play host to the brightest minds and thinkers in the country and world. From presenting papers and projects at the oldest-of-its-kind events in the country, developing amazing solutions to real-life cases and problems, exhibitions of the best contraptions that man has made, guest lectures that tell stories never heard before, to the college’s own literature festival, APOGEE challenges the intellect of the participants and piques the minds of the audience.
            </div>
        </div>
    )
}
export default AboutUs