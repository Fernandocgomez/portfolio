import React, { useState } from 'react';
import './NavBar.css';
import NavBarComputerScreen from '../NavBarComputerScreen/NavBarComputerScreen';
import NavBarMobileScreen from '../NavBarMobileScreen/NavBarMobileScreen';
import { slide as Menu } from 'react-burger-menu'
import { Link } from "react-router-dom";


function NavBar() {

  const [state, setState] = useState(false)

  let burgerMenuToggle = () => {
    if(state === true) {
      setState(false)
    } else {
      setState(true)
    }
  }

  return (
    <div>
      <NavBarComputerScreen />

      <NavBarMobileScreen  burgerMenuToggle={burgerMenuToggle}/>

      <Menu customBurgerIcon={ false } isOpen={ state } disableAutoFocus>

        <Link 
        to="projects" 
        className="NavBar-nav-links"
        onClick={burgerMenuToggle}
        >Projects</Link>

        <Link 
        to="about" 
        className="NavBar-nav-links"
        onClick={burgerMenuToggle}
        >About</Link>

        <Link 
        to="/contact-me" 
        className="NavBar-nav-links"
        onClick={burgerMenuToggle}
        >Contact Me</Link>

      </Menu>

    </div>
  )
}

export default NavBar


