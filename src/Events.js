import React from 'react';
import './App.css'
import buttons from './config/MembersButtons';
import api from './stubAPI';
//import AddMember from './AddMember';

var EventRow = React.createClass({
  getInitialState : function(){
    return {
      status: '',
      id: this.props.event.id,
      eventDate: this.props.event.eventDate,
      eventName: this.props.event.eventName,
      eventType: this.props.event.eventType,
      distance: this.props.event.distance,
      raceSeries: this.props.event.raceSeries,
      ageGroup: this.props.event.ageGroup,
      county: this.props.event.county,
      eventUrl: this.props.event.eventUrl,
      membersCompeting: this.props.event.membersCompeting,
      membersCompetingCount: this.props.event.membersCompetingCount
    };
  },
  handleDelete : function(){
    this.setState({status: 'delete'})
  },
  handleUndo : function(){
    this.setState({status : ''});
  },
  handleConfirm : function(){
    console.log("confirm pressed"  + this.state.id);
    this.props.deleteHandler(this.state.id);  //changed thif from props.member.id
    this.setState({status : ''});
  },
  handleEdit : function(){
    this.setState({status: 'edit'});
  },
  handleCancel : function(){
    this.setState({
      status: '',
      id: this.props.event.id,
      eventDate: this.props.event.eventDate,
      eventName: this.props.event.eventName,
      eventType: this.props.event.eventType,
      distance: this.props.event.distance,
      raceSeries: this.props.event.raceSeries,
      ageGroup: this.props.event.ageGroup,
      county: this.props.event.county,
      eventUrl: this.props.event.eventUrl,
      membersCompeting: this.props.event.membersCompeting,
      membersCompetingCount: this.props.event.membersCompetingCount
     });
  },
  handleSave : function(e) {
    console.log("handleSave:  " + this.state.id)
      e.preventDefault();
      var eventDate = this.state.eventDate.trim();
      var eventName = this.state.eventName.trim();
      var eventType = this.state.eventType.trim();
      var distance = this.state.distance.trim();
      var raceSeries = this.state.raceSeries.trim();
      var ageGroup = this.state.ageGroup.trim();
      var county = this.state.county.trim();
      var eventUrl = this.state.eventUrl.trim();
      var membersCompeting = this.state.membersCompeting.trim();
      var membersCompetingCount = this.state.membersCompetingCount.trim();
          // check that reqiured fields are populated
//      if (!eventDate || !eventName || !distance || !county || !eventUrl) {
//        console.log("returning")
//        return;
//      }
      console.log("in the updatehandler")
      this.props.updateHandler(
        this.state.id,eventDate,eventName,eventType,distance,raceSeries,ageGroup,county,eventUrl,membersCompeting,membersCompetingCount);
      this.setState({status : ''} )
  },
  handleEventDateChange : function(e){
    this.setState({
      eventDate: e.target.value
    })
  },
  handleEventNameChange : function(e){
    this.setState({
      eventName: e.target.value
    })
  },
  handleEventTypeChange : function(e){
    this.setState({
      eventType: e.target.value
    })
  },
  handleDistanceChange : function(e){
    this.setState({
      distance: e.target.value
    })
  },
  handleSeriesChange : function(e){
    this.setState({
      raceSeries: e.target.value
    })
  },
  handleAgeGroupChange : function(e){
    this.setState({
      ageGroup: e.target.value
    })
  },
  handleCountyChange : function(e){
    this.setState({
      county: e.target.value
    })
  },
  handleEventUrlChange : function(e){
    this.setState({
      eventUrl: e.target.value
    })
  },
  handleMembersCompetingChange : function(e){
    this.setState({
      membersCompeting: e.target.value
    })
  },
  handleMembersCompetingCountChange : function(e){
    this.setState({
      membersCompetingCount: e.target.value
    })
  },
  render: function(){
    var activeButtons = buttons.normal;
    var leftButtonHandler = this.handleEdit;
    var rightButtonHandler = this.handleDelete;

    var fields = [
      <td key={'eventDate'} >{this.state.eventDate}</td>,
      <td key={'eventName'}>{this.state.eventName}</td>,
      <td key={'eventType'}>{this.state.eventType}</td>,
      <td key={'distance'}>{this.state.distance}</td>,
      <td key={'raceSeries'}>{this.state.raceSeries}</td>,
      <td key={'ageGroup`'}>{this.state.ageGroup}</td>,
      <td key={'county'}>{this.state.county}</td>,
      <td key={'eventUrl'}>{this.state.eventUrl}</td>,
      <td key={'membersCompeting'}>{this.state.membersCompeting}</td>,
      <td key={'membersCompetingCount'}>{this.state.membersCompetingCount}</td>
    ];
    if (this.state.status === 'edit') {
      activeButtons = buttons.edit;
      leftButtonHandler = this.handleSave;
      rightButtonHandler = this.handleCancel;
      fields = [
        <td key={'eventDate'}><input type="text" className="form-control"
            value={this.state.eventDate}
            onChange={this.handleEventDateChange} />
        </td>,
        <td key={'eventName'}><input type="text" className="form-control"
            value={this.state.eventName}
            onChange={this.handleEventNameChange} />
        </td>,
        <td key={'eventType'}><input type="text" className="form-control"
            value={this.state.eventType}
            onChange={this.handleEventTypeChange} />
        </td>,
        <td key={'distance'}><input type="text" className="form-control"
            value={this.state.distance}
            onChange={this.handleDistanceChange} />
        </td>,
        <td key={'raceSeries'}><input type="text" className="form-control"
            value={this.state.raceSeries}
            onChange={this.handleSeriesChange} />
        </td>,
        <td key={'ageGroup'}><input type="text" className="form-control"
            value={this.state.ageGroup}
            onChange={this.handleAgeGroupChange} />
        </td>,
        <td key={'county'}><input type="text" className="form-control"
            value={this.state.county}
            onChange={this.handleCountyChange} />
        </td>,
        <td key={'eventUrl'}><input type="text" className="form-control"
            value={this.state.eventUrl}
            onChange={this.handleEventUrlChange} />
        </td>,
        <td key={'membersCompeting'}><input type="text" className="form-control"
            value={this.state.membersCompeting}
            onChange={this.handleMembersCompetingChange} />
        </td>,
        <td key={'membersCompetingCount'}><input type="text" className="form-control"
            value={this.state.membersCompetingCount}
            onChange={this.handleMembersCompetingCountChange} />
        </td>
      ];
    }
    if (this.state.status === 'delete') {
      activeButtons = buttons.delete;
      leftButtonHandler = this.handleUndo;
      rightButtonHandler = this.handleConfirm;
    }
    return(
      <tr>
        {fields}

        <td>
          <input type="button" className={'btn ' + activeButtons.leftButtonColor}
                    value={activeButtons.leftButtonVal}
                    onClick={leftButtonHandler} />
        </td>
        <td>
          <input type="button" className={'btn ' + activeButtons.rightButtonColor}
                  value={activeButtons.rightButtonVal}
                  onClick={rightButtonHandler} />

        </td>

      </tr>
    );
  }
});  // EventRow


var EventsList = React.createClass({
  getInitialState: function() {
    return {
      addEventBodyVisible: false
    }
  },
  render: function(){
    console.log('EventsList');
    console.log(this.props.events);
    //var contactRows = null; //TODO  initailize to an array of contact elements
    var eventRows = this.props.events.map(event => {
        return <EventRow key={event.id} event={event}
            updateHandler={this.props.updateHandler}
            deleteHandler={this.props.deleteHandler}
        />
    });
    //console.log(this.contactRows);
    return (
      <tbody>
      {eventRows}
      </tbody>
    );
  }
});

var EventsTable = React.createClass({

  render: function(){
    console.log("events table");
    console.log(this.props.allevents);
    return(
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Event Date</th>
            <th>Name</th>
            <th>Type</th>
            <th>Distance</th>
            <th>Race Series</th>
            <th>Age Group</th>
            <th>County</th>
            <th>Event URL</th>
            <th>Members Competing</th>
            <th>Num Members Competing</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <EventsList events={this.props.allEvents}
            addHandler={this.props.addHandler}
            updateHandler={this.props.updateHandler}
            deleteHandler={this.props.deleteHandler}
        />
      </table>
    );
  }
});


// Events Component
var Events = React.createClass({
  getInitialState : function() {
    return {
      addEventBodyVisible: false
    };
  },
  componentDidMount : function() {
    var p = api.getAllEvents();
    p.then( response => {
      localStorage.clear();
      localStorage.setItem('events', JSON.stringify(response)) ;
      this.setState({}) ;
    }) ;
  }, //componentDidMount
  deleteEvent : function(k) {
    console.log("deleting event id: " + k);
    api.deleteEvent(k)
      .then(response => {
        return api.getAllEvents()
      })
      .then(response => {
        localStorage.clear();
        localStorage.setItem('events', JSON.stringify(response));
        this.setState({});
      });
  }, //deleteEvent
  addEvent : function(eDate,eName,eType,distance,series,ageGroup,county,eventUrl){
    console.log("adding new event : " + eName + ' ' + eType);
    api.addEvent(eDate,eName,eType,distance,series,ageGroup,county,eventUrl);
    var p = api.getAllEvents();
    p.then( response => {
      localStorage.clear();
      localStorage.setItem('events', JSON.stringify(response)) ;
      this.setState({}) ;
    }) ;
    this.setState({
      addMemberBodyVisible: false,
    });
  }, //addEvent

  updateEvent : function(key,eDate,eName,eType,distance,series,ageGroup,county,
       eventUrl,membersCompeting,membersCompetingCount) {
    console.log("updateEvent" + key + eName);
    api.updateEvent(key,eDate,eName,eType,distance,series,ageGroup,county,
         eventUrl,membersCompeting,membersCompetingCount)
      .then ( response => {
         return api.getAllEvents()
      })
      .then( response => {
          localStorage.clear();
          localStorage.setItem('events', JSON.stringify(response)) ;
          this.setState( {}) ;
      })
      .catch( error => {console.log(`Update failed for ${error}` )}  ) ;
  }, // updateEvent

  toggleAddEventDisplay: function() {
    var tempVisibility = !this.state.addEventBodyVisible;
    this.setState({
      addEventBodyVisible: tempVisibility
    });
  }, //toggleAddEventDisplay
  render: function(){
    //console.log("Events Component");
    if ( localStorage.getItem('events') ){
      console.log("envents found")
      var test = JSON.parse(localStorage.getItem('events'));
      console.log(test)
      console.log ("test: " + test[0].eventName)
    }
    var events = localStorage.getItem('events') ?
      JSON.parse(localStorage.getItem('events')) : [];
    return(
      <div className="interface">
        <p1>Events</p1>
{/*        <AddEvent addHandler={this.addEvent}
            bodyVisible={this.state.addEventBodyVisible}
            handleToggleAddEvent={this.toggleAddEventDisplay}
        />
*/}
        <EventsTable allEvents={events}
            addHandler={this.addEvent}
            updateHandler={this.updateEvent}
            deleteHandler={this.deleteEvent}
        />


      </div>
    );
  }
});
export default Events;
