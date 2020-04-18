import React from 'react'
import { Responsive} from "semantic-ui-react";
import './NavBarTabletScreen.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';

function NavBarTabletScreen() {
  return (
    <Responsive {...Responsive.onlyTablet}>
      <div className="tablet-container">

        <div className="tablet-logo">
          <Link to="/">
            <img src={logo} alt="logo"/>
          </Link>
        </div>

        <div className="tablet-projects">
          <Link to="/projects" className="tablet-nav-links">Projects</Link>
        </div>

        <div className="tablet-about">
          <Link to="/about" className="tablet-nav-links">Projects</Link>
        </div>

        <div className="tablet-contact-me">
          <Link to="/contact-me" className="tablet-nav-links">Contact me</Link>
        </div>

      </div>
    </Responsive>
  )
}

export default NavBarTabletScreen

