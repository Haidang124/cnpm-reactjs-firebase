import React, { Component } from "react";
import "./../css/task.css";
import Menu from "./Menu";
import Nav from "./Navbar";

class Mytask extends Component {
  render() {
    return (
      <div className="Mytask">
        <Menu />
        <Nav/>
      </div>
    );
  }
}

export default Mytask;
