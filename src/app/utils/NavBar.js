import React from "react";
import { Link } from "react-router";

export default class NavBAr extends React.Component {

  render() {
    //var isAdministrator = false;
    return (
      <div className="container">
        <nav role="navigation" className="navbar navbar-inverse">

          <div className="navbar-header">
            <button type="button" data-target="#navbarCollapse" data-toggle="collapse" className="navbar-toggle">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
          </div>

          <div id="navbarCollapse" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
                <li className="active"><Link to="/"><span className="glyphicon glyphicon-home"></span> Thurles Triathlon Club</Link></li>
                <li><Link to="events">Events</Link></li>
                <li><Link to="reviews">Reviews</Link></li>
                <li><Link to="about">Contact Us</Link></li>
                {/*  in prepartion for Role based authentication  
                  { isAdministrator ?
                    <li><Link to="admin">Admin</Link></li>
                    : null
                  }
                */}
                <li><Link to="admin">Admin</Link></li>
            </ul>
            <form role="search" class="navbar-form navbar-left">
              <ul className="nav navbar-nav navbar-right">
              {/*               
                <li><div className="form-group">
                  <input type="email" className="form-control navbar-btn" id="inputEmail" placeholder="Email" />
                  </div>
                </li>
              */}
                <li><a href="#" className="btn btn-default">Login</a></li>
                <li><a href="register">Register</a></li>
              </ul>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}
