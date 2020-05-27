import React, { Component } from "react";
import "./../css/projecttask.css";
import "./../css/nav.css";
import Menu from "./Menu";
import ProjectDetail from "./ProjectDetail";
import Nav from "./Nav";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
} from "reactstrap";
import { Link } from "react-router-dom";
import { db } from "../firebaseConnect";
class ProjectTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenModal: false,
      alltaskProject:[],
    };
  }

  openModal = () => {
    this.setState({
      isOpenModal: !this.state.isOpenModal,
    });
  };
  componentDidMount() {
   
    db.collection("topics")
    .doc(this.props.match.params.codeCourses)
    .onSnapshot((doc) => {
      doc.data().map((item,key)=>{
        if(item.keyTopic == this.props.match.params.keyProject)
        {
          this.setState({
            alltaskProject: doc.data().alltaskProject,
          });
        }
      })
    });
}
  render() {
    // alert(this.props.match.params.codeCourses)
    return (
      <div className="project-task">
        <Menu />
        <div className="my-navbar">
          <Nav />
          <div className="container-project-task">
            <div className="all-project-task">
              <Button
                color="primary"
                className="add-project-task"
                onClick={this.openModal}
              >
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
            {this.state.alltaskProject ? this.state.alltaskProject.map(()=>(<div className="project-detail">
              <div></div>
              <div>editPost</div>
              <div>
                Thêm chức năng chỉnh sửa bài viết trong component Course
              </div>
              <div>Nhóm trưởng</div>
              <div className="worker-task">
                <img
                  src="https://randomuser.me/api/portraits/men/44.jpg"
                  className="avatar"
                />
                <span>Hải Đăng</span>
              </div>
              <div>
                <input type="checkbox" className="status-checkbox" />
              </div>
              <div>30/5/2020</div>
              <div>
                <Link to="/">Upload</Link>
              </div>
            </div>)):(<p></p>)}
            
            {/*<div className="project-detail">
              <div>1</div>
              <div>editPost</div>
              <div>
                Thêm chức năng chỉnh sửa bài viết trong component Course
              </div>
              <div>Nhóm trưởng</div>
              <div className="worker-task">
                <img
                  src="https://randomuser.me/api/portraits/men/44.jpg"
                  className="avatar"
                />
                <span>Hải Đăng</span>
              </div>
              <div>
                <input type="checkbox" className="status-checkbox" />
              </div>
              <div>30/5/2020</div>
              <div>
                <Link to="/">Upload</Link>
              </div>
            </div>
            <div className="project-detail">
              <div>1</div>
              <div>editPost</div>
              <div>
                Thêm chức năng chỉnh sửa bài viết trong component Course
              </div>
              <div>Nhóm trưởng</div>
              <div className="worker-task">
                <img
                  src="https://randomuser.me/api/portraits/men/44.jpg"
                  className="avatar"
                />
                <span>Hải Đăng</span>
              </div>
              <div>
                <input type="checkbox" className="status-checkbox" />
              </div>
              <div>30/5/2020</div>
              <div>
                <Link to="/">Upload</Link>
              </div>
            </div>
            <div className="project-detail">
              <div>1</div>
              <div>editPost</div>
              <div>
                Thêm chức năng chỉnh sửa bài viết trong component Course
              </div>
              <div>Nhóm trưởng</div>
              <div className="worker-task">
                <img
                  src="https://randomuser.me/api/portraits/men/44.jpg"
                  className="avatar"
                />
                <span>Hải Đăng</span>
              </div>
              <div>
                <input type="checkbox" className="status-checkbox" />
              </div>
              <div>30/5/2020</div>
              <div>
                <Link to="/">Upload</Link>
              </div>
            </div>
          */}
          </div>
        </div>
        <Modal isOpen={this.state.isOpenModal} className="modal-create-toptic">
          <ModalHeader>Thêm Đề Tài</ModalHeader>
          <ModalBody>
            <Table>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tên công việc</th>
                  <th>Mô tả</th>
                  <th>Người tạo</th>
                  <th>Người thực hiện</th>
                  <th>Hạn nộp</th>
                  {/* <th>Chức Năng</th> */}
                </tr>
                <tr>
                  <th></th>
                  <th>
                    <input
                      type="text"
                      placeholder="Tên công việc"
                      className="input-modal"
                      id="name-topic"
                    />
                  </th>
                  <th>
                    <input
                      type="text"
                      placeholder="Mô tả"
                      className="input-modal"
                      id="name-topic"
                    />
                  </th>
                  <th>
                    {/* <input
                      type="text"
                      placeholder="Người Tạo"
                      className="input-modal"
                      id="creator-topic"
                    /> */}
                    <select className="input-modal">
                      <option value="Nhóm trưởng">Nhóm trưởng</option>
                      <option value="Giáo viên">Giáo viên</option>
                    </select>
                  </th>
                  <th>
                    {/* <input
                      type="text"
                      placeholder="Người thực hiện"
                      className="input-modal"
                      id="number-topic"
                    /> */}
                    <select className="input-modal">
                      <option value="volvo">Hải Đăng</option>
                      <option value="saab">Nguyễn Hoàng</option>
                      <option value="mercedes">Tiến Đạt</option>
                      <option value="audi">Quang Tài</option>
                    </select>
                  </th>
                  <th>
                    <input
                      type="text"
                      placeholder="Hạn Nộp"
                      className="input-modal"
                      id="time-topic"
                    />
                  </th>
                </tr>
              </thead>
              <tbody></tbody>
            </Table>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.openModal}>
              Save changes
            </Button>
          </ModalFooter>
        </Modal>
        {/* <Modal isOpen={this.state.isOpenModal} className="modal-add-task">
          <ModalHeader>Thêm Công Việc Mới</ModalHeader>
          <ModalBody>
            <input
              type="text"
              placeholder="Nhập tên công việc"
            />
             
            <textarea
              defaultValue={this.props.contentPost}
              id="addtask-TextArea"
              placeholder="Mô tả công việc"
            />
          </ModalBody>
          <ModalFooter>
            <Button color="primary"  onClick={this.openModal}> Save changes</Button>
            <Button color="secondary" onClick={this.openModal}>Close</Button>
          </ModalFooter>
        </Modal> */}
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
