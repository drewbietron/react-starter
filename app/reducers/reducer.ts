import * as actionTypes from '../../app/actions/action-types';

import dataDefaults from '../models/model';

const data = (state = dataDefaults, action) => {
  switch (action.type) {
    case actionTypes.ADD_DATA:
      return Object.assign({}, state, action.data);
    case actionTypes.RESET_DATA:
      return Object.assign({}, state, dataDefaults);
    default:
      return state;
  }
};

export default data;
