import React, { Component } from "react";
import ReplyComment from "./ReplyComment";
import { Link } from "react-router-dom";
class UserComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
        fullDataComment:this.props.fullDataComment,
        ishideReply:true,
        currentComment:{
          replycomment:[],
        }
    }
  }
  
  replyFocus=()=>{
    document.getElementById(this.props.keyComment).type ='text'
    this.props.focus();
  }
  findComment = () => {
    if (this.state.ishideComment == true) {
      this.state.fullDataComment.map((item, key) => {
        if (item.keyComment == this.props.keyComment) {
          this.setState({
            cu: this.state.fullPost[key],
            ishideComment: false,
            indexPost: key,
          });
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
              <span className="reply-user"> Xóa</span>
            </Link>
           {
              this.props.fullDataComment[0].replycomment.map((item, key) => (
                <ReplyComment/>
              ))
           }
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
