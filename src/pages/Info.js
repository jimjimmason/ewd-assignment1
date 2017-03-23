import React from 'react';
import Carousel from './Carousel';

var Info = React.createClass({
  render: function(){
    return (

      <div>
        <div className="container">
          <Carousel />
        </div>
        <h2>Thules Triathlon Club</h2>
        <div className="container" >
          <div className="row">
            <div className="col-sm-4">
              <p className="text-center"><img src="../../../images/SWIM_SMALL.jpg" alt="Swim" /></p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            </div>
            <div className="col-sm-4">
              <p className="text-center"><img src="../../../images/BIKE_SMALL.jpg" alt="Bike" /></p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            </div>
            <div className="col-sm-4">
              <p className="text-center"><img src="../../../images/RUN_SMALL.jpg" alt="Run" /></p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            </div>
          </div>
        </div>

      </div>
    );
  }
});

export default Info;
