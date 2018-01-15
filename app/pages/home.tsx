import * as React from 'react';
import Helmet from 'react-helmet';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { authWithSpotify, fetchSpotifyUser } from '../actions/spotify';
import { IReduxStore } from '../models/redux-store';
import { ISpotifyData } from '../models/spotify';

const SPOTIFY_CALLBACK_URL = 'https://lp.player:7337';

const url = `https://accounts.spotify.com/authorize?client_id=${
  process.env.SPOTIFY_CLIENT_ID
}&scope=playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20user-read-recently-played%20playlist-modify-private%20ugc-image-upload%20user-follow-modify%20user-follow-read%20user-library-read%20user-library-modify%20user-read-private%20user-read-email%20user-top-read%20user-read-playback-state&response_type=token&redirect_uri=${SPOTIFY_CALLBACK_URL}`;

interface IHomeProps {
  spotifyData: ISpotifyData;
  actions: any;
}

export class Home extends React.Component<IHomeProps, any> {
  audio: any;

  componentDidMount() {
    let hashParams: any = {};
    let e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }

    if (!hashParams.access_token) {
      this.props.actions.authWithSpotify();
    } else {
      this.props.actions.fetchSpotifyUser(hashParams.access_token);
    }
  }

  render() {
    console.log(this.props);
    return (
      <section className="home">
        <Helmet title={'Html Title'} />
        <div className="home__container" />
      </section>
    );
  }
}

function mapStateToProps(state: IReduxStore) {
  return {
    spotifyData: state.spotifyData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ authWithSpotify, fetchSpotifyUser }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
