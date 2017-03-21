import React from "react";
import { IndexLink, Link } from "react-router";

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
    const { location } = this.props;
    const { collapsed } = this.state;
    // const featuredClass = location.pathname === "/" ? "active" : "";
    // const archivesClass = location.pathname.match(/^\/archives/) ? "active" : "";
    // const settingsClass = location.pathname.match(/^\/settings/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";

    return (
      <div className="container">
  <div className="c-wrapper">
    <nav role="navigation" className="navbar navbar-inverse">

        <div className="navbar-header">
            <button type="button" data-target="#navbarCollapse" data-toggle="collapse" className="navbar-toggle">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <a href="#" className="navbar-brand">Brand</a>
        </div>

        <div id="navbarCollapse" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
                <li className="active"><a href="#">Home</a></li>
                <li><a href="#">Profile</a></li>
                <li className="dropdown">
                    <a data-toggle="dropdown" className="dropdown-toggle" href="#">Messages <b className="caret"></b></a>
                    <ul role="menu" className="dropdown-menu">className
                        <li><a href="#">Inbox</a></li>
                        <li><a href="#">Drafts</a></li>
                        <li><a href="#">Sent Items</a></li>
                        <li className="divider"></li>
                        <li><a href="#">Trash</a></li>
                    </ul>
                </li>
            </ul>
            <form role="search" className="navbar-form navbar-left">
                <div className="form-group">
                    <input type="text" placeholder="Search" className="form-control" />
                </div>
            </form>
            <ul className="nav navbar-nav navbar-right">
                <li><a href="#">Login</a></li>
            </ul>
        </div>
    </nav>
  </div>
</div>
    );
  }
}
