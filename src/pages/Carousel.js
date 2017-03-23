import React from "react";
//import 'expose?$!expose?jQuery!jquery'
import '../App.css';

var Carousel = React.createClass ({
  render() {
    return (
<div class="bs-example">
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
             <img src="../../../images/sliderSwim.jpg" alt="First Slide" />
             <div className="carousel-caption">
               <h3>First slide label</h3>
               <p>Lorem ipsum dolor sit amet...</p>
             </div>
           </div>
           <div className="item">
             <img src="../../../images/sliderBike.jpg" alt="Second Slide" />
             <div className="carousel-caption">
               <h3>Second slide label</h3>
               <p>Aliquam sit amet gravida nibh, facilisis...</p>
             </div>
           </div>
           <div className="item">
             <img src="../../../images/sliderRun.jpg" alt="Third Slide" />
             <div className="carousel-caption">
               <h3>Third slide label</h3>
               <p>Praesent commodo cursus magna vel...</p>
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
</div>
    );
  }
});

export default Carousel;
