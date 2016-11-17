import { connect } from 'react-redux';

import App from '../../app/app.jsx';

function mapStateToProps(state) {
  return {
    data: state.data,
  };
}

export default connect(mapStateToProps, null)(App);
