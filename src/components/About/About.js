import React from 'react'
import './About.css';
import AboutMePageComputerScreen from '../AboutMePageComputerScreen/AboutMePageComputerScreen'
import AboutMePageTabletScreen from '../AboutMePageTabletScreen/AboutMePageTabletScreen'
import AboutMePageMobileScreen from '../AboutMePageMobileScreen/AboutMePageMobileScreen'



function About() {
  return (
    <div>
      <AboutMePageComputerScreen />
      <AboutMePageTabletScreen />
      <AboutMePageMobileScreen />
    </div>
  )
}

export default About
