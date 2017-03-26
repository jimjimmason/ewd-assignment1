import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import 'expose?$!expose?jQuery!jquery'

import Admin from './pages/Admin';
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
      <Route path="admin" component={Admin} />
      <Route path="register" component={Register} />
      <Route path="reviews" component={ReviewsPage} />
      <Route path="reviews/:postId" component={ReviewComments} />
    </Route>
  </Router>
),

  document.getElementById('root')
);
