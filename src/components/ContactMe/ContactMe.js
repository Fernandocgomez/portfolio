import React from 'react'
import './ContactMe.css';
import ContactMePageComputerScreen from '../ContactMePageComputerScreen/ContactMePageComputerScreen'
import ContactMePageTabletScreen from '../ContactMePageTabletScreen/ContactMePageTabletScreen'
import ContactMePageMobileScreen from '../ContactMePageMobileScreen/ContactMePageMobileScreen'

function ContactMe() {
  return (
    <div>
      <ContactMePageComputerScreen />
      <ContactMePageTabletScreen />
      <ContactMePageMobileScreen />
    </div>
  )
}

export default ContactMe
