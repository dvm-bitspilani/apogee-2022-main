import logo from "./logo.svg";
import * as React from "react";
import BalconyLaptop from "./assets/laptop/Balcony.svg";
import BalconyMobile from "./assets/mobile/Balcony.svg";
import CityLayer1 from "./assets/laptop/City Layer 1.svg";
import CityLayer2 from "./assets/laptop/City Layer 2.svg";
import CityLayer3 from "./assets/laptop/City Layer 3.svg";
import CityLayer4 from "./assets/laptop/City Layer 4.svg";
import CityLayer5 from "./assets/laptop/City Layer 5.svg";
import CityLayer6 from "./assets/laptop/City Layer 6.svg";
import Twitter from "./assets/Twitter.svg";
import Insta from "./assets/Insta.svg";
import Facebook from "./assets/Facebook.svg";
import Sign from "./assets/laptop/Sign.svg";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Input from "@mui/material/Input";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

// import TextField from '@mui/material/TextField';
import "./Modal.css";
import "./App.css";
// import '/landing.js'
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#0971f1",
      darker: "#053e85",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "rgba(255, 255, 255, 0.3)",
  border: "1px solid rgba(209, 213, 219, 0.3);",
  // boxShadow: 24,
  p: 4,
  // filter:'blur(3px) saturate(180%)'
};
function App() {
  const options = [{ label: "Test 1" }, { label: "Test 2" }];
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState({});
  const [colleges, setColleges] = React.useState([]);
  const [events, setEvents] = React.useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    fetch("https://bits-apogee.org/registrations/get_college/", {
      headers: { "content-type": "application/json" },
      method: "GET",
      mode: "cors",
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (result) {
        setColleges(result.data);
      });

    fetch("https://bits-apogee.org/registrations/events/", {
      headers: { "content-type": "application/json" },
      method: "GET",
      mode: "cors",
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (result) {
        console.log(result);
        console.log(result.data);
        console.log(result.data[0]);
        setEvents(result.data[0]);
      });
  }, []);

  console.log(colleges);
  console.log(events);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    console.log(JSON.stringify(data));
    fetch("https://bits-apogee.org/registrations/Register/", {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify(data),
      mode: "cors",
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (result) {
        console.log(result);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="App">
      <div id="wrapper">
        <div className="sky"></div>
        <div className="stars"></div>
        <nav>
          <div className="logo">
            <img src={require("./assets/Apogee Logo.png")} alt="" />
          </div>

          <div className="ModalBox">
            <Button variant="outlined" onClick={handleOpen}>
              Open modal
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                  color="white"
                >
                  REGISTRATION
                </Typography>
                <form onSubmit={handleSubmit}>
                  <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                  />
                  <TextField
                    id="filled-basic"
                    label="Filled"
                    variant="filled"
                  />
                  <TextField
                    id="standard-basic"
                    label="Standard"
                    variant="standard"
                  />
                </form>
              </Box>
            </Modal>
          </div>
        </nav>
        <div>
          {/* <!-- <div className="moon"><img src={require("./assets/laptop/Moon.svg")} alt=""/></div> --> */}
          <div className="moon"></div>
          <div className="socials">
            <div className="twitter">
              {/* <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="23" cy="23" r="23" fill="#00002C" />
                <path d="M23 0C10.2987 0 0 10.2987 0 23C0 35.7013 10.2987 46 23 46C35.7013 46 46 35.7013 46 23C46 10.2987 35.7013 0 23 0ZM34.0533 17.3373C34.0687 17.5786 34.0687 17.8301 34.0687 18.0766C34.0687 25.6132 28.329 34.2946 17.8404 34.2946C14.606 34.2946 11.6078 33.3551 9.08192 31.7379C9.54397 31.7893 9.98549 31.8098 10.4578 31.8098C13.1275 31.8098 15.5815 30.9062 17.5375 29.3763C15.0321 29.325 12.9272 27.6821 12.2085 25.4232C13.0864 25.5516 13.877 25.5516 14.7806 25.3205C13.4906 25.0585 12.3311 24.3578 11.4991 23.3377C10.6671 22.3176 10.2139 21.0409 10.2165 19.7246V19.6527C10.9712 20.0788 11.8594 20.3406 12.7886 20.3766C12.0075 19.856 11.3668 19.1506 10.9235 18.3231C10.4802 17.4957 10.248 16.5716 10.2473 15.6328C10.2473 14.5701 10.5246 13.5998 11.0225 12.7578C12.4544 14.5205 14.2412 15.9621 16.2667 16.989C18.2922 18.0159 20.5111 18.6051 22.7792 18.7183C21.9732 14.8422 24.8688 11.7054 28.3496 11.7054C29.9924 11.7054 31.471 12.3933 32.5132 13.5022C33.8018 13.2609 35.0339 12.7783 36.1326 12.1315C35.7065 13.4509 34.8132 14.565 33.6272 15.2683C34.7772 15.1451 35.8862 14.8268 36.9129 14.3801C36.1377 15.5199 35.1674 16.5313 34.0533 17.3373Z" fill="white" />
              </svg> */}
              <img src={Twitter} />
            </div>
            <div className="insta">
              {/* <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="23" cy="23" r="23" fill="#00002C" />
              <path d="M20.3652 19.0569C21.145 18.5355 22.0619 18.257 23 18.2566C24.258 18.2571 25.4644 18.7569 26.3542 19.6463C27.2439 20.5357 27.7442 21.742 27.7451 23C27.7451 23.9381 27.467 24.8551 26.9459 25.6351C26.4247 26.4151 25.684 27.0231 24.8174 27.3821C23.9508 27.7412 22.9971 27.8352 22.077 27.6524C21.157 27.4695 20.3118 27.0179 19.6483 26.3547C18.9849 25.6915 18.533 24.8465 18.3498 23.9265C18.1665 23.0065 18.2602 22.0528 18.619 21.186C18.9777 20.3193 19.5854 19.5783 20.3652 19.0569Z" fill="white" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M33.0188 12.9777C33.484 13.4429 33.8486 13.9987 34.0901 14.6106L34.0936 14.6115C34.7308 16.2192 34.6955 19.7196 34.6727 21.9888C34.6689 22.3643 34.6654 22.7061 34.6654 23C34.6654 23.2939 34.6689 23.6357 34.6727 24.0113C34.6955 26.2817 34.7308 29.7861 34.0936 31.3885C33.8522 32.0004 33.4875 32.5563 33.0223 33.0214C32.5571 33.4866 32.0013 33.8513 31.3894 34.0928C29.7833 34.7303 26.2889 34.6949 24.0189 34.6719C23.6419 34.668 23.2987 34.6646 23.0036 34.6646C22.7139 34.6646 22.3779 34.6678 22.0091 34.6713C19.7384 34.6932 16.2234 34.7269 14.6169 34.0928C14.0049 33.8513 13.4491 33.4866 12.9839 33.0214C12.5187 32.5563 12.1541 32.0004 11.9126 31.3885C11.2755 29.775 11.309 26.2545 11.3306 23.9858C11.3341 23.6199 11.3372 23.2866 11.3372 22.9991C11.3372 22.7107 11.334 22.3762 11.3305 22.0088C11.3089 19.7391 11.2753 16.218 11.909 14.6106C12.1505 13.9987 12.5151 13.4429 12.9803 12.9777C13.4455 12.5125 14.0013 12.1478 14.6133 11.9064C16.2194 11.2688 19.7152 11.3042 21.9851 11.3273C22.3619 11.3311 22.705 11.3346 23 11.3346C23.2895 11.3346 23.6254 11.3313 23.9941 11.3278C26.2642 11.306 29.7793 11.2722 31.3858 11.9064C31.9978 12.1478 32.5536 12.5125 33.0188 12.9777ZM18.9488 29.0631C20.1479 29.8643 21.5578 30.292 23 30.292C23.9579 30.2932 24.9067 30.1054 25.7919 29.7393C26.6772 29.3733 27.4815 28.8362 28.1588 28.1588C28.8362 27.4815 29.3733 26.6772 29.7393 25.7919C30.1054 24.9067 30.2932 23.9579 30.292 23C30.292 21.5578 29.8643 20.1479 29.0631 18.9488C28.2618 17.7496 27.123 16.815 25.7905 16.2631C24.4581 15.7111 22.9919 15.5667 21.5774 15.8481C20.1629 16.1295 18.8636 16.824 17.8438 17.8438C16.824 18.8636 16.1295 20.1629 15.8481 21.5774C15.5667 22.9919 15.7111 24.4581 16.2631 25.7905C16.815 27.123 17.7496 28.2618 18.9488 29.0631ZM29.6467 16.8177C29.9267 17.0046 30.2559 17.1043 30.5926 17.1041L30.5961 17.1077C30.8197 17.1076 31.0411 17.0633 31.2475 16.9775C31.4539 16.8916 31.6414 16.7659 31.7991 16.6074C31.9568 16.4489 32.0817 16.2609 32.1666 16.054C32.2515 15.8472 32.2947 15.6257 32.2938 15.4021C32.2938 15.0654 32.1939 14.7363 32.0068 14.4564C31.8198 14.1764 31.5539 13.9583 31.2428 13.8295C30.9318 13.7007 30.5895 13.667 30.2593 13.7328C29.9291 13.7985 29.6258 13.9607 29.3878 14.1989C29.1498 14.437 28.9878 14.7403 28.9222 15.0706C28.8567 15.4008 28.8905 15.7431 29.0195 16.054C29.1484 16.365 29.3667 16.6308 29.6467 16.8177Z" fill="white" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M42.9196 14.0942V31.9058C40.7306 36.7946 36.7946 40.7306 31.9058 42.9196H14.0942C9.20538 40.7306 5.26942 36.7946 3.08036 31.9058V14.0942C5.26942 9.20538 9.20538 5.26942 14.0942 3.08036H31.9058C36.7946 5.26942 40.7306 9.20538 42.9196 14.0942ZM34.83 34.8273C36.4938 33.1679 37.014 31.1484 37.1287 28.8692C37.2612 26.518 37.2612 19.482 37.1287 17.1415C37.0202 14.8623 36.4902 12.8419 34.83 11.1789C33.1697 9.516 31.151 8.99489 28.8719 8.88017C26.5233 8.74767 19.482 8.74767 17.1335 8.88017C14.8632 8.98867 12.8454 9.51333 11.1754 11.1727C9.50533 12.8321 8.99133 14.8516 8.87662 17.1308C8.74412 19.4776 8.74412 26.5197 8.87662 28.8692C8.98511 31.1439 9.50889 33.1644 11.1754 34.8273C12.8419 36.4902 14.8543 37.0113 17.1335 37.126C19.482 37.2586 26.5233 37.2586 28.8719 37.126C31.1484 37.0176 33.1661 36.4867 34.83 34.8273Z" fill="white" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M23 46C35.7026 46 46 35.7026 46 23C46 10.2975 35.7026 0 23 0C10.2975 0 0 10.2975 0 23C0 35.7026 10.2975 46 23 46ZM23 40.6607C32.7537 40.6607 40.6607 32.7537 40.6607 23C40.6607 13.2463 32.7537 5.33929 23 5.33929C13.2463 5.33929 5.33929 13.2463 5.33929 23C5.33929 32.7537 13.2463 40.6607 23 40.6607Z" fill="white" />
            </svg> */}
              <img src={Insta} />
            </div>
            <div className="facebook">
              {/* <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="23" cy="23" r="23" fill="#00002C" />
              <path d="M46 23.0576C46 10.3298 35.696 0 23 0C10.304 0 0 10.3298 0 23.0576C0 34.2175 7.912 43.5098 18.4 45.6541V29.9749H13.8V23.0576H18.4V17.2932C18.4 12.8431 22.011 9.22306 26.45 9.22306H32.2V16.1404H27.6C26.335 16.1404 25.3 17.1779 25.3 18.4461V23.0576H32.2V29.9749H25.3V46C36.915 44.8471 46 35.0246 46 23.0576Z" fill="white" />
            </svg> */}
              <img src={Facebook} />
            </div>
          </div>
          <div class="sign">
            <img src={Sign} alt="" />
          </div>
          <div className="balcony">
            {/* <!-- <div className="horizon-glow-buildings"></div> --> */}
            <div className="horizon-glow"></div>
            <div className="balcony-lp">
              <img src={BalconyLaptop} alt="" />
            </div>
            <div className="balcony-mobile">
              <img src={BalconyMobile} alt="" />
            </div>
            <div className="glow"></div>
          </div>
          <div className="city city1">
            <img src={CityLayer1} alt="" />
          </div>
          <div className="city city2">
            <img src={CityLayer2} alt="" />
          </div>
          <div className="city city3">
            <img src={CityLayer3} alt="" />
          </div>
          <div className="city city4">
            <img src={CityLayer4} alt="" />
          </div>
          <div className="city city5">
            <img src={CityLayer5} alt="" />
          </div>
          <div className="city city6">
            <img src={CityLayer6} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
