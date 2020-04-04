import React from 'react';

// react-router-dom
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/home.jsx';
import Login from './components/login.js'

// import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;