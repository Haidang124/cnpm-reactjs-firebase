import React, { Component } from 'react';
import Menu from './Menu';

class Chat extends Component {
    render() {
        return (
            <div className="chat">
                <Menu />
                <div class="col-md-4 bg-white ">
            <div class=" row border-bottom padding-sm" style="height: 40px;">
            	Member
            </div>
            
            <!-- =============================================================== -->
            <!-- member list -->
            <ul class="friend-list">
                <li class="active bounceInDown">
                	<a href="#" class="clearfix">
                		<img src="https://bootdey.com/img/Content/user_1.jpg" alt="" class="img-circle">
                		<div class="friend-name">	
                			<strong>John Doe</strong>
                		</div>
                		<div class="last-message text-muted">Hello, Are you there?</div>
                		<small class="time text-muted">Just now</small>
                		<small class="chat-alert label label-danger">1</small>
                	</a>
                </li>
                <li>
                	<a href="#" class="clearfix">
                		<img src="https://bootdey.com/img/Content/user_2.jpg" alt="" class="img-circle">
                		<div class="friend-name">	
                			<strong>Jane Doe</strong>
                		</div>
                		<div class="last-message text-muted">Lorem ipsum dolor sit amet.</div>
                		<small class="time text-muted">5 mins ago</small>
                	<small class="chat-alert text-muted"><i class="fa fa-check"></i></small>
                	</a>
                </li> 
                <li>
                	<a href="#" class="clearfix">
                		<img src="https://bootdey.com/img/Content/user_3.jpg" alt="" class="img-circle">
                		<div class="friend-name">	
                			<strong>Kate</strong>
                		</div>
                		<div class="last-message text-muted">Lorem ipsum dolor sit amet.</div>
                		<small class="time text-muted">Yesterday</small>
                		<small class="chat-alert text-muted"><i class="fa fa-reply"></i></small>
                	</a>
                </li>  
                <li>
                	<a href="#" class="clearfix">
                		<img src="https://bootdey.com/img/Content/user_1.jpg" alt="" class="img-circle">
                		<div class="friend-name">	
                			<strong>Kate</strong>
                		</div>
                		<div class="last-message text-muted">Lorem ipsum dolor sit amet.</div>
                		<small class="time text-muted">Yesterday</small>
                		<small class="chat-alert text-muted"><i class="fa fa-reply"></i></small>
                	</a>
                </li>     
                <li>
                	<a href="#" class="clearfix">
                		<img src="https://bootdey.com/img/Content/user_2.jpg" alt="" class="img-circle">
                		<div class="friend-name">	
                			<strong>Kate</strong>
                		</div>
                		<div class="last-message text-muted">Lorem ipsum dolor sit amet.</div>
                		<small class="time text-muted">Yesterday</small>
                		<small class="chat-alert text-muted"><i class="fa fa-reply"></i></small>
                	</a>
                </li>        
                <li>
                	<a href="#" class="clearfix">
                		<img src="https://bootdey.com/img/Content/user_6.jpg" alt="" class="img-circle">
                		<div class="friend-name">	
                			<strong>Kate</strong>
                		</div>
                		<div class="last-message text-muted">Lorem ipsum dolor sit amet.</div>
                		<small class="time text-muted">Yesterday</small>
                		<small class="chat-alert text-muted"><i class="fa fa-reply"></i></small>
                	</a>
                </li>          
                <li>
                	<a href="#" class="clearfix">
                		<img src="https://bootdey.com/img/Content/user_5.jpg" alt="" class="img-circle">
                		<div class="friend-name">	
                			<strong>Kate</strong>
                		</div>
                		<div class="last-message text-muted">Lorem ipsum dolor sit amet.</div>
                		<small class="time text-muted">Yesterday</small>
                		<small class="chat-alert text-muted"><i class="fa fa-reply"></i></small>
                	</a>
                </li>
                <li>
                    <a href="#" class="clearfix">
                		<img src="https://bootdey.com/img/Content/user_2.jpg" alt="" class="img-circle">
                		<div class="friend-name">	
                			<strong>Jane Doe</strong>
                		</div>
                		<div class="last-message text-muted">Lorem ipsum dolor sit amet.</div>
                		<small class="time text-muted">5 mins ago</small>
                	<small class="chat-alert text-muted"><i class="fa fa-check"></i></small>
                	</a>
                </li>                 
            </ul>
		</div>
            </div>
        );
    }
}

export default Chat;