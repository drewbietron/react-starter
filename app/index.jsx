import React from 'react';
import { Provider } from 'react-redux';
import store from './configure-store.js';

import RoutesContainer from './containers/routes-container.jsx';

export default class Index extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RoutesContainer />
      </Provider>
    );
  }
}
