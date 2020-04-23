import React, { useEffect } from "react";
import './ContactMe.css';
import ContactMePageComputerScreen from '../ContactMePageComputerScreen/ContactMePageComputerScreen'
import ContactMePageTabletScreen from '../ContactMePageTabletScreen/ContactMePageTabletScreen'
import ContactMePageMobileScreen from '../ContactMePageMobileScreen/ContactMePageMobileScreen'

function ContactMe() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <ContactMePageComputerScreen />
      <ContactMePageTabletScreen />
      <ContactMePageMobileScreen />
    </div>
  )
}

export default ContactMe
