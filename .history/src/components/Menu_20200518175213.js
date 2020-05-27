import React, { Component, useContext } from "react";
import Submenu from "./Submenu";
import { Link } from "react-router-dom";
import "./../css/menu.css";
import { auth, db } from "../firebaseConnect";
import store from "./store";
var docData1 = {
  courses: [
    {
      name: "121212",
      tinchi: "somewhe1ssssre@gsdmail.com",
    },

    {
      name: "Assdsdsd",
      tinchi: "somssdssdsds1ng@gmail.com",
    },
  ],
};
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mycourse: "123",
    };
  }
  componentDidMount() {
    var docRef = db.collection("users").doc(store.getState().userProfile.uid);
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          if (typeof doc.data().courses !== 'undefined' && doc.data().courses.length > 0) {
            // courses(typeof doc.data().courses)
            console.log("nounder")
          }
          else{
            console.log("under")
            db.collection("users")
              .doc(store.getState().userProfile.uid)
              .update({ courses: [] });
          }
        } else {
          console.log("No such document!");
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  }
  render() {
    return (
      <div>
        <div className="container-left">
          <div className="left-top">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              className="avatar"
              alt=""
            />
            <div className="textInfo">
              <span className="name">
                {store.getState().userProfile.firstName}{" "}
                {store.getState().userProfile.lastName}
              </span>
              <span className="msv">
                Personal Msv: {store.getState().userProfile.msv}
              </span>
            </div>
          </div>
          <div className="left-bottom">
            <ul>
              <Submenu
                lefticon="fas fa-home"
                nametask="Home"
                righticon="fas fa-align-justify"
                active=""
              />
              <Submenu
                lefticon="fas fa-users"
                nametask="Courses"
                righticon="fas fa-align-justify"
                active=""
              />
              <Submenu
                lefticon="fab fa-facebook-messenger"
                nametask="Chat"
                righticon="fas fa-align-justify"
                active=""
              />
              <Submenu
                lefticon="fas fa-book"
                nametask="Documents"
                righticon="fas fa-align-justify"
                active=""
              />
              <li>
                <div>
                  <i className="fas fa-tasks" />
                  <span>
                    <Link to="/Tasks">Tasks</Link>
                  </span>
                </div>
                <div>
                  <div className="tasks">
                    <span className="number-tasks">2</span>
                  </div>
                  <i className="fas fa-align-justify" />
                </div>
              </li>
              <Submenu
                lefticon="far fa-user-circle"
                nametask="Profile"
                righticon="fas fa-align-justify"
                active=""
              />
            </ul>
            <div
              className="sign-out"
              onClick={() => {
                // await this.getdata();

                // console.log(this.state.mycourse);
                auth.signOut();
                // this.update();
                // this.update1();
                // this.getdata();
                // getdata();
              }}
            >
              <span>SIGN OUT </span>
              <i className="fas fa-sign-out-alt" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
