import React from "react";
import DeveloperCard from "./DeveloperCard";
import "./DeveloperContainer.css";

export default function DeveloperContainer(props) {
  const devs = {
    frontend: [
      { name: "Alvin", img: "alvin.jpeg" },
      { name: "Rutva", img: "rutva.jpeg" },
      { name: "Saksham", img: "saksham.jpeg" },
      { name: "Sarthak", img: "sarthak.jpeg" },
    ],
    design: [
      { name: "Akshun", img: "akshun.jpeg" },
      { name: "Madhav", img: "madhav.jpeg" },
      { name: "Rohit", img: "rohit.jpeg" },
      { name: "Satvik", img: "satvik.jpeg" },
    ],
    backend: [
      { name: "Aditya", img: "aditya.jpeg" },
      { name: "Akshat", img: "akshat.jpeg" },
      { name: "Dhruv", img: "dhruv.jpeg" },
      { name: "Mohit", img: "mohit.jpeg" },
      { name: "Harsh", img: "harsh.jpeg" },
    ],
  };

  return (
    <div className="devs-wrapper">
      <div className="devs-cont">
        <div className="devs-head">
          <svg
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 486.975 486.975"
            className="devs-back"
          >
            <g>
              <path
                d="M473.475,230.025h-427.4l116-116c5.3-5.3,5.3-13.8,0-19.1c-5.3-5.3-13.8-5.3-19.1,0l-139,139c-5.3,5.3-5.3,13.8,0,19.1
		l139,139c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1l-116-116h427.5c7.5,0,13.5-6,13.5-13.5
		S480.975,230.025,473.475,230.025z"
              />
            </g>
          </svg>
          DEVELOPERS
        </div>
        <div className="devs-teams-cont">
          {Object.keys(devs).map((key) => {
            return (
              <div className="devs-team-cont">
                <div className="devs-team">
                  {devs[key].map((dev) => (
                    <DeveloperCard name={dev.name} img={dev.img} team={key} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
