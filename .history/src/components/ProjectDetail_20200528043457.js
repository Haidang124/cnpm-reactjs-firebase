import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import store from "./store";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
  ButtonGroup,
} from "reactstrap";
class ProjectDetail extends Component {
  constructor(props) {
    super(props);
   this.setate={
    indexTopic:[],
   }
  }
  componentDidMount() {
    //get topic from database
    db.collection("topics")
      .doc(this.state.codeCourse)
      .onSnapshot((doc) => {
        if (typeof doc.data().topic !== "undefined") {
          this.setState({
            topic: doc.data().topic,
          });
        }
      });
  }
  render() {
    return (
      <div className="project-detail">
        <div className="name-project-detail">
          {/* <Link to="Project-tasks">Project 1</Link> */}
          {this.props.nameProject}
        </div>
        <div className="status-project-detail">
          <div className={this.props.status} />
          <span>{this.props.statusText}</span>
        </div>
        <div className="process-project-detail">
          <div
            className="now-process"
            style={{ width: this.props.percent + "px" }}
          >
            {this.props.percent}%
          </div>
        </div>
        <div className="coures-project-detail">
          <span>{this.props.codeCourses}</span>
        </div>
        <div className="start-project-detail">
          <span>13/1/2020</span>
        </div>
        <div className="deadline-project-detail">
          <span>{this.props.deadlineProject}</span>
        </div>
        <div className="link-function">
          <Link
            to={
              "/Project-tasks/" +
              this.props.codeCourses +
              "/" +
              this.props.keyProject +
              ".html"
            }
          >
            Tasks
          </Link>
          <Link to="Project-analysis">Analysis</Link>
          <Link to="Chat">Chat</Link>
            <Link
              to={"/Members/" + this.props.codeCourses + "." + 0 + ".html"}
            >
              Members
            </Link>
          {/*  "Project-tasks" onClick={()=>{alert(this.props.keyProject)}}*/}
        </div>
      </div>
    );
  }
}

export default ProjectDetail;
