import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import store from "./store";
import { Button } from "reactstrap";
class ProjectDetail extends Component {
  constructor(props) {
    super(props);
    
  }
  
  setRedirect = () => {
    if(store.getState().userProfile.uid =="9uPZ1oMz3rUxNJfhxX3w8YzQfJt2")
    {
      this.state ={
        redirect :true
      }
    }
    else alert("ban khong phai thanh vein")
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/Tasks' />
    }
    
  }
  render () {
    return (
       <div>
        {this.renderRedirect()}
        <button onClick={this.setRedirect}>Redirect</button>
       </div>
    )
  }
  // projectTask=()=>{
  //   this.props.history.push('/Tasks')
  //   // return <Redirect to='/Tasks'  />
  //   // if(store.getState().userProfile.uid=="9uPZ1oMz3rUxNJfhxX3w8YzQfJt2")  
  //   // else alert("!23")
  // }
  // render() {
  //   return (
  //     <div className="project-detail">
  //       <div className="name-project-detail">
  //        {/* <Button color="link" onClick={this.projectTask}> Project1</Button> */}
          
  //       </div>
  //       <div className="status-project-detail">
  //         <div className={this.props.status} />
  //         <span>{this.props.statusText}</span>
  //       </div>
  //       <div className="process-project-detail">
  //         <div className="now-process" style={{ width: this.props.percent+"px" }}>{this.props.percent}%</div>
  //       </div>
  //       <div className="coures-project-detail">
  //         <span>INT2035</span>
  //       </div>
  //       <div className="start-project-detail">
  //         <span>13/1/2020</span>
  //       </div>
  //       <div className="deadline-project-detail">
  //         <span>21/6/2020</span>
  //       </div>
  //     </div>
  //   );
  // }
}

export default ProjectDetail;
