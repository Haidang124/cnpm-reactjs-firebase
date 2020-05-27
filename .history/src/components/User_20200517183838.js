import React, { Component } from "react";

class User extends Component {
  render() {
    return (
      <li className="user">
        <div className="msv user-msv">{this.props.msv}</div>
        <div className="name user-name">{this.props.nameuser}</div>
        <div className="email user-email">{this.props.email}</div>
        <div className="permission permission-user">{this.props.permission}</div>
        <div className="edit-remove">
          <i className="fas fa-edit" />
          <i className="fa fa-remove" />
        </div>
      </li>
    );
  }
}

export default User;
