import React, { Component } from "react";
class ReplyComment extends Component {
    render() {
        return (
            <div className="reply-comment">
            <div className="content-comment">
              <img
                src="https://randomuser.me/api/portraits/men/36.jpg"
                alt=""
                className="logo-reply"
              />
              <div className="content-detail-reply">
                <div className="content-time">
                  <span className="name-comment">{this.props.userComment}</span>
                  <span className="content-comment">
                   {this.props.contentComment}
                  </span>
                </div>
                <div className="reply">
                  <span> Like</span>
                  {/* <span>Trả lời </span> */}
                  <span>2 hour ago</span>
                  <span>Xóa</span>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default ReplyComment
