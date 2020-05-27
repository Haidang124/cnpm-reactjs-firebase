import React, { Component } from "react";
import "./../css/project.css";
import Menu from "./Menu";
import ProjectDetail from "./ProjectDetail";

class Project extends Component {
  render() {
    return (
      <div className="project">
        <Menu />
        <div className="my-navbar"></div>
      </div>
    );
  }
}

export default Project;
