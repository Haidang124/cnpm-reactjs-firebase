import React, { Component } from "react";
import "./../css/profile.css";

import Menu from "./Menu";
import Nav from "./Nav";

class Profile extends Component {
  render() {
    return (
      <div className="edit-profile">
        <Menu />
        <div className="my-navbar">
          <Nav />
          <div className="row">
            <div className="col-md-4">
              <div className="card card-user">
                <div className="image">
                  <img src="https://unsplash.it/1080/720?image=376" alt="..." />
                </div>
                <div className="card-body">
                  <div className="author">
                    <a href="#">
                      <img
                        className="avatar border-gray"
                        src="https://randomuser.me/api/portraits/men/44.jpg"
                        alt="..."
                      />
                      <h5 className="title">Chet Faker</h5>
                    </a>
                    <p className="description">@chetfaker</p>
                  </div>
                  <p className="description text-center">
                    "I like the way you work it <br />
                    No diggity <br />I wanna bag it up"
                  </p>
                </div>
                <div className="card-footer">
                  <hr />
                  <div className="button-container">
                    <div className="row">
                      <div className="col-lg-3 col-md-6 col-6 ml-auto">
                        <h5 className="text-footer-profile">
                          12<span>Files</span>
                        </h5>
                      </div>
                      <div className="col-lg-4 col-md-6 col-6 ml-auto mr-auto">
                        <h5 className="text-footer-profile">
                          4<span>Courses</span>
                        </h5>
                      </div>
                      <div className="col-lg-3 mr-auto">
                        <h5 className="text-footer-profile">
                          12<span>Files</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="card">
      <div className="card-header">
        <h4 className="card-title">Team Members</h4>
      </div>
      <div className="card-body">
        <ul className="list-unstyled team-members">
          <li>
            <div className="row">
              <div className="col-md-2 col-2">
                <div className="avatar">
                  <img src="../assets/img/faces/ayo-ogunseinde-2.jpg" alt="Circle Image" className="img-circle img-no-padding img-responsive" />
                </div>
              </div>
              <div className="col-md-7 col-7">
                DJ Khaled
                <br />
                <span className="text-muted"><small>Offline</small></span>
              </div>
              <div className="col-md-3 col-3 text-right">
                <btn className="btn btn-sm btn-outline-success btn-round btn-icon"><i className="fa fa-envelope" /></btn>
              </div>
            </div>
          </li>
          <li>
            <div className="row">
              <div className="col-md-2 col-2">
                <div className="avatar">
                  <img src="../assets/img/faces/joe-gardner-2.jpg" alt="Circle Image" className="img-circle img-no-padding img-responsive" />
                </div>
              </div>
              <div className="col-md-7 col-7">
                Creative Tim
                <br />
                <span className="text-success"><small>Available</small></span>
              </div>
              <div className="col-md-3 col-3 text-right">
                <btn className="btn btn-sm btn-outline-success btn-round btn-icon"><i className="fa fa-envelope" /></btn>
              </div>
            </div>
          </li>
          <li>
            <div className="row">
              <div className="col-md-2 col-2">
                <div className="avatar">
                  <img src="../assets/img/faces/clem-onojeghuo-2.jpg" alt="Circle Image" className="img-circle img-no-padding img-responsive" />
                </div>
              </div>
              <div className="col-ms-7 col-7">
                Flume
                <br />
                <span className="text-danger"><small>Busy</small></span>
              </div>
              <div className="col-md-3 col-3 text-right">
                <btn className="btn btn-sm btn-outline-success btn-round btn-icon"><i className="fa fa-envelope" /></btn>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div> */}
            </div>
            <div className="col-md-8">
              <div className="card card-user">
                <div className="card-header">
                  <h5 className="card-title">Edit Profile</h5>
                </div>
                <div className="card-body">
                  <form>
                    <div className="row">
                      <div className="col-md-5 pr-1">
                        <div className="form-group">
                          <label>Company (disabled)</label>
                          <input
                            type="text"
                            className="form-control"
                            disabled
                            placeholder="Company"
                            defaultValue="Creative Code Inc."
                          />
                        </div>
                      </div>
                      <div className="col-md-3 px-1">
                        <div className="form-group">
                          <label>Username</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            defaultValue="michael23"
                          />
                        </div>
                      </div>
                      <div className="col-md-4 pl-1">
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">
                            Email address
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 pr-1">
                        <div className="form-group">
                          <label>First Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Company"
                            defaultValue="Chet"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 pl-1">
                        <div className="form-group">
                          <label>Last Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Last Name"
                            defaultValue="Faker"
                          />
                        </div>
                      </div>
                    </div>
                    {/* <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label>Address</label>
                <input type="text" className="form-control" placeholder="Home Address" defaultValue="Melbourne, Australia" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 pr-1">
              <div className="form-group">
                <label>City</label>
                <input type="text" className="form-control" placeholder="City" defaultValue="Melbourne" />
              </div>
            </div>
            <div className="col-md-4 px-1">
              <div className="form-group">
                <label>Country</label>
                <input type="text" className="form-control" placeholder="Country" defaultValue="Australia" />
              </div>
            </div>
            <div className="col-md-4 pl-1">
              <div className="form-group">
                <label>Postal Code</label>
                <input type="number" className="form-control" placeholder="ZIP Code" />
              </div>
            </div>
          </div> */}
                    {/* <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label>About Me</label>
                <textarea className="form-control textarea" defaultValue={"Oh so, your weak rhyme You doubt I'll bother, reading into it"} />
              </div>
            </div>
          </div> */}
                    <div className="row">
                      <div className="update ml-auto mr-auto">
                        <button
                          type="submit"
                          className="btn btn-primary btn-round"
                        >
                          Update Profile
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="container">
          <div className="row flex-lg-nowrap">
            <div className="col">
              <div className="row">
                <div className="col mb-3">
                  <div className="card">
                    <div className="card-body">
                      <div className="e-profile">
                        <div className="row">
                          <div className="col-12 col-sm-auto mb-3">
                            <div className="mx-auto" style={{ width: "140px" }}>
                              <div
                                className="d-flex justify-content-center align-items-center rounded"
                                style={{
                                  height: "140px",
                                  backgroundColor: "rgb(233, 236, 239)",
                                }}
                              >
                                <span
                                  style={{
                                    color: "rgb(166, 168, 170)",
                                    font: "bold 8pt Arial",
                                  }}
                                >
                                  140x140
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                            <div className="text-center text-sm-left mb-2 mb-sm-0">
                              <h4 className="pt-sm-2 pb-1 mb-0 text-nowrap">
                                John Smith
                              </h4>
                              <p className="mb-0">@johnny.s</p>
                              <div className="text-muted">
                                <small>Last seen 2 hours ago</small>
                              </div>
                              <div className="mt-2">
                                <button
                                  className="btn btn-primary"
                                  type="button"
                                >
                                  <i className="fa fa-fw fa-camera" />
                                  <span>Change Photo</span>
                                </button>
                              </div>
                            </div>
                            <div className="text-center text-sm-right">
                              <span className="badge badge-secondary">
                                administrator
                              </span>
                              <div className="text-muted">
                                <small>Joined 09 Dec 2017</small>
                              </div>
                            </div>
                          </div>
                        </div>
                        <ul className="nav nav-tabs">
                          <li className="nav-item">
                            <a href className="active nav-link">
                              Settings
                            </a>
                          </li>
                        </ul>
                        <div className="tab-content pt-3">
                          <div className="tab-pane active">
                            <form className="form" noValidate>
                              <div className="row">
                                <div className="col">
                                  <div className="row">
                                    <div className="col">
                                      <div className="form-group">
                                        <label>Full Name</label>
                                        <input
                                          className="form-control"
                                          type="text"
                                          name="name"
                                          placeholder="John Smith"
                                          defaultValue="John Smith"
                                        />
                                      </div>
                                    </div>
                                    <div className="col">
                                      <div className="form-group">
                                        <label>Username</label>
                                        <input
                                          className="form-control"
                                          type="text"
                                          name="username"
                                          placeholder="johnny.s"
                                          defaultValue="johnny.s"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col">
                                      <div className="form-group">
                                        <label>Email</label>
                                        <input
                                          className="form-control"
                                          type="text"
                                          placeholder="user@example.com"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col mb-3">
                                      <div className="form-group">
                                        <label>About</label>
                                        <textarea
                                          className="form-control"
                                          rows={5}
                                          placeholder="My Bio"
                                          defaultValue={""}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-12 col-sm-6 mb-3">
                                  <div className="mb-2">
                                    <b>Change Password</b>
                                  </div>
                                  <div className="row">
                                    <div className="col">
                                      <div className="form-group">
                                        <label>Current Password</label>
                                        <input
                                          className="form-control"
                                          type="password"
                                          placeholder="••••••"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col">
                                      <div className="form-group">
                                        <label>New Password</label>
                                        <input
                                          className="form-control"
                                          type="password"
                                          placeholder="••••••"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col">
                                      <div className="form-group">
                                        <label>
                                          Confirm{" "}
                                          <span className="d-none d-xl-inline">
                                            Password
                                          </span>
                                        </label>
                                        <input
                                          className="form-control"
                                          type="password"
                                          placeholder="••••••"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12 col-sm-5 offset-sm-1 mb-3">
                                  <div className="mb-2">
                                    <b>Keeping in Touch</b>
                                  </div>
                                  <div className="row">
                                    <div className="col">
                                      <label>Email Notifications</label>
                                      <div className="custom-controls-stacked px-2">
                                        <div className="custom-control custom-checkbox">
                                          <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="notifications-blog"
                                            defaultChecked
                                          />
                                          <label
                                            className="custom-control-label"
                                            htmlFor="notifications-blog"
                                          >
                                            Blog posts
                                          </label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                          <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="notifications-news"
                                            defaultChecked
                                          />
                                          <label
                                            className="custom-control-label"
                                            htmlFor="notifications-news"
                                          >
                                            Newsletter
                                          </label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                          <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="notifications-offers"
                                            defaultChecked
                                          />
                                          <label
                                            className="custom-control-label"
                                            htmlFor="notifications-offers"
                                          >
                                            Personal Offers
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col d-flex justify-content-end">
                                  <button
                                    className="btn btn-primary"
                                    type="submit"
                                  >
                                    Save Changes
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        </div>
      </div>
    );
  }
}

export default Profile;
