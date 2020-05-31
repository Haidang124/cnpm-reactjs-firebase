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
            // mychat:[],
            currentChat:[],
            // username:[],
            active:0,
            mytopics:[],
            codeCourse:[],
            fulldataTopics:{},
            keyTopic:[]
        }
    }
    loadChat=(key,keyTopic)=>{
        this.setState({
            active:key,
            codeCourse:this.state.mytopics[key].codeCourses,
        })
        this.state.fulldataTopics[this.setState.codeCourse].topic.map((item,key)=>{
          if(item.keyTopic==keyTopic)
          {

          }
        })
        console.log(this.state.mytopics[key].keyTopic)
        // alert(key)
    }
    // addNewChat=()=>{
    //     var contentChat = document.getElementById("input-message").value;
    //     this.state.mychat[this.state.active].content.push({
    //         contentChat:contentChat,
    //         uidChat:store.getState().userAuth.uid,
    //     })
    //     var newChat = {
    //         mychat: this.state.mychat,
    //       };
    //       db.collection("users").doc(store.getState().userAuth.uid).update(newChat);
    //       document.getElementById("input-message").value="";
    // }
    // addChat=(event)=>{
    //     if (event.key === "Enter") {
    //         this.addNewChat();
    //         // alert(this.state.active)
    //     }
    // }
    componentDidMount() {
        db.collection("users")
          .doc(store.getState().userAuth.uid)
          .onSnapshot((doc) => {
            this.setState({
                mytopics:doc.data().mytopics,
                codeCourse:doc.data().mytopics[0].codeCourses,
                keyTopic:doc.data().mytopics[0].keyTopic
            })
            // if(typeof doc.data().mychat[0] !== "undefined") {
            //     this.setState({
            //         currentChat:doc.data().mychat[0]
            //     })
            //}
          });
         
         db.collection('topics').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
               this.state.fulldataTopics[doc.id]=doc.data();
            })
         })
         this.state.fulldataTopics[this.state.codeCourse].topic.map((item,key)=>{
           if(item.keyTopic==this.state.keyTopic)
           {
            this.setState({
              currentChat:this.state.fulldataTopics[this.state.codeCourse].topic[key].Chat,
            })
           }
         })
        
      }
  render() {
      console.log(this.state.fulldataTopics)
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
            {this.state.mytopics.map((item,key)=>
                <div className={key == this.state.active? "list-user-chat active":"list-user-chat"} onClick={()=>this.loadChat(key,item.keyTopic)}>
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
                  <span>{item.name}</span>
                  {/* <span>You just got Lutt up , mike</span> */}
                </div>
              </div>
            )}
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
