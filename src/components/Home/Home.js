import React from 'react'
import './Home.css';
import HeroSectionComputerScreen from '../HeroSectionComputerScreen/HeroSectionComputerScreen';
import HeroSectionTabletScreen from '../HeroSectionTabletScreen/HeroSectionTabletScreen';
import HeroSectionMobileScreen from '../HeroSectionMobileScreen/HeroSectionMobileScreen';
import AboutSectionComputerScreen from '../AboutSectionComputerScreen/AboutSectionComputerScreen';
import AboutSectionTabletScreen from '../AboutSectionTabletScreen/AboutSectionTabletScreen';
import AboutSectionMobileScreen from '../AboutSectionMobileScreen/AboutSectionMobileScreen';
import ProjectsSectionComputerScreen from '../ProjectsSectionComputerScreen/ProjectsSectionComputerScreen';
import ProjectsSectionTabletScreen from '../ProjectsSectionTabletScreen/ProjectsSectionTabletScreen';


function Home() {
  return (
    <div>
      <div className="home-container">
        <div className="hero-section-container">
          <HeroSectionComputerScreen />
          <HeroSectionTabletScreen />
          <HeroSectionMobileScreen />
        </div>
        <div className="about-section-container">
          <AboutSectionComputerScreen />
          <AboutSectionTabletScreen />
          <AboutSectionMobileScreen />
        </div>
        <div className="portfolio-section-container">
          <ProjectsSectionComputerScreen />
          <ProjectsSectionTabletScreen />
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
