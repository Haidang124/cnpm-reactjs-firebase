import React, { Component } from "react";
import "./../css/task.css";
import Menu from "./Menu";
import Nav from "./Nav";

class Mytask extends Component {
  render() {
    return (
      <div className="Mytask">
        <Menu />
        <div>
          <Nav />
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">
                Custom Text Color Utilities
              </h6>
            </div>
            <div class="card-body">
              <p class="text-gray-100 p-3 bg-dark m-0">.text-gray-100</p>
              <p class="text-gray-200 p-3 bg-dark m-0">.text-gray-200</p>
              <p class="text-gray-300 p-3 bg-dark m-0">.text-gray-300</p>
              <p class="text-gray-400 p-3 bg-dark m-0">.text-gray-400</p>
              <p class="text-gray-500 p-3 m-0">.text-gray-500</p>
              <p class="text-gray-600 p-3 m-0">.text-gray-600</p>
              <p class="text-gray-700 p-3 m-0">.text-gray-700</p>
              <p class="text-gray-800 p-3 m-0">.text-gray-800</p>
              <p class="text-gray-900 p-3 m-0">.text-gray-900</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Mytask;
