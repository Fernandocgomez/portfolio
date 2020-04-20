import React, { useState } from "react";
import "./ProjectsSectionComputerScreen.css";
import { Responsive } from "semantic-ui-react";
import cryptoProject from "../../assets/crypto-project.png";
import findDanceProject from "../../assets/find-dance-project.png";
import chess from "../../assets/chess.png";
import findMeAHome from "../../assets/find-me-a-home.png";
import shopify from "../../assets/shopify.png";
import arGourmet from "../../assets/ar-gourmet.png";
import arrow from "../../assets/down-arrow.png";
import { Link } from "react-router-dom";

function ProjectsSectionComputerScreen() {
  // if you want to add another project mae sure to adapt the function leftArrow
  let [number, setNumber] = useState(0)
  console.log(number)
  let [projects, setProjects] = useState([
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
    }, 
    {
      picture: shopify, 
      projectName: "Shopify Theme Detector", 
      projectDescription: "Is a web app designed to help drop shippers and Shopify developers to find out the name of the theme a particular Shopify store is using.",
      ProjectLink: "/projects/shopify-theme-detector"
    }, 
    {
      picture: chess, 
      projectName: "Top 100 Chess Players", 
      projectDescription: "Is a web app that lists the top 100 chess master in the world. You can see every single player's stats since the beginning of their career and make comments about it.",
      ProjectLink: "/projects/top-100-chess-players"
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
        return setNumber(5)
      case 1: 
        return setNumber(0)
      case 2:
        return setNumber(1)
      case 3: 
        return setNumber(2)
      case 4: 
        return setNumber(3)
      case 5:
        return setNumber(4)
    }
  }

  return (
    <Responsive {...Responsive.onlyComputer}>
      <div className="computer-projects-section-conatiner">
        <div className="computer-projects-section-heading">
          <h2>Portfolio</h2>
        </div>
        <div className="computer-project-section-img-carousel">
          <div className="computer-project-section-left-arrow">
            <img src={arrow} alt="left arrow icon" onClick={leftArrow}/>
          </div>
          <div className="computer-project-section-img">
            <img src={projects[number].picture} alt="project" />
          </div>
          <div className="computer-project-section-right-arrow">
            <img src={arrow} alt="right arrow icon" onClick={rightArrow} />
          </div>
        </div>
        <div className="computer-project-section-description-container">
          <h3>{projects[number].projectName}</h3>
          <p>
          {projects[number].projectDescription}
          </p>
          <Link to={projects[number].ProjectLink} className="computer-project-section-btn">Find Out More About This Project</Link>
        </div>
      </div>
    </Responsive>
  );
}

export default ProjectsSectionComputerScreen;
