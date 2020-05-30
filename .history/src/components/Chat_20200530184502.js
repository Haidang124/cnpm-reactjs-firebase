import React, { Component } from 'react';
import Menu from './Menu';
import "./../css/chat.css";

class Chat extends Component {
    render() {
        return (
            <div className="chat">
                <Menu />
                <div className="col-md-4 bg-white ">
  <div className=" row border-bottom padding-sm" style={{height: '40px'}}>
    Member
  </div>
  {/* =============================================================== */}
  {/* member list */}
  <ul className="friend-list">
    <li className="active bounceInDown">
      <a href="#" className="clearfix">
        <img src="https://bootdey.com/img/Content/user_1.jpg" alt="" className="img-circle" />
        <div className="friend-name">	
          <strong>John Doe</strong>
        </div>
        <div className="last-message text-muted">Hello, Are you there?</div>
        <small className="time text-muted">Just now</small>
        <small className="chat-alert label label-danger">1</small>
      </a>
    </li>
    <li>
      <a href="#" className="clearfix">
        <img src="https://bootdey.com/img/Content/user_2.jpg" alt="" className="img-circle" />
        <div className="friend-name">	
          <strong>Jane Doe</strong>
        </div>
        <div className="last-message text-muted">Lorem ipsum dolor sit amet.</div>
        <small className="time text-muted">5 mins ago</small>
        <small className="chat-alert text-muted"><i className="fa fa-check" /></small>
      </a>
    </li> 
    <li>
      <a href="#" className="clearfix">
        <img src="https://bootdey.com/img/Content/user_3.jpg" alt="" className="img-circle" />
        <div className="friend-name">	
          <strong>Kate</strong>
        </div>
        <div className="last-message text-muted">Lorem ipsum dolor sit amet.</div>
        <small className="time text-muted">Yesterday</small>
        <small className="chat-alert text-muted"><i className="fa fa-reply" /></small>
      </a>
    </li>  
    <li>
      <a href="#" className="clearfix">
        <img src="https://bootdey.com/img/Content/user_1.jpg" alt="" className="img-circle" />
        <div className="friend-name">	
          <strong>Kate</strong>
        </div>
        <div className="last-message text-muted">Lorem ipsum dolor sit amet.</div>
        <small className="time text-muted">Yesterday</small>
        <small className="chat-alert text-muted"><i className="fa fa-reply" /></small>
      </a>
    </li>     
    <li>
      <a href="#" className="clearfix">
        <img src="https://bootdey.com/img/Content/user_2.jpg" alt="" className="img-circle" />
        <div className="friend-name">	
          <strong>Kate</strong>
        </div>
        <div className="last-message text-muted">Lorem ipsum dolor sit amet.</div>
        <small className="time text-muted">Yesterday</small>
        <small className="chat-alert text-muted"><i className="fa fa-reply" /></small>
      </a>
    </li>        
    <li>
      <a href="#" className="clearfix">
        <img src="https://bootdey.com/img/Content/user_6.jpg" alt="" className="img-circle" />
        <div className="friend-name">	
          <strong>Kate</strong>
        </div>
        <div className="last-message text-muted">Lorem ipsum dolor sit amet.</div>
        <small className="time text-muted">Yesterday</small>
        <small className="chat-alert text-muted"><i className="fa fa-reply" /></small>
      </a>
    </li>          
    <li>
      <a href="#" className="clearfix">
        <img src="https://bootdey.com/img/Content/user_5.jpg" alt="" className="img-circle" />
        <div className="friend-name">	
          <strong>Kate</strong>
        </div>
        <div className="last-message text-muted">Lorem ipsum dolor sit amet.</div>
        <small className="time text-muted">Yesterday</small>
        <small className="chat-alert text-muted"><i className="fa fa-reply" /></small>
      </a>
    </li>
    <li>
      <a href="#" className="clearfix">
        <img src="https://bootdey.com/img/Content/user_2.jpg" alt="" className="img-circle" />
        <div className="friend-name">	
          <strong>Jane Doe</strong>
        </div>
        <div className="last-message text-muted">Lorem ipsum dolor sit amet.</div>
        <small className="time text-muted">5 mins ago</small>
        <small className="chat-alert text-muted"><i className="fa fa-check" /></small>
      </a>
    </li>                 
  </ul>
</div>

            </div>
        );
    }
}

export default Chat;