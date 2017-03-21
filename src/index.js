import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import Members from './Members';
import Events from './Events';
import Layout from './pages/Layout';
import User from './pages/User';
import About from './pages/About';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Events} />
      <Route path="user" component={User} />
      <Route path="about" component={About} />
      <Route path="admin" component={Members} />
    </Route>
  </Router>
),
//  <Events  />,
  document.getElementById('root')
);
