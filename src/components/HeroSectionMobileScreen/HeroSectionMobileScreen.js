import React from 'react'
import './HeroSectionMobileScreen.css';
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import stackOverflow from "../../assets/stack-overflow.png";
import arrow from "../../assets/down-arrow.png";
import { Responsive} from "semantic-ui-react";

function HeroSectionMobileScreen() {
  return (
    <Responsive {...Responsive.onlyMobile}>
    <div className="mobile-hero-container">
        <div className="mobile-hero-heading">
          <h1>Fernando Gomez <br />Full-Stack Web Developer</h1>
        </div>
        <div className="mobile-hero-icons-container">
          <div className="mobile-hero-icons">
            <a href="https://github.com/Fernandocgomez">
              <img src={github} alt="github icon" />
            </a>
            <a href="https://www.linkedin.com/in/fernandocgomez">
              <img src={linkedin} alt="linkedin icon" />
            </a>
            <a href="https://stackoverflow.com/users/12623438/fernando-gomez">
              <img src={stackOverflow} alt="stack overflow icon" />
            </a>
          </div>
          <div className="mobile-hero-icons-label-container">
            <div>
              <a href="https://github.com/Fernandocgomez">Github</a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/fernandocgomez">Linkedin</a>
            </div>
            <div>
              <a href="https://stackoverflow.com/users/12623438/fernando-gomez">
                Stack Overflow
              </a>
            </div>
          </div>
        </div>
        <div className="mobile-hero-bottom-arrow-container">
          <img src={arrow} alt="arrow bouncing" />
        </div>
      </div>
    </Responsive>
  )
}

export default HeroSectionMobileScreen
