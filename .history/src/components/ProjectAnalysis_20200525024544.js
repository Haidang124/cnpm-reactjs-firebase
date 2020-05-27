import React, { Component } from "react";
import "./../css/project.css";
import "./../css/nav.css";
import Menu from "./Menu";
import ProjectDetail from "./ProjectDetail";
import Nav from "./Nav";
class ProjectAnalysis extends Component {
  render() {
    return (
      <div className="project-anlysis">
        <Menu />
        <div className="my-navbar">
          <Nav />
        </div>
      </div>
    );
  }
}

export default ProjectAnalysis;
