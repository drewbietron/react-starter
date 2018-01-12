import * as React from 'react';
import Helmet from 'react-helmet';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { addData, resetData } from '../actions/action';

import DumbComponent from '../components/dumb-component';

export class Home extends React.Component<any, any> {
  textInput: any;
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
          <input type="text" placeholder="Enter new prop value" />
          <button onClick={this.dispatchAddAction}>Dispatch add action</button>
          <DumbComponent data={this.props.data} />
          <button onClick={this.dispatchResetAction}>Reset to model defaults</button>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.data,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        addData,
        resetData,
      },
      dispatch
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
