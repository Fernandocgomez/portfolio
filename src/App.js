import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import ProjectPageComputerScreen from './components/ProjectPageComputerScreen/ProjectPageComputerScreen';
import { findDanceProject } from './components/ProjectsObjects/FindDance';


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



      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
