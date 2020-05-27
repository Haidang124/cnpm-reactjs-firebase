import React, { Component } from "react";
import Menu from "./Menu";
import Course from "./Course";
import "./../css/courses.css";
// import "./../css/testboostrap.css";
import { db } from "../firebaseConnect";
import store from "./store";
import { Link } from "react-router-dom";
import Nav from "./Nav";
class Courses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allcourses: [
        {
          name: "Tín hiệu hệ thống",
          code: "ELT2035",
          tinchi: "4",
          teacher: "giaovien1",
        },
        {
          name: "Mạng máy tính",
          code: "INT2209",
          tinchi: "3",
          teacher: "giaovien2",
        },
        {
          name: "Công nghệ phần mềm",
          code: "INT2208",
          tinchi: "3",
          teacher: "giaovien4",
        },
        {
          name: "Bóng chuyền",
          code: "PES2028",
          tinchi: "1",
          teacher: "giaovien",
        },
      ],
      mycourses: [],
    };
  }
  checkDuplication = (newCourse) => {
    var lengthNow = this.state.mycourses.length;
    for (var i = 0; i < lengthNow; i++) {
      if (this.state.mycourses[i].code === newCourse.code) {
        alert("Không thể thêm khóa học vì đã có trong danh sách");
        return -1;
      }
    }
  };
  updateCourse = async (newCourse) => {
    var check = this.checkDuplication(newCourse);
    if (check != -1) {
      this.state.mycourses.push(newCourse);
      var newdata = {
        courses: this.state.mycourses,
      };
      await db
        .collection("users")
        .doc(store.getState().userAuth.uid)
        .update(newdata);
      alert("Tham gia thành công");
    }
  };
  getMycourse = async () => {
    // console.log("goi lan 1");
    var docRef = db.collection("users").doc(store.getState().userProfile.uid);
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          this.setState({
            mycourses: doc.data().courses,
          });
        } else {
          console.log("No such document!");
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  };
  componentDidMount() {
    this.getMycourse();
    db.collection("users")
      .doc(store.getState().userAuth.uid)
      .onSnapshot((doc) => {
        this.setState({
          mycourses: doc.data().courses,
        });
      });
  }
  render() {
    return (
      <div className="courses">
        <Menu />
        <div>
        <Nav/>
        <div className="container-right">
          <h3>Tất cả khóa học</h3>
          <div className="allCourse">
            {this.state.allcourses.map((item, key) => (
              <Course
                img="https://img.etimg.com/thumb/msid-75027709,width-300,imgsize-181195,resizemode-4/untitled-12.jpg"
                type="allCourse"
                nameCourse={item.name}
                tinchi={item.tinchi}
                codeCourse={item.code}
                nameTeacher={item.teacher}
                key={key}
                updateCourse={this.updateCourse}
              />
            ))}
          </div>
          <h3>Khóa học của tôi</h3>
          <div className="container mycourse">
            <div className="row">
              {this.state.mycourses ? (
                this.state.mycourses.map((item, key) => (
                  <Course
                    img="https://img.etimg.com/thumb/msid-75027709,width-300,imgsize-181195,resizemode-4/untitled-12.jpg"
                    nameCourse={item.name}
                    tinchi={item.tinchi}
                    codeCourse={item.code}
                    nameTeacher={item.teacher}
                    key={key}
                    updateCourse={this.updateCourse}
                  />
                ))
              ) : (
                <h4 className="ml-5">Hiện tại chưa tham gia khóa học nào</h4>
              )}
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Courses;
