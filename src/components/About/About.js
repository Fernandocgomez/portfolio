import React, { useEffect } from "react";
import './About.css';
import AboutMePageComputerScreen from '../AboutMePageComputerScreen/AboutMePageComputerScreen'
import AboutMePageTabletScreen from '../AboutMePageTabletScreen/AboutMePageTabletScreen'
import AboutMePageMobileScreen from '../AboutMePageMobileScreen/AboutMePageMobileScreen'



function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <AboutMePageComputerScreen />
      <AboutMePageTabletScreen />
      <AboutMePageMobileScreen />
    </div>
  )
}

export default About
