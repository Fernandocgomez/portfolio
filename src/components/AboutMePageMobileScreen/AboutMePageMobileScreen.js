import React from 'react'
import './AboutMePageMobileScreen.css';
import { Responsive } from "semantic-ui-react";
import img from '../../assets/profile-picture.jpg'

function AboutMePageMobileScreen() {
  return (
    <Responsive {...Responsive.onlyMobile}>
      <div className="mobile-screen-about-container">
        <div className="mobile-screen-about-img">
          <img src={img} alt=""/>
        </div>

        <div className="mobile-screen-about-bio">
          <div className="mobile-screen-about-text">
            <h1>About Me!</h1>
            <p>My name is Fernando Gomez. I am a full-stack web developer with experience in JavaScript and Ruby. In the past, I have worked in different teams of web developers to build full-stack web applications and mobile applications using technologies such as React, React Native, Ruby on Rails, SQLite, PostgreSQL, and Heroku. </p>
            <p>In my spread time, you can find me working on personal projects that help solve problems in different industries. A good example of this is a mobile application I am building at the moment to help restaurants to present their food in augmented reality to their customers. However, when I am not working on personal projects or playing ping pong or chess with friends, you can find me on coffee shops or online teaching people the basics of HTML, CSS, Ruby, and JavaScript. I believe that by teaching others you grow as a developer and as a person. </p>
          </div>
        </div>
      </div>
    </Responsive>
  )
}

export default AboutMePageMobileScreen
