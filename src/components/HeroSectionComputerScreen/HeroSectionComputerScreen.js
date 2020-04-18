import React from 'react'
import './HeroSectionComputerScreen.css';
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
import stackOverflow from '../../assets/stack-overflow.png'
import arrow from '../../assets/down-arrow.png'


function HeroSectionComputerScreen() {
  return (
    <div className="computer-hero-container">
      <div className="computer-hero-heading">
        <h1>Fernando Gomez - Full-Stack Web Developer</h1>

      </div>
      <div className="computer-hero-icons-container">
        <div className="computer-hero-icons">
          <a href="https://github.com/Fernandocgomez">
          <img src={github} alt="github icon"/>
          </a>
          <a href="https://www.linkedin.com/in/fernandocgomez">
          <img src={linkedin} alt="linkedin icon"/>
          </a>
          <a href="https://stackoverflow.com/users/12623438/fernando-gomez">
          <img src={stackOverflow} alt="stack overflow icon"/>
          </a>
        </div>
        <div className="computer-hero-icons-label-container">
          <div><a href="https://github.com/Fernandocgomez">Github</a></div>
          <div><a href="https://www.linkedin.com/in/fernandocgomez">Linkedin</a></div>
          <div><a href="https://stackoverflow.com/users/12623438/fernando-gomez">Stack Overflow</a></div>
        </div>
      </div>
      <div className="computer-hero-bottom-arrow-container">
          <img src={arrow} alt=""/>
      </div>
    </div>
  )
}

export default HeroSectionComputerScreen
