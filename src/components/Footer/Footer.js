import React from 'react'
import './Footer.css';
import FooterComputerScreen from '../FooterComputerScreen/FooterComputerScreen';
import FooterTabletScreen from '../FooterTabletScreen/FooterTabletScreen';

function Footer() {
  return (
    <div>
      <FooterComputerScreen />
      <FooterTabletScreen />
    </div>
  )
}

export default Footer
