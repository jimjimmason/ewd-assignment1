import React from 'react';
import Events from '../Events';

var EventInfo = React.createClass({
  render: function(){
    var isAdministrator = false;

    return (
      <div>
        <Events isAdministrator={isAdministrator}/>

      </div>
    );
  }
});

export default EventInfo;
