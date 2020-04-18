import React from 'react';
import './NavBarMobileScreen.css';
import { Responsive} from "semantic-ui-react";
import logo from '../../assets/logo.png'
import burger from '../../assets/burger-icon.png'

function NavBarMobileScreen(props) {
  return (
  <Responsive {...Responsive.onlyMobile}>
    <div className="mobile-container">
      <div className="mobile-burger-container">
        <img src={burger} alt="burger-icon" onClick={props.burgerMenuToggle}/>
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
