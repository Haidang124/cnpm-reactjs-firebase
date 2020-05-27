import React, { Component } from "react";
import "./../css/task.css";
import Menu from "./Menu";
import { Navbar } from "reactstrap";

class Mytask extends Component {
  render() {
    return (
      <div className="Mytask">
        <Menu />
        <Navbar/>
      </div>
    );
  }
}

export default Mytask;
