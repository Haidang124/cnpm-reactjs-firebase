import React, { Component } from "react";
import Menu from "./Menu";
import "./../css/chat.css";
class Chat extends Component {
  render() {
    return (
      <div className="chat">
        <Menu />
        <div >
          <Nav />
        </div>
      </div>
    );
  }
}

export default Chat;
