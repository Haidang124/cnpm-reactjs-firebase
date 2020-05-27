import React, { Component } from "react";
import ReplyComment from "./ReplyComment";
import { Link } from "react-router-dom";
class UserComment extends Component {
  replyComment = () =>{
    alert
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
              <span className="reply-user" > Like</span>
              <span className="reply-user" onClick={this.replyComment}>Trả lời </span>
              <span className="reply-user">1 minute ago</span>
            </Link>
            {/* <ReplyComment/>
            <ReplyComment/> */}
          </div>
        </div>
      </div>
    );
  }
}

export default UserComment;
