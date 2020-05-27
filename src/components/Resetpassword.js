import React, { Component } from "react";

class Resetpassword extends Component {
  render() {
    return (
      <div className="row justify-content-md-center">
        <div className="col-md-4">
          <div className="card border-primary">
            <div className="card-header bg-primary text-white">
              <h5 className="card-title">Login via Site</h5>
            </div>
            <div className="card-body">
              <form acceptCharset="UTF-8" role="form" action="#">
                <fieldset>
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="fa fa-lock" aria-hidden="true" />
                      </span>
                      <input
                        type="password"
                        placeholder="Current Password"
                        name="password"
                        className="form-control"
                        defaultValue
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i
                          className="fa fa-lock text-danger"
                          aria-hidden="true"
                        />
                      </span>
                      <input
                        type="password"
                        placeholder="New Password"
                        name="password"
                        className="form-control"
                        defaultValue
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i
                          className="fa fa-lock text-danger"
                          aria-hidden="true"
                        />
                      </span>
                      <input
                        type="password"
                        placeholder="Confirm New Password"
                        name="password"
                        className="form-control"
                        defaultValue
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <input
                        className="btn btn-lg btn-dark btn-block"
                        type="submit"
                        defaultValue="Reset Password"
                      />
                    </div>
                    <div className="col">
                      <a href="#" className="btn btn-lg btn-light btn-block">
                        Cancel
                      </a>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resetpassword;
