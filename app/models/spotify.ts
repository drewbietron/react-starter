export interface ISpotifyData {
  loading: boolean;
  error: boolean;
  data: {
    token: string;
    display_name: string;
    images: any[];
  };
}

export const spotifyDataDefaults = {
  loading: true,
  error: null,
  data: {
    token: null,
    display_name: null,
    images: [],
  },
};

export default spotifyDataDefaults;
