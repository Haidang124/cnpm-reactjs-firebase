import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Login from "../components/Login";
import Resetpassword from "../components/Resetpassword";
import Member from "../components/Member";
import Home from "../components/Home";
import Register from "../components/Register";
import Forgotpass from "../components/Forgotpass";
import Chat from "../components/Chat";
import SignIn from "../components/SignIn.js";
import SignUp from "../components/SignUp";


class Urllo extends Component {
  render() {
    return (
      <div>
      <hr />
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <SignUp />
        </Route>
        <Route exact path="/forgot-password">
          <Forgotpass />
        </Route>
      </Switch>
    </div>
    );
  }
}


export default Urllo;
