import React, { Component } from "react";
import "./../css/anlysis.css";
import "./../css/nav.css";
import Menu from "./Menu";
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
