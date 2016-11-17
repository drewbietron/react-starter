import React from 'react';

export default class DumbComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>this.props.data.foo is set to - </h1>
        <h2>{this.props.data.foo}</h2>
      </div>
    );
  }
}

DumbComponent.propTypes = {
  data: React.PropTypes.shape({
    foo: React.PropTypes.string.isRequired,
  }).isRequired,
};
