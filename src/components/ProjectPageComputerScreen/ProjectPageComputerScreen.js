import React from 'react'
import './ProjectPageComputerScreen.css';
import { Responsive } from 'semantic-ui-react';
import github from '../../assets/github.png'

function ProjectPageComputerScreen(props) {
  console.log(props)
  const obj = props.obj
  return (
    <Responsive {...Responsive.onlyComputer}>
      <div className="computer-screen-project-page-container">
        <div className="computer-screen-project-page-title">
          <h1>{obj.title}</h1>
        </div>
        <div className="computer-screen-project-page-main-img">
          <img src={obj.mainImg} alt=""/>
        </div>
        <div className="computer-screen-project-page-des">
          <p>{obj.des}</p>
          <p>{obj.title} was built using popular technologies such as:</p>
        </div>
        <div className="computer-screen-project-page-front-end-list">
          <ul>
            <li>React JS</li>
            <li>React Router</li>
            <li>React HTML</li>
            <li>CSS</li>
          </ul>
        </div>
        <div className="computer-screen-project-page-back-end-list">
          <ul>
            <li>Ruby on Rails</li>
            <li>SQLite</li>
            <li>MVC</li>
            <li>Nokogiri</li>
          </ul>
        </div>
        <div className="computer-screen-project-page-link-container">
          <div className="computer-screen-project-page-link-item">
            <img src={github} alt=""/>
            <a href="">Github</a>
          </div>
          <div className="computer-screen-project-page-link-item">
            <img src={github} alt=""/>
            <a href="">Github</a>
          </div>
          <div className="computer-screen-project-page-link-item">
            <img src={github} alt=""/>
            <a href="">Github</a>
          </div>
        </div>
      </div>
    </Responsive>
  )
}

export default ProjectPageComputerScreen
