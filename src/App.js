// App.js file
import React, { Component } from "react";
import "./App.css";
import Signup from "./components/signUp/Signup";
import Signin from "./components/SignIn/Signin";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

export default class App extends Component {
  render() {
    let navLink = (
      <div className="Tab">
        <NavLink to="/" activeClassName="activeLink" className="signIn">
          Sign In
        </NavLink>
        <NavLink exact to="/register" activeClassName="activeLink" className="signUp">
          Sign Up
        </NavLink>
      </div>
    );
    const login = localStorage.getItem("isLoggedIn");

    return (
      <div className="App">
        {login ? (
          <Router>
            <Route exact path="/" component={Signin}></Route>
            <Route path="/register" component={Signup}></Route>
            <Route path="/home" component={Home}></Route>
          </Router>
        ) : (
          <Router>
            {navLink}
            <Route exact path="/" component={Signin}></Route>
            <Route path="/register" component={Signup}></Route>
            <Route path="/home" component={Home}></Route>
          </Router>
        )}
      </div>
    );
  }
}