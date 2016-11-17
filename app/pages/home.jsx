import React from 'react';
import Helmet from 'react-helmet';

import DumbComponent from '../components/dumb-component.jsx';

export default class Home extends React.Component {
  constructor() {
    super();

    this.dispatchAddAction = this.dispatchAddAction.bind(this);
    this.dispatchResetAction = this.dispatchResetAction.bind(this);
  }

  dispatchAddAction() {
    this.props.actions.addData({ foo: this.textInput.value });
  }

  dispatchResetAction() {
    this.props.actions.resetData();
  }

  render() {
    return (
      <section className="home">
        <Helmet title={'Html Title'} />
        <div className="home__container">
          <input
            type="text"
            ref={(input) => this.textInput = input}
            placeholder="Enter new prop value"
          / >
          <button onClick={this.dispatchAddAction}>Dispatch add action</button>
          <DumbComponent data={this.props.data} />
          <button onClick={this.dispatchResetAction}>Reset to model defaults</button>
        </div>
      </section>
    );
  }
}

Home.propTypes = {
  data: React.PropTypes.shape({}).isRequired,
  actions: React.PropTypes.shape({
    addData: React.PropTypes.func.isRequired,
    resetData: React.PropTypes.func.isRequired,
  }).isRequired,
};
