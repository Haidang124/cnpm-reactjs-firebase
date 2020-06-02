import React, { Component } from "react";
import "./../css/task.css";
// import "./../css/nav.css";
import Menu from "./Menu";
import Nav from "./Nav";
import { Card, Button } from "reactstrap";

class Mytask extends Component {
  render() {
    return (
      <div className="Mytask">
        <Menu />
        <div className="my-navbar">
          <Nav />
          <div className="row ml-3 mt-3 " >
            <div className="col-lg-4">
              <div class="card shadow mb-4 ">
                <div class="card-header py-3">
                  <h6 class="m-0 font-weight-bold text-primary"> Planned</h6>
                </div>
                <div class="card-body my-detail-task">
                  <div className="col mt-2">
                    <div class="card shadow">
                      <div class="card border-left-success shadow h-100 py-2">
                        <div class="card-body-task">
                          <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                              <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                Number Members
                              </div>
                              <div class="h5 mb-0 font-weight-bold text-gray-800">
                                0 Members
                              </div>
                            </div>
                            <div class="col-auto">
                              <i
                                class="fas fa-users fa-2x text-gray-300 ml-4 icon-task"
                                aria-hidden="true"
                              ></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col mt-2">
                    <div class="card shadow">
                      <div class="card border-left-success shadow h-100 py-2">
                        <div class="card-body-task">
                          <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                              <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                Number Members
                              </div>
                              <div class="h5 mb-0 font-weight-bold text-gray-800">
                                0 Members
                              </div>
                            </div>
                            <div class="col-auto">
                              <i
                                class="fas fa-users fa-2x text-gray-300 ml-4 icon-task"
                                aria-hidden="true"
                              ></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col mt-2">
                    <div class="card shadow">
                      <div class="card border-left-success shadow h-100 py-2">
                        <div class="card-body-task">
                          <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                              <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                Number Members
                              </div>
                              <div class="h5 mb-0 font-weight-bold text-gray-800">
                                0 Members
                              </div>
                            </div>
                            <div class="col-auto">
                              <i
                                class="fas fa-users fa-2x text-gray-300 ml-4 icon-task"
                                aria-hidden="true"
                              ></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                 



                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card shadow mb-4">
                <div class="card-header py-3">
                  <h6 class="m-0 font-weight-bold text-primary">In Progress</h6>
                </div>
                <div class="card-body my-detail-task">

                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="card shadow mb-4">
                <div class="card-header py-3">
                  <h6 class="m-0 font-weight-bold text-primary">Complete</h6>
                </div>
                <div class="card-body my-detail-task">
                <div className="col mt-2">

                    <div class="card shadow">
                      <div class="card border-left-success shadow h-100 py-2">
                        <div class="card-body-task">
                          <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                              <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                Number Members
                              </div>
                              <div class="h5 mb-0 font-weight-bold text-gray-800">
                                0 Members
                              </div>
                            </div>
                            <div class="col-auto">
                              <i
                                class="fas fa-users fa-2x text-gray-300 ml-4 icon-task"
                                aria-hidden="true"
                              ></i>
                            </div>
                          </div>
                        </div>
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

export default Mytask;
