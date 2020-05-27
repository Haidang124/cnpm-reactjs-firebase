import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Menu from "./Menu";
import "./../css/courseDetail.css";
import Comment from "./Comment";
import { Link } from "react-router-dom";
import store from "./store";
import { db } from "../firebaseConnect";
import { connect } from "react-redux";
class CourseDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userPost:
        store.getState().userProfile.lastName +
        " " +
        store.getState().userProfile.firstName,
      codeCourse: this.props.match.params.code,
      post: [],
    };
  }
  remotePost = async (keyPost) => {
    alert("Xóa thành công")
    this.state.post.map((item, key) => {
      if (item.keyPost == keyPost) {
        this.state.post.splice(key, 1);
        var newPost = {
          post: this.state.post,
        };
        this.props.updateFirebase("courses",this.props.match.params.code,newPost);
      }
    });
  };
   getPost = async (collection,doc,dataField) => {
    var docRef = db.collection(collection).doc(doc);
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          this.setState({
            post: doc.data()[dataField],
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
    this.getPost("courses",this.props.match.params.code,'post');
     db.collection("courses").doc(this.props.match.params.code)
    .onSnapshot((doc) =>{
        this.setState({
            post: doc.data().post
          });
    });
  }
  updateNewPost = async () => {
    var contentPost = document.getElementById("TextArea").value;
    var keyPost = uuidv4();
    this.state.post.push({
      user: this.state.userPost,
      content: contentPost,
      keyPost: keyPost,
      comment:[]
    });
    var newPost = {
      post: this.state.post,
    };
    await this.props.updateFirebase("courses",this.props.match.params.code,newPost);
    alert("Đăng bài viết thành công");
    document.getElementById("TextArea").value="";
  };
  render() {
    return (
      <div className="course-detail">
        <Menu />
        <div className="comment-post">
          <div className="content">
            <div className="title">Tạo bài viết mới</div>
            <div className="post">
              <textarea
                defaultValue={""}
                placeholder="Nhập nội dung vào đây !"
                id="TextArea"
              />
              <input type="file"></input>
              <button className="btn-post" onClick={this.updateNewPost}>
                Đăng bài
              </button>
            </div>
          </div>
          {this.state.post.map((item, key) => (
            <Comment
              fullDataPost={this.state.post}
              contentPost={item.content}
              codeCourse={this.props.match.params.code}
              userPost={item.user}
              keyPost={item.keyPost}
              key={key}
              remotePost={(keyPost) => this.remotePost(keyPost)}
            />
          ))}
        </div>
        <div className="quick-member">
          <div className="shortcuts">
            <span className="quick">Lối tắt</span>
            <div className="quick-course">
              <i className="fas fa-users"></i>
              <span>Công nghệ phần mềm</span>
            </div>
            <div className="quick-course">
              <i className="fas fa-users"></i>
              <span>Tín Hiệu và Hệ thống</span>
            </div>
            <div className="quick-course">
              <i className="fas fa-users"></i>
              <span>Mạng máy tính</span>
            </div>
            <div className="more">
              <Link>Xem thêm</Link>
              <Link className="create-topic">Tạo đề tài</Link>
            </div>
          </div>
          <div className="members">
            <span className="title">Thành viên trong lớp</span>
            <div className="member">
              <img
                src="https://randomuser.me/api/portraits/men/10.jpg"
                className="avatar-member"
                alt=""
              />
              <span className="name-member">Tiến Dũng</span>
              <div className="online"></div>
            </div>
            <div className="member">
              <img
                src="https://randomuser.me/api/portraits/men/46.jpg"
                className="avatar-member"
                alt=""
              />
              <span className="name-member">Mạnh Hùng</span>
              <div className="online"></div>
            </div>
            <div className="member">
              <img
                src="https://randomuser.me/api/portraits/men/4.jpg"
                className="avatar-member"
                alt=""
              />
              <span className="name-member">Văn Đức</span>
              <div className="offline"></div>
            </div>
            <div className="member">
              <img
                src="https://randomuser.me/api/portraits/women/68.jpg"
                className="avatar-member"
                alt=""
              />
              <span className="name-member">Diệu Linh</span>
              <div className="offline"></div>
            </div>
            <div className="member">
              <img
                src="https://randomuser.me/api/portraits/women/14.jpg"
                className="avatar-member"
                alt=""
              />
              <span className="name-member">Thanh Hà</span>
              <div className="offline"></div>
            </div>
            <div className="member">
              <img
                src="https://randomuser.me/api/portraits/women/24.jpg"
                className="avatar-member"
                alt=""
              />
              <span className="name-member">Thu Hiền</span>
              <div className="online"></div>
            </div>
            <div className="member">
              <img
                src="https://randomuser.me/api/portraits/men/36.jpg"
                className="avatar-member"
                alt=""
              />
              <span className="name-member">Minh Đức</span>
              <div className="online"></div>
            </div>
            <div className="more">
              <Link>Xem thêm</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch, ownProps) =>  {
  return {
    updateFirebase: (collection,doc,dataUpdate) => {
      dispatch({
        type: "updateFirebase",
        collection:collection,
        doc:doc,
        dataUpdate:dataUpdate
      });
    },
    getFirebase: (collection,doc,data) => {
      dispatch({
        type: "getFirebase",
        collection:collection,
        doc:doc,
        data:data
      });
    }
  };
};
export default connect(null, mapDispatchToProps)(CourseDetail);
