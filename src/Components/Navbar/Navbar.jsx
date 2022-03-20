// imports
import { useState, useEffect, useRef } from 'react';
import RegModalButton from "../RegModalButton/RegModalButton";
import { Link } from "react-router-dom";
import { width } from '@mui/system';




function NavBar() {
  let hamburger = useRef();
  let isMenuOpen = false;
  const [isShown, setIsShown] = useState(false);
  const [isAicShown, setIsAicShown] = useState(false);
  let allLinks = useRef();

  let handleClick = () => {
    if (!isMenuOpen) {
      hamburger.current.classList.add("open");
      openNav();
    }
    else {
      hamburger.current.classList.remove("open");
      closeNav();
    }
    isMenuOpen = !isMenuOpen;
  }

  function openNav() {
    document.getElementById("drawer").style.transform = "translateX(00px)";
    if (window.screen.width < 768)
      document.getElementById("drawer").style.width = "100vw";
  }

  function closeNav() {
    document.getElementById("drawer").style.transform = "translateX(100vw)";
  }

  const mouseOverAIC = () =>{
    setIsShown(true)
    if(isAicShown || window.screen.width > 768) allLinks.current.style.transform = "translateX(-100px)"
  }

  const mouseOverAICMenu = () =>{
    setIsAicShown(true)
    mouseOverAIC()
  }

  const mouseLeaveAIC = () =>{
    setIsShown(false)
    allLinks.current.style.transform = "translateX(0px)"
  }

  const mouseLeaveAICMenu = () =>{
    setIsAicShown(false)
    mouseLeaveAIC()
  }

  const linkStyles = {color: "unset", textDecoration: "none"}

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
          {/* <a
            href="https://bits-apogee.org/registrations/login/"
            target="_blank"
          >
            <div class="nav-links">Login</div>
          </a>
          <Link to="/events">
            <div class="nav-links nav-events">
              All Events
            </div>
          </Link>
          <a
            href="https://bits-apogee.org/campusambassador2022/"
            target="_blank"
          >
            <div class="nav-links">Campus Ambassador</div>
          </a> */}
          <div className="drawer-container">
            <div className="links-container1">
              <div className="links">Follow</div>
              <a className="links" href="https://www.facebook.com/bitsapogee/">
                <div>Facebook</div>
              </a>
              <a className="links" href="https://twitter.com/bitsapogee?lang=en">
                <div>Instagram</div>
              </a>
              <a className="links" href="https://twitter.com/bitsapogee?lang=en">
                <div>Twitter</div>
              </a>
            </div>
            <div className="links-container2">
              <div className="all-links" ref={allLinks} onMouseLeave={() => setIsShown(false)}>
                <a className="links" href="#">
                  <div>Home</div>
                </a>
                <a href="https://bits-apogee.org/campusambassador2022/" className="links">
                  <div>Campus Ambassador</div>
                </a>
                {/* <a className="links" href="#">
                  <div>About Us</div>
                </a>
                <a className="links" href="#">
                  <div>Contact Us</div>
                </a>
                <a className="links" href="#">  
                  <div>Sponsors</div>
                </a> */}
                <div id="aic" onMouseOver={mouseOverAIC} onMouseLeave={mouseLeaveAIC}>
                  <div>AIC</div>
                  {((isShown || isAicShown) && window.screen.width < 768) && (<div className="aic-container" onMouseEnter={() => setIsAicShown(true)} onMouseLeave={() => setIsAicShown(false)}>
                <div className="sub-menu">
                  <div><a style={linkStyles} target="_blank" href="https://bit.ly/AIC_Turtlemint">Turtlemint</a></div>
                  <div><a style={linkStyles} target="_blank" href="https://bit.ly/AIC_Ge_Healthcare">GE Healthcare</a></div>
                  <div><a style={linkStyles} target="_blank" href="https://bit.ly/AIC_Bharat_Serums">Bharat Serums and Vaccines</a></div>
                  <div><a style={linkStyles} target="_blank" href="https://bit.ly/AIC_RR_Kabel">RR Kabel</a></div>
                  <div><a style={linkStyles} target="_blank" href="https://bit.ly/AIC_Kamdhenu">Kamdhenu</a></div>
                </div>
              </div>)}
                </div>
                <a className="links" href="#kernel-events">
                  <div>Kernel Events</div>
                </a>
                <Link className="links" to="/events">
                  <div>All Events</div>
                </Link>
                {/* <a className="links" href="#">
                  <div>Workshops</div>
                </a>
                <a className="links" href="#">
                  <div>Kind Store</div>
                </a> */}
              </div>
              {((isShown || isAicShown) && window.screen.width > 768) && (<div className="aic-container" onMouseEnter={mouseOverAICMenu} onMouseLeave={mouseLeaveAICMenu}>
                <div className="sub-menu">
                  <div><a style={linkStyles} target="_blank" href="https://bit.ly/AIC_Turtlemint">Turtlemint</a></div>
                  <div><a style={linkStyles} target="_blank" href="https://bit.ly/AIC_Ge_Healthcare">GE Healthcare</a></div>
                  <div><a style={linkStyles} target="_blank" href="https://bit.ly/AIC_Bharat_Serums">Bharat Serums and Vaccines</a></div>
                  <div><a style={linkStyles} target="_blank" href="https://bit.ly/AIC_RR_Kabel">RR Kabel</a></div>
                  <div><a style={linkStyles} target="_blank" href="https://bit.ly/AIC_Kamdhenu">Kamdhenu</a></div>
                  {/* <div>Company Name</div>
                  <div>Company Name</div>
                  <div>Company Name</div> */}
                </div>
              </div>)}
            </div>
          </div>
        </div>

      </nav>
    </div>
  )
}
export default NavBar;