import axios from 'axios';
import { EActionTypes } from '../../app/actions/action-types';

const SPOTIFY_CALLBACK_URL = 'https://lp.player:7337/callback';

function receiveSpotifyData(payload) {
  return {
    type: EActionTypes.RECEIVE_SPOTIFY_DATA,
    payload,
  };
}

export function authWithSpotify() {
  const url = `https://accounts.spotify.com/authorize?client_id=3775593e304b4bca87e94c7a7e9ea667&response_type=token&redirect_uri=${SPOTIFY_CALLBACK_URL}`;

  window.location.href = url;
}

export function fetchSpotifyUser(accessToken) {
  return dispatch => {
    const request = new Request('https://api.spotify.com/v1/me', {
      headers: new Headers({
        Authorization: 'Bearer ' + accessToken,
      }),
    });

    fetch(request)
      .then(res => {
        // send user back to homepage if no token
        if (res.statusText === 'Unauthorized') {
          window.location.href = './';
        }
        return res.json();
      })
      .then(res => {
        dispatch(receiveSpotifyData(res));
        // dispatch(fetchUserSuccess(res));
      })
      .catch(err => {
        // dispatch(fetchUserError(err));
      });
  };
}
