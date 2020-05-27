import React, { Component } from "react";
import { Link, NavLink, Route } from "react-router-dom";

class Submenu extends Component {
  render() {
    return (
      <div>
       <li >
          <div>
            <i className={this.props.lefticon} />
            <span><Link to={"/"+{this.props.nametask}+""+""}>{this.props.nametask}</Link></span>
             {/* <span onClick={()=>console.log("da click")}>{this.props.nametask}</span> */}
          </div>
          <i className={this.props.righticon} />
        </li>
      </div>
    );
  }
}

export default Submenu;
