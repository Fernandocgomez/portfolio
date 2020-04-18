import React from 'react';
import './NavBarMobileScreen.css';
import { Responsive} from "semantic-ui-react";
import logo from '../../assets/logo.png'
import burger from '../../assets/burger-icon.png'
import { Link } from 'react-router-dom';

function NavBarMobileScreen(props) {
  return (
  <Responsive {...Responsive.onlyMobile}>
    <div className="mobile-container">
      <div className="mobile-burger-container">
        <Link to="/">
          <img src={burger} alt="burger-icon" onClick={props.burgerMenuToggle}/>
        </Link>
      </div>
      <div className="mobile-logo-container">
        <img src={logo} alt="logo"/>
      </div>
      <div className="mobile-empty-container">
      </div>
    </div>
  </Responsive>
)
}

export default NavBarMobileScreen;
