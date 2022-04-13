import { CHANGE_CURRENT_AREA, CHANGE_CURRENT_TYPE, CHANGE_ARTIST_LIST } from './constants';

const defaultState = {
  currentArea: 7,
  currentType: {
    name: "华语男歌手",
    type: 1
  },
  artistList: []
}

function reducer(preState = defaultState,action) {
  const { type, data } = action;
  switch(type) {
    case CHANGE_CURRENT_AREA:
      return {...preState,currentArea: data}
    case CHANGE_CURRENT_TYPE:
      return {...preState,currentType: data}
    case CHANGE_ARTIST_LIST:
      return {...preState,artistList: data}
    default:
      return preState
  }
}

export default reducer;