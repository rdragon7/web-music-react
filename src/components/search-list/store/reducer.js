import { CHANGE_SEARCH_SONG, CHANGE_SEARCH_ARTIST, CHANGE_SEARCH_ALBUM } from './constants';

const defaultState = {
  searchSong: [],
  searchArtist: [],
  searchAlbum: []
}

function reducer(preState = defaultState,action) {
  const { type, data } = action;
  switch(type) {
    case CHANGE_SEARCH_SONG:
      return {...preState,searchSong: data}
    case CHANGE_SEARCH_ARTIST:
      return {...preState,searchArtist: data}
    case CHANGE_SEARCH_ALBUM:
      return {...preState,searchAlbum: data}
    default:
      return preState
  }
}

export default reducer;