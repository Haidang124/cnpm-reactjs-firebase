import React, { Component } from "react";
import Menu from "./Menu";
import "./../css/chat.css";
import "./../css/nav.css";
import Nav from "./Nav";
import { db } from "../firebaseConnect";
import store from "./store";
class Chat extends Component {
    constructor(props) {
        super(props);
        this.state={
            mychat:[],
            currentChat:[],
            username:[],
            active:0
        }
    }
    loadChat=(key)=>{
        this.setState({
            active:key,
            currentChat:this.state.mychat[key].content
        })
        // alert(key)
    }
    addChat=()=>{
        if (event.key === "Enter") {
            this.addNewComment();
        }
    }
    componentDidMount() {
        db.collection("users")
          .doc(store.getState().userAuth.uid)
          .onSnapshot((doc) => {
            this.setState({
                mychat:doc.data().mychat,
                username: doc.data().firstName + " " + doc.data().lastName,
            })
            if(typeof doc.data().mychat[0] !== "undefined") {
                this.setState({
                    currentChat:doc.data().mychat[0].content
                })
            }
          });
      }
  render() {
    //   console.log()
    return (
      <div className="chat">
        <Menu />
        <div >
          <Nav />
          <div className="chat-container">
          <div className="list-chat">
            <div className="info-user-chat">
              <img
                src="https://randomuser.me/api/portraits/men/44.jpg"
                className="avatar-chat"
                alt=""
              />
              <span>{this.state.username}</span>
            </div>
            <div className="input-group">
              <input
                type="text"
                className="form-control bg-light border-0 small"
                placeholder="Search for..."
                aria-label="Search"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <button className="btn btn-primary" type="button">
                  <i className="fas fa-search fa-sm" aria-hidden="true" />
                </button>
              </div>
            </div>
           
            {/* <div className="list-user-chat active">
              <div className="avatar-chat-group">
                <img
                    src="https://randomuser.me/api/portraits/men/44.jpg"
                    className="avatar-chat-small-first"
                    alt=""
                />
                 <img
                    src="https://randomuser.me/api/portraits/men/47.jpg"
                    className="avatar-chat-small-second"
                    alt=""
                />
              </div>
              <div className="name-contentchat">
                <span>Louis litt</span>
              </div>
            </div> */}
            {this.state.mychat.map((item,key)=>
                <div className={key == this.state.active? "list-user-chat active":"list-user-chat"} onClick={()=>this.loadChat(key)}>
                <div className="avatar-chat-group">
                  <img
                      src="https://randomuser.me/api/portraits/men/44.jpg"
                      className="avatar-chat-small-first"
                      alt=""
                  />
                   <img
                      src="https://randomuser.me/api/portraits/men/47.jpg"
                      className="avatar-chat-small-second"
                      alt=""
                  />
                </div>
                <div className="name-contentchat">
                  {/* <span>Louis litt</span> */}
                  <span>{item.nameProject}</span>
                  {/* <span>You just got Lutt up , mike</span> */}
                </div>
              </div>
            )}
            {/* <div className="list-user-chat active">
              <div className="avatar-chat-group">
                <img
                    src="https://randomuser.me/api/portraits/men/44.jpg"
                    className="avatar-chat-small-first"
                    alt=""
                />
                 <img
                    src="https://randomuser.me/api/portraits/men/47.jpg"
                    className="avatar-chat-small-second"
                    alt=""
                />
              </div>
              <div className="name-contentchat">
                <span>Louis litt</span>
                <span>You just got Lutt up , mike</span>
              </div>
            </div>
            <div className="list-user-chat">
              <div className="avatar-chat-group">
                <img
                    src="https://randomuser.me/api/portraits/men/44.jpg"
                    className="avatar-chat-small-first"
                    alt=""
                />
                 <img
                    src="https://randomuser.me/api/portraits/men/47.jpg"
                    className="avatar-chat-small-second"
                    alt=""
                />
              </div>
              <div className="name-contentchat">
                <span>Louis litt</span>
                <span>You just got Lutt up , mike</span>
              </div>
            </div>
            <div className="list-user-chat">
              <div className="avatar-chat-group">
                <img
                    src="https://randomuser.me/api/portraits/men/44.jpg"
                    className="avatar-chat-small-first"
                    alt=""
                />
                 <img
                    src="https://randomuser.me/api/portraits/men/47.jpg"
                    className="avatar-chat-small-second"
                    alt=""
                />
              </div>
              <div className="name-contentchat">
                <span>Louis litt</span>
                <span>You just got Lutt up , mike</span>
              </div>
            </div> */}
          </div>
          <div className="content-chat">
            <div className="info-current-chat">
              <div className="info-current-left">
                <img
                  src="https://randomuser.me/api/portraits/men/44.jpg"
                  className="avatar-chat"
                  alt=""
                />
                <img
                  src="https://randomuser.me/api/portraits/men/4.jpg"
                  className="avatar-chat"
                  alt=""
                />
                <img
                  src="https://randomuser.me/api/portraits/men/42.jpg"
                  className="avatar-chat"
                  alt=""
                />
                {/* <span>{typeof this.state.mychat[this.state.active].nameProject != "undefined" ? this.state.mychat[this.state.active].nameProject :<p></p>}</span> */}
              </div>
              <div className="social-media">
                <i className="fab fa-facebook-f" />
                <i className="fa fa-twitter" />
                <i className="fab fa-google" />
              </div>
            </div>
            <div className="list-content-chat">
            {this.state.currentChat ? this.state.currentChat.map((item,key)=>item.uidChat == store.getState().userAuth.uid ?   <div className="info-current">
                <img
                  src="https://randomuser.me/api/portraits/men/44.jpg"
                  className="avatar-chat"
                  alt=""
                />
                <span>
                  {item.contentChat}
                </span>
              </div>:  <div className="info-current-friend">
                <span>
                  {item.contentChat}
                </span>
                <img
                  src="https://randomuser.me/api/portraits/men/42.jpg"
                  className="avatar-chat"
                  alt=""
                />
              </div>) :<p></p>}
              {/* <div className="info-current">
                <img
                  src="https://randomuser.me/api/portraits/men/44.jpg"
                  className="avatar-chat"
                  alt=""
                />
                <span>
                  How the hell am i supposed to get a jury to believe you when i
                  am not even sure that i do ?!
                </span>
              </div> */}
              {/* <div className="info-current-friend">
                <span>
                  How the hell am i supposed to get a jury to believe you when i
                  am not even sure that i do ?!
                </span>
                <img
                  src="https://randomuser.me/api/portraits/men/42.jpg"
                  className="avatar-chat"
                  alt=""
                />
              </div>
              <div className="info-current-friend">
                <span>
                  How the hell am i supposed to get a jury to believe you when i
                  am not even sure that i do ?!
                </span>
                <img
                  src="https://randomuser.me/api/portraits/men/42.jpg"
                  className="avatar-chat"
                  alt=""
                />
              </div>
              <div className="info-current-friend">
                <span>
                  How the hell am i supposed to get a jury to believe you when i
                  am not even sure that i do ?!
                </span>
                <img
                  src="https://randomuser.me/api/portraits/men/42.jpg"
                  className="avatar-chat"
                  alt=""
                />
              </div>
              <div className="info-current">
                <img
                  src="https://randomuser.me/api/portraits/men/44.jpg"
                  className="avatar-chat"
                  alt=""
                />
                <span>
                  How the hell am i supposed to get a jury to believe you when i
                  am not even sure that i do ?!
                </span>
              </div> */}
            </div>
            <div className="input-group">
                <input
                  type="text"
                  className="form-control bg-light border-0 small"
                  placeholder="Type a message..."
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                  id="input-message"
                  onKeyPress={this.addChat}
                />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="button">
                    <i className="fa fa-paper-plane" aria-hidden="true" />
                  </button>
                </div>
              </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Chat;
