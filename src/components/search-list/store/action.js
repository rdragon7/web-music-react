import { CHANGE_SEARCH_SONG, CHANGE_SEARCH_ARTIST, CHANGE_SEARCH_ALBUM } from './constants';

import { getSearchSuggest } from '@/api/search';

export const changeSearchSongAction = data => ({type: CHANGE_SEARCH_SONG,data});
export const changeSearchArtistAction = data => ({type: CHANGE_SEARCH_ARTIST,data});
export const changeSearchAlbumAction = data => ({type: CHANGE_SEARCH_ALBUM,data});

export const getSearchSongAction = (keywords) => {
  return dispatch => {
    getSearchSuggest(keywords).then(res => {
      console.log(res);
      const data = res.data && res.data.result.songs;
      dispatch(changeSearchSongAction(data));
    })
  }
}
export const getSearchArtistAction = (keywords) => {
  return dispatch => {
    getSearchSuggest(keywords).then(res => {
      const data = res.data && res.data.result.artists;
      console.log(data);
      dispatch(changeSearchArtistAction(data));
    })
  }
}
export const getSearchAlbumAction = (keywords) => {
  return dispatch => {
    getSearchSuggest(keywords).then(res => {
      const data = res.data &&  res.data.result.albums;
      console.log(data);
      dispatch(changeSearchAlbumAction(data));
    })
  }
}