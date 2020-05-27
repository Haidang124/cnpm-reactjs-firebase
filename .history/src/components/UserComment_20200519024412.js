import React, { Component } from "react";
import ReplyComment from "./ReplyComment";
import { Link } from "react-router-dom";
class UserComment extends Component {
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
              <span> Like</span>
              <spanreply>Trả lời </span>
              <span>1 minute ago</span>
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
