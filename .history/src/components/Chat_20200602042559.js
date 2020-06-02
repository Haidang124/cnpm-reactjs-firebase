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
    this.state = {
      active: 0,
      mytopics: [],
      codeCourse: [],
      fulldataTopics: {},
      keyTopic: [],
    };
  }
  loadChat = async (key, keyTopic) => {
    await this.setState({
      active: key,
      codeCourse: this.state.mytopics[key].codeCourses,
      keyTopic: this.state.mytopics[key].keyTopic,
    });
   
  };
  addNewChat = () => {
    var contentChat = document.getElementById("input-message").value;
    var newMessage = {
      contentChat: contentChat,
      uidChat: store.getState().userAuth.uid,
      photoURL:store.getState().userProfile.photoURL,
      username:store.getState().userProfile.firstName + " " + store.getState().userProfile.lastName
    };
    this.state.fulldataTopics[this.state.codeCourse].topic.map((item, key) => {
      if (item.keyTopic == this.state.keyTopic) {
       
        var Newchattopic = this.state.fulldataTopics[this.state.codeCourse].topic;
        Newchattopic[key].Chat.push(newMessage);
        var newChat = {
          topic: Newchattopic,
        };
        db.collection("topics").doc(this.state.codeCourse).update(newChat);
        document.getElementById("input-message").value="";
      }
    });
    
  };
  addChat = (event) => {
    if (event.key === "Enter") {
      this.addNewChat();
    }
  };
  async componentDidMount() {
    var fulldataTopics = {};
    db.collection("topics").onSnapshot((snapshot) => {
      snapshot.forEach((doc) => {
        fulldataTopics[doc.id] = doc.data();
      });
      this.setState({
        fulldataTopics: fulldataTopics,
      });
    });
   
    db.collection("users")
      .doc(store.getState().userAuth.uid)
      .onSnapshot((doc) => {
        if( doc.data().mytopics[0])
        {
          this.setState({
            mytopics: doc.data().mytopics,
            codeCourse: doc.data().mytopics[0].codeCourses,
            keyTopic: doc.data().mytopics[0].keyTopic,
          });
        }
      });
  }
  render() {
    // console.log(this.state.fulldataTopics[this.state.codeCourse]);
    return (
      <div className="chat">
        <Menu />
        <div className="content-right">
          <Nav />
          <div className="chat-container">
            <div className="list-chat">
              <div className="info-user-chat">
                <img
                   src ={store.getState().userProfile.photoURL ? store.getState().userProfile.photoURL :"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYuIRmLMgwJRhONvJimSmKhV23zgXYSqy_7g_PZ3n1QyYF4iqw&usqp=CAU"}
                  className="avatar-chat"
                  alt=""
                />
                <span>{store.getState().userProfile.firstName + " " + store.getState().userProfile.lastName}</span>
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
              {this.state.mytopics.map((item, key) => (
                <div
                  className={
                    key == this.state.active
                      ? "list-user-chat active"
                      : "list-user-chat"
                  }
                  onClick={() => this.loadChat(key, item.keyTopic)}
                >
                  <div className="avatar-chat-group">
                    <img
                       src ={store.getState().userProfile.photoURL ? store.getState().userProfile.photoURL :"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYuIRmLMgwJRhONvJimSmKhV23zgXYSqy_7g_PZ3n1QyYF4iqw&usqp=CAU"}
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
                    <span>{item.name}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="content-chat">
              <div className="info-current-chat">
                <div className="info-current-left">
                  <img
                     src ={store.getState().userProfile.photoURL ? store.getState().userProfile.photoURL :"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYuIRmLMgwJRhONvJimSmKhV23zgXYSqy_7g_PZ3n1QyYF4iqw&usqp=CAU"}
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
                {/* <div className="info-current">
                  <img
                     src ={store.getState().userProfile.photoURL ? store.getState().userProfile.photoURL :"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYuIRmLMgwJRhONvJimSmKhV23zgXYSqy_7g_PZ3n1QyYF4iqw&usqp=CAU"}


                    className="avatar-chat"
                    alt=""
                  />
                  <span>
                   
                    nhanh leen cai
                  </span>
                </div> */}
                {this.state.fulldataTopics[this.state.codeCourse] ? (
                  this.state.fulldataTopics[this.state.codeCourse].topic.map(
                    (item, key) =>
                      item.keyTopic == this.state.keyTopic ? (
                        // console.log
                        // this.setState({

                        // })
                        item.Chat.map((itemChat, keyChat) =>
                          itemChat.uidChat == store.getState().userAuth.uid ? (
                            <div className="info-current">
                              <img
                                 src ={store.getState().userProfile.photoURL ? store.getState().userProfile.photoURL :"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYuIRmLMgwJRhONvJimSmKhV23zgXYSqy_7g_PZ3n1QyYF4iqw&usqp=CAU"}
                                className="avatar-chat"
                                alt=""
                              />
                              <span>
                                {/* {itemChat.contentChat} */}
                                {/* {console.log(itemChat)} */}
                                {
                                  this.state.fulldataTopics[
                                    this.state.codeCourse
                                  ].topic[key].Chat[keyChat].contentChat
                                  ale
                                }
                                {/* nhanh leen */}
                                {/* {item.} */}
                              </span>
                            </div>
                          ) : (
                            <div className="info-current-friend">
                              <span>
                                {
                                  
                                  this.state.fulldataTopics[
                                    this.state.codeCourse
                                  ].topic[key].Chat[keyChat].contentChat+ " :" 
                                }
                                <span className="name-friend-chat">{this.state.fulldataTopics[
                                    this.state.codeCourse
                                  ].topic[key].Chat[keyChat].username}</span>
                              </span>
                              {/* <span> {itemChat.contentChat}</span> */}
                              <img
                                // src="https://randomuser.me/api/portraits/men/42.jpg"
                                src ={ this.state.fulldataTopics[
                                  this.state.codeCourse
                                ].topic[key].Chat[keyChat].photoURL ?  this.state.fulldataTopics[
                                  this.state.codeCourse
                                ].topic[key].Chat[keyChat].photoURL :"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYuIRmLMgwJRhONvJimSmKhV23zgXYSqy_7g_PZ3n1QyYF4iqw&usqp=CAU"}
                                className="avatar-chat"
                                alt=""
                              />
                            </div>
                          )
                        )
                      ) : (
                        //  itemChat.uidChat == store.getState().userAuth.uid ? ():(<p></p>)
                        // <div className="info-current">
                        //   <img
                        //      src ={store.getState().userProfile.photoURL ? store.getState().userProfile.photoURL :"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYuIRmLMgwJRhONvJimSmKhV23zgXYSqy_7g_PZ3n1QyYF4iqw&usqp=CAU"}


                        //     className="avatar-chat"
                        //     alt=""
                        //   />
                        //   <span>
                        //     {item.Chat[0].contentChat}
                        //     {/* nhanh leen */}
                        //     {/* {item.} */}
                        //   </span>
                        // </div>
                        <p></p>
                        // <div className="info-current-friend">
                        //   <span>
                        //   </span>
                        //   <img
                        //     src="https://randomuser.me/api/portraits/men/42.jpg"
                        //     className="avatar-chat"
                        //     alt=""
                        //   />
                        // </div>
                      )
                  )
                ) : (
                  <p></p>
                )}
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
