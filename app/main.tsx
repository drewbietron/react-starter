import * as React from 'react';
import { Provider } from 'react-redux';
import store from './configure-store';

import Routes from './routes';

export default class Main extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}
