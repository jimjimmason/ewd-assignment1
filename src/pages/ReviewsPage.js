import React from 'react';
import Reviews from '../Reviews';

var ReviewsPage = React.createClass({

  render: function(){
    //var bVisible = true;
    //var bRegisterUser = true;

    return (
      <div>
      <h3> Reviews Page </h3>
      <Reviews />
      </div>
    );
  }
});

export default ReviewsPage;