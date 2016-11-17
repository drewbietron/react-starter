import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Home from '../../../app/pages/home.jsx';
import { addData, resetData } from '../../../app/actions/action.js';

function mapStateToProps(state) {
  return {
    data: state.data,
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(
    {
      addData,
      resetData,
    }, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
