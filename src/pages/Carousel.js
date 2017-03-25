import React from "react";
//import 'expose?$!expose?jQuery!jquery'
import '../App.css';

var Carousel = React.createClass ({
  render() {
    return (

      <div id="myCarousel" className="carousel slide" data-interval={3000} data-ride="carousel">
         {/* Carousel indicators */}
         <ol className="carousel-indicators">
           <li data-target="#myCarousel" data-slide-to={0} className="active" />
           <li data-target="#myCarousel" data-slide-to={1} />
           <li data-target="#myCarousel" data-slide-to={2} />
         </ol>
         {/* Carousel items */}
         <div className="carousel-inner">
           <div className="item active">
             <img src="../../../images/sliderSwim.jpg" alt="Swim" />
             <div className="carousel-caption">
               <h3>Swim</h3>
               <p>Weekly group pool and open water swim coaching</p>
             </div>
           </div>
           <div className="item">
             <img src="../../../images/sliderBike.jpg" alt="Bike" />
             <div className="carousel-caption">
               <h3>Bike</h3>
               <p>Group spins - time trials</p>
             </div>
           </div>
           <div className="item">
             <img src="../../../images/sliderRun.jpg" alt="Run" />
             <div className="carousel-caption">
               <h3>Run</h3>
               <p>Enjoy relaxed group runs as well as race training</p>
             </div>
           </div>
         </div>
         {/* Carousel nav */}
         <a className="carousel-control left" href="#myCarousel" data-slide="prev">
           <span className="glyphicon glyphicon-chevron-left" />
         </a>
         <a className="carousel-control right" href="#myCarousel" data-slide="next">
           <span className="glyphicon glyphicon-chevron-right" />
         </a>
       </div>

    );
  }
});

export default Carousel;
