import React from 'react'
import './FooterComputerScreen.css';
import { Responsive} from "semantic-ui-react";
import { Link } from 'react-router-dom';

function FooterComputerScreen() {
  return (
    <Responsive {...Responsive.onlyComputer}>
      <div className="computer-screen-footer-container">
        <div className="computer-screen-sub-footer">
          <div className="computer-screen-contact-info">
            <h2>Contact Me</h2>
            <p><span>Email:</span>Fernandocgomez@live.com</p>
            <p><span>Tel:</span>(346) 260-0832</p>
          </div>
          <div className="computer-screen-site-map">
            <h2>Site Map</h2>
            <Link to="/projects" className="computer-screen-site-map-link">Projects</Link>
            <Link to="/about" className="computer-screen-site-map-link">About</Link>
            <Link to="/contact-me" className="computer-screen-site-map-link">Contact Me</Link>
          </div>
          <div className="computer-screen-empty-container">
          </div>
        </div>
        <div className="computer-screen-footer">
          <p>
            &copy; Fernando Gomez
          </p>
        </div>
      </div>
    </Responsive>
  )
}

export default FooterComputerScreen
