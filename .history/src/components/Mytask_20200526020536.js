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
