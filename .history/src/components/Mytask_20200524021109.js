import React, { Component } from "react";
import "./../css/task.css";
import Menu from "./Menu";
import Nav from "./Nav";

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