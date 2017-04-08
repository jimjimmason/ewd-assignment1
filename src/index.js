import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import 'expose?$!expose?jQuery!jquery'

import Admin from './app/views/Admin';
import About from './app/views/About';
import EventInfo from './app/views/EventInfo';
import Info from './app/views/Info';
import Layout from './app/views/Layout';
import Register from './app/views/Register';
import ReviewComments from './app/ReviewComments';
import ReviewsPage from './app/views/ReviewsPage';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Info} />
      <Route path="events" component={EventInfo} />
      <Route path="about" component={About} />
      <Route path="admin" component={Admin} />
      <Route path="register" component={Register} />
      <Route path="reviews" component={ReviewsPage} />
      <Route path="reviews/:postId" component={ReviewComments} /> 
    </Route>
  </Router>
),

  document.getElementById('root')
);