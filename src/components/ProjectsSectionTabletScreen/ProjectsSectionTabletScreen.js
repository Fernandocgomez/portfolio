import React, { useState } from 'react'
import './ProjectsSectionTabletScreen.css';
import { Responsive } from "semantic-ui-react";
import cryptoProject from "../../assets/crypto-project.png";
import findDanceProject from "../../assets/find-dance-project.png";
import findMeAHome from "../../assets/find-me-a-home.png";
import arGourmet from "../../assets/ar-gourmet.png";
import arrow from "../../assets/down-arrow.png";
import { Link } from "react-router-dom";
import { Swipeable } from "react-swipeable";

function ProjectsSectionTabletScreen() {

  let [number, setNumber] = useState(0)
  let [projects] = useState([
    {
      picture: findDanceProject,
      projectName: "Find Dance", 
      projectDescription: "This is a web app designed to help dancers and people interested in dancing to find nearby social dancing events. The app was built based on the same concept of Trivago and Expedia. In seconds, the app will scan and scrap EventBrite, Groupon and MeetUp to gather all the best social dancing on the USA and sort them by area.",  
      ProjectLink: "/projects/find-dance"
    },
    {
      picture: cryptoProject, 
      projectName: "Crypto Trading Simulator", 
      projectDescription: "Helps people interested in cryptocurrency trading to simulate how their money would react to the changes of the market price before investing in websites like Coinbase or KuCoin without having to put a cent of their hard-earned money on risk. ",
      ProjectLink: "/projects/crypto-trading-simulator"
    }, 
    {
      picture: findMeAHome, 
      projectName: "Find Me A New Home", 
      projectDescription: "Was designed to help dogs from shelters to find a new home.",
      ProjectLink: "/projects/find-me-a-home"
    }, 
    {
      picture: arGourmet, 
      projectName: "AR Gourmet", 
      projectDescription: "Is a mobile and web app designed to help restaurants to give an awesome experience to their customers, and to help their customers to make the best choice when ordering their food. The idea was born thanks to my many of my bad experiences and my friends’ many bad experiences, going to restaurants and ordering food to be served with something totally unexpected.",
      ProjectLink: "/projects/ar-gourmet"
    }
  ]
  )

  let rightArrow = () => {
    if(projects.length -1 > number) {
      setNumber(number+=1)
    } else {
      setNumber(0)
    }
  }

  let leftArrow = () => {
    switch(number) {
      case 0: 
        return setNumber(3)
      case 1: 
        return setNumber(0)
      case 2:
        return setNumber(1)
      case 3: 
        return setNumber(2)
      default:
        return setNumber(0)
    }
  }

  function scrollUp() {
    window.scrollTo(0, 0)
  }

  return (
    <Responsive {...Responsive.onlyTablet}>
      <div className="tablet-projects-section-conatiner">
        <div className="tablet-projects-section-heading">
          <h2>Portfolio</h2>
        </div>
        <div className="tablet-project-section-img-carousel">
          <div className="tablet-project-section-left-arrow">
            <img src={arrow} alt="left arrow icon" onClick={leftArrow}/>
          </div>
          <Swipeable onSwipedRight={rightArrow} onSwipedLeft={leftArrow}>
          <div className="tablet-project-section-img">
            <img src={projects[number].picture} alt="project" />
          </div>
          </Swipeable>
          <div className="tablet-project-section-right-arrow">
            <img src={arrow} alt="right arrow icon" onClick={rightArrow} />
          </div>
        </div>
        <div className="tablet-project-section-description-container">
          <h3>{projects[number].projectName}</h3>
          <p>
          {projects[number].projectDescription}
          </p>
          <Link to={projects[number].ProjectLink} className="tablet-project-section-btn" onClick={scrollUp}>Find Out More About This Project</Link>
        </div>
      </div>
    </Responsive>
  )
}

export default ProjectsSectionTabletScreen
