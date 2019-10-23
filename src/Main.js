import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Component/Login/Login';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import SignUp from './Component/SignUp/SignUp';
import LandingPage from './Component/LandingPage/Index';
import SignUpPro from './Component/SignUpPro/SignUpPro';
import SignUpVendor from './Component/SignUpVendor/SignUpVendor';
const Main = () => {
  return (
    <Switch>
    <Route exact path='/' component={LandingPage}></Route>
      <Route exact path='/login' component={Login}></Route>
      <Route exact path='/about' component={About}></Route>
      <Route exact path='/contact' component={Contact}></Route>
      <Route exact path='/signup' component={SignUp}></Route>
      <Route exact path='/pro' component={SignUpPro}></Route>
      <Route exact path='/vendor' component={SignUpVendor}></Route>
    </Switch>
  );
}

export default Main;