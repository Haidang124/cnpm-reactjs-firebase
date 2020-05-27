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
  // constructor(props) {
  //   super(props);
  //   this.state= {
  //     redirect :false
  //   }
  // }

  // setRedirect = () => {
  //   if(store.getState().userProfile.uid =="9uPZ1oMz3rUxNJfhxX3w8YzQfJt2")
  //   {
  //     this.setState({
  //       redirect :true
  //     })

  //   }
  //   else alert("ban khong phai thanh vein")
  // }
  // renderRedirect = () => {
  //   if (this.state.redirect) {
  //     return <Redirect to='/Tasks' />
  //   }

  // }
  // render () {
  //   return (
  //      <div>
  //       {this.renderRedirect()}
  //       <Button color="link" onClick={this.setRedirect}>Redirect</Button>
  //      </div>
  //   )
  // }
  /* <div>
        {this.renderRedirect()}
        <Button color="link" onClick={this.setRedirect}>Redirect</Button>
       </div> */
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
          <span>INT2035</span>
        </div>
        <div className="start-project-detail">
          <span>13/1/2020</span>
        </div>
        <div className="deadline-project-detail">
          <span>21/6/2020</span>
        </div>
        <div className="link-function">
              <Link to="Project-tasks">Tasks</Link>
              <Link >Analysis</Link>
              <Link to="Chat">Chat</Link>
              <Link to="Project-out">Out</Link>
               {/*to="Project-analysis"*/}
        </div>
      </div>
    );
  }
}

export default ProjectDetail;
