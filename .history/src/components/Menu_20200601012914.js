import React, { Component, useContext } from "react";
import Submenu from "./Submenu";
import { Link } from "react-router-dom";
import "./../css/menu.css";
import { auth, db } from "../firebaseConnect";
import store from "./store";
import { connect } from "react-redux";
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      msv: "",
      uid: store.getState().userAuth.uid,
    };
  }
  componentDidMount() {
    db.collection("users")
      .doc(this.state.uid)
      .onSnapshot((doc) => {
        this.setState({
          msv: doc.data().msv,
          username: doc.data().firstName + " " + doc.data().lastName,
        });
        this.props.setProfile(doc.data());
      });
    var docRef = db.collection("users").doc(this.state.uid);
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          if (
            typeof doc.data().courses !== "undefined" &&
            doc.data().courses.length > 0
          ) {
            console.log("nounder");
          } else {
            console.log("under");
            db.collection("users").doc(this.state.uid).update({ courses: [] });
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
            src ={store.getState().userProfile. ? store.getState().userProfile.photoURL :"https://randomuser.me/api/portraits/men/41.jpg"}
              // src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYuIRmLMgwJRhONvJimSmKhV23zgXYSqy_7g_PZ3n1QyYF4iqw&usqp=CAU"
              className="avatar"
              alt=""
            />
            <div className="textInfo">
              <span className="name">
                {/* {store.getState().userProfile.firstName}{" "}
                {store.getState().userProfile.lastName} */}
                {this.state.username}
              </span>
              <span className="msv">Personal Msv: {this.state.msv}</span>
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
                nametask="Tasks"
                righticon="fas fa-align-justify"
                active=""
              />
              <li>
                <div>
                  <i className="fas fa-tasks" />
                  <span>
                    <Link to="/Project">Project</Link>
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
                auth.signOut();
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
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setUser: (useCurrent) => {
      dispatch({
        type: "setUser",
        userParameter: useCurrent,
      });
    },
    setProfile: (profileParameter) => {
      dispatch({
        type: "setProfile",
        profileParameter: profileParameter,
      });
    },
  };
};
export default connect(null, mapDispatchToProps)(Menu);
