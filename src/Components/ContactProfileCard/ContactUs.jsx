import "./ContactUs.css";
import React from 'react';
import ContactProfileCard from "./ContactProfileCard"
import AOS from 'aos';
import "aos/dist/aos.css";
const
    contacts = [
        {
            profileImage: "priyanshu",
            Name: "Priyanshu Shukla",
            Designation: "Website and Payments",
            Mobile: "+91 81077 28892",
            Email: ["webmaster@bits-apogee.org"]
        },
        {
            profileImage: "vidhushi",
            Name: "Vidushi Sahay",
            Designation: "Registrations & Correspondence",
            Mobile: "+91 98719 41631",
            Email: ["pcr@bits-apogee.org"]
        },
        {
            profileImage: "shashwath",
            Name: "Shashwath M S",
            Designation: "Reception and Accomodation",
            Mobile: "+91 99729 59249",
            Email: ["recnacc@bits-apogee.org"]
        },
        {
            profileImage: "shreya",
            Name: "Shreya Gupta",
            Designation: "Sponsorship and Marketing",
            Mobile: "+91 82199 13843",
            Email: ["sponsorship@bits-apogee.org"]
        },
        {
            profileImage: "rhythm",
            Name: "Rhythm Saxena",
            Designation: "Publicity and Online Partnerships",
            Mobile: "+91 95823 19968",
            Email: ["collaborations@bits-apogee.org"]
        },
        {
            profileImage: "navya",
            Name: "Navya Bhatnagar",
            Designation: "Events, Projects and Logistics",
            Mobile: "+91 70227 34110",
            Email: ["controls@bits-apogee.org"]
        },
        {
            profileImage: "shukla",
            Name: "Harsh Shukla",
            Designation: "President, Student Union",
            Mobile: "+91 73909 67807",
            Email: ["president@pilani.bits-pilani.ac.in"]
        },
        {
            profileImage: "lamba",
            Name: "Harsh Lamba",
            Designation: "General Secretary, Student Union",
            Mobile: "+91 70827 69694",
            Email: ["gensec@pilani.bits-pilani.ac.in"]
        },
        {
            profileImage: "divyam",
            Name: "Divyam Chauhan",
            Designation: "Guest Lectures and Paper Presentations",
            Mobile: "+91 97997 56083",
            Email: ["pep@bits-apogee.org", "guestlectures@bits-apogee.org"]
        }
    ]


function ContactUs() {
    React.useEffect(() => {
        AOS.init({
          duration : 2000
        });
        AOS.refresh();
      }, []);
    return (
        <div className="contactUsWrapper">
            <div className="SectionHeading aboutUsHeading contactHeading " data-aos="fade-up" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="600">CONTACT US</div>
            <div className="cards">
                {contacts.map((e) => {

                    return < ContactProfileCard profileImage={e.profileImage} Name={e.Name} Designation={e.Designation} Mobile={e.Mobile} Email={e.Email} />
                })}
            </div>

        </div>
    )
}
export default ContactUs;