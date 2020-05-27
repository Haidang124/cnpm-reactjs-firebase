import React, { Component } from "react";
import "./../css/project.css";
import "./../css/nav.css";
import Menu from "./Menu";
import ProjectDetail from "./ProjectDetail";
import Nav from "./Nav";

class Project extends Component {
  render() {
    return (
      <div className="project">
        <Menu />
        <div className="my-navbar">
          <Nav/>
          <section id="container">
	
  <section id="main-content">
    <section class="wrapper">
      <div class="row mt">
        <div class="col-sm-3">
          <section class="panel">
            <div class="panel-body">
              <a href="mail_compose.html" class="btn btn-compose">
                <i class="fa fa-pencil"></i>  Compose Mail
                </a>
              <ul class="nav nav-pills nav-stacked mail-nav">
                <li class="active"><a href="inbox.html"> <i class="fa fa-inbox"></i> Inbox  <span class="label label-theme pull-right inbox-notification">3</span></a></li>
                <li><a href="#"> <i class="fa fa-envelope-o"></i> Send Mail</a></li>
                <li><a href="#"> <i class="fa fa-exclamation-circle"></i> Important</a></li>
                <li><a href="#"> <i class="fa fa-file-text-o"></i> Drafts <span class="label label-info pull-right inbox-notification">8</span></a></a>
                </li>
                <li><a href="#"> <i class="fa fa-trash-o"></i> Trash</a></li>
              </ul>
            </div>
          </section>
          <section class="panel">
            <div class="panel-body">
              <ul class="nav nav-pills nav-stacked labels-info ">
                <li>
                  <h4>Friends Online</h4>
                </li>
                <li>
                  <a href="#">
                      <img src="img/friends/fr-10.jpg" class="img-circle" width="20">Laura
                      <p><span class="label label-success">Available</span></p>
                    </a>
                </li>
                <li>
                  <a href="#">
                      <img src="img/friends/fr-05.jpg" class="img-circle" width="20">David
                      <p><span class="label label-danger"> Busy</span></p>
                    </a>
                </li>
                <li>
                  <a href="#">
                      <img src="img/friends/fr-01.jpg" class="img-circle" width="20">Mark
                      <p>Offline</p>
                    </a>
                </li>
                <li>
                  <a href="#">
                      <img src="img/friends/fr-03.jpg" class="img-circle" width="20">Phillip
                      <p>Offline</p>
                    </a>
                </li>
                <li>
                  <a href="#">
                      <img src="img/friends/fr-02.jpg" class="img-circle" width="20">Joshua
                      <p>Offline</p>
                    </a>
                </li>
              </ul>
              <a href="#"> + Add More</a>
              <div class="inbox-body text-center inbox-action">
                <div class="btn-group">
                  <a class="btn mini btn-default" href="javascript:;">
                    <i class="fa fa-power-off"></i>
                    </a>
                </div>
                <div class="btn-group">
                  <a class="btn mini btn-default" href="javascript:;">
                    <i class="fa fa-cog"></i>
                    </a>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div class="col-sm-9">
          <section class="panel">
            <header class="panel-heading wht-bg">
              <h4 class="gen-case">
                  Inbox (3)
                  <form action="#" class="pull-right mail-src-position">
                    <div class="input-append">
                      <input type="text" class="form-control " placeholder="Search Tasks"/>
                    </div>
                  </form>
                </h4>
            </header>
            <div class="panel-body minimal">
              <div class="mail-option">
                <div class="chk-all">
                  <div class="pull-left mail-checkbox">
                    <input type="checkbox" class=""/>
                  </div>
                  <div class="btn-group">
                    <a data-toggle="dropdown" href="#" class="btn mini all">
                      All
                      <i class="fa fa-angle-down "></i>
                      </a>
                    <ul class="dropdown-menu">
                      <li><a href="#"> None</a></li>
                      <li><a href="#"> Read</a></li>
                      <li><a href="#"> Unread</a></li>
                    </ul>
                  </div>
                </div>
                <div class="btn-group">
                  <a data-original-title="Refresh" data-placement="top" data-toggle="dropdown" href="#" class="btn mini tooltips">
                    <i class=" fa fa-refresh"></i>
                    </a>
                </div>
                <div class="btn-group hidden-phone">
                  <a data-toggle="dropdown" href="#" class="btn mini blue">
                    More
                    <i class="fa fa-angle-down "></i>
                    </a>
                  <ul class="dropdown-menu">
                    <li><a href="#"><i class="fa fa-pencil"></i> Mark as Read</a></li>
                    <li><a href="#"><i class="fa fa-ban"></i> Spam</a></li>
                    <li class="divider"></li>
                    <li><a href="#"><i class="fa fa-trash-o"></i> Delete</a></li>
                  </ul>
                </div>
                <div class="btn-group">
                  <a data-toggle="dropdown" href="#" class="btn mini blue">
                    Move to
                    <i class="fa fa-angle-down "></i>
                    </a>
                  <ul class="dropdown-menu">
                    <li><a href="#"><i class="fa fa-pencil"></i> Mark as Read</a></li>
                    <li><a href="#"><i class="fa fa-ban"></i> Spam</a></li>
                    <li class="divider"></li>
                    <li><a href="#"><i class="fa fa-trash-o"></i> Delete</a></li>
                  </ul>
                </div>
                <ul class="unstyled inbox-pagination">
                  <li><span>1-50 of 99</span></li>
                  <li>
                    <a class="np-btn" href="#"><i class="fa fa-angle-left  pagination-left"></i></a>
                  </li>
                  <li>
                    <a class="np-btn" href="#"><i class="fa fa-angle-right pagination-right"></i></a>
                  </li>
                </ul>
              </div>
              <div class="table-inbox-wrap ">
                <table class="table table-inbox table-hover">
                  <tbody>
                    <tr class="unread">
                      <td class="inbox-small-cells">
                        <input type="checkbox" class="mail-checkbox"/>
                      </td>
                      <td class="inbox-small-cells"><i class="fa fa-star"></i></td>
                      <td class="view-message  dont-show"><a href="mail_view.html">Google Inc.</a></td>
                      <td class="view-message "><a href="mail_view.html">Your new account is ready.</a></td>
                      <td class="view-message  inbox-small-cells"><i class="fa fa-paperclip"></i></td>
                      <td class="view-message  text-right">08:10 AM</td>
                    </tr>
                    <tr class="unread">
                      <td class="inbox-small-cells">
                        <input type="checkbox" class="mail-checkbox"/>
                      </td>
                      <td class="inbox-small-cells"><i class="fa fa-star"></i></td>
                      <td class="view-message dont-show"><a href="mail_view.html">Mark Thompson</a></td>
                      <td class="view-message"><a href="mail_view.html">Last project updates</a></td>
                      <td class="view-message inbox-small-cells"></td>
                      <td class="view-message text-right">March 15</td>
                    </tr>
                    <tr class="unread">
                      <td class="inbox-small-cells">
                      <input type="checkbox" class="mail-checkbox"/>
                      </td>
                      <td class="inbox-small-cells"><i class="fa fa-star"></i></td>
                      <td class="view-message dont-show"><a href="mail_view.html">Wonder Corp.</a></td>
                      <td class="view-message"><a href="mail_view.html">Thanks for your registration</a></td>
                      <td class="view-message inbox-small-cells"></td>
                      <td class="view-message text-right">March 15</td>
                    </tr>
                    <tr class="">
                      <td class="inbox-small-cells">
                        <input type="checkbox" class="mail-checkbox"/>
                      </td>
                      <td class="inbox-small-cells"><i class="fa fa-star"></i></td>
                      <td class="view-message dont-show"><a href="mail_view.html">Facebook</a></td>
                      <td class="view-message"><a href="mail_view.html">New Friendship Request</a></td>
                      <td class="view-message inbox-small-cells"></td>
                      <td class="view-message text-right">March 13</td>
                    </tr>
                    <tr class="">
                      <td class="inbox-small-cells">
                        <input type="checkbox" class="mail-checkbox"/>
                      </td>
                      <td class="inbox-small-cells"><i class="fa fa-star inbox-started"></i></td>
                      <td class="view-message dont-show"><a href="mail_view.html">Mark Webber <span class="label label-danger pull-right">urgent</span></a></td>
                      <td class="view-message"><a href="mail_view.html">The server is down</a></td>
                      <td class="view-message inbox-small-cells"></td>
                      <td class="view-message text-right">March 09</td>
                    </tr>
                    <tr class="">
                      <td class="inbox-small-cells">
                        <input type="checkbox" class="mail-checkbox"/>
                      </td>
                      <td class="inbox-small-cells"><i class="fa fa-star inbox-started"></i></td>
                      <td class="view-message dont-show"><a href="mail_view.html">Facebook</a></td>
                      <td class="view-message"><a href="mail_view.html">New message from Patrick S.</a></td>
                      <td class="view-message inbox-small-cells"><i class="fa fa-paperclip"></i></td>
                      <td class="view-message text-right">March 08</td>
                    </tr>
                    <tr class="">
                      <td class="inbox-small-cells">
                        <input type="checkbox" class="mail-checkbox"/>
                      </td>
                      <td class="inbox-small-cells"><i class="fa fa-star inbox-started"></i></td>
                      <td class="view-message dont-show">Paypal inc.</td>
                      <td class="view-message">New payment received</td>
                      <td class="view-message inbox-small-cells"><i class="fa fa-paperclip"></i></td>
                      <td class="view-message text-right">March 04</td>
                    </tr>
                    <tr class="">
                      <td class="inbox-small-cells">
                        <input type="checkbox" class="mail-checkbox"/>
                      </td>
                      <td class="inbox-small-cells"><i class="fa fa-star"></i></td>
                      <td class="view-message dont-show">Andrea <span class="label label-success pull-right">girlfriend</span></td>
                      <td class="view-message view-message">Weekend plans</td>
                      <td class="view-message inbox-small-cells"></td>
                      <td class="view-message text-right">March 04</td>
                    </tr>
                    <tr class="">
                      <td class="inbox-small-cells">
                        <input type="checkbox" class="mail-checkbox"/>
                      </td>
                      <td class="inbox-small-cells"><i class="fa fa-star"></i></td>
                      <td class="view-message dont-show">David Green</td>
                      <td class="view-message view-message">Soccer tickets</td>
                      <td class="view-message inbox-small-cells"></td>
                      <td class="view-message text-right">February 22</td>
                    </tr>
                    <tr class="">
                      <td class="inbox-small-cells">
                        <input type="checkbox" class="mail-checkbox"/>
                      </td>
                      <td class="inbox-small-cells"><i class="fa fa-star"></i></td>
                      <td class="view-message dont-show">Evelyn <span class="label label-info pull-right">family</span></td>
                      <td class="view-message view-message">Surprise party</td>
                      <td class="view-message inbox-small-cells"></td>
                      <td class="view-message text-right">February 19</td>
                    </tr>
                    <tr class="">
                      <td class="inbox-small-cells">
                        <input type="checkbox" class="mail-checkbox"/>
                      </td>
                      <td class="inbox-small-cells"><i class="fa fa-star inbox-started"></i></td>
                      <td class="view-message dont-show">Martin Moore</td>
                      <td class="view-message">Hey mate!</td>
                      <td class="view-message inbox-small-cells"></td>
                      <td class="view-message text-right">February 17</td>
                    </tr>
                    <tr class="">
                      <td class="inbox-small-cells">
                        <input type="checkbox" class="mail-checkbox"/>
                      </td>
                      <td class="inbox-small-cells"><i class="fa fa-star inbox-started"></i></td>
                      <td class="dont-show">Facebook</td>
                      <td class="view-message">Paul published on your wall</td>
                      <td class="view-message inbox-small-cells"><i class="fa fa-paperclip"></i></td>
                      <td class="view-message text-right">February 14</td>
                    </tr>
                    <tr class="">
                      <td class="inbox-small-cells">
                        <input type="checkbox" class="mail-checkbox"/>
                      </td>
                      <td class="inbox-small-cells"><i class="fa fa-star"></i></td>
                      <td class="view-message dont-show">Steve Stoll</td>
                      <td class="view-message">Update developed</td>
                      <td class="view-message inbox-small-cells"><i class="fa fa-paperclip"></i></td>
                      <td class="view-message text-right">February 11</td>
                    </tr>
                    <tr class="">
                      <td class="inbox-small-cells">
                        <input type="checkbox" class="mail-checkbox"/>
                      </td>
                      <td class="inbox-small-cells"><i class="fa fa-star"></i></td>
                      <td class="dont-show">Laura Anton</td>
                      <td class="view-message view-message">New subscription</td>
                      <td class="view-message inbox-small-cells"></td>
                      <td class="view-message text-right">January 14</td>
                    </tr>
                    <tr class="">
                      <td class="inbox-small-cells">
                        <input type="checkbox" class="mail-checkbox"/>
                      </td>
                      <td class="inbox-small-cells"><i class="fa fa-star"></i></td>
                      <td class="view-message dont-show">Ryanair</td>
                      <td class="view-message">Your flight tickets</td>
                      <td class="view-message inbox-small-cells"></td>
                      <td class="view-message text-right">January 07</td>
                    </tr>
                    <tr class="">
                      <td class="inbox-small-cells">
                        <input type="checkbox" class="mail-checkbox"/>
                      </td>
                      <td class="inbox-small-cells"><i class="fa fa-star"></i></td>
                      <td class="view-message dont-show">Twitter</td>
                      <td class="view-message">Password reset</td>
                      <td class="view-message inbox-small-cells"></td>
                      <td class="view-message text-right">January 04</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  </section>
        {/* <div className="container-project">
          <div className="all-project">
            <i className="fab fa-affiliatetheme" />
            <div className="right-all-project">
              <span className="name-project">Manager My Project</span>
              <div className="Selection">
                <span>Projects</span>
                <span>Workload</span>
              </div>
            </div>
          </div>
          <hr />
          <div className="title-project">
            <button className="btn-add-project">Add Project</button>
            <span className="status">Status</span>
            <span className="process">Process</span>
            <span className="course">Course</span>
            <span className="start">Start</span>
            <span className="dates">Deadline</span>
          </div>
          <ProjectDetail
            statusText="In Progress"
            status="status-active"
            percent="30"
          />
          <ProjectDetail
            statusText="Complete"
            status="status-complete"
            percent="100"
          />
          <ProjectDetail
            statusText="In Progress"
            status="status-active"
            percent="0"
          />
        </div> */}
        </div>
      </div>
    );
  }
}

export default Project;
