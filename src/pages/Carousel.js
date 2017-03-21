import React from "react";

var Carousel = React.createClass ({
  render() {
    return (
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        {/* Carousel indicators */}
        <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        {/* Wrapper for carousel items */}
        <div className="carousel-inner">
            <div className="item active">
            <img src="../../../images/sliderSwim.jpg" alt="Swim" />
              <div className="carousel-caption d-none d-md-block">
                <h3>Swim</h3>
                <p>Regular pool and open water group swims.</p>
              </div>
            </div>
          <div className="item">
              <img src="sliderBike.jpg" alt="Bike" />
              <div className="carousel-caption d-none d-md-block">
                <h3>Bike</h3>
                <p>Train from 20Km to 180Km group rides and time trials</p>
              </div>
          </div>
            <div className="item">
                <img src="sliderRun.jpg" alt="Run" />
                <div className="carousel-caption d-none d-md-block">
                  <h3>Run</h3>
                  <p>Group runs every week - 5Km to 42Km.</p>
                </div>
            </div>
        </div>
        {/* Carousel controls */}
        <a className="carousel-control left" href="#myCarousel" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left"></span>
        </a>
        <a className="carousel-control right" href="#myCarousel" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right"></span>
        </a>
    </div>
    );
  }
});

export default Carousel;
