import React, { Component } from "react";
import "./../css/comment.css";
import { v4 as uuidv4 } from "uuid";
import UserComment from "./UserComment";
import { db } from "../firebaseConnect";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import store from "./store";
/*ten khac cua comment la detail Post */
class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullPost: this.props.fullDataPost,
      uidUser:this.props.uidUser,
      currentPost: {
        comment:[]
      },
       indexPost:[],
      ishideComment: true,
    };
  }
  focus=(uid)=>{
    document.getElementById(uid).focus();
  }
  addNewComment = async () => {
    var contentComment = document.getElementById(this.props.keyPost).value;
    var keyComment = uuidv4();
    this.state.fullPost.map((item, key) => {
      if (item.keyPost == this.props.keyPost) {
        this.setState({
          currentPost: this.props.fullDataPost[key]
        })
        this.state.fullPost[key].comment.push({
          user:store.getState().userProfile.firstName +" " +store.getState().userProfile.lastName,
          content: contentComment,
          keyComment: keyComment,
          replycomment:[]
        });
        var newPost = {
          post: this.state.fullPost,
        };
        this.props.updateFirebase("courses",this.props.codeCourse,newPost);
      }
    });
    document.getElementById(this.props.keyPost).value="";
  };
  findPost = () => {
    if (this.state.ishideComment == true) {
      this.state.fullPost.map((item, key) => {
        if (item.keyPost == this.props.keyPost) {
          this.setState({
            currentPost: this.state.fullPost[key],
            ishideComment: false,
            indexPost :key
          });
        }
      });
    } else {
      this.setState({
        currentPost: {
          comment:[]
        },
        ishideComment: true,
      });
    }
  };
  componentDidMount() {
    db.collection("courses").doc("ELT2035 5")
    .onSnapshot((doc) =>{
         doc.data().post.map((item, key) => {
        if (item.keyPost == this.props.keyPost) {
          this.setState({
            currentPost:  doc.data().post[key],
            fullPost: doc.data().post
          });
        }
      });
    });
  }
  addComment = (event) => {
    if (event.key === "Enter") {
      this.addNewComment()
    }
  };
  render() {
    return (
      <div className="Comment-comment">
        <div className="container-comment">
          <div className="info-comment">
            <div className="logo">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar3.png"
                alt=""
                className="logo"
              />
            </div>
            <div className="name-comment">
              <span className="name-user">{this.props.userPost} </span>
              <span className="time-comment">1 minute ago</span>
            </div>
          </div>
          <div className="content-comment">
            <span>{this.props.contentPost}</span>
          </div>
          <div className="numberComment-icon">
            <div>
              <i className="far fa-heart" title="Like"></i>
              <i className="far fa-comment" title="Comment" onClick={()=>this.focus(this.props.keyPost)}></i>
              <i className="far fa-edit" title="Edit"></i>
              <i
                className="fa fa-remove" title="Remove"
                onClick={() => this.props.remotePost(this.props.keyPost,this.props.uidUser)}
              ></i>
            </div>
            <div className="numberLikeComment">
              <Link className="numberLike" >10 Likes</Link>
              <Link className="numberComment" onClick={this.findPost}>{this.state.currentPost.comment.length != 0 ? this.state.currentPost.comment.length+" Bình luận": this.state.ishideComment === true ? "Hiện bình luận" :"0 Bình luận"} </Link>
            </div>
          </div>
          <div className="comment-comment">
            <input
              type="text"
              id={this.props.keyPost}
              placeholder="Add a comment..."
              onKeyPress={this.addComment}
            />
            {this.state.currentPost.comment ? (
              this.state.currentPost.comment.map((item, key) => (
                <UserComment
                  contentComment={item.content}
                  userComment= {item.user}
                  keyComment={item.keyComment}
                  key={key}
                />
              ))
            ) : (
              <h4 className="ml-5"></h4>
            )}
          </div>
        </div>
        <Modal isOpen={this.state.isOpenModal} className="my-modal">
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
                    />
                  </th>
                  <th>
                    <input
                      type="text"
                      placeholder="Người Tạo"
                      className="input-modal"
                    />
                  </th>
                  <th>
                    <input
                      type="text"
                      placeholder="Số thành viên"
                      className="input-modal"
                    />
                  </th>
                  <th>
                    <input
                      type="text"
                      placeholder="Hạn Nộp"
                      className="input-modal"
                    />
                  </th>
                  <th>
                    <Button color="success">Add</Button>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>1/5/2020</td>
                  <th>
                    <ButtonGroup>
                      <Button color="link">Join</Button>
                      <Button color="link">Member</Button>
                      <Button color="link">Edit</Button>
                      <Button color="link">Remove</Button>
                    </ButtonGroup>
                  </th>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>1/5/2020</td>
                  <th>
                    {/* <Button color="link">Xem thành viên</Button> */}
                    <ButtonGroup>
                      <Button color="link">Join</Button>
                      <Button color="link">Member</Button>
                      <Button color="link">Edit</Button>
                      <Button color="link">Remove</Button>
                    </ButtonGroup>
                  </th>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                  <td>1/5/2020</td>
                  <th>
                    {/* <Button color="link">Xem thành viên</Button> */}
                    <ButtonGroup>
                      <Button color="link">Join</Button>
                      <Button color="link">Member</Button>
                      <Button color="link">Edit</Button>
                      <Button color="link">Remove</Button>
                    </ButtonGroup>
                  </th>
                </tr>
              </tbody>
            </Table>
          </ModalBody>
          <ModalFooter>
            <Button color="primary">Save changes</Button>
            <Button color="secondary" onClick={this.openModal}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
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
export default connect(null, mapDispatchToProps)(Comment);