import React, { Component } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebaseConnect";
import "./../css/course.css";
import store from "./store";

class Course extends Component {
    render() {
    return (
      <div className="col-3 mb-3">
        <div className="card">
          <div className="card-body">
            <img src={this.props.img} alt="" className="img-fluid" />
            <blockquote className="blockquote">
              <p className="mt-3">Tên : {this.props.nameCourse} </p>
              <p>Mã học phần: {this.props.codeCourse}</p>
              <p>Giáo viên: {this.props.nameTeacher}</p>
            </blockquote>
            {this.props.type == "allCourse" ? (
              <button
                type="button"
                className="btn btn-primary ml-5"
                onClick={() =>
                  this.props.updateCourse({
                    name: this.props.nameCourse + "",
                    code: this.props.codeCourse + "",
                    tinchi: this.props.tinchi + "",
                    teacher: this.props.nameTeacher + "",
                  })
                }
              >
                Tham gia
              </button>
            ) : (
              <Link to={"/Course-detail/" + this.props.codeCourse+".html"}>
                <button type="button" className="btn btn-primary ml-5">
                  Xem thêm
                </button>
              </Link>
            )}
          </div>
          {/* </Link> */}
        </div>
      </div>
    );
  }
}

export default Course;
