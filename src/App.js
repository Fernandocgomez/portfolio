import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import ProjectPageComputerScreen from './components/ProjectPageComputerScreen/ProjectPageComputerScreen';
import { findDanceProject } from './components/ProjectsObjects/FindDance';
import { arGourmetProject } from './components/ProjectsObjects/ArGourmet';
import { findMeANewHome } from './components/ProjectsObjects/FindMeANewHome';
import ProjectPageTabletScreen from './components/ProjectPageTabletScreen/ProjectPageTabletScreen';
import ProjectPageMobileScreen from './components/ProjectPageMobileScreen/ProjectPageMobileScreen';
import AboutSectionComputerScreen from './components/AboutSectionComputerScreen/AboutSectionComputerScreen';
import About from './components/About/About';
import ContactMe from './components/ContactMe/ContactMe';
import Projects from './components/Projects/Projects';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        

        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/projects/find-dance">
          <ProjectPageComputerScreen obj={findDanceProject}/>
          <ProjectPageTabletScreen obj={findDanceProject} />
          <ProjectPageMobileScreen obj={findDanceProject} />

        </Route>

        <Route exact path="/projects/ar-gourmet">
          <ProjectPageComputerScreen obj={arGourmetProject}/>
          <ProjectPageTabletScreen obj={arGourmetProject} />
          <ProjectPageMobileScreen obj={arGourmetProject} />
        </Route>

        <Route exact path="/projects/find-me-a-home">
          <ProjectPageComputerScreen obj={findMeANewHome}/>
          <ProjectPageTabletScreen obj={findMeANewHome} />
          <ProjectPageMobileScreen obj={findMeANewHome} />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/contact-me">
          <ContactMe />
        </Route>

        <Route exact path="/projects">
          <Projects />
        </Route>


      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
