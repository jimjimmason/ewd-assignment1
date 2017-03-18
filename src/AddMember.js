import React from 'react';

var AddMember=React.createClass({
  getInitialState : function() {
    return {
      addMemberBodyVisible: false,
      fname: "",
      lname: "",
      addr1: "",
      addr2: "",
      town: "",
      county: "",
      nationality: "",
      phone: "",
      email: "",
      dob: "",
      imageUrl: "",
      type: "",
      tino: ""
    };
  },
  handleAddContact : function(){
    console.log(this.props);
    this.props.addHandler(this.state.name,this.state.address,this.state.phone_number);
    this.setState({name : "",
    address : "",
    phone_number : ""});
  },
  handleAdd: function(e) {
    e.preventDefault();
    this.props.addHandler(
          this.state.fname,
          this.state.lname,
          this.state.addr1,
          this.state.addr2,
          this.state.town,
          this.state.county,
          this.state.nationality,
          this.state.phone,
          this.state.email,
          this.state.dob,
          this.state.imageUrl,
          this.state.type,
          this.state.tino
    );
    this.setState({

      fname: '',
      lname: '',
      addr1: '',
      addr2: '',
      town: '',
      county: '',
      nationality: '',
      phone: '',
      email: '',
      dob: '',
      imageUrl: '',
      type: '',
      tino: ''
    });
  }, // handleAdd
  toggleAddMemberDisplay: function() {
    this.props.handleToggleAddMember();
  },
  handleFnameChange : function(e){
    this.setState({
      fname: e.target.value
    })
  },
  handleLnameChange : function(e){
    this.setState({
      lname: e.target.value
    })
  },
  handleAddr1Change : function(e){
    this.setState({
      addr1: e.target.value
    })
  },
  handleAddr2Change : function(e){
    this.setState({
      addr2: e.target.value
    })
  },
  handleTownChange : function(e){
    this.setState({
      town: e.target.value
    })
  },
  handleCountyChange : function(e){
    this.setState({
      county: e.target.value
    })
  },
  handleNationalityChange : function(e){
    this.setState({
      nationality: e.target.value
    })
  },
  handlePhoneChange : function(e){
    this.setState({
      phone: e.target.value
    })
  },
  handleEmailChange : function(e){
    this.setState({
      email: e.target.value
    })
  },
  handleDobChange : function(e){
    this.setState({
      dob: e.target.value
    })
  },
  handleImageUrlChange : function(e){
    this.setState({
      imageUrl: e.target.value
    })
  },
  handleTypeChange : function(e){
    this.setState({
      type: e.target.value
    })
  },
  handleTinoChange : function(e){
    this.setState({
      tino: e.target.value
    })
  },

  render: function() {
    // for inline stype to hide or display form body
    var displayAddMemberBody={
      display: this.props.bodyVisible ? 'block': 'none'
    };
    return(
      <div className="panel panel-primary">
        <div className="panel-heading" onClick={this.toggleAddMemberDisplay} >
          <span className="glyphicon glyphicon-plus"></span> Add Member
        </div>
        <div className="panel-body" style={displayAddMemberBody}>
          <form role="form">
            <div className="form-group">
              <label >First Name</label>
              <input type="text" className="form-control" id="fname" placeholder="First Name" value={this.state.fname} onChange={this.handleFnameChange}/>
              <label >Last Name</label>
              <input type="text" className="form-control" id="lname" placeholder="Last Name" value={this.state.lname} onChange={this.handleLnameChange}/>
              <label >Address 1</label>
              <input type="text" className="form-control" id="addr1" placeholder="Address 1" value={this.state.addr1} onChange={this.handleAddr1Change}/>
              <label >Adddress 2</label>
              <input type="text" className="form-control" id="addr2" placeholder="Address 2" value={this.state.addr2} onChange={this.handleAddr2Change}/>
              <label >Town</label>
              <input type="text" className="form-control" id="town" placeholder="Town" value={this.state.town} onChange={this.handleTownChange}/>
{/*              <div className="dropdown">
                 <button type="button" className="btn btn-primary dropdown-toggle"
                 data-toggle="dropdown">
                    Select County <span className="caret"></span>
                 </button>

                 <ul className="dropdown-menu" >
                    <li><a href="#">Antrim</a></li>
                    <li><a href="#">Armagh</a></li>
                    <li><a href="#">Carlow</a></li>
                    <li><a href="#">Cavan</a></li>
                    <li><a href="#">Clare</a></li>
                    <li><a href="#">Cork</a></li>
                    <li><a href="#">Derry</a></li>
                    <li><a href="#">Donegal</a></li>
                    <li><a href="#">Down</a></li>
                    <li><a href="#">Dublin</a></li>
                    <li><a href="#">Fermanagh</a></li>
                    <li><a href="#">Galway</a></li>
                    <li><a href="#">Kerry</a></li>
                    <li><a href="#">Kildare</a></li>
                    <li><a href="#">Kilkenny</a></li>
                    <li><a href="#">Laois</a></li>
                    <li><a href="#">Leitrim</a></li>
                    <li><a href="#">Limerick</a></li>
                    <li><a href="#">Longford</a></li>
                    <li><a href="#">Louth</a></li>
                    <li><a href="#">Mayo</a></li>
                    <li><a href="#">Meath</a></li>
                    <li><a href="#">Monaghan</a></li>
                    <li><a href="#">Offaly</a></li>
                    <li><a href="#">Roscommon</a></li>
                    <li><a href="#">Sligo</a></li>
                    <li><a href="#">Tipperary</a></li>
                    <li><a href="#">Tyrone</a></li>
                    <li><a href="#">Waterford</a></li>
                    <li><a href="#">Westmeath</a></li>
                    <li><a href="#">Wexford</a></li>
                    <li><a href="#">Wicklow  </a></li>
                  </ul>
              </div>
*/}
              <label >County</label>
              <input type="text" className="form-control" id="county" placeholder="County" value={this.state.county} onChange={this.handleCountyChange}/>
              <label >Nationality</label>
              <input type="text" className="form-control" id="nationality" placeholder="Nationality" value={this.state.nationality} onChange={this.handleNationalityChange}/>
              <label >Phone Number</label>
              <input type="text" className="form-control" id="phone" placeholder="Phone Number" value={this.state.phone} onChange={this.handlePhoneChange}/>
              <label >Email</label>
              <input type="text" className="form-control" id="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange}/>
              <label >Date of Birth</label>
              <input type="text" className="form-control" id="dob" placeholder="Date of Birth" value={this.state.dob} onChange={this.handleDobChange}/>
              <label >Image URL</label>
              <input type="text" className="form-control" id="imageUrl" placeholder="Image URL" value={this.state.imageUrl} onChange={this.handleImageURlChange}/>
              <label >Membership Type</label>
              <input type="text" className="form-control" id="type" placeholder="Membership Type" value={this.state.type} onChange={this.handleTypeChange}/>
              <label >Triathlon Ireland Membership No.</label>
              <input type="text" className="form-control" id="tino" placeholder="Triathlon Ireland Membership No." value={this.state.tino} onChange={this.handleTinoChange}/>

           </div>

    {/*


      dob: this.props.member.DOB,
      yearOfBirth: this.props.member.YearOfBirth,  ---DERIVE THIS FROM DOB
      imageUrl: this.props.member.imageUrl,          fILE PICKER
      type: this.props.member.Type,                  DROP DOWN LIST
      triathlonIrelandID: this.props.member.TriathlonIrelandID
      <div className="form-group">
                <label for="inputfile">Image</label>
                <input type="file" id="inputfile" />
                <p className="help-block">Example block-level help text here.</p>
             </div>
             <div className="checkbox">
                <label><input type="checkbox" /> Check me out</label>
             </div>
    */}
            <button className="btn btn-default" onClick={this.handleAdd}>Add Member</button>
          </form>
        </div>
      </div>
    );
  }
}); // AddMember

export default AddMember;
