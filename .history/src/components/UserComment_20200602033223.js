import React, { Component } from "react";
import ReplyComment from "./ReplyComment";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import store from "./store";
import { db } from "../firebaseConnect";
import { connect } from "react-redux";
class UserComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullDataComment: this.props.fullDataComment,
      fullDataPost:this.props.fullDataPost,
      ishideReply: true,
      indexPost:this.props.indexPost,
      // indexComment:this.props.indexComment,
      currentComment: {
        replycomment: [],
      },
    };
  }
  removeComment=()=>{

  }
  replyFocus = (type) => {
    document.getElementById(this.props.keyComment).type = type;
    this.props.focus();
  };
  reply = () => {
    if (this.state.ishideReply == true) {
      this.replyFocus("text");
      this.state.fullDataComment.map((item, key) => {
        if (item.keyComment == this.props.keyComment) {
          this.setState({
            currentComment: this.state.fullDataComment[key],
            ishideReply: false,
          });
        }
      });
    } else {
      this.props.focus();
    }
  };
  findComment = () => {
    console.log(this.state.fullDataComment);
    if (this.state.ishideReply == true) {
      this.replyFocus("text");
      this.state.fullDataComment.map((item, key) => {
        if (item.keyComment == this.props.keyComment) {
          this.setState({
            currentComment: this.state.fullDataComment[key],
            ishideReply: false,
          });
        }
      });
    } else {
      this.replyFocus("hidden");
      this.setState({
        currentComment: {
          replycomment: [],
        },
        ishideReply: true,
      });
    }
  };
  addNewReply = async () => {
    var contentReply = document.getElementById(this.props.keyComment).value;
    var keyReply = uuidv4();
    this.state.fullDataComment.map((item, key) => {
      if (item.keyComment == this.props.keyComment) {
        this.state.fullDataComment[key].replycomment.push({
          user:
            store.getState().userProfile.firstName +
            " " +
            store.getState().userProfile.lastName,
          content: contentReply,
          keyReply: keyReply,
          photoURL:store.getState().userProfile.photoURL
        });
        this.setState({
          currentComment: this.state.fullDataComment[key],
          indexComment:key
        });
        this.state.fullDataPost[this.state.indexPost].comment[this.props.indexComment] = this.state.currentComment
        var newPost = {
          post: this.state.fullDataPost,
        };
        this.props.updateFirebase("courses", this.props.codeCourse, newPost);
      }
    });
    document.getElementById(this.props.keyComment).value = "";
  };
  addReply = (event, indexPost) => {
    if (event.key === "Enter") {
      this.addNewReply();
    }
  };
  componentDidMount() {
    db.collection("courses")
      .doc(this.props.codeCourse)
      .onSnapshot((doc) => {
        if(typeof doc.data().post[this.state.indexPost] !== "undefined")
          {
            doc.data().post[this.state.indexPost].comment.map((item, key) => {
              if (item.keyComment == this.props.keyComment) {
                this.setState({
                  currentComment: doc.data().post[this.state.indexPost].comment[key],
                 fullDataComment: doc.data().post[this.state.indexPost].comment,
                });
              }
            });
          }
      });
  }
  render() {
    
    return (
      <div className="user-comment">
        <div className="content-comment">
          <img
            //  src ={store.getState().userProfile.photoURL ? store.getState().userProfile.photoURL :"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYuIRmLMgwJRhONvJimSmKhV23zgXYSqy_7g_PZ3n1QyYF4iqw&usqp=CAU"}
            // src ={this.props.photoURL}
            src ={this.props.photoURL ? this.props.photoURL :"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYuIRmLMgwJRhONvJimSmKhV23zgXYSqy_7g_PZ3n1QyYF4iqw&usqp=CAU"}
            alt=""
            className="logo"
          />
          <div className="content-detail">
            <div className="content-time">
              <span className="name-comment">{this.props.userComment}</span>
              <span className="content-comment">
                {this.props.contentComment}
              </span>
            </div>
            <Link className="reply">
              <span className="reply-user"> Like</span>
              <span className="reply-user" onClick={this.reply}>
                Trả lời{" "}
              </span>
              <span className="reply-user">1 minute ago</span>
              <span
                className="reply-user"
                onClick={() => alert(()=>this.removeComment())}
              >
                {" "}
                Xóa
              </span>
              <span className="reply-user" onClick={this.findComment}>
                {this.state.currentComment.replycomment.length != 0
                  ? this.state.currentComment.replycomment.length + " Phản hồi"
                  : this.state.ishideReply === true
                  ? "Hiện phản hồi "
                  : "0 Phản hồi"}
              </span>
            </Link>
            {this.state.currentComment.replycomment ? (
              this.state.currentComment.replycomment.map((item, key) => (
                <ReplyComment
                contentComment={item.content}
                userComment={item.user}
                keyComment={item.keyComment}
                uidComment
                key={key}
                photoURL={item.photoURL}
                />
              ))
            ) : (
              <h4 className="ml-5"></h4>
            )}
            <input
              type="hidden"
              id={this.props.keyComment}
              placeholder="Add a reply..."
              onKeyPress={(event) => this.addReply(event, this.props.indexPost)}
              className="input-reply"
            />
          </div>
        </div>
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
    }
  };
};
export default connect(null, mapDispatchToProps)(UserComment);
