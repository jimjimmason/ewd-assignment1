import React from "react";
//import { Link } from "react-router";

import Footer from "./Footer";
import NavBar from "./NavBar";
//import Carousel from "./Carousel";

export default class Layout extends React.Component {
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "60px"
    };
    console.log("layout");
    return (
      <div>
        <NavBar location={location} />
        <div className="container" style={containerStyle}>
          <div className="row">
            <div className="col-lg-12">
              <h1>Thurles Triathlon</h1>
              {this.props.children}
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    );
  }
}
