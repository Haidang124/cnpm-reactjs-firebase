import React, { Component } from "react";
class ReplyComment extends Component {
    render() {
        return (
            <div className="reply-comment">
            <div className="content-comment">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar3.png"
                alt=""
                className="logo-reply"
              />
              <div className="content-detail-rep">
                <div className="content-time">
                  <span className="name-comment">John Doe</span>
                  <span className="content-comment">
                    Lorem ipsum dolssssssssssssdssdsefor sit amet, consectetur
                    adipislit 
                  </span>
                </div>
                <div className="reply">
                  <span> Like</span>
                  {/* <span>Trả lời </span> */}
                  <span>2 hour ago</span>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default ReplyComment
