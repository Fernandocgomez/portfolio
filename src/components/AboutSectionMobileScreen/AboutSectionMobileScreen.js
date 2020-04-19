import React from 'react'
import './AboutSectionMobileScreen.css';
import { Responsive } from "semantic-ui-react";
import profilePicture from "../../assets/profile-picture.jpg";

function AboutSectionMobileScreen() {
  return (
    <Responsive {...Responsive.onlyMobile}>
      <div className="mobile-about-section-container">
        <div className="mobile-about-section-img">
          <img src={profilePicture} alt="Profile Picture" />
        </div>
        <div className="mobile-about-section-name">
          <h2>About me</h2>
        </div>
        <div className="mobile-about-section-bio">
          <p>
            Full-stack web developer with a passion for problem-solving and
            beautiful web design. In the past 2+ years, I helped manage over 4
            E-commerce websites, worked on a team of 3+ developers, to build 4
            full-stack web applications, and worked on 5 solo web and mobile app
            projects.
          </p>
        </div>
      </div>
    </Responsive>
  )
}

export default AboutSectionMobileScreen
