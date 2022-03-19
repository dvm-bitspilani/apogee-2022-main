// imports
import { useState, useEffect, useRef } from 'react';
import RegModalButton from "../RegModalButton/RegModalButton";
import { Link } from "react-router-dom";
import { width } from '@mui/system';




function NavBar() {
  // let hamburger = document.querySelector(".hamburger");
  // hamburger.addEventListener("click", () => {
  //   if (!isMenuOpen) {
  //     hamburger.classList.add("open");
  //     openNav();
  //   } else {
  //     hamburger.classList.remove("open");
  //     closeNav();
  //   }
  //   isMenuOpen = !isMenuOpen;
  // });

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

  if(isShown && window.screen.width > 768) allLinks.current.style.transform = "translateX(-100px)"

  const mouseOverAIC = () =>{
    console.log("hovered")
    setIsShown(true)
    if(window.screen.width > 768) allLinks.current.style.transform = "translateX(-100px)"
  }

  const mouseLeaveAIC = () =>{
    setIsShown(false)
    allLinks.current.style.transform = "translateX(0px)"
  }


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
              <a className="links" href="#">
                <div>Facebook</div>
              </a>
              <a className="links" href="#">
                <div>Instagram</div>
              </a>
              <a className="links" href="#">
                <div>Twitter</div>
              </a>
            </div>
            <div className="links-container2">
              <div className="all-links" ref={allLinks}>
                <a className="links" href="#">
                  <div>Home</div>
                </a>
                <a className="links" href="#">
                  <div>About Us</div>
                </a>
                <a className="links" href="#">
                  <div>Contact Us</div>
                </a>
                <a className="links" href="#">
                  <div>Sponsors</div>
                </a>
                <a id="aic" href="#" onMouseOver={mouseOverAIC} onMouseLeave={mouseLeaveAIC}>
                  <div>AIC</div>
                  {((isShown || isAicShown) && window.screen.width < 768) && (<div className="aic-container" onMouseEnter={() => setIsAicShown(true)} onMouseLeave={() => setIsAicShown(false)}>
                <div className="sub-menu">
                  <div>AIC</div>
                  <div>Company Name</div>
                  <div>Company Name</div>
                  <div>Company Name</div>
                  <div>Company Name</div>
                  <div>Company Name</div>
                </div>
              </div>)}
                </a>
                <a className="links" href="#">
                  <div>Kernel Events</div>
                </a>
                <a className="links" href="#">
                  <div>All Events</div>
                </a>
                <a className="links" href="#">
                  <div>Workshops</div>
                </a>
                <a className="links" href="#">
                  <div>Kind Store</div>
                </a>
              </div>
              {((isShown || isAicShown) && window.screen.width > 768) && (<div className="aic-container" onMouseEnter={() => setIsAicShown(true)} onMouseLeave={() => setIsAicShown(false)}>
                <div className="sub-menu">
                  <div>AIC</div>
                  <div>Company Name</div>
                  <div>Company Name</div>
                  <div>Company Name</div>
                  <div>Company Name</div>
                  <div>Company Name</div>
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