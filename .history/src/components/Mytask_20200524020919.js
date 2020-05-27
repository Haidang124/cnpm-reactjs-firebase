import React, { Component } from "react";
import "./../css/task.css";
import Menu from "./Menu";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
class Mytask extends Component {
  render() {
    return (
      <div className="Mytask">
        <Menu />
        
      </div>
    );
  }
}

export default Mytask;
