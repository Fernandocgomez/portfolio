import React from 'react'
import './FooterTabletScreen.css';
import { Responsive} from "semantic-ui-react";
import { Link } from 'react-router-dom';

function FooterTabletScreen() {
  return (
    <Responsive {...Responsive.onlyTablet}>
      <div className="tablet-screen-footer-container">
        <div className="tablet-screen-sub-footer">
          <div className="tablet-screen-contact-info">
            <h2>Contact Me</h2>
            <p><span>Email:</span>Fernandocgomez@live.com</p>
            <p><span>Tel:</span>(346) 260-0832</p>
          </div>
          <div className="tablet-screen-site-map">
            <h2>Site Map</h2>
            <Link to="/projects" className="tablet-screen-site-map-link">Projects</Link>
            <Link to="/about" className="tablet-screen-site-map-link">About</Link>
            <Link to="/contact-me" className="tablet-screen-site-map-link">Contact Me</Link>
          </div>
          <div className="tablet-screen-empty-container">
          </div>
        </div>
        <div className="tablet-screen-footer">
          <p>
            &copy; Fernando Gomez
          </p>
        </div>
      </div>
    </Responsive>
  )
}

export default FooterTabletScreen
