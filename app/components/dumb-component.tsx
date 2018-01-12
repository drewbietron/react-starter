import * as React from 'react';

export default class DumbComponent extends React.Component<any, any> {
  render() {
    return (
      <div>
        <h1>this.props.data.foo is set to - </h1>
        <h2>{this.props.data.foo}</h2>
      </div>
    );
  }
}
