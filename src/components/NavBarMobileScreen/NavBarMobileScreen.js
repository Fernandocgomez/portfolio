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
          <img src={burger} alt="burger-icon" onClick={props.burgerMenuToggle}/>
      </div>
      <div className="mobile-logo-container">
        <Link to="/">
          <img src={logo} alt="logo"/>
        </Link>
      </div>
      <div className="mobile-empty-container">
      </div>
    </div>
  </Responsive>
)
}

export default NavBarMobileScreen;
