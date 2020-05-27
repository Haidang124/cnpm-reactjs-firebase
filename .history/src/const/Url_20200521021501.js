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
import Courses from "../components/Courses";
import CourseDetail from "../components/CourseDetail";


class Url extends Component {
  render() {
    return (
        <div>
          <hr />
          <Switch>
            <Route exact path="/Home">
              <Home />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/Courses">
              <Courses />
            </Route>
            <Route exact path="/Course-detail/:code.html" component={CourseDetail}/>
              {/* <CourseDetail />
            </Route> */}
            <Route path="/.../Members">
              <Member />
            </Route>
            <Route exact path="/Chat">
              <Chat />
            </Route>
            <Route exact path="/Documents">
              <Member />
            </Route>
            <Route exact path="/Tasks">
              <Member />
            </Route>
            <Route exact path="/Profile">
              <Member />
            </Route>
            <Route exact path="/forgot-password">
              <Forgotpass />
            </Route>
          </Switch>
        </div>
    );
  }
}
function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}


export default Url;
