import React, { Component } from "react";
import ReplyComment from "./ReplyComment";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import store from "./store";
import { db } from "../firebaseConnect";
class UserComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullDataComment: this.props.fullDataComment,
      fullDataPost:this.props.fullDataPost,
      ishideReply: true,
      indexPost:this.props.indexPost,
      currentComment: {
        replycomment: [],
      },
    };
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
    // alert(contentReply);
    var keyReply = uuidv4();
    this.state.fullDataComment.map((item, key) => {
      if (item.keyComment == this.props.keyComment) {
        alert(key +" " +this.props.keyComment)
        this.state.fullDataComment[key].replycomment.push({
          user:
            store.getState().userProfile.firstName +
            " " +
            store.getState().userProfile.lastName,
          content: contentReply,
          keyReply: keyReply,
        });
        this.setState({
          currentComment: this.props.fullDataComment[key],
        });
        // this.props.fullDataPost[this.state.indexPost].comment = this.state.currentComment
        // console.log(this.props.fullDataPost)
        // var newPost = {
        //   currentComment: this.state.fullPost,
        // };
        // this.props.updateFirebase("courses", this.props.codeCourse, newPost);
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
        doc.data().post[this.state.indexPost].comment.map((item, key) => {
          if (item.keyComment == this.props.keyComment) {
            this.setState({
              currentComment: doc.data().post[this.state.indexPost].comment[key],
             fullDataComment: doc.data().post[this.state.indexPost].comment,
            });
          }
        });
      });
  }
  render() {
    
    return (
      <div className="user-comment">
        <div className="content-comment">
          <img
            src="https://bootdey.com/img/Content/avatar/avatar3.png"
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
                onClick={() => alert(this.props.indexPost)}
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
              this.state.ful.replycomment.map((item, key) => (
                <ReplyComment
                contentComment={item.content}
                userComment={item.user}
                keyComment={item.keyComment}
                uidComment
                key={key}
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

export default UserComment;
