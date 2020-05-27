import React, { Component, useContext } from "react";
import Submenu from "./Submenu";
import { Link } from "react-router-dom";
import "./../css/menu.css";
import { auth, db } from "../firebaseConnect";
import store from "./store";
import { connect } from "react-redux";
//  getdata = () => {
//   var docRef = db.collection("users").doc("4ypZrnY1CFbUoDeIyYRPoKpCeDQ2");

//   docRef.get()
//   .then((doc) => {
//     if (doc.exists) {
//       console.log("Document data:", doc.data());
//       this.setState({
//         mycourse : doc.data
//       })
//       console.log("setState");
//     } else {
//       console.log("No such document!");
//     }
//   }).catch(function(error) {
//     console.log("Error getting document:", error);
//   });

// };
// var docData = {
//   stringExample: "Hello world!",
//   booleanExample: true,
//   numberExample: 3.14159265,
//   arrayExample: [5, true, "hello"],
//   nullExample: null,
//   objectExample: {
//     a: 5,
//     b: {
//       nested: "foo",
//     },
//   },
// };
// var docData1 = {
//   courses: [
//     {
//       name: "121212",
//       tinchi: "somewhe1ssssre@gsdmail.com",
//     },

//     {
//       name: "Assdsdsd",
//       tinchi: "somssdssdsds1ng@gmail.com",
//     },
//   ],
// };
// export const getdata = () => {
//   console.log("without class")
//   var docRef = db.collection("users").doc("4ypZrnY1CFbUoDeIyYRPoKpCeDQ2");

//   docRef
//     .get()
//     .then(function (doc) {
//       if (doc.exists) {
//         // console.log("Document data:", doc.data().Courses.pes);
//         var mydata = doc.data();
//         console.log(mydata);
//       } else {
//         console.log("No such document!");
//       }
//     })
//     .catch(function (error) {
//       console.log("Error getting document:", error);
//     });
// };
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // mycourse: "123",
      username:  store.getState().userProfile.firstName+" "
      +store.getState().userProfile.lastName,
      msv : store.getState().userProfile.msv
    };
  }
  componentDidMount() {
    db.collection("users")
      .doc(store.getState().userProfile.uid)
      .onSnapshot((doc) => {
        console.log(doc.data())
        // console.log(store.getState().userProfile.msv) 
        this.props.setProfile(doc.data());
        this.setState({
          msv:doc.data().msv,
          username:doc.data().firstName+" "+doc.data().mlastNamesv

        })
        // console.log(store.getState().userProfile.msv) 
      });
      
    }
  // getdata = async () => {

  //   db.collection("users").doc("4ypZrnY1CFbUoDeIyYRPoKpCeDQ2")
  // .get()
  // .then((doc) => {
  //   if (doc.exists) {
  //     console.log("Document data:", doc.data());
  //     this.setState({
  //       mycourse:doc.data()
  //     })
  //     console.log("!23")
  //     console.log(this.state.mycourse)
  //   } else {
  //     // doc.data() will be undefined in this case
  //     console.log("No such document!");
  //   }
  // }).catch(function(error) {
  //   console.log("Error getting document:", error);
  // });

  // };
  // update = () => {
  //   db.collection("users")
  //     .doc("49MAY6NUpDWPreJOhM47PV0VF0i2")
  //     .update(docData1);
  // };
  // update1 = () => {
  //   db.collection("users").doc("4ypZrnY1CFbUoDeIyYRPoKpCeDQ2").update(docData1);
  // };
  // getdata = () => {
  //   var docRef = db.collection("users").doc("4ypZrnY1CFbUoDeIyYRPoKpCeDQ2");

  //   docRef
  //     .get()
  //     .then(function (doc) {
  //       if (doc.exists) {
  //         // console.log("Document data:", doc.data().Courses.pes);
  //         var mydata = doc.data()
  //       } else {
  //         console.log("No such document!");
  //       }
  //     })
  //     .catch(function (error) {
  //       console.log("Error getting document:", error);
  //     });
  // };
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
              src="https://randomuser.me/api/portraits/men/44.jpg"
              className="avatar"
              alt=""
            />
            <div className="textInfo">
              <span className="name">
                {/* {store.getState().userProfile.firstName}{" "}
                {store.getState().userProfile.lastName} */}
                {this.state.username}
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
const mapDispatchToProps = (dispatch , ownProps) =>{
  return {
    setUser : (useCurrent) => {
      dispatch({
        type:"setUser",
        userParameter :useCurrent
      })
    },
    setProfile: (profileParameter) => {
      dispatch({
        type: "setProfile",
        profileParameter: profileParameter,
      });
    }
  }
}
 export default connect( null,mapDispatchToProps)(Menu);
