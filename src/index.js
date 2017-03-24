import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
//import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import 'expose?$!expose?jQuery!jquery'

import Members from './Members';
//import Events from './Events';
import Layout from './pages/Layout';
import User from './pages/User';
import About from './pages/About';
import Info from './pages/Info';
import Register from './pages/Register';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Info} />
      <Route path="user" component={User} />
      <Route path="about" component={About} />
      <Route path="admin" component={Members} />
      <Route path="register" component={Register} />
    </Route>
  </Router>
),
//  <Events  />,
  document.getElementById('root')
);
