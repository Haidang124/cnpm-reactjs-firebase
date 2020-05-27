import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Menu from "./Menu";
import "./../css/courseDetail.css";
import Comment from "./Comment";
import { Link } from "react-router-dom";
import store from "./store";
import { db } from "../firebaseConnect";
import { connect } from "react-redux";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
  ButtonGroup,
} from "reactstrap";
class CourseDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //state post
      userPost:
        store.getState().userProfile.firstName +
        " " +
        store.getState().userProfile.lastName,
      codeCourse: this.props.match.params.code,
      post: [],
      isOpenModal: false,
      selectedFile: null,
      //state topic
      topic: [],
    };
  }
  openModal = () => {
    this.setState({
      isOpenModal: !this.state.isOpenModal,
    });
  };
  addTopic = async () => {
    var name =document.getElementById("name-topic").value;
    var number =document.getElementById("number-topic").value;
    var creator =document.getElementById("creator-topic").value;
    var time =document.getElementById("time-topic").value;
    var keyTopic =uuidv4();
    var newTopic = {
      name:name,
      number:number,
      creator:creator,
      time:time,
      keyTopic:keyTopic,
      uidCreator : store.getState().userProfile.uid,
      member: [
        {

        }
      ]
    }
    console.log(newTopic);
    this.state.topic.push(newTopic);
    document.getElementById("name-topic").value="";
    document.getElementById("number-topic").value="";
    document.getElementById("creator-topic").value="";
    document.getElementById("time-topic").value="";
    var newdata = {
     topic : this.state.topic,
    };
     await db
      .collection("topics")
      .doc(this.state.codeCourse)
      .update(newdata);
  };
  checkJoin =(key,uid)=>{
    this.state.topic[key].member.map((item,index)=>{
      // alert(key)
      // console.log(item);
      // console.log(item.uidUser + "  " +uid)
       if(item.uidUser == uid) return false
    })
    return true
  }
  joinTopic = (keyTopic,uidUser) => {
    this.state.topic.map((item, key) => {
      if (item.keyTopic == keyTopic) {
        console.log(this.checkJoin(key,uidUser))
        if(this.checkJoin(key,uidUser))
        {
          
          this.state.topic[key].member.push({
            user:
            store.getState().userProfile.firstName +
            " " +
            store.getState().userProfile.lastName,
            email: store.getState().userProfile.email,
            msv : store.getState().userProfile.msv,
            uidUser:store.getState().userProfile.uid
          })
          var newdata = {
            topic : this.state.topic,
           };
             db
             .collection("topics")
             .doc(this.state.codeCourse)
             .update(newdata);
             alert("Bạn tham gia thành công")
        }
        else{
          alert("Bạn đã tham gia từ trước nên không thể tham gia tiếp")
        }
       }
    })
  } 
  removeTopic =  (keyTopic, uidCreator) => {
    if (uidCreator === store.getState().userProfile.uid) {
      alert("Xóa thành công");
      this.state.topic.map((item, key) => {
        if (item.keyTopic == keyTopic) {
          this.state.topic.splice(key, 1);
          var newPost = {
            topic: this.state.topic,
          };
          this.props.updateFirebase(
            "topics",
            this.props.match.params.code,
            newPost
          );
        }
      });
    } else {
      alert("Bạn không thể xóa đề tài của người khác");
    }
  };
  removePost = async (keyPost, uidUser) => {
    if (uidUser === store.getState().userProfile.uid) {
      alert("Xóa thành công");
      this.state.post.map((item, key) => {
        if (item.keyPost == keyPost) {
          this.state.post.splice(key, 1);
          var newPost = {
            post: this.state.post,
          };
          this.props.updateFirebase(
            "courses",
            this.props.match.params.code,
            newPost
          );
        }
      });
    } else {
      alert("Bạn không thể xóa bài của người khác");
    }
  };
  editPost = async (keyPost, uidUser) => {
  //  if(document.getElementById("edit-TextArea") !== null)
  //  {
  //   var newContent = document.getElementById("edit-TextArea").value;
  //     alert(newContent);
  //  }
    if (uidUser === store.getState().userProfile.uid) {
      var newContent = document.getElementById("edit-TextArea").value;
      // alert(newContent);
      this.state.post.map((item, key) => {
        if (item.keyPost == keyPost) {
          // alert(key)
          this.state.post[key].content = newContent;
          // alert(this.state.post[key].content)
          // console.log(this.state.post)
          // this.state.post.splice(key, 1);
          var newPost = {
            post: this.state.post,
          };
          this.props.updateFirebase(
            "courses",
            this.props.match.params.code,
            newPost
          );
        }
      });
    } else {
      alert("Bạn không thể sửa bài của người khác");
    }
  };
  getPost = async (collection, doc, dataField,nameState) => {
    var docRef = db.collection(collection).doc(doc);
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          this.setState({
            [nameState]: doc.data()[dataField],
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
    //get post from database
    this.getPost("courses", this.props.match.params.code, "post","post");
    db.collection("courses")
      .doc(this.props.match.params.code)
      .onSnapshot((doc) => {
        this.setState({
          post: doc.data().post,
        });
      });
      //get topic from database
    this.getPost("topics", this.props.match.params.code, "topic","topic");
    db.collection("topics")
      .doc(this.state.codeCourse)
      .onSnapshot((doc) => {
        if (typeof doc.data().topic !== "undefined") {
          this.setState({
            topic: doc.data().topic,
          });
        }
      });
  }
  updateNewPost = async () => {
    var contentPost = document.getElementById("TextArea").value;
    var keyPost = uuidv4();
    this.state.post.push({
      user: this.state.userPost,
      content: contentPost,
      keyPost: keyPost,
      uidUser: store.getState().userProfile.uid,
      comment: [],
    });
    var newPost = {
      post: this.state.post,
    };
    await this.props.updateFirebase(
      "courses",
      this.props.match.params.code,
      newPost
    );
    alert("Đăng bài viết thành công");
    document.getElementById("TextArea").value = "";
  };
  onChangUpload = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
    console.log(this.state.selectedFile);
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
              <input
                type="file"
                className="upload"
                onChange={this.onChangUpload}
              ></input>
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
              uidUser={item.uidUser}
              key={key}
              removePost={(keyPost, uidUser) =>
                this.removePost(keyPost, uidUser)
              }
              editPost={(keyPost, uidUser) =>
                this.editPost(keyPost, uidUser)
              }
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
              <Link className="create-topic" onClick={this.openModal}>
                Thêm đề tài
              </Link>
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
        {/* modal boostrap*/}

        <Modal isOpen={this.state.isOpenModal} className="modal-create-toptic">
          <ModalHeader>Thêm Đề Tài</ModalHeader>
          <ModalBody>
            <Table>
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tên đề tài</th>
                  <th>Người tạo</th>
                  <th>Số thành viên</th>
                  <th>Hạn nộp</th>
                  <th>Chức Năng</th>
                </tr>
                <tr>
                  <th></th>
                  <th>
                    <input
                      type="text"
                      placeholder="Tên đề tài"
                      className="input-modal"
                      id="name-topic"
                    />
                  </th>
                  <th>
                    <input
                      type="text"
                      placeholder="Người Tạo"
                      className="input-modal"
                      id="creator-topic"
                    />
                  </th>
                  <th>
                    <input
                      type="text"
                      placeholder="Số thành viên"
                      className="input-modal"
                      id="number-topic"
                    />
                  </th>
                  <th>
                    <input
                      type="text"
                      placeholder="Hạn Nộp"
                      className="input-modal"
                      id="time-topic"
                    />
                  </th>
                  <th>
                    <Button color="success" onClick={this.addTopic}>Add</Button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {this.state.topic.map((item, key) => (
                  <tr>
                    <th scope="row">{key + 1}</th>
                    <td>{item.name}</td>
                    <td>{item.creator}</td>
                    <td>{item.number}</td>
                    <td>{item.time}</td>
                    <th>
                      <ButtonGroup>
                        <Button color="link" onClick={()=>this.joinTopic(item.keyTopic,store.getState().userProfile.uid)}>Join</Button>
                        <Button color="link"><Link to="Members">Member</Link></Button>
                        <Button color="link">Edit</Button>
                        <Button color="link" onClick={()=>this.removeTopic(item.keyTopic,item.uidCreator)}>Remove</Button>
                      </ButtonGroup>
                    </th>
                  </tr>
                ))}
              </tbody>
            </Table>
          </ModalBody>
          <ModalFooter>
            <Button color="primary"onClick={this.openModal}>Save changes</Button>
            {/* <Button color="secondary" onClick={this.openModal}>
              Close
            </Button> */}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateFirebase: (collection, doc, dataUpdate) => {
      dispatch({
        type: "updateFirebase",
        collection: collection,
        doc: doc,
        dataUpdate: dataUpdate,
      });
    },
    getFirebase: (collection, doc, data) => {
      dispatch({
        type: "getFirebase",
        collection: collection,
        doc: doc,
        data: data,
      });
    },
  };
};
export default connect(null, mapDispatchToProps)(CourseDetail);
