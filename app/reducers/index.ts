import { combineReducers } from 'redux';
import spotifyData from './spotify';

const sitesReducers = combineReducers({
  spotifyData,
});

export default sitesReducers;
