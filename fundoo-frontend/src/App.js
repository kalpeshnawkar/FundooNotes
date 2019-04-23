import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from "react-router-dom"
import login from "./pages/login"
import register from "./pages/register"
import ForgotPassword from "./pages/ForgotPassword"
import ResetPassword from "./pages/RestPassword"
import DashBoard from './pages/DashBoard'
import VerifyEmail from './pages/VerifyEmail'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
      <div className="App">
      <Route path="/login" component={login}></Route>
      <Route path="/register" component={register}></Route>
      <Route path="/forgotpassword" component={ForgotPassword}></Route>
      <Route path="/resetpassword" component={ResetPassword}></Route>
      <Route path="/dashboard" component={DashBoard}></Route>
      <Route path="/verifyemail/:token" component={VerifyEmail}></Route>
      </div>
      </Router>
      </div>
    );
  }
}

export default App;
