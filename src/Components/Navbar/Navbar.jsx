// imports
import { useState, useEffect, useRef } from "react";
import RegModalButton from "../RegModalButton/RegModalButton";
import { Link } from "react-router-dom";
import { spacing, width } from "@mui/system";
import fontawesome from "@fortawesome/fontawesome";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import "animate.css";

function NavBar() {
  let hamburger = useRef();
  let isMenuOpen = false;
  const [isShown, setIsShown] = useState(false);
  const [isAicShown, setIsAicShown] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  let allLinks = useRef();
  let downArrow = useRef();

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

  const mouseOverAIC = () => {
    setIsShown(true);
    if (window.screen.width > 768)
      allLinks.current.style.transform = "translateX(0px)";
    if (isAicShown && window.screen.width > 768)
      allLinks.current.style.transform = "translateX(0px)";
  };

  const mouseOverAICMenu = () => {
    setIsAicShown(true);
    mouseOverAIC();
  };

  const mouseLeaveAIC = () => {
    setIsShown(false);
    if (window.screen.width > 768)
      allLinks.current.style.transform = "translateX(100px)";
  };

  const mouseLeaveAICMenu = () => {
    setIsAicShown(false);
    mouseLeaveAIC();
  };

  const handleLinkClick = () => {
    closeNav();
    hamburger.current.classList.remove("open");
  };

  const handleAICClick = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
    if (!isSubMenuOpen) downArrow.current.classList.add("rotate-arrow");
    else downArrow.current.classList.remove("rotate-arrow");
  };

  fontawesome.library.add(faAngleDown);
  const linkStyles = { color: "unset", textDecoration: "none" };

  return (
    <div className="navbarWrapper">
      <nav>
        <div className="logo">
          <img src={require("../../assets/Apogee Logo.png")} alt="" />
        </div>

        <RegModalButton />

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
                href="https://twitter.com/bitsapogee?lang=en"
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
                onMouseLeave={() => setIsShown(false)}
              >
                <a className="links" onClick={handleLinkClick} href="#">
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
                  id="aic"
                  onMouseOver={mouseOverAIC}
                  onMouseLeave={mouseLeaveAIC}
                >
                  <div onClick={handleAICClick}>
                    AIC{" "}
                    {window.screen.width < 768 ? (
                      <span ref={downArrow}>
                        <FontAwesomeIcon
                          icon="angle-down"
                          className="down-icon"
                        />
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  {isSubMenuOpen && window.screen.width < 768 && (
                    <div
                      className="aic-container"
                      onMouseEnter={() => setIsAicShown(true)}
                      onMouseLeave={() => setIsAicShown(false)}
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
                <a className="links" href="/#/sponsors">
                  <div>Sponsors</div>
                </a>
                <a className="links" href="/#/events">
                  <div>All Events</div>
                </a>
              </div>
              {(isShown || isAicShown) && window.screen.width > 768 && (
                <div
                  className="aic-container"
                  onMouseEnter={mouseOverAICMenu}
                  onMouseLeave={mouseLeaveAICMenu}
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
