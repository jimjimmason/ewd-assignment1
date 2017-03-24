import React from 'react';

var SearchEvents = React.createClass({

  handleSort: function(e) {
    this.props.onReOrder(e.target.id, this.props.orderDir);
  },
  handleOrder: function(e) {
    this.props.onReOrder(e.props.orderBy,e.target.id);
  },

  handleSearch: function(e) {
    this.props.onSearch(e.target.value)
  },

  render: function(){
    return (
      <div className="row search-events">
        <div className="col-sm-offset-3 col-sm-6">
          <input id="SearchEvents" onChange={this.handleSearch} placeholder="Search" type="text" className="form-control" aria-label="Search Events"/>
          <div className="input-group-btn">
            <button type="button" className="btn btn-primary dropdown-toggle"
                  data-toggle="dropdown" aria-haspopup="true" aria-expandaded="false">Sort by: <span className="caret"></span>
            </button>
            <ul className="dropdown-menu dropdown-menu-right">
              <li><a href="#" id="eventDate" onClick={this.handleSort}>Event Date {(this.props.orderBy === 'eventDate') ? <span className="glyphicon glyphicon-ok"></span>: null}</a></li>
              <li><a href="#" id="eventName" onClick={this.handleSort}>Event Name {(this.props.orderBy === 'eventName') ? <span className="glyphicon glyphicon-ok"></span>: null}</a></li>
              <li><a href="#" id="eventType" onClick={this.handleSort}>Event Type {(this.props.orderBy === 'eventType') ? <span className="glyphicon glyphicon-ok"></span>: null}</a></li>
              <li role="separator" className="divider"></li>
              <li><a href="#" id="asc" onClick={this.handleOrder}>Asc {(this.props.orderDir === 'asc') ? <span className="glyphicon glyphicon-ok"></span>: null}</a></li>
              <li><a href="#" id="dsc" onClick={this.handleOrder}>Dsc {(this.props.orderDir === 'dsc') ? <span className="glyphicon glyphicon-ok"></span>: null}</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
});

export default SearchEvents;
