import React, { Component } from "react";
import "./../css/member.css";
import "./../css/reset.css";
import Menu from "./Menu";
import User from "./User";

class Member extends Component {
    // constructor(props) {
    //     super(props);
        
    // }
    // showForm = () =>
    // {
    //     var itemform = document.getElementById("input-database");
    //     itemform.style.display = "flex";
    // }
    // hideForm = () =>
    // {
      
    // }
    // addMember = () =>
    // {
    //   alert("da them thanh vien")
    // }
  render() {
    return (
      <div className="container-member">
        <Menu />
        <div className="container-right">
          <div className="right-top">
            <h3>
              {/* Create Team: <span>Group 7</span> */}
              Tên Đề Tài : <span>Quản Lý Bài Tập Nhóm</span>
            </h3>
            <div className="member">
              <div className="member-avatars">
                <span className="avatar">
                  <img
                    src="https://randomuser.me/api/portraits/men/44.jpg"
                    className="avatar"
                    alt=""
                  />
                </span>
                <span className="avatar">
                  <img
                    src="https://randomuser.me/api/portraits/men/97.jpg"
                    className="avatar"
                    alt=""
                  />
                </span>
                <span className="avatar">
                  <img
                    src="https://randomuser.me/api/portraits/men/13.jpg"
                    className="avatar"
                    alt=""
                  />
                </span>
                <div className="number-member">
                  <span>+2</span>
                </div>
              </div>
              {/* <button onClick={this.showForm}>+ Invite Users</button> */}
            </div>
          </div>
          <div className="right-bottom">
            <div className="search-info">
              <span>User Infomation</span>
              <div className="input-seach">
                <div className="input">
                  <i className="fas fa-search" />
                  <input
                    type="text"
                    className="seach"
                    placeholder="Nhập thông tin cần tìm"
                  />
                </div>
                {/* <button className="btn btn-seach">Tìm Kiếm</button> */}
                <Button color="primary">Primary</Button>
              </div>
            </div>
            <div className="databases">
              <div className="content-database">
                <div className="database titile-database">
                  <div className="msv titile-msv">MSV</div>
                  <div className="name titile-name">NAME</div>
                  <div className="email titile-email">EMAIL</div>
                  <div className="permission titile-permission">TASK</div>
                </div>
                <div className="database users-database">
                  <ul id="user">
                    <User msv="18020272" nameuser="Lưu Hải Đăng" email="haidang@gmail.com" permission="Nhóm trưởng"/>
                    <User msv="1" nameuser="Lưu Đăng" email="hidang@gmail.com" permission="Làm báo cáo"/>
                    <User msv="2" nameuser="Lưu Hải " email="hdang@gmail.com" permission="Làm Backend"/>
                    <User msv="3" nameuser="Hải Đăng" email="dang@gmail.com" permission="Làm Fontend"/>
                  </ul>
                </div>
              </div>
              <div className="input-database" id="input-database">
                <span>Nhập thông tin</span>
                <input
                  type="text"
                  name="msv"
                  id="msv-input"
                  placeholder="Msv"
                />
                <input
                  type="text"
                  name="name"
                  id="name-input"
                  placeholder="Họ và tên"
                />
                <input
                  type="text"
                  name="email"
                  id="email-input"
                  placeholder="Email"
                />
                <select id="permission">
                  <option value="Admin">Admin</option>
                  <option value="Student">Student</option>
                  <option value="Teacher">Teacher</option>
                </select>
                <input
                  type="submit"
                  defaultValue="Thêm thành viên"
                  className="btn btn-input-data"
                  onClick={this.addMember}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Member;
