import React, {useState} from 'react'
import './ProjectsMobileScreen.css';
import { Responsive } from 'semantic-ui-react';
import findDanceProject from '../../assets/find-dance-project.png'
import cryptoProject from '../../assets/crypto-project.png'
import findMeAHome from '../../assets/find-me-a-home.png'
import arGourmet from '../../assets/ar-gourmet.png'
import { Link } from 'react-router-dom';

function ProjectsMobileScreen() {

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
  ])

  function renderProjects() {
    return projects.map((project, index) => {
      return (
        <div key={index} className="mobile-project-img">
          <h3>{project.projectName}</h3>
          <Link to={project.ProjectLink}><img src={project.picture} alt={project.projectName}/></Link>
        </div>
      )
    })
  }

  return (
    <Responsive {...Responsive.onlyMobile}>
      <div className="mobile-projects-container">
        {renderProjects()}
      </div>
    </Responsive>
  )
}

export default ProjectsMobileScreen
