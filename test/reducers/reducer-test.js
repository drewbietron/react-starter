import { expect } from 'chai';
import reducer from '../../app/reducers/reducer.js';
import * as actionTypes from '../../app/actions/action-types.js';
import dataDefaults from '../../app/models/model.js';

describe('Flash message Reducer', () => {
  def('initialState', function () {
    return undefined;
  });

  def('finalState', function () {
    return reducer(this.initialState, this.action);
  });

  describe('initialState', function () {
    def('action', {});

    it('sets initial state', function () {
      expect(get('finalState')).to.eql(dataDefaults);
    });
  });

  describe(actionTypes.ADD_DATA, function () {
    def('action', { type: actionTypes.ADD_DATA,
      data: {
        foo: 'hey',
      },
    });

    it('Adds flash message data to flash message store', function () {
      expect(get('finalState')).to.eql({
        foo: 'hey',
      });
    });
  });
});
