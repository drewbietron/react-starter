import { EActionTypes } from '../../app/actions/action-types';

import spotifyDataDefaults from '../models/spotify';

const spotifyData = (state = spotifyDataDefaults, action) => {
  switch (action.type) {
    case EActionTypes.RECEIVE_SPOTIFY_TOKEN:
      return { ...state, data: { ...state.data, token: action.payload } };
    case EActionTypes.RECEIVE_SPOTIFY_DATA:
      return { ...state, data: { ...action.payload } };
    default:
      return state;
  }
};

export default spotifyData;
