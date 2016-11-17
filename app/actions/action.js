import * as actionTypes from '../../app/actions/action-types.js';

export function addData(data) {
  return {
    type: actionTypes.ADD_DATA,
    data,
  };
}

export function resetData() {
  return {
    type: actionTypes.RESET_DATA,
  };
}
