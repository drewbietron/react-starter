import * as React from 'react';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './app';
import Home from './pages/home';

export class Routes extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
        </Route>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.data,
  };
}

export default connect(mapStateToProps, null)(Routes);
