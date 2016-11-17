import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <section role="main">
        {this.props.children}
      </section>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.shape({}).isRequired,
};
