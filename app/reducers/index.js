import { combineReducers } from 'redux';
import data from './reducer.js';

const sitesReducers = combineReducers({
  data,
});

export default sitesReducers;
