import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from  './Home/Home';
import About from  './About/About';
import Contact from  './Contact/Contact';
import SignUp from './SignUp/SignUp';

const Main = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/About' component={About}></Route>
      <Route exact path='/Contact' component={Contact}></Route>
      <Route exact path='/SignUp' component={SignUp}></Route>
    </Switch>
  );
}

export default Main;