import React, { Component } from "react";
import { Link } from "react-router-dom";
class ProjectDetail extends Component {
  render() {
    return (
      <div className="project-detail">
        <div className="name-project-detail">
         <Link {}> <span>Customer event</span></Link>
        </div>
        <div className="status-project-detail">
          <div className={this.props.status} />
          <span>{this.props.statusText}</span>
        </div>
        <div className="process-project-detail">
          <div className="now-process" style={{ width: this.props.percent+"px" }}>{this.props.percent}%</div>
        </div>
        <div className="coures-project-detail">
          <span>INT2035</span>
        </div>
        <div className="start-project-detail">
          <span>13/1/2020</span>
        </div>
        <div className="deadline-project-detail">
          <span>21/6/2020</span>
        </div>
      </div>
    );
  }
}

export default ProjectDetail;
