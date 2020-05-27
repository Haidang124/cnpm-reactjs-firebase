import React, { Component } from "react";
import ReplyComment from "./ReplyComment";
import { Link } from "react-router-dom";
class UserComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullDataComment: this.props.fullDataComment,
      ishideReply: true,
      currentComment: {
        replycomment: [],
      },
      indexComment: [],
    };
  }

  replyFocus = (type) => {
    // this.findComment();
    document.getElementById(this.props.keyComment).type = type;
    this.props.focus();
  };
  reply = () => {
    if (this.state.ishideReply == true) {
      this.replyFocus('text');
      this.state.fullDataComment.map((item, key) => {
        if (item.keyComment == this.props.keyComment) {
          this.setState({
            currentComment: this.state.fullDataComment[key],
            ishideReply: false,
            indexComment: key,
          });
        }
      });
    }else{
      this.props.focus();
    }
  };
  findComment = () => {
    if (this.state.ishideReply == true) {
      this.replyFocus('text');
      this.state.fullDataComment.map((item, key) => {
        if (item.keyComment == this.props.keyComment) {
          this.setState({
            currentComment: this.state.fullDataComment[key],
            ishideReply: false,
            indexComment: key,
          });
        }
      });
    } else {
      this.replyFocus('hidden')
      this.setState({
        currentComment: {
          replycomment: [],
        },
        ishideReply: true,
      });
    }
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
              <span className="reply-user"> Xóa</span>
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
                // fullDataComment={this.state.currentPost.comment}
                // contentComment={item.content}
                // userComment={item.user}
                // keyComment={item.keyComment}
                // key={key}
                // focus={()=>this.focus(item.keyComment)}
                />
              ))
            ) : (
              <h4 className="ml-5"></h4>
            )}
            <input
              type="hidden"
              id={this.props.keyComment}
              placeholder="Add a reply..."
              onKeyPress={this.addComment}
              className="input-reply"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default UserComment;
