import { connect } from 'react-redux';

import Routes from '../../app/routes.jsx';

function mapStateToProps(state) {
  return {
    data: state.data,
  };
}

export default connect(mapStateToProps, null)(Routes);
