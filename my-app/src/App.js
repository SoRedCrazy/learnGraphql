import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserDetails from './UserDetails.js'; 
import Home from './Home.js'; 

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/user/:id" component={UserDetails} />
      </Switch>
    </Router>
  );
}

export default App;
