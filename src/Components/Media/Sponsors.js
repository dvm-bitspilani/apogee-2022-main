import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import Arrow from "../../assets/Arrox.svg";
import LoaderPage from "../../Pages/loaderPage";
import FIS from "./Assets/Logos/FIS.png"
import Autodesk from "./Assets/Logos/autodesk.png"
import Bolt from "./Assets/Logos/Bolt-WhiteBG.jpg"
import Knots from "./Assets/Logos/KnotsbyAMP - PNG for Website.png"
// import Talentspire from ""
import Walmart from "./Assets/Logos/Walmart.png"
// import BombayShavingCompany from ""
import Degrees from "./Assets/Logos/6degreesindia.png"
import Axplorar from "./Assets/Logos/Axplorar.png"
import LWT from "./Assets/Logos/LWT academy .png"
import CollegePond from "./Assets/Logos/Collegepond logo1.png"
import ForestFuse from "./Assets/Logos/forest fuse.png"
import SwitchFix from "./Assets/Logos/Switch Primary Logo (1).png"
import PepsiCo from "./Assets/Logos/pepsico.jpeg"
import Gustora from "./Assets/Logos/GustoraLOGO.png"
import iSchool from "./Assets/Logos/isclogo_color_cmyk_H.png"
import Cisco from "./Assets/Logos/Cisco_Logo_no_TM_Cisco_Blue-CMYK.png"
import Talent from "./Assets/Logos/LogoHD.jpg"
import JusPay from "./Assets/Logos/Frame 4.png"
import Clientell from "./Assets/Logos/Clientell.jpeg"
import mindU from "./Assets/Logos/Insta-FB-Logo.png"
import BombayShaving from "./Assets/Logos/BombayShavin.jpg"
import { style } from "@mui/system";

const styles = {
  background: "white"
};
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
              <img src={FIS} alt="" />
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
              <img src = {Cisco} alt="" />
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
              <img src={Bolt} alt="" />
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
            <div style = {styles} className="logoSponsors">
              <img src={Autodesk} alt="" />
            </div>
            <div className="name"  >AUTODESK</div>
          </div>
        </div>
        <div className="sponsorHeading">
          Official Refreshment Partner
        </div>
        <div className="details">
          <div
            className="flex"
            onClick={() =>
              window.open(
                "http://www.pepsicoindia.co.in",
                "_blank"
              )
            }
          >
            <div className="logoSponsors">
              <img src={PepsiCo} alt="" />
            </div>
            <div className="name">PepsiCo</div>
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
                src={Knots}
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
              <img src= {Talent}
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
              <img src={Walmart} alt="" />
            </div>
            <div className="name">WALMART</div>
          </div>
        </div>
        <div className="sponsorHeading">Official Overseas Education Partner</div>
        <div className="details">
          <div
            className="flex"
            onClick={() => window.open("https://ischoolconnect.com/en/", "_blank")}
          >
            <div className="logoSponsors">
              <img src={iSchool} alt="" />
            </div>
            <div className="name">iSchoolConnect</div>
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
              <img src = {BombayShaving} alt="" />
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
              <img src={Degrees} alt="" />
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
              <img alt="" />
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
              <img src={Axplorar} alt="" />
            </div>
            <div className="name">AXPLORAR</div>
          </div>
        </div>
        <div className="sponsorHeading">Official Pasta Partner</div>
        <div className="details">
          <div
            className="flex"
            onClick={() => window.open("https://www.gustorafoods.com/", "_blank")}
          >
            <div className="logoSponsors">
              <img src={Gustora} alt="" />
            </div>
            <div className="name">Gustora Foods</div>
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
              <img src = {JusPay} alt="" />
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
              <img src={LWT} alt="" />
            </div>
            <div className="name">LWT Academy</div>
          </div>
          <div
            className="flex"
            onClick={() => window.open("https://collegepond.com", "_blank")}
          >
            <div className="logoSponsors">
              <img src={CollegePond} alt="" />
            </div>
            <div className="name">College Pond</div>
          </div>
          <div
            className="flex"
            onClick={() => window.open("https://www.forestfuse.com", "_blank")}
          >
            <div className="logoSponsors">
              <img src={ForestFuse} alt="" />
            </div>
            <div className="name">Forestfuse</div>
          </div>
          <div
            className="flex"
            onClick={() => window.open("https://theswitchfix.co/", "_blank")}
          >
            <div className="logoSponsors">
              <img src={SwitchFix} alt="" />
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
              <img alt="" />
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
              <img src = {Clientell} alt="" />
            </div>
            <div className="name">Clientell</div>
          </div>
          <div
            className="flex"
            onClick={() => window.open("https://www.minduhealth.com", "_blank")}
          >
            <div className="logoSponsors">
              <img src = {mindU} alt="" />
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
              <img alt="" />
            </div>
            <div className="name">Soundideaz</div>
          </div>
          <div
            className="flex"
            onClick={() => window.open("https://www.cuvette.tech/", "_blank")}
          >
            <div className="logoSponsors">
              <img alt="" />
            </div>
            <div className="name">Cuvette Tech</div>
          </div>
        </div>
      </div>
    </>
  );
};
