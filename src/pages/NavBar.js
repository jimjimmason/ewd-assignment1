import React from "react";
import { Link } from "react-router";

export default class NavBAr extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    //const { location } = this.props;
    const { collapsed } = this.state;
    // const featuredClass = location.pathname === "/" ? "active" : "";
    // const archivesClass = location.pathname.match(/^\/archives/) ? "active" : "";
    // const settingsClass = location.pathname.match(/^\/settings/) ? "active" : "";
    //const navClass = collapsed ? "collapse" : "";

    return (
      <div className="container">
    <nav role="navigation" className="navbar navbar-inverse">

        <div className="navbar-header">
            <button type="button" data-target="#navbarCollapse" data-toggle="collapse" className="navbar-toggle">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
        </div>

        <div id="navbarCollapse" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
                <li className="active"><Link to="/"><span className="glyphicon glyphicon-home"></span> Home</Link></li>
                <li><Link to="user">Users</Link></li>
                <li><Link to="about">Contact Us</Link></li>
                <li><Link to="admin">Admin</Link></li>

            </ul>
<form role="search" class="navbar-form navbar-left">
            <ul className="nav navbar-nav navbar-right">
              <li><div className="form-group">
                <input type="email" className="form-control navbar-btn" id="inputEmail" placeholder="Email" />
                </div></li>
                <li><div className="form-group">
                  <input type="password" className="form-control navbar-btn" id="inputPassword" placeholder="Password" />
                </div></li>
                <li><a href="#">Login</a></li>
                <li><a href="register">Register</a></li>
            </ul>
          </form>
        </div>
    </nav>
</div>
    );
  }
}
