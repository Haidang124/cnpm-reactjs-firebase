import React, { Component } from "react";
import "./../css/projecttask.css";
import "./../css/nav.css";
import Menu from "./Menu";
import ProjectDetail from "./ProjectDetail";
import Nav from "./Nav";
import { v4 as uuidv4 } from "uuid";
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
      alltaskProject: [],
      fulldataTopic: [],
      indexTopic: [],
      member:[],
    };
  }

  openModal = () => {
    this.setState({
      isOpenModal: !this.state.isOpenModal,
    });
  };
  addTaskProject = () => {
    this.openModal();
    var nametask = document.getElementById("name-task").value;
    var description = document.getElementById("description-task").value;
    var creator = document.getElementById("creator-task");
    var valueCreator = creator.options[creator.selectedIndex].value;
    var executor = document.getElementById("executor-task");
    var valueExecutor = executor.options[executor.selectedIndex].value;
    var status = document.getElementById("status-task");
    var valuestatus = status.options[status.selectedIndex].value;
    var deadlineTask = document.getElementById("deadline-task").value;
    var keyTask = uuidv4();
    if(nametask !== "" && description !== "" && valueExecutor !== "" && valueCreator !== "" && executor !== "" &&  deadlineTask !=="")
    {
      var newTask = {
        nametask: nametask,
        description: description,
        creator: valueCreator,
        deadlineTask: deadlineTask,
        keyTask: keyTask,
        executor: valueExecutor,
        status:valuestatus
      };
      this.state.fulldataTopic[this.state.indexTopic].alltaskProject.push(
        newTask
      );
      if(valuestatus =="Dự định")
      document.getElementById("deadline-task").value = "";
      document.getElementById("description-task").value = "";
      document.getElementById("name-task").value = "";
      var newdata = {
        topic: this.state.fulldataTopic,
      };
      db.collection("topics")
        .doc(this.props.match.params.codeCourses)
        .update(newdata);
    }
    else alert("Vui lòng nhập đủ thông tin");
  };
  componentDidMount() {
    db.collection("topics")
      .doc(this.props.match.params.codeCourses)
      .onSnapshot((doc) => {
        doc.data().topic.map((item, key) => {
          if (item.keyTopic == this.props.match.params.keyProject) {
            this.setState({
              alltaskProject: doc.data().topic[key].alltaskProject,
              fulldataTopic: doc.data().topic,
              indexTopic: key,
              member:doc.data().topic[key].member
            });
          }
        });
      });
  }
  render() {
    // alert(this.props.match.params.codeCourses)
    return (
      <div className="project-task">
        <Menu />
        <div>
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
              <span className="status">Trạng Thái</span>
              <span className="dates">Hạn Nộp</span>
              <span></span>
            </div>
            {this.state.alltaskProject ? (
              this.state.alltaskProject.map((item, key) => (
                <div className="project-detail">
                  <div>{key+1}</div>
                  <div>{item.nametask}</div>
                  <div>{item.description}</div>
                  <div>{item.creator}</div>
                  <div className="worker-task">
                    <img
                      src="https://randomuser.me/api/portraits/men/44.jpg"
                      className="avatar"
                    />
                    <span>{item.executor}</span>
                  </div>
                  <div>
                    <input type="checkbox" className="status-checkbox" />
                  </div>
                  <div>{item.deadlineTask}</div>
                  <div>
                    <Link to="/">Upload</Link>
                  </div>
                </div>
              ))
            ) : (
              <p></p>
            )}
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
                  <th>Trạng thái</th>
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
                      id="name-task"
                    />
                  </th>
                  <th>
                    <input
                      type="text"
                      placeholder="Mô tả"
                      className="input-modal"
                      id="description-task"
                    />
                  </th>
                  <th>
                    <select className="input-modal" id="creator-task">
                      <option value="Nhóm trưởng">Nhóm trưởng</option>
                      <option value="Giáo viên">Giáo viên</option>
                    </select>
                  </th>
                  <th>
                    <select className="input-modal" id="executor-task">
                      {/* <option value="Hải Đăng">Hải Đăng</option>
                      <option value="Nguyễn Hoàng">Nguyễn Hoàng</option>
                      <option value="Tiến Đạt">Tiến Đạt</option>
                      <option value="Quang Tài">Quang Tài</option> */}
                      {this.state.member.map((item,key)=>
                         <option value={item.user}>{item.user}</option>
                      )}
                    </select>
                  </th>
                  <th>
                  <select className="input-modal" id="status-task">
                      <option value="Planned">Dự định</option>
                      <option value="Process">Đang thực hiện</option> */}
                    </select>
                  </th>
                  <th>
                    <input
                      type="text"
                      placeholder="Hạn Nộp"
                      className="input-modal"
                      id="deadline-task"
                    />
                  </th>
                </tr>
              </thead>
              <tbody></tbody>
            </Table>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.addTaskProject}>
              Save changes
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ProjectTask;
