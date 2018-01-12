import * as React from 'react';
import { connect } from 'react-redux';

export class App extends React.Component<any, any> {
  render() {
    return <section role="main">{this.props.children}</section>;
  }
}

function mapStateToProps(state) {
  return {
    data: state.data,
  };
}

export default connect(mapStateToProps, null)(App);
