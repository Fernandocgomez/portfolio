import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import ProjectPageComputerScreen from './components/ProjectPageComputerScreen/ProjectPageComputerScreen';
import { findDanceProject } from './components/ProjectsObjects/FindDance';
import { arGourmetProject } from './components/ProjectsObjects/ArGourmet';
import { findMeANewHome } from './components/ProjectsObjects/FindMeANewHome';




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
        </Route>

        <Route exact path="/projects/ar-gourmet">
          <ProjectPageComputerScreen obj={arGourmetProject}/>
        </Route>

        <Route exact path="/projects/find-me-a-home">
          <ProjectPageComputerScreen obj={findMeANewHome}/>
        </Route>




      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
