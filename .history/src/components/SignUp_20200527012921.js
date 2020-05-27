import React, { Component } from "react";
import {
  auth,
  signInWithGoogle,
  generateUserDocument,
  db,
} from "../firebaseConnect";
import { Link, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./../css/register.css";
import App from "./App";
import store from "./store";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      msv: "",
      password: "",
      firstName: "",
      lastName: "",
      repeatPassword: "",
      chat:[],
      topics:[],
      tasks:[],
      friends:[],
      error: null,
    };
  }
  createUserWithEmailAndPasswordHandler = async (event, email, password) => {
    event.preventDefault();
    try {
       var firstName = this.state.firstName;
       var lastName = this.state.lastName;
       var msv = this.state.msv;
       var chat = this.state.chat;
       var topics = this.state.topics;
       var friends = this.state.friends;
       var tasks = this.state.tasks;
      const { user } = await auth.createUserWithEmailAndPassword(email, password)
      // alert("Account successfully created");
      generateUserDocument(user, {firstName,lastName,msv,chat,topic,tasks,topics,fi});
    } catch (error) {
      alert(error);
      this.setState({error:"Error Signing up with email and password"});
    }
  };

   onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "userEmail") {
      this.setState({
        email: value,
      });
    } else if (name === "userlastName") {
      this.setState({ lastName: value });
    } else if (name === "userfirstName") {
      this.setState({ firstName: value });
    } else if (name === "userMsv") {
      this.setState({ msv: value });
    } else if (name === "userPassword") {
      this.setState({ password: value });
    } else if (name === "repeatPassword") {
      this.setState({ repeatPassword: value });
    }
  };
  render() {
    return (
      <div className="register1">
        <div className="container">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              <div className="row">
                <div className="col-lg-5 d-none d-lg-block bg-register-image" />
                <div className="col-lg-7">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">
                        Create an Account!
                      </h1>
                    </div>
                    <form className="user">
                      <div className="form-group row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                          <input
                            type="text"
                            className="form-control form-control-user"
                            name="userfirstName"
                            placeholder="First Name"
                            value={this.state.firstName}
                            onChange={(event) => this.onChangeHandler(event)}
                          />
                        </div>

                        <div className="col-sm-6">
                          <input
                            type="text"
                            className="form-control form-control-user"
                            id="lastName"
                            name="userlastName"
                            value={this.state.lastName}
                            placeholder="Last Name"
                            onChange={(event) => this.onChangeHandler(event)}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control form-control-user"
                          id="inputMsv"
                          name="userMsv"
                          value={this.state.msv}
                          placeholder="Msv"
                          onChange={(event) => this.onChangeHandler(event)}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control form-control-user"
                          id="inputEmail"
                          name="userEmail"
                          value={this.state.email}
                          placeholder="Email Address"
                          onChange={(event) => this.onChangeHandler(event)}
                        />
                      </div>
                      <div className="form-group row">
                        <div className="col-sm-6 mb-3 mb-sm-0">
                          <input
                            type="password"
                            className="form-control form-control-user"
                            id="inputPassword"
                            name="userPassword"
                            value={this.state.password}
                            placeholder="Password"
                            onChange={(event) => this.onChangeHandler(event)}
                          />
                        </div>
                        <div className="col-sm-6">
                          <input
                            type="password"
                            className="form-control form-control-user"
                            id="repeatPassword"
                            name="repeatPassword"
                            value={this.state.repeatPassword}
                            placeholder="Repeat Password"
                            onChange={(event) => this.onChangeHandler(event)}
                          />
                        </div>
                      </div>
                      <a
                        className="btn btn-primary btn-user btn-block"
                        onClick={(event) => {
                          this.createUserWithEmailAndPasswordHandler(
                            event,
                            this.state.email,
                            this.state.password
                          );
                        }}
                      >
                        Register Account
                      </a>
                      <hr />
                      <a
                        className="btn btn-google btn-user btn-block"
                        onClick={() => {
                          signInWithGoogle();
                        }}
                      >
                        <i className="fab fa-google fa-fw" /> Register with
                        Google
                      </a>
                      <a className="btn btn-facebook btn-user btn-block">
                        <i className="fab fa-facebook-f fa-fw" /> Register with
                        Facebook
                      </a>
                    </form>
                    <hr />
                    <div className="text-center">
                      <Link to="/forgot-password">Forgot Password?</Link>
                    </div>
                    <div className="text-center">
                      <Link to="/login"> Already have an account? Login!</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 export default SignUp;
