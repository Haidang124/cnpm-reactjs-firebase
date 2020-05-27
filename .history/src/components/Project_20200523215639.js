import React, { Component } from 'react';
import "./../css/project.css";
import Menu from './Menu';
import ProjectDetail from './ProjectDetail';

class Project extends Component {
    render() {
        return (
            <div class="row">

       
        <div class="col-lg-4">

          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Custom Text Color Utilities</h6>
            </div>
            <div class="card-body">
              <p class="text-gray-100 p-3 bg-dark m-0">.text-gray-100</p>
              <p class="text-gray-200 p-3 bg-dark m-0">.text-gray-200</p>
              <p class="text-gray-300 p-3 bg-dark m-0">.text-gray-300</p>
              <p class="text-gray-400 p-3 bg-dark m-0">.text-gray-400</p>
              <p class="text-gray-500 p-3 m-0">.text-gray-500</p>
              <p class="text-gray-600 p-3 m-0">.text-gray-600</p>
              <p class="text-gray-700 p-3 m-0">.text-gray-700</p>
              <p class="text-gray-800 p-3 m-0">.text-gray-800</p>
              <p class="text-gray-900 p-3 m-0">.text-gray-900</p>
            </div>
          </div>

          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Custom Font Size Utilities</h6>
            </div>
            <div class="card-body">
              <p class="text-xs">.text-xs</p>
              <p class="text-lg mb-0">.text-lg</p>
            </div>
          </div>

        </div>

        <div class="col-lg-4">

          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Custom Background Gradient Utilities</h6>
            </div>
            <div class="card-body">
              <div class="px-3 py-5 bg-gradient-primary text-white">.bg-gradient-primary</div>
              <div class="px-3 py-5 bg-gradient-success text-white">.bg-gradient-success</div>
              <div class="px-3 py-5 bg-gradient-info text-white">.bg-gradient-info</div>
              <div class="px-3 py-5 bg-gradient-warning text-white">.bg-gradient-warning</div>
              <div class="px-3 py-5 bg-gradient-danger text-white">.bg-gradient-danger</div>
            </div>
          </div>

        </div>
        <!-- Third Column -->
        <div class="col-lg-4">

          <!-- Grayscale Utilities -->
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Custom Grayscale Background Utilities</h6>
            </div>
            <div class="card-body">
              <div class="p-3 bg-gray-100">.bg-gray-100</div>
              <div class="p-3 bg-gray-200">.bg-gray-200</div>
              <div class="p-3 bg-gray-300">.bg-gray-300</div>
              <div class="p-3 bg-gray-400">.bg-gray-400</div>
              <div class="p-3 bg-gray-500 text-white">.bg-gray-500</div>
              <div class="p-3 bg-gray-600 text-white">.bg-gray-600</div>
              <div class="p-3 bg-gray-700 text-white">.bg-gray-700</div>
              <div class="p-3 bg-gray-800 text-white">.bg-gray-800</div>
              <div class="p-3 bg-gray-900 text-white">.bg-gray-900</div>
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
              {/* <div className="project-detail">
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
              </div> */}
        //     </div>
        //   </div>

        
        )
    }
}

export default Project
