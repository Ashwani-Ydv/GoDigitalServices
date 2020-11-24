import React from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import {browserHistory} from 'react-router'
import LoginContainer from './components/Login/LoginContainer'
import './App.css';
import Agencies from './components/Agency/Agencies'
import SignInForm from './components/Login/SignIn'
import SignUpForm from './components/Login/SignUp';
import Email from './components/Login/Email';
import VerifyOTP from './components/Login/VerifyOTP';
import ResetPassword from './components/Login/ResetPassword';
import Add_Agency from './components/Agency/Add_Agency';
import AgencyDetail from './components/Agency/AgencyDetail';
import Edit_Agency from './components/Agency/Edit_Agency';
import Product from './components/Agency/Product'
import User from './components/Agency/User'
function App() {
  return (
    <div className="App">
      <Router>
          <Route exact path="/sign_up" component={SignUpForm}>
          </Route>
          <Route exact path="/" component={SignInForm}>
          </Route>
          <Route exact path="/email" component={Email}>
          </Route>
          <Route exact path="/verify" component={VerifyOTP}>
          </Route>
          <Route exact path="/reset_password" component={ResetPassword}>
          </Route>
          <Route path="/agencies" component={Agencies}>
          </Route>
          <Route path="/add_agency" component={Add_Agency}>
          </Route>
          <Route path="/agency_detail" component={AgencyDetail}>
          </Route>
          <Route path="/edit_agency" component={Edit_Agency}>
          </Route>
          <Route path="/product" component={Product}>
          </Route>
          <Route path="/user" component={User}>
          </Route>
      </Router>
          </div>
  );
}

export default App;
