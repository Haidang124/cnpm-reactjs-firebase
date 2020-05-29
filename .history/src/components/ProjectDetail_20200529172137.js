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
import { db } from "../firebaseConnect";
class ProjectDetail extends Component {
  constructor(props) {
    super(props);
    this.state ={
      process:[]
    }
  }
  
  componentDidMount() {
    db.collection("topics")
      .doc(this.props.codeCourses)
      .onSnapshot((doc) => {
       doc.data().topic.map((item,key)=>{
         if(item.keyTopic == this.props.keyProject)
         {
          this.setState({
            // allTask :doc.data().topic[this.props.match.params.key].alltaskProject,
            // completeTask: doc.data().topic[this.props.match.params.key].completeTaskProject,
            // members :doc.data().topic[this.props.match.params.key].member
            process: doc.data().topic[this.props.match.params.key].completeTaskProject.length / doc.data().topic[this.props.match.params.key].alltaskProject.length
          });
         }
       })
      });
  }
  render() {
    // alert(this.state.indexTopic)
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
            style={{ width: Math.ceil(7.004)+ "px" }}
          >
            {Math.ceil(7.004)}%
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
          {/* <Link to="Project-analysis">Analysis</Link> */}
          <Link
            to={
              "/Project-analysis/" +
              this.props.codeCourses +
              "." +
              this.props.indexTopic +
              ".html"
            }
          >
            Analysis
          </Link>
          <Link to="Chat">Chat</Link>
          <Link
            to={
              "/Members/" +
              this.props.codeCourses +
              "." +
              this.props.indexTopic +
              ".html"
            }
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
