import React from 'react';
import Members from '../Members';
//import Events from '../Events';


var Admin = React.createClass({
  getInitialState : function() {
    return {
      isAdministrator: true
    };
  },
  handleMemberClick: function(){
    var memberView = true;
    console.log("memberView clicked")
  },
  handleEventClick: function(){
    var eventsView = true;
    console.log("eventsView clicked")
  },
  render: function(){
    return (
      <div>
        <h1> Admin Page </h1>
        <ul className="nav nav-tabs">
            <li className="active"><a href="#" onClick={this.handleMemberClick}><span className="glyphicon glyphicon-user"></span>  Members</a></li>
            <li><a href="#" onClick={this.handleEventClick}><span className="glyphicon glyphicon-flash"></span> Events</a></li>
            <li><a href="#"><span className="glyphicon glyphicon-envelope"></span> Admin</a></li>
        </ul>
        <Members />
      </div>
    );
  }
});

export default Admin;
