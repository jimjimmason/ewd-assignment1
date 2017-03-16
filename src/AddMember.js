import React from 'react';

var AddMember=React.createClass({
  handleAdd: function(e) {
    e.preventDefault();
    this.props.addHandler(
        this.ref.fname,
        this.ref.lname
    );
  },
  toggleAddMemberDisplay: function() {
    this.props.handleToggleAddMember();
  },
  render: function() {
    // for inline stype to hide or display form body
    var displayAddMemberBody = {
      display: this.props.bodyVisible ? 'block': 'none'
    };
    return(
      <div className="panel panel-primary">
      <div className="panel-heading" onClick={this.toggleAddMemberDisplay} >
      <span className="glyphicon glyphicon-plus"></span> Add Member</div>
      <div className="panel-body" style={displayAddMemberBody}>
      <form role="form" form-horizontal>

         <div className="form-group">
            <label for="name">First Name</label>
            <input type="text" className="form-control" ref="fname" placeholder="First Name" />

            <label for="name">Last Name</label>
            <input type="text" className="form-control" ref="lname" placeholder="Last Name" />
         </div>

         <div className="form-group">
            <label for="inputfile">Image</label>
            <input type="file" id="inputfile" />
            <p className="help-block">Example block-level help text here.</p>
         </div>


         <div className="checkbox">
            <label><input type="checkbox" /> Check me out</label>
         </div>

         <button type="submit" className="btn btn-default" onClick={this.handleAdd}>Add Member</button>
      </form>
      </div>
      </div>
    );
  }
}); // AddMember

export default AddMember;
