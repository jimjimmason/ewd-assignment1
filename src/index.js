import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
//import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import 'expose?$!expose?jQuery!jquery'

import Members from './Members';
//import Events from './Events';
import Layout from './pages/Layout';
import EventInfo from './pages/EventInfo';
import About from './pages/About';
import Info from './pages/Info';
import Register from './pages/Register';
import ReviewsPage from './pages/ReviewsPage';
import ReviewComments from './ReviewComments';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Info} />
      <Route path="events" component={EventInfo} />
      <Route path="about" component={About} />
      <Route path="admin" component={Members} />
      <Route path="register" component={Register} />
      <Route path="reviews" component={ReviewsPage} />
      <Route path="reviews/:postId" component={ReviewComments} />
    </Route>
  </Router>
),
//  <Events  />,
  document.getElementById('root')
);
