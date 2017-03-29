import React from 'react';
import AddMember from '../AddMember';

var Register = React.createClass({

  render: function(){
    //var bVisible = true;
    //var bRegisterUser = true;

    return (
      <div>
      <h3> Register </h3>
      <AddMember bodyVisible={true} registerUser={true} />
      </div>
    );
  }
});

export default Register;
