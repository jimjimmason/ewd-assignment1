import React from 'react';
import './App.css'
import buttons from './config/MembersButtons';
import api from './stubAPI';
import AddMember from './AddMember';
//import _ from 'lodash';


var MemberRow = React.createClass({
  getInitialState : function(){
    return {
      status: '',
      id: this.props.member.id,
      fname: this.props.member.FirstName,
      lname: this.props.member.Surname,
      address1: this.props.member.Address1,
      address2: this.props.member.Address2,
      town: this.props.member.Town,
      county: this.props.member.County,
      nationality: this.props.member.Nationality,
      phone_number: this.props.member.phone_number,
      email: this.props.member.email,
      dob: this.props.member.DOB,
      yearOfBirth: this.props.member.YearOfBirth,
      imageUrl: this.props.member.imageUrl,
      type: this.props.member.Type,
      triathlonIrelandID: this.props.member.TriathlonIrelandID
    };
  },
  handleDelete : function(){
    this.setState({status: 'delete'})
  },
  handleUndo : function(){
    this.setState({status : ''});
  },
  handleConfirm : function(){
    //console.log("confirm pressed");
    this.props.deleteHandler(this.state.id);  //changed thif from props.member.id
    this.setState({status : ''});
  },
  handleEdit : function(){
    this.setState({status: 'edit'})
  },
  handleCancel : function(){
    this.setState({
      status: '',
      id: this.props.member.id,
      fname: this.props.member.FirstName,
      lname: this.props.member.Surname,
      address1: this.props.member.Address1,
      address2: this.props.member.Address2,
      town: this.props.member.Town,
      county: this.props.member.County,
      nationality: this.props.member.Nationality,
      phone_number: this.props.member.phone_number,
      email: this.props.member.email,
      dob: this.props.member.DOB,
      yearOfBirth: this.props.member.YearOfBirth,
      imageUrl: this.props.member.imageUrl,
      type: this.props.member.Type,
      triathlonIrelandID: this.props.member.TriathlonIrelandID
     });
  },

  render: function(){
    var activeButtons = buttons.normal;
    var leftButtonHandler = this.handleEdit;
    var rightButtonHandler = this.handleDelete;

    //console.log("displayMember");
    //console.log(this.props.member.id);
    var fields = [
      <td key={'id'}>{this.state.id}</td>,
      <td key={'fname'} >{this.state.fname}</td>,
      <td key={'lname'}>{this.state.lname}</td>,
      <td key={'address1'}>{this.state.address1}</td>,
      <td key={'address2'}>{this.state.address2}</td>,
      <td key={'town'}>{this.state.town}</td>,
      <td key={'county'}>{this.state.county}</td>,
      <td key={'nationality'}>{this.state.nationality}</td>,
      <td key={'phone_number'}>{this.state.phone_number}</td>,
      <td key={'email'}>{this.state.email}</td>,
      <td key={'dob'}>{this.state.dob}</td>,
      <td key={'yearOfBirth'}>{this.state.yearOfBirth}</td>,
      <td key={'imageUrl'}>{this.state.imageUrl}</td>,
      <td key={'type'}>{this.state.type}</td>,
      <td key={'triathlonIrelandID'}>{this.state.triathlonIrelandID}</td>
    ];
    if (this.state.status === 'edit') {
      activeButtons = buttons.edit;
      leftButtonHandler = this.handleSave;
      rightButtonHandler = this.handleCancel;
      fields = [
        <td key={'name'}><input type="text" className="form-control"
            value={this.state.name}
            onChange={this.handleNameChange} />
        </td>,
        <td key={'address'}><input type="text" className="form-control"
            value={this.state.address}
            onChange={this.handleAddressChange} />
        </td>,
        <td key={'phone_number'}><input type="text" className="form-control"
            value={this.state.phone_number}
            onChange={this.handlePhoneNumberChange} />
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
});


var MembersList = React.createClass({
  getInitialState: function() {
    return {
      addMemberBodyVisible: false
    }
  },
  render: function(){
    //console.log('ContactsList');
    //console.log(this.props.contacts);
    //var contactRows = null; //TODO  initailize to an array of contact elements
    var memberRows = this.props.members.map(member => {
        return <MemberRow key={member.id} member={member}
        //    updateHandler={this.props.updateHandler}

            deleteHandler={this.props.deleteHandler}
        />
    });
    //console.log(this.contactRows);
    return (
      <tbody>
        {memberRows}
        {/* <MemberForm addHandler={this.props.addHandler} />
        *
        <AddMember addHandler={this.props.addHandler}
            bodyVisible={this.state.addMemberBodyVisible}
        /> */}
      </tbody>
    );
  }
});

var MembersTable = React.createClass({
  render: function(){
    //console.log("MembersTable");
    //console.log(this.props.allMembers);
    return(
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address 1</th>
            <th>Address 2</th>
            <th>Town</th>
            <th>County</th>
            <th>Nationality</th>
            <th>Phone Number</th>
            <th>E-mail</th>
            <th>DOB</th>
            <th>Year of Birth</th>
            <th>Image</th>
            <th>Membership Type</th>
            <th>Triathlon Ireland #</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <MembersList members={this.props.allMembers}
            addHandler={this.props.addHandler}
            deleteHandler={this.props.deleteHandler}
        />
      </table>
    );
  }
});


// Members Component
var Members = React.createClass({
  getInitialState : function() {
    return {
      addMemberBodyVisible: false
    };
  },
  componentDidMount : function() {
    var p = api.getAllMembers();
    p.then( response => {
      localStorage.clear();
      localStorage.setItem('members', JSON.stringify(response)) ;
      this.setState({}) ;
    }) ;
  }, //componentDidMount
  deleteMember_orig : function(key){
    api.deleteMember(key);
    this.setState({});
  },
  deleteMember : function(k) {
    console.log("deleting member id: " + k);
    api.deleteMember(k)
      .then(response => {
        return api.getAllMembers()
      })
      .then(response => {
        localStorage.clear();
        localStorage.setItem('members', JSON.stringify(response));
        this.setState({});
      });
  }, //deleteMember
  addMember : function(fn,ln,addr1,addr2,town,county,nationality,phone,email,dob,type,tino){
    console.log("adding new member : " + fn + ' ' + ln);
    api.addMember(fn,ln,addr1,addr2,town,county,nationality,phone,email,dob,type,tino);
    var p = api.getAllMembers();
    p.then( response => {
      localStorage.clear();
      localStorage.setItem('members', JSON.stringify(response)) ;
      this.setState({}) ;
    }) ;
    this.setState({
      addMemberBodyVisible: false,
      status: '',
      id: '',
      fname: '',
      lname: '',
      address1: '',
      address2: '',
      town: '',
      county: '',
      nationality: '',
      phone_number: '',
      email: '',
      dob: '',
      yearOfBirth: '',
      imageUrl: '',
      type: '',
      triathlonIrelandID: ''
    });

  }, //addMember
  toggleAddMemberDisplay: function() {
    var tempVisibility = !this.state.addMemberBodyVisible;
    this.setState({
      addMemberBodyVisible: tempVisibility
    });
  }, //toggleAddMemberDisplay
  render: function(){
    //console.log("Members Component");
    var members = localStorage.getItem('members') ?
      JSON.parse(localStorage.getItem('members')) : [];
    return(
      <div className="interface">
        <p>Members</p>
        <AddMember addHandler={this.addMember}
            bodyVisible={this.state.addMemberBodyVisible}
            handleToggleAddMember={this.toggleAddMemberDisplay}
        />
        <MembersTable allMembers={members}
            addHandler={this.addMember}
            deleteHandler={this.deleteMember}
        />


      </div>
    );
  }
});
export default Members;
