import React from 'react';
import Router from 'react-router/lib/Router';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';
import browserHistory from 'react-router/lib/browserHistory';

import AppContainer from './containers/app-container.jsx';
import HomeContainer from './containers/pages/home-container.jsx';

export default class Routes extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={AppContainer}>
          <IndexRoute component={HomeContainer} />
        </Route>
      </Router>
    );
  }
}
