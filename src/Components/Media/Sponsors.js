import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import Arrow from "../../assets/Arrox.svg";
import LoaderPage from "../../Pages/loaderPage";
import knowafest from "./Assets/Logos/Knowafest.png"
import bizzbuzz from "./Assets/Logos/bizzbuzz.jpg"
import blogadda from "./Assets/Logos/blogadda.png"
import business from "./Assets/Logos/business.jpg"
import campustimes from "./Assets/Logos/campustimes.png"
import dutimes from "./Assets/Logos/dutimes.jpeg"
import festsinfo from "./Assets/Logos/festsinfo.png"
import gurukul from "./Assets/Logos/gurukul.png"
import koubek from "./Assets/Logos/koubek.png"
import pagalguy from "./Assets/Logos/pagalguy.png"
import techstory from "./Assets/Logos/techstory.png"
import tet from "./Assets/Logos/tet.png"
import unitimes from "./Assets/Logos/unitimes.jpeg"
import webdunia from "./Assets/Logos/webdunia.png"
import webisdom from "./Assets/Logos/webisdom.png"
import { style } from "@mui/system";

const styles = {
  background: "white"
};
export const Media = (props) => {
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
      <div className="intro">MEDIA PARTNERS</div>
      <div className="wrapperSponsors">
        <div className="details">
          <div
            className="flex"
            onClick={() =>
              window.open("https://www.knowafest.com/", "_blank")
            }
          >
            <div className="logoSponsors">
              <img src={knowafest} alt="" />
            </div>
            <div className="name">Knowafest</div>
          </div>
          <div
            className="flex"
            onClick={() => window.open("https://www.pagalguy.com/", "_blank")}
          >
            <div className="logoSponsors">
              <img src={pagalguy} alt="" />
            </div>
            <div className="name">Pagalguy</div>
          </div>
          <div
            className="flex"
            onClick={() => window.open("https://www.blogadda.com/", "_blank")}
          >
            <div className="logoSponsors">
              <img src={blogadda} alt="" />
            </div>
            <div className="name">Blogadda</div>
          </div>
          <div
            className="flex"
            onClick={() => window.open("https://www.theeducationtree.com/", "_blank")}
          >
            <div className="logoSponsors">
              <img src={tet} alt="" />
            </div>
            <div className="name">The Education Tree</div>
          </div>
          <div
            className="flex"
            onClick={() => window.open("https://www.businessdigestmagazine.org/", "_blank")}
          >
            <div className="logoSponsors">
              <img src={business} alt="" />
            </div>
            <div className="name">Business Digest Magazine</div>
          </div>
          <div
            className="flex"
            onClick={() =>
              window.open("https://techstory.in/", "_blank")
            }
          >
            <div className="logoSponsors">
              <img src={techstory} alt="" />
            </div>
            <div className="name">Techstory</div>
          </div>
          <div
            className="flex"
            onClick={() =>
              window.open("https://english.webdunia.com/", "_blank")
            }
          >
            <div className="logoSponsors">
              <img src={webdunia} alt="" />
            </div>
            <div className="name">Webdunia</div>
          </div>
          <div
            className="flex"
            onClick={() => window.open("https://www.webisdom.com/", "_blank")}
          >
            <div className="logoSponsors">
              <img src={webisdom} style={styles} alt="" />
            </div>
            <div className="name">Webisdom</div>
          </div>
          <div
            className="flex"
            onClick={() =>
              window.open("https://fests.info/", "_blank")
            }
          >
            <div className="logoSponsors">
              <img src={festsinfo} />
            </div>
            <div className="name">Fests Info</div>
          </div>
          <div
            className="flex"
            onClick={() => window.open("https://www.campustimespune.com/", "_blank")}
          >
            <div className="logoSponsors">
              <img src={campustimes} />
            </div>
            <div className="name">Campus Times</div>
          </div>
          <div
            className="flex"
            onClick={() => window.open("https://digitalgurukul.in/", "_blank")}
          >
            <div className="logoSponsors">
              <img src={gurukul} />
            </div>
            <div className="name">Digital Gurukul</div>
          </div>
          <div
            className="flex"
            onClick={() => window.open("https://koubektoken.com/", "_blank")}
          >
            <div className="logoSponsors">
              <img src={koubek} />
            </div>
            <div className="name">Koubek</div>
          </div>
          <div
            className="flex"
            onClick={() => window.open("https://www.dutimes.com/", "_blank")}
          >
            <div className="logoSponsors">
              <img src={dutimes} />
            </div>
            <div className="name">DU Times</div>
          </div>
          <div
            className="flex"
            onClick={() => window.open("https://www.universitytimes.in/", "_blank")}
          >
            <div className="logoSponsors">
              <img src={unitimes} />
            </div>
            <div className="name">University Times</div>
          </div>
          <div
            className="flex"
            onClick={() => window.open("https://www.sachishiksha.in/", "_blank")}
          >
            <div className="logoSponsors">
              <img src="" />
            </div>
            <div className="name">Sachi Siksha</div>
          </div>
          <div
            className="flex"
            onClick={() => window.open("http://epaper.sachkahoon.com/", "_blank")}
          >
            <div className="logoSponsors">
              <img src="" />
            </div>
            <div className="name">Sach Kahoon</div>
          </div>
          <div
            className="flex"
            onClick={() => window.open("https://www.bizzbuzz.news/", "_blank")}
          >
            <div className="logoSponsors">
              <img src={bizzbuzz} />
            </div>
            <div className="name">Bizz Buzz</div>
          </div>
          <div
            className="flex"
            onClick={() => window.open("https://automotivedesignplanet.com/", "_blank")}
          >
            <div className="logoSponsors">
              <img src="" />
            </div>
            <div className="name">Automotive Design Planet</div>
          </div>
          <div
            className="flex"
            onClick={() => window.open("https://www.delhi99.tv/", "_blank")}
          >
            <div className="logoSponsors">
              <img src="" />
            </div>
            <div className="name">Delhi 99 TV</div>
          </div>
        </div>
      </div>
    </>
  );
};
