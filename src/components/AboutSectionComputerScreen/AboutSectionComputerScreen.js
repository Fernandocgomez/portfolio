import React from "react";
import "./AboutSectionComputerScreen.css";
import { Responsive } from "semantic-ui-react";
import profilePicture from "../../assets/profile-picture.jpg";

function AboutSectionComputerScreen() {
  return (
    <Responsive {...Responsive.onlyComputer}>
      <div className="computer-about-section-container">
        <div className="computer-about-section-img">
          <img src={profilePicture} alt="Profile" />
        </div>
        <div className="computer-about-section-name">
          <h2>About me</h2>
        </div>
        <div className="computer-about-section-bio">
          <p>
            Full-stack web developer with a passion for problem-solving and
            beautiful web design.
            In the past 2+ years, I helped manage over 4 E-commerce websites,
            worked on a team of 3+ developers, to build 4 full-stack web
            applications, and worked on 5 solo web and mobile app projects.
          </p>
        </div>
      </div>
    </Responsive>
  );
}

export default AboutSectionComputerScreen;
