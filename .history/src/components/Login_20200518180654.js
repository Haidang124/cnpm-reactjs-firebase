import React, { Component } from "react";
import { auth, db } from "../firebaseConnect";
import { signInWithGoogle } from "../firebaseConnect";
import { Link, Route, withRouter } from "react-router-dom";
import store from "./store";
import { connect } from "react-redux";
import "./../css/login.css";
import "./../css/reset.css";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: null,
    };
  }
 
  signInWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
       
      })
      .catch((error) => {
        this.setState({ error: "Error Signing in with email and password" });
        console.log(error);
        alert("Error signing in with password and email!");
      });
  };

  onChangeEmailHandler = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({
      email: value,
    });
  };
  onChangePassHandler = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ password: value });
  };
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Welcome UET !</h1>
                      </div>
                      <form className="user">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control form-control-user"
                            id="userEmail"
                            aria-describedby="emailHelp"
                            placeholder="Enter Email Address..."
                            onChange={(event) =>
                              this.onChangeEmailHandler(event)
                            }
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control form-control-user"
                            id="userPassword"
                            placeholder="Password"
                            onChange={(event) =>
                              this.onChangePassHandler(event)
                            }
                          />
                        </div>
                        <div className="form-group">
                          <div className="custom-control custom-checkbox small">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="customCheck"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="customCheck"
                            >
                              Remember Me
                            </label>
                          </div>
                        </div>
                        <a
                          className="btn btn-primary btn-user btn-block"
                          onClick={(event) => {
                            this.signInWithEmailAndPasswordHandler(
                              event,
                              this.state.email,
                              this.state.password
                            );
                          }}
                        >
                          Login
                        </a>
                        <hr />
                        <a
                          className="btn btn-google btn-user btn-block"
                          onClick={() => {
                            signInWithGoogle();
                          }}
                        >
                          <i className="fab fa-google fa-fw" /> Login with
                          Google
                        </a>
                        <a
                          className="btn btn-facebook btn-user btn-block"
                          onClick={() => {
                            // auth.signOut();
                          }}
                        >
                          <i className="fab fa-facebook-f fa-fw" /> Login with
                          Facebook
                        </a>
                      </form>
                      <hr />
                      <div className="text-center">
                        <Link to="/forgot-password">Forgot Password?</Link>
                      </div>
                      <div className="text-center">
                        <Link to="/register">Create an Account!</Link>
                      </div>
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
const mapStateToProps = (state, ownProps) => {
  return {};
};
const mapDispatchToProps = (dispatch, ownProps) =>  {
  return {
    getUser: () => {
      dispatch({
        type: "getUser",
      });
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
