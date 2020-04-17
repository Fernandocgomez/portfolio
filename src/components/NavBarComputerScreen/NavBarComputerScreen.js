import React, { useState } from "react";
import { Responsive} from "semantic-ui-react";
import { Link } from "react-router-dom";
import './NavBarComputerScreen.css'

function NavBarComputerScreen() {

    const [state, setState] = useState({
        projects: false, 
        about: false, 
        contact: false
    })

    let handleClick = (e) => {
        switch(e.target.name) {
            case "projects": 
                return setState({
                    projects: true, 
                    about: false, 
                    contact: false
                })
            case "about":
                return setState({
                    projects: false, 
                    about: true, 
                    contact: false
                })
            case "contact":
                return setState({
                    projects: false, 
                    about: false, 
                    contact: true
                })
            default:
                return setState({
                    projects: false, 
                    about: false, 
                    contact: false
                })
        }
    }

  return (
    <Responsive {...Responsive.onlyComputer}>
      <div className="computer-container">

        <div className="computer-left-size">
            <div className="computer-logo">
                <img src="https://crypto-simulator.herokuapp.com/static/media/logo.1028e9f4.png" alt="logo"/>
            </div>
        </div>

        <div className="computer-right-size">
            <div className="computer-nav-links">
                <Link 
                to="/projects" 
                className={state.projects ? ('nav-Link nav-link-selected') : ('nav-Link')} 
                name="projects"
                onClick={(e) => handleClick(e)}
                >Projects
                </Link>

                <Link 
                to="/about" 
                className={state.about ? ('nav-Link nav-link-selected') : ('nav-Link')} 
                name="about"
                onClick={(e) => handleClick(e)}
                >About</Link>

                <Link 
                to="/contact-me" 
                className={state.contact ? ('nav-Link nav-link-selected') : ('nav-Link')} 
                name="contact"
                onClick={(e) => handleClick(e)}
                >Contact Me</Link>
            </div>
        </div>
              
      </div>
    </Responsive>
  );
}

export default NavBarComputerScreen;

{
  /* <Responsive {...Responsive.onlyMobile}>Mobile</Responsive>
<Responsive {...Responsive.onlyTablet}>Tablet</Responsive> */
}
