import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        

        <Route
          exact
          path="/"
          component={history => <Home history={history} />}
        />

      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
