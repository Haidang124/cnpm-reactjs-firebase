import React, { Component } from "react";
import "./../css/task.css";
// import "./../css/nav.css";
import Menu from "./Menu";
import Nav from "./Nav";

class Mytask extends Component {
  render() {
    return (
      <div className="Mytask">
        <Menu />
        <div className="my-navbar">
          <Nav />
          <div className="row">
            <div className="col-lg-4">
              <div class="card shadow mb-4">
                <div class="card-header py-3">
                  <h6 class="m-0 font-weight-bold text-primary"> Planned</h6>
                </div>
                <div class="card-body"></div>
              </div>
            </div>
              <div class="col-lg-4">
                <div class="card shadow mb-4">
                  <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">
                      In Progress
                    </h6>
                    <div class="col-xl-4 col-lg-5">
              <div class="card shadow mb-4">
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 class="m-0 font-weight-bold text-primary">
                  Tasks Manager
                  </h6>
                  <div class="dropdown no-arrow">
                    <a
                      class="dropdown-toggle"
                      href="#"
                      role="button"
                      id="dropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                    </a>
                    <div
                      class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <div class="dropdown-header">Dropdown Header:</div>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </div>
                  </div>
                </div>

                <div class="card-body">
                  <div class="chart-pie pt-4 pb-2">
                    <ChartPie name="pie"/>
                  </div>
                  <div class="mt-4 text-center small">
                    <span class="mr-2">
                      <i class="fas fa-circle text-warning"></i> Planned
                    </span>
                    <span class="mr-2">
                      <i class="fas fa-circle text-success"></i> Complete
                    </span>
                    <span class="mr-2">
                      <i class="fas fa-circle text-info"></i> In Progress
                    </span>
                  </div>
                </div>
              </div>
            </div>
                  </div>
                  <div class="card-body"></div>
                </div>
              </div>
            <div class="col-lg-4">
              <div class="card shadow mb-4">
                <div class="card-header py-3">
                  <h6 class="m-0 font-weight-bold text-primary">
                    Complete
                  </h6>
                </div>
                <div class="card-body"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Mytask;
