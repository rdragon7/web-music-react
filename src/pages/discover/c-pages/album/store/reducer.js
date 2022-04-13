import { CHANGE_HOT_ALBUM, CHANGE_ALL_ALBUM, CHANGE_CURRENT_AREA } from './constants';

const defaultState = {
  hotAlbum: [],
  allAlbum: {},
  currentArea: "all"
}

function reducer(preState = defaultState,action) {
  const { type, data } = action;
  switch(type) {
    case CHANGE_HOT_ALBUM:
      return {...preState,hotAlbum: data}
    case CHANGE_ALL_ALBUM:
      return {...preState,allAlbum: data}
    case CHANGE_CURRENT_AREA:
      return {...preState,currentArea: data}
    default:
      return preState
  }
}

export default reducer;