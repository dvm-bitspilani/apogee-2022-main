// imports
import { useState, useEffect, useRef } from "react";
import RegModalButton from "../RegModalButton/RegModalButton";
import { Link } from "react-router-dom";
import { spacing, width } from "@mui/system";
import fontawesome from "@fortawesome/fontawesome";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import "animate.css";
import { PinDropSharp } from "@mui/icons-material";

function NavBar(props) {
  let hamburger = useRef();
  let isMenuOpen = false;
  const [isShown, setIsShown] = useState(false);
  const [isAicShown, setIsAicShown] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isAicClicked, setIsAicClicked] = useState(false)
  let allLinks = useRef();
  let downArrow = useRef();
  let rightArrow = useRef();

  let handleClick = () => {
    if (!isMenuOpen) {
      hamburger.current.classList.add("open");
      openNav();
    } else {
      hamburger.current.classList.remove("open");
      closeNav();
    }
    isMenuOpen = !isMenuOpen;
  };

  const openNav = () => {
    document.body.style.overflow = "hidden";
    document.getElementById("drawer").style.transform = "translateX(00px)";
  };

  const closeNav = () => {
    document.body.style.overflowY = "scroll";
    document.body.style.overflowX = "hidden";
    document.getElementById("drawer").style.transform = "translateX(100vw)";
  };

  const handleLinkClick = () => {
    closeNav();
    hamburger.current.classList.remove("open");
  };

  const handleAICClick = () => {
    setIsAicClicked(!isAicClicked);
    if (!isAicClicked && window.screen.width > 768) rightArrow.current.classList.add("rotate-arrow")
    else rightArrow.current.classList.remove("rotate-arrow")
    if (!isAicClicked && window.screen.width > 768) allLinks.current.style.transform = "translateX(0)"
    else if (isAicClicked && window.screen.width > 768) allLinks.current.style.transform = "translateX(100px)"
  };

  const handleAICClickMobile = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
    if (!isSubMenuOpen && window.screen.width < 768) downArrow.current.classList.add("rotate-arrow");
    else downArrow.current.classList.remove("rotate-arrow");
  };

  // if(isAicClicked && window.screen.width > 768) rightArrow.current.classList.add("rotate-arrow")
  //   else rightArrow.current.classList.add("rotate-arrow")
  //   if (isAicClicked && window.screen.width > 768) allLinks.current.style.transform = "translateX(0px)"
  //   else if (!isAicClicked && window.screen.width > 768) allLinks.current.style.transform = "translateX(100px)"

  fontawesome.library.add(faAngleDown, faAngleRight);
  const linkStyles = { color: "unset", textDecoration: "none" };

  return (
    <div className="navbarWrapper">
      <nav>
        {props.type == "arma" && window.screen.width < 768 ? "" : <div className="logo">
          <img src={require("../../assets/Apogee Logo.png")} alt="" />
        </div>}

        <RegModalButton type={props.type} />

        <div className="hamburger" onClick={handleClick} ref={hamburger}>
          <div class="line-menu half start"></div>
          <div class="line-menu"></div>
          <div class="line-menu half end"></div>
        </div>

        <div id="drawer">
          <div className="drawer-container">
            <div className="links-container1">
              <div className="links">Follow</div>
              <a
                className="links"
                target="_blank"
                href="https://www.facebook.com/bitsapogee/"
              >
                <div>Facebook</div>
              </a>
              <a
                className="links"
                target="_blank"
                href="https://www.instagram.com/bitsapogee/?hl=en"
              >
                <div>Instagram</div>
              </a>
              <a
                className="links"
                target="_blank"
                href="https://twitter.com/bitsapogee?lang=en"
              >
                <div>Twitter</div>
              </a>
            </div>
            <div className="links-container2">
              <div
                className="all-links"
                ref={allLinks}
              >
                <a className="links" onClick={handleLinkClick} href="/">
                  <div>Home</div>
                </a>
                <a
                  className="links"
                  onClick={handleLinkClick}
                  href="https://bits-apogee.org/registrations/login/"
                >
                  <div>Login</div>
                </a>
                <a
                  href="https://bits-apogee.org/campusambassador2022/"
                  className="links"
                >
                  <div>Campus Ambassador</div>
                </a>
                <div
                  id="aic" onClick={window.screen.width < 768 ? handleAICClickMobile : handleAICClick}
                >
                  <div onClick={handleAICClick}>
                    AIC{" "}
                    {window.screen.width < 768 ? (
                      <span ref={downArrow}>
                        <FontAwesomeIcon
                          icon="angle-down"
                          className="aic-arrow"
                        />
                      </span>
                    ) : (
                      <span ref={rightArrow}>
                        <FontAwesomeIcon
                          icon="angle-right"
                          className="aic-arrow right-arrow"
                        />
                      </span>
                    )}
                  </div>
                  {isSubMenuOpen && window.screen.width < 768 && (
                    <div
                      className="aic-container"
                    >
                      <div className="sub-menu">
                        <div>
                          <a
                            style={linkStyles}
                            className="animate__animated animate__fadeInUp"
                            target="_blank"
                            href="https://bit.ly/AIC_Turtlemint"
                          >
                            Turtlemint
                          </a>
                        </div>
                        <div>
                          <a
                            style={linkStyles}
                            className="animate__animated animate__fadeInUp"
                            target="_blank"
                            href="https://bit.ly/AIC_Ge_Healthcare"
                          >
                            GE Healthcare
                          </a>
                        </div>
                        <div>
                          <a
                            style={linkStyles}
                            target="_blank"
                            href="https://bit.ly/AIC_yamaha"
                          >
                            Yamaha
                          </a>
                        </div>
                        <div>
                          <a
                            style={linkStyles}
                            className="animate__animated animate__fadeInUp animate_faster"
                            target="_blank"
                            href="https://bit.ly/AIC_Bharat_Serums"
                          >
                            Bharat Serums & Vaccines
                          </a>
                        </div>
                        <div>
                          <a
                            style={linkStyles}
                            className="animate__animated animate__fadeInUp"
                            target="_blank"
                            href="https://bit.ly/AIC_RR_Kabel"
                          >
                            RR Kabel
                          </a>
                        </div>
                        <div>
                          <a
                            style={linkStyles}
                            className="animate__animated animate__fadeInUp"
                            target="_blank"
                            href="https://bit.ly/AIC_Kamdhenu"
                          >
                            Kamdhenu
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                {/* <a
                  className="links"
                  onClick={handleLinkClick}
                  href="#kernel-events"
                >
                  <div>Kernel Events</div>
                </a> */}
                <a className="links" href="/sponsors/">
                  <div>Sponsors</div>
                </a>

                <a className="links" href="/events/">
                  <div>All Events</div>
                </a>
                <a className="links" href="/EventWinnersPage/">
                  <div>Winners</div>
                </a>

                <a className="links" href="/media-partners/">
                  <div>Media Partners</div>
                </a>

                <a href="/wallmag/" className="links">
                  <div>WallMag</div>
                </a>

                <a className="links" href="/developers/">
                  <div>Developers</div>
                </a>
              </div>
              {isAicClicked && window.screen.width > 768 && (
                <div
                  className="aic-container"
                >
                  <div className="sub-menu">
                    <div className="animate__animated animate__fadeInUp">
                      <a
                        style={linkStyles}
                        target="_blank"
                        href="https://bit.ly/AIC_Turtlemint"
                      >
                        Turtlemint
                      </a>
                    </div>
                    <div className="animate__animated animate__fadeInUp">
                      <a
                        style={linkStyles}
                        target="_blank"
                        href="https://bit.ly/AIC_Ge_Healthcare"
                      >
                        GE Healthcare
                      </a>
                    </div>
                    <div className="animate__animated animate__fadeInUp">
                      <a
                        style={linkStyles}
                        target="_blank"
                        href="https://bit.ly/AIC_yamaha"
                      >
                        Yamaha
                      </a>
                    </div>
                    <div className="animate__animated animate__fadeInUp animate_faster">
                      <a
                        style={linkStyles}
                        target="_blank"
                        href="https://bit.ly/AIC_Bharat_Serums"
                      >
                        Bharat Serums & Vaccines
                      </a>
                    </div>
                    <div className="animate__animated animate__fadeInUp">
                      <a
                        style={linkStyles}
                        target="_blank"
                        href="https://bit.ly/AIC_RR_Kabel"
                      >
                        RR Kabel
                      </a>
                    </div>
                    <div className="animate__animated animate__fadeInUp">
                      <a
                        style={linkStyles}
                        target="_blank"
                        href="https://bit.ly/AIC_Kamdhenu"
                      >
                        Kamdhenu
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default NavBar;
