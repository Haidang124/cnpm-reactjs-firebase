import React, { Component } from "react";
import "./../css/projecttask.css";
import "./../css/nav.css";
import Menu from "./Menu";
import ProjectDetail from "./ProjectDetail";
import Nav from "./Nav";
import { Button, ButtonGroup } from "reactstrap";
import { Link } from "react-router-dom";
class ProjectTask extends Component {
  render() {
    return (
      <div className="project-task">
        <Menu />
        <div className="my-navbar">
          <Nav />
          <div className="container-project-task">
            <div className="all-project-task">
              <Button color="primary" className="add-project-task">
                + Add Task
              </Button>
              <span className="name-project-task">Danh Sách Công Việc</span>
              <div></div>
            </div>
            <hr />
            <div className="title-project-task">
              <span className="stt">STT</span>
              <span className="name">Tên</span>
              <span className="status">Mô Tả</span>
              <span className="process">Người Tạo</span>
              <span className="course">Người Thực Hiện</span>
              <span className="start">Trạng Thái</span>
              <span className="dates">Hạn Nộp</span>
              <span></span>
            </div>
            <div className="project-detail">
              <div>1</div>
              <div>editPost</div>
              <div>
                Thêm chức năng chỉnh sửa bài viết trong component Course
              </div>
              <div>Nhóm trưởng</div>
              <div>Hải Đăng</div>
              <div>
                <input type="checkbox" className="status-checkbox" />
              </div>
              <div>30/5/2020</div>
              <div>
                <a
                {/* <ButtonGroup>
                  <Button color="link">More</Button>
                  <Button color="link">Member</Button>
                  <Button color="link">Edit</Button>
                </ButtonGroup> */}
              </div>
            </div>
            <div className="project-detail">
              <div>1</div>
              <div>editPost</div>
              <div>
                Thêm chức năng chỉnh sửa bài viết trong component Course
              </div>
              <div>Nhóm trưởng</div>
              <div>Hải Đăng</div>
              <div>
                <input type="checkbox" className="status-checkbox" />
              </div>
              <div>30/5/2020</div>
            </div>
            <div className="project-detail">
              <div>1</div>
              <div>editPost</div>
              <div>
                Thêm chức năng chỉnh sửa bài viết trong component Course
              </div>
              <div>Nhóm trưởng</div>
              <div>Hải Đăng</div>
              <div>
                <input type="checkbox" className="status-checkbox" />
              </div>
              <div>30/5/2020</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectTask;
/*import React, { Component } from "react";
import "./../css/project.css";
import "./../css/nav.css";
import Menu from "./Menu";
import ProjectDetail from "./ProjectDetail";
import Nav from "./Nav";

class Project extends Component {
  render() {
    return (
      <div className="project">
        <Menu />
        <div className="my-navbar">
          <Nav/>
        <div className="container-project">
          <div className="all-project">
            <i className="fab fa-affiliatetheme" />
            <div className="right-all-project">
              <span className="name-project">Manager My Project</span>
              <div className="Selection">
                <span>Projects</span>
                <span>Workload</span>
              </div>
            </div>
          </div>
          <hr />
          <div className="title-project">
            <button className="btn-add-project">Add Project</button>
            <span className="status">Status</span>
            <span className="process">Process</span>
            <span className="course">Course</span>
            <span className="start">Start</span>
            <span className="dates">Deadline</span>
          </div>
          <ProjectDetail
            statusText="In Progress"
            status="status-active"
            percent="30"
          />
          <ProjectDetail
            statusText="Complete"
            status="status-complete"
            percent="100"
          />
          <ProjectDetail
            statusText="In Progress"
            status="status-active"
            percent="0"
          />
        </div>
        </div>
      </div>
    );
  }
}

export default Project;
 */
