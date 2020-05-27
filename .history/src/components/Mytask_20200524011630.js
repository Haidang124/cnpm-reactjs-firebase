import React, { Component } from "react";
import "./../css/task.css";
import Menu from "./Menu";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
class Mytask extends Component {
  render() {
    return (
      <div className="Mytask">
        <Menu />
        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow my-navbar">
          <button
            id="sidebarToggleTop"
            class="btn btn-link d-md-none rounded-circle mr-3"
          >
            <i class="fa fa-bars"></i>
          </button>

          <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
            <div class="input-group">
              <input
                type="text"
                class="form-control bg-light border-0 small"
                placeholder="Search for..."
                aria-label="Search"
                aria-describedby="basic-addon2"
              />
              <div class="input-group-append">
                <button class="btn btn-primary" type="button">
                  <i class="fas fa-search fa-sm"></i>
                </button>
              </div>
            </div>
          </form>

          <ul class="navbar-nav ml-auto">
            {/* <Dropdown isOpen={true}> */}
              {/* <DropdownToggle caret>Dropdown</DropdownToggle> */}
              {/* <DropdownMenu>
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem>Some Action</DropdownItem>
                <DropdownItem disabled>Action (disabled)</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Foo Action</DropdownItem>
                <DropdownItem>Bar Action</DropdownItem>
                <DropdownItem>Quo Action</DropdownItem>
              </DropdownMenu>
            </Dropdown> */}
            <li className="dropdown">
  <a className="dropdown-toggle" data-toggle="dropdown" href="#">
      <i className="fa fa-user fa-fw"></i> <i className="fa fa-caret-down"></i>
  </a>
  <ul className="dropdown-menu dropdown-user">
      <li><a href="#"><i className="fa fa-user fa-fw"></i> User Profile</a>
      </li>
      <li><a href="#"><i className="fa fa-gear fa-fw"></i> Settings</a>
      </li>
      <li className="divider"></li>
      <li><a href="login.html"><i className="fa fa-sign-out fa-fw"></i> Logout</a>
      </li>
  </ul>
</li>
          </ul>
        </nav>
        {/* <div class="row row-task">
          <div class="col-4">
            <div class="card shadow mb-4">
              <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Planned </h6>
              </div>
              <div class="card-body"></div>
            </div>
          </div>
          <div class="col-4 column-task">
            <div class="card shadow mb-4">
              <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">
                  In Progress Task
                </h6>
              </div>
              <div class="card-body"></div>
            </div>
          </div>
          <div class="col-4">
            <div class="card shadow mb-4">
              <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Complete Task</h6>
              </div>
              <div class="card-body"></div>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}

export default Mytask;