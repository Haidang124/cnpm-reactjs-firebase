import React, { Component } from "react";
import "./../css/project.css";
import Menu from "./Menu";
import ProjectDetail from "./ProjectDetail";

class Project extends Component {
  render() {
    return (
      <div className="project">
           <Menu/>
          <div class="row">
        <div class="col-lg-4">
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">
              Planned
              </h6>
            </div>
            <div class="card-body">
              
            </div>
          </div>

          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">
                Custom Font Size Utilities
              </h6>
            </div>
            <div class="card-body">
              
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">
                Custom Background Gradient Utilities
              </h6>
            </div>
            <div class="card-body">
             
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">
                Custom Grayscale Background Utilities
              </h6>
            </div>
            <div class="card-body">
             
            </div>
          </div>
        </div>
      </div>
      </div>
      // <div className="project">
      //     <Menu/>
      // <div className="container-project">
      //   <div className="all-project">
      //     <i className="fab fa-affiliatetheme" />
      //     <div className="right-all-project">
      //       <span className="name-project">Manager My Project</span>
      //       <div className="Selection">
      //         <span>Projects</span>
      //         <span>Workload</span>
      //       </div>
      //     </div>
      //   </div>
      //   <hr />
      //   <div className="title-project">
      //     <button className="btn-add-project">Add Project</button>
      //     <span className="status">Status</span>
      //     <span className="process">Process</span>
      //     <span className="course">Course</span>
      //     <span className="start">Start</span>
      //     <span className="dates">Deadline</span>
      //   </div>
      //   <ProjectDetail statusText ="In Progress" status="status-active" percent="30"/>
      //   <ProjectDetail statusText ="Complete" status="status-complete" percent="100"/>
      //   <ProjectDetail statusText ="In Progress" status="status-active" percent="0"/>
      /* <div className="project-detail">
                <div className="name-project-detail">
                  <span>Customer event</span>
                </div>
                <div className="status-project-detail">
                  <div className="status-active" />
                  <span>In Progress</span>
                </div>
                <div className="process-project-detail">
                  <div className="now-process">60%</div>
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
              <div className="project-detail">
                <div className="name-project-detail">
                  <span>Customer event</span>
                </div>
                <div className="status-project-detail">
                  <div className="status-complete" />
                  <span>Complete</span>
                </div>
                <div className="process-project-detail">
                  <div className="now-process">60%</div>
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
              <div className="project-detail">
                <div className="name-project-detail">
                  <span>Customer event</span>
                </div>
                <div className="status-project-detail">
                  <div className="status-planned" />
                  <span>Planned </span>
                </div>
                <div className="process-project-detail">
                  <div className="now-process">60%</div>
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
              </div> */
      //     </div>
      //   </div>
    );
  }
}

export default Project;
