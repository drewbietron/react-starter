import { expect } from 'chai';
import * as actionTypes from '../../app/actions/action-types.js';
import * as actions from '../../app/actions/action.js';

describe('addData', () => {
  it('should create an action', () => {
    const newValue = { foo: 'yo' };
    const expectedAction = {
      type: actionTypes.ADD_DATA,
      data: {
        foo: 'yo',
      },
    };

    console.log(actions.addData);
    expect(actions.addData(newValue)).to.eql(expectedAction);
  });
});
