import React, { Component } from "react";
import "./../css/task.css";
import Menu from "./Menu";
class Mytask extends Component {
  render() {
    return (
      <div className="Mytask">
        <Menu />
        <div className=""></div>
        {/* <div class="row row-task">
          <div class="col-4">
            <div class="card shadow mb-4">
              <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Planned </h6>
              </div>
              <div class="card-body"></div>
            </div>
          </div>
          <div class="col-4 column-task">
            <div class="card shadow mb-4">
              <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">
                  In Progress Task
                </h6>
              </div>
              <div class="card-body"></div>
            </div>
          </div>
          <div class="col-4">
            <div class="card shadow mb-4">
              <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Complete Task</h6>
              </div>
              <div class="card-body"></div>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}

export default Mytask;
