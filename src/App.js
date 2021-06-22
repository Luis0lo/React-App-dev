import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Blog from './components/pages/Blog';
import SignUp from './components/pages/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NotFound from './NotFound';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/Blog" exact component={Blog} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="*" component={NotFound}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
