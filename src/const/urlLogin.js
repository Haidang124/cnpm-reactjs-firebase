import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "../components/Login";
import Resetpassword from "../components/Resetpassword";
import Member from "../components/Member";
import Home from "../components/Home";
import Register from "../components/Register";
import Forgotpass from "../components/Forgotpass";
import Chat from "../components/Chat";
import SignIn from "../components/SignIn.js";
import SignUp from "../components/SignUp";


class urlLogin extends Component {
  render() {
    return (
        <div>
          <Switch>
          <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/reset-password">
              <Resetpassword />
            </Route>
            <Route path="/login1">
              <SignIn />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/register1">
              <SignUp />
            </Route>
          </Switch>
            
        </div>
    );
  }
}
export default urlLogin;
