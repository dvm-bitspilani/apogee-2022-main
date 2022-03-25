import "./ContactUs.css";

import ContactProfileCard from "./ContactProfileCard"


function ContactUs() {

    return (
        <div className="contactUsWrapper">
            <div className="SectionHeading aboutUsHeading ">CONTACT US</div>
            <div className="cards">
                <ContactProfileCard />
                <ContactProfileCard />
                <ContactProfileCard />
                <ContactProfileCard />
                <ContactProfileCard />
                <ContactProfileCard />
                <ContactProfileCard />
                <ContactProfileCard />
                <ContactProfileCard />
            </div>

        </div>
    )
}
export default ContactUs;