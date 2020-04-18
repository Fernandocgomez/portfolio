import React from 'react'
import './Home.css';
import HeroSectionComputerScreen from '../HeroSectionComputerScreen/HeroSectionComputerScreen';
import { Responsive} from "semantic-ui-react";

function Home() {
  return (
    <Responsive {...Responsive.onlyComputer}>
      <div className="computer-home-container">
        <div className="computer-hero-section-container">
          <HeroSectionComputerScreen />
        </div>
        <div className="computer-about-section-container">

        </div>
        <div className="computer-portfolio-section-container">

        </div>
        <div className="computer-skills-section-container">

        </div>
        <div className="computer-hire-me-section-container">

        </div>
      </div>
    </Responsive>
    
  )
}

export default Home
