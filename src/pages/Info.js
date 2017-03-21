import React from 'react';

var Info = React.createClass({
  render: function(){
    return (
      <div>
        <div class="container" >
          <div class="row">
            <div class="col-sm-4">
              <p class="text-center"><img src="../../../images/SWIM_SMALL.jpg" alt="Swim" /></p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            </div>
            <div class="col-sm-4">
              <p class="text-center"><img src="../../../images/BIKE_SMALL.jpg" alt="Bike" /></p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            </div>
            <div class="col-sm-4">
              <p class="text-center"><img src="../../../images/RUN_SMALL.jpg" alt="Run" /></p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            </div>
          </div>
        </div>

      </div>
    );
  }
});

export default Info;
