import React, { Component } from "react";
import store from "./store";
class ReplyComment extends Component {
    render() {
        return (
            <div className="reply-comment">
            <div className="content-comment">
              <img
                //  src ={store.getState().userProfile.photoURL ? store.getState().userProfile.photoURL :"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYuIRmLMgwJRhONvJimSmKhV23zgXYSqy_7g_PZ3n1QyYF4iqw&usqp=CAU"}
                src ={this.props.photoURL ? this.props.photoURL :"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYuIRmLMgwJRhONvJimSmKhV23zgXYSqy_7g_PZ3n1QyYF4iqw&usqp=CAU"}
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
                  {/* <span>Xóa</span> */}
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default ReplyComment
