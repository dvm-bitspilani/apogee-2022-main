// imports
import RegModalButton from "../RegModalButton/RegModalButton";
import { Link } from "react-router-dom";




function NavBar() {
    return(
        <div className="navbarWrapper">
            <nav>
          <div className="logo">
            <img src={require("../../assets/Apogee Logo.png")} alt="" />
          </div>

        <RegModalButton />  

          <div className="hamburger">
            <div class="line-menu half start"></div>
            <div class="line-menu"></div>
            <div class="line-menu half end"></div>
          </div>

          <div id="drawer">
            <a
              href="https://bits-apogee.org/registrations/login/"
              target="_blank"
            >
              <div class="nav-links">Login</div>
            </a>
            {/* <a href="/">
              <div class="nav-links">APOGEE Innovation Challenge</div>
            </a> */}
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
            </a>
            {/* <div>Developers</div> */}
          </div>
        </nav>
        </div>
    )
}
export default NavBar;