import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        

        {/* <Route
          exact
          path="/login"
          component={history => <LoginContainer history={history} />}
        /> */}

      </Switch>
    </BrowserRouter>
  );
}

export default App;
