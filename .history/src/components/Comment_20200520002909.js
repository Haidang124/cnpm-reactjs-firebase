import React, { Component } from "react";
import "./../css/comment.css";
import { v4 as uuidv4 } from "uuid";
import UserComment from "./UserComment";
import { db } from "../firebaseConnect";
import { Link } from "react-router-dom";
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
import store from "./store";
/*ten khac cua comment la detail Post */
class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullPost: this.props.fullDataPost,
      uidUser: this.props.uidUser,
      currentPost: {
        comment: [],
      },
      indexPost:-1,
      ishideComment: true,
      isOpenModal: false,
    };
  }
  focus = (uid) => {
    document.getElementById(uid).focus();
  };
  openModal = () => {
    this.setState({
      isOpenModal: !this.state.isOpenModal,
    });
  };
  addNewComment = async () => {
    var contentComment = document.getElementById(this.props.keyPost).value;
    var keyComment = uuidv4();
    this.state.fullPost.map((item, key) => {
      if (item.keyPost == this.props.keyPost) {
        this.setState({
          currentPost: this.props.fullDataPost[key],
        });
        this.state.fullPost[key].comment.push({
          user:
            store.getState().userProfile.firstName +
            " " +
            store.getState().userProfile.lastName,
          content: contentComment,
          keyComment: keyComment,
          indexPost:key,
          replycomment: [],
        });
        var newPost = {
          post: this.state.fullPost,
        };
        this.props.updateFirebase("courses", this.props.codeCourse, newPost);
      }
    });
    document.getElementById(this.props.keyPost).value = "";
  };
  findPost = () => {
    if (this.state.ishideComment == true) {
      this.state.fullPost.map((item, key) => {
        if (item.keyPost == this.props.keyPost) {
          this.setState({
            currentPost: this.state.fullPost[key],
            ishideComment: false,
            indexPost:key
          });
          return key;
        }
      });
    } else {
      this.setState({
        currentPost: {
          comment: [],
        },
        ishideComment: true,
      });
    }
  };
  componentDidMount() {
    console.log("did mount comment")
     db.collection("courses")
      .doc(this.props.codeCourse)
      .onSnapshot((doc) => {
        doc.data().post.map((item, key) => {
          if (item.keyPost == this.props.keyPost) {
            this.setState({
              currentPost: doc.data().post[key],
              fullPost: doc.data().post,
            });
          }
        });
      });
  }
  addComment = (event) => {
    if (event.key === "Enter") {
      this.addNewComment();
    }
  };
  render() {
    console.log("render comment")
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
              <i
                className="far fa-comment"
                title="Comment"
                onClick={() => this.focus(this.props.keyPost)}
              ></i>
              <i
                className="far fa-edit"
                title="Edit"
                onClick={this.openModal}
              ></i>
              <i
                className="fa fa-remove"
                title="Remove"
                onClick={() =>
                  this.props.remotePost(this.props.keyPost, this.props.uidUser)
                }
              ></i>
            </div>
            <div className="numberLikeComment">
              <Link className="numberLike">10 Likes</Link>
              <Link className="numberComment" onClick={this.findPost}>
                {this.state.currentPost.comment.length != 0
                  ? this.state.currentPost.comment.length + " Bình luận"
                  : this.state.ishideComment === true
                  ? "Hiện bình luận"
                  : "0 Bình luận"}
              </Link>
            </div>
          </div>
          <div className="comment-comment">
            <input
              type="text"
              id={this.props.keyPost}
              placeholder="Add a comment..."
              onKeyPress={this.addComment}
              className="input-comment"
            />
            {this.state.currentPost.comment ? (
              this.state.currentPost.comment.map((item, key) => (
                <UserComment
                  fullDataComment={this.state.currentPost.comment}
                  indexPost={item.indexPost}
                  
                  codeCourse={this.props.codeCourse}
                  contentComment={item.content}
                  userComment={item.user}
                  keyComment={item.keyComment}
                  key={key}
                  focus={()=>this.focus(item.keyComment)}
                />
              ))
            ) : (
              <h4 className="ml-5"></h4>
            )}
          </div>
        </div>
        <Modal isOpen={this.state.isOpenModal} className="modal-edit-post">
          <ModalHeader>Chỉnh sửa bài viết</ModalHeader>
          <ModalBody>
            <textarea
              defaultValue={this.props.contentPost}
              id="edit-TextArea"
            />
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
export default connect(null, mapDispatchToProps)(Comment);
