import React, { Component } from "react";
import ReplyComment from "./ReplyComment";
import { Link } from "react-router-dom";
class UserComment extends Component {
  replyFocus=()=>{
    
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
              <span className="reply-user" onClick={this.replyFocus}>Trả lời </span>
              <span className="reply-user">1 minute ago</span>
            </Link>
            <ReplyComment/> 
            <ReplyComment/> 
            <ReplyComment/> 
            <ReplyComment/> 
            <ReplyComment/> 
            <input
              type="text"
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
