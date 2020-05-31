import React, { Component } from "react";
import "./../css/profile.css";

import Menu from "./Menu";
import Nav from "./Nav";
import { Button } from "reactstrap";
import store from "./store";
import { db } from "../firebaseConnect";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      fileUploadState: "",
      firstName:store.getState().userProfile.firstName,
      lastName:store.getState().userProfile.lastName,
      email:store.getState().userProfile.email,
      msv:store.getState().userProfile.msv,
      uid:store.getState().userAuth.uid
   };
  }
  componentDidMount() {
    db.collection("users")
      .doc(this.state.uid)
      .onSnapshot((doc) => {
        this.setState({
          msv:doc.data().msv,
          firstName:doc.data().firstName,
          lastName:doc.data().lastName,
          email:doc.data().email,
          fileUploadState:[]
        })
      });
  }
  saveProfile=()=>{
    var msvNew =document.getElementById("msv-new").value;
    var firstNew =document.getElementById("first-new").value;
    var lastNew =document.getElementById("last-new").value;
    var currentInfo = store.getState().userProfile;
    currentInfo.lastName=lastNew;
    currentInfo.msv=msvNew;
    currentInfo.firstName=firstNew;
    console.log(currentInfo);
    if(msvNew != "" && firstNew != "" && lastNew !="")
    {db.collection("users").doc(this.state.uid).update(currentInfo);}
    else{
      alert("Vui lòng nhập đủ thông tin")
    }
  }
  fileUploadButton = () => {
    document.getElementById("file-avatar").click();
    document.getElementById("file-avatar").onchange = (e) => {
      this.setState({
        fileUploadState: document.getElementById("file-avatar").value,
      });
     console.log() 
    };
    // console.log( e.target.file[0])
  };
  render() {
    return (
      <div className="edit-profile">
        <Menu />
        <div className="my-navbar">
          <Nav />
          <div className="row">
            <div className="col-md-4">
              <div className="card card-user">
                <div className="image">
                  <img src="https://unsplash.it/1080/720?image=376" alt="..." />
                </div>
                <div className="card-body">
                  <div className="author">
                    <a href="#">
                      <img
                        className="avatar border-gray"
                        src="https://randomuser.me/api/portraits/men/44.jpg"
                        alt="..."
                      />
                      <h5 className="title">{store.getState().userProfile.firstName}{" "}
                {this.state.lastName}</h5>
                    </a>
                    <p className="description">@{store.getState().userProfile.email}</p>
                  </div>
                  <p className="description text-center">
                    "I like the way you work it <br />
                    No diggity <br />I wanna bag it up"
                  </p>
                </div>
                <div className="card-footer">
                  <hr />
                  <div className="button-container">
                    <div className="row-footer">
                      <div>
                        <h5 className="text-footer-profile">
                          42<span>Files</span>
                        </h5>
                      </div>
                      <div>
                        <h5 className="text-footer-profile">
                          4<span>Courses</span>
                        </h5>
                      </div>
                      <div>
                        <h5 className="text-footer-profile">
                          12<span>Projects</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card card-user">
                <div className="card-header">
                  <h5 className="card-title">My Profile</h5>
                </div>
                <div className="card-body">
                  <form>
                    <div className="row">
                      <div className="col-md-4 px-1">
                        <div className="form-group">
                          <label>Mã sinh viên</label>
                          <input
                            type="text"
                            className="form-control"
                            // placeholder="msv"
                            placeholder={this.state.msv}
                            id="msv-new"
                          />
                        </div>
                      </div>
                      <div className="col-md-5 pl-1">
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">
                            Email address
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            disabled
                            id="email-new"
                            placeholder={store.getState().userProfile.email}
                          />
                        </div>
                      </div>
                      <div className="col-md-3 pl-1">
                        <div className="form-group">
                        <label htmlFor="exampleInputEmail1">
                        Giới tính
                          </label>
                          <select id="gioitinh">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 pr-1">
                        <div className="form-group">
                          <label>First Name</label>
                          <input
                            type="text"
                            className="form-control"
                            // placeholder="First Name"
                            id="first-new"
                            placeholder={this.state.firstName}
                          />
                        </div>
                      </div>
                      <div className="col-md-6 pl-1">
                        <div className="form-group">
                          <label>Last Name</label>
                          <input
                            type="text"
                            className="form-control"
                            // placeholder="Last Name"
                            id="last-new"
                            placeholder={this.state.lastName}
                          />
                        </div>
                      </div>
                    </div>
                    <div class="about-me">
                      <div class="col-md-12">
                        <div class="form-group">
                          <label>About Me</label>
                          <textarea class="form-control textarea">
                            About me...
                          </textarea>
                        </div>
                      </div>
                    </div>
                    <div className="upload-photo">
                      <div className="update ml-auto mr-auto">
                        <input type="file" id="file-avatar" />
                        <Button color="primary" onClick={this.fileUploadButton}>
                          <i class="fa fa-upload" aria-hidden="true"></i> Upload
                          a new photo!{" "}
                        </Button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <Button color="info" onClick={this.saveProfile}>Save Changes</Button>
        </div>
      </div>
    );
  }
}

export default Profile;
