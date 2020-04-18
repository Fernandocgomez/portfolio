import React from 'react'
import './Home.css';
import HeroSectionComputerScreen from '../HeroSectionComputerScreen/HeroSectionComputerScreen';
import HeroSectionTabletScreen from '../HeroSectionTabletScreen/HeroSectionTabletScreen';


function Home() {
  return (
    <div>
      <div className="home-container">
        <div className="hero-section-container">
          <HeroSectionComputerScreen />
          <HeroSectionTabletScreen />
        </div>
        <div className="about-section-container">

        </div>
        <div className="portfolio-section-container">

        </div>
        <div className="skills-section-container">

        </div>
        <div className="hire-me-section-container">

        </div>
      </div>
    </div>
    
  )
}

export default Home
