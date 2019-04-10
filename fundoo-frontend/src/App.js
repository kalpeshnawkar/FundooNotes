import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from "react-router-dom"
import login from "./pages/login"
import register from "./pages/register"
import ForgotPassword from "./pages/ForgotPassword"
import ResetPassword from "./pages/RestPassword"
import DashBoard from './components/DashBoard';

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
      </div>
      </Router>
      </div>
    );
  }
}

export default App;
