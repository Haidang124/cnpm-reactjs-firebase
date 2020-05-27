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
          <div className="row"></div>
        </div>
      </div>
    );
  }
}

export default Mytask;
