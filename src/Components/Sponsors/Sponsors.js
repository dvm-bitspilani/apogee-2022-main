import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import Arrow from "../../assets/Arrox.svg";
import LoaderPage from "../../Pages/loaderPage";

export const Sponsors = (props) => {
  return (
    <>
      {/* <div className="loaderDivEvents">
        <LoaderPage />
      </div> */}
      <a href="/">
        <div className="arrowSponsors">
          <img src={Arrow} alt="" />
        </div>
      </a>
      <div className="intro">SPONSORS</div>
      <div className="wrapperSponsors">
        <div className="sponsorHeading">Title Sponsor</div>
        <div className="details">
          <div
            className="flex"
            onClick={() =>
              window.open(
                "https://www.fisglobal.com/en/#explore-more",
                "_blank"
              )
            }
          >
            <div className="logoSponsors">
              <img src="./Assets/Logos/FIS_logoSponsors_c_rgb.png" alt="" />
            </div>
            <div className="name">FIS</div>
          </div>
        </div>
        <div className="sponsorHeading">Associate Title Sponsor</div>
        <div className="details">
          <div
            className="flex"
            onClick={() =>
              window.open("https://www.cisco.com/c/en_in/index.html", "_blank")
            }
          >
            <div className="logoSponsors">
              <img src="./Assets/Logos/AUTODESK logoSponsors.web" alt="" />
            </div>
            <div className="name">Cisco</div>
          </div>
        </div>
        <div className="sponsorHeading">Powered By</div>
        <div className="details">
          <div
            className="flex"
            onClick={() => window.open("https://bolt.earth", "_blank")}
          >
            <div className="logoSponsors">
              <img src="./Assets/Logos/AUTODESK logoSponsors.web" alt="" />
            </div>
            <div className="name">Bolt</div>
          </div>
        </div>
        <div className="sponsorHeading">
          Official Engineering Design Partner
        </div>
        <div className="details">
          <div
            className="flex"
            onClick={() =>
              window.open(
                "https://www.autodesk.com/education/edu-software/overview?sorting=featured&filters=individual",
                "_blank"
              )
            }
          >
            <div className="logoSponsors">
              <img src="./Assets/Logos/AUTODESK logoSponsors.web" alt="" />
            </div>
            <div className="name">AUTODESK</div>
          </div>
        </div>
        <div className="sponsorHeading">Official Photography Partner</div>
        <div className="details">
          <div
            className="flex"
            onClick={() => window.open("https://knotsbyamp.com", "_blank")}
          >
            <div className="logoSponsors">
              <img
                src="./Assets/Logos/KnotsbyAMP - PNG for Website.png"
                alt=""
              />
            </div>
            <div className="name">KnotsbyAMP</div>
          </div>
        </div>
        <div className="sponsorHeading">Official Science Partner</div>
        <div className="details">
          <div
            className="flex"
            onClick={() => window.open("https://www.talentspire.com", "_blank")}
          >
            <div className="logoSponsors">
              <img
                src="./Assets/Logos/KnotsbyAMP - PNG for Website.png"
                alt=""
              />
            </div>
            <div className="name">Talentspire</div>
          </div>
        </div>
        <div className="sponsorHeading">Technology Partner</div>
        <div className="details">
          <div
            className="flex"
            onClick={() => window.open("https://www.walmart.com", "_blank")}
          >
            <div className="logoSponsors">
              <img src="./Assets/Logos/BOLT_transparent.png" alt="" />
            </div>
            <div className="name">WALMART</div>
          </div>
        </div>
        <div className="sponsorHeading">Grooming Partner</div>
        <div className="details">
          <div
            className="flex"
            onClick={() =>
              window.open("https://bombayshavingcompany.com/", "_blank")
            }
          >
            <div className="logoSponsors">
              <img src="./Assets/Logos/Banner 6x3ft_B copy.jpg" alt="" />
            </div>
            <div className="name">BOMBAY SHAVING COMPANY</div>
          </div>
        </div>
        <div className="sponsorHeading">Coffee Partner</div>
        <div className="details">
          <div
            className="flex"
            onClick={() =>
              window.open("https://www.sixdegreescoffee.com", "_blank")
            }
          >
            <div className="logoSponsors">
              <img src="./Assets/Logos/6degreesindia.png" alt="" />
            </div>
            <div className="name">6 DEGREES COFFEE</div>
          </div>
        </div>
        <div className="sponsorHeading">Online Branding and Online Events</div>
        <div className="details">
          <div
            className="flex"
            onClick={() => window.open("https://easylearn.net.in", "_blank")}
          >
            <div className="logoSponsors">
              <img src="./Assets/Logos/6degreesindia.png" alt="" />
            </div>
            <div className="name">EASY LEARN</div>
          </div>
        </div>
        <div className="sponsorHeading">Official Vacation Partner</div>
        <div className="details">
          <div
            className="flex"
            onClick={() => window.open("http://www.axplorar.com", "_blank")}
          >
            <div className="logoSponsors">
              <img src="./Assets/Logos/Axplorar.png" alt="" />
            </div>
            <div className="name">AXPLORAR</div>
          </div>
        </div>
        <div className="sponsorHeading">
          Official Payments Integration Partner
        </div>
        <div className="details">
          <div
            className="flex"
            onClick={() => window.open("https://www.juspay.in", "_blank")}
          >
            <div className="logoSponsors">
              <img src="./Assets/Logos/Axplorar.png" alt="" />
            </div>
            <div className="name">JUSPAY</div>
          </div>
        </div>
        <div className="sponsorHeading">Other Sponsors</div>
        <div className="details">
          <div
            className="flex"
            onClick={() =>
              window.open("https://learningwhiletravelling.com/home", "_blank")
            }
          >
            <div className="logoSponsors">
              <img src="./Assets/Logos/LWT academy .png" alt="" />
            </div>
            <div className="name">LWT Academy</div>
          </div>
          <div
            className="flex"
            onClick={() => window.open("https://collegepond.com", "_blank")}
          >
            <div className="logoSponsors">
              <img src="./Assets/Logos/Collegepond logoSponsors-1.png" alt="" />
            </div>
            <div className="name">College Pond</div>
          </div>
          <div
            className="flex"
            onClick={() => window.open("https://www.forestfuse.com", "_blank")}
          >
            <div className="logoSponsors">
              <img src="./Assets/Logos/Logo file.png" alt="" />
            </div>
            <div className="name">Forestfuse</div>
          </div>
          <div
            className="flex"
            onClick={() => window.open("https://theswitchfix.co/", "_blank")}
          >
            <div className="logoSponsors">
              <img src="./Assets/Logos/Switch Primary Logo (1).png" alt="" />
            </div>
            <div className="name">The Switch Fix</div>
          </div>
          <div
            className="flex"
            onClick={() =>
              window.open("https://www.briflynews.com/en", "_blank")
            }
          >
            <div className="logoSponsors">
              <img src="./Assets/Logos/Switch Primary Logo (1).png" alt="" />
            </div>
            <div className="name">Briffly News</div>
          </div>
          <div
            className="flex"
            onClick={() =>
              window.open("https://www.getclientell.com", "_blank")
            }
          >
            <div className="logoSponsors">
              <img src="./Assets/Logos/Switch Primary Logo (1).png" alt="" />
            </div>
            <div className="name">Clientell</div>
          </div>
          <div
            className="flex"
            onClick={() => window.open("https://www.minduhealth.com", "_blank")}
          >
            <div className="logoSponsors">
              <img src="./Assets/Logos/Switch Primary Logo (1).png" alt="" />
            </div>
            <div className="name">Mind U Health</div>
          </div>
          <div
            className="flex"
            onClick={() =>
              window.open("https://www.soundideazacademy.in", "_blank")
            }
          >
            <div className="logoSponsors">
              <img src="./Assets/Logos/Switch Primary Logo (1).png" alt="" />
            </div>
            <div className="name">Soundideaz</div>
          </div>
          <div
            className="flex"
            onClick={() => window.open("https://www.cuvette.tech/", "_blank")}
          >
            <div className="logoSponsors">
              <img src="./Assets/Logos/Switch Primary Logo (1).png" alt="" />
            </div>
            <div className="name">Cuvette Tech</div>
          </div>
        </div>
      </div>
    </>
  );
};
