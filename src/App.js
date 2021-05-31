import React, { useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import News from './components/News';
import Contact from './components/Contact';
import Login from './components/Login';
import Services from './components/Services';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Events from './components/Events';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/News" component={News} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Login" component={Login} />
          <Route path="/events" component={Events} />
          <Route path="/services" component={Services} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
