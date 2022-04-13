import { 
  CHANGE_TOP_BANNER,
  CHANGE_HOT_RECOMMEND,
  CHANGE_NEW_ALBUM,
  CHANGE_UP_RANKING,
  CHANGE_NEW_RANKING,
  CHANGE_ORIGIN_RANKING
} from './constants';

const defaultState = {
  topBanner: [],
  hotRecommend: [],
  newAlbum: [],
  upRankingList: [],
  newRankingList: [],
  originRankingList: [],
}

function reducer(preState = defaultState,action) {
  const { type, data } = action;
  switch(type) {
    case CHANGE_TOP_BANNER:
      return {...preState,topBanner: data}
    case CHANGE_HOT_RECOMMEND:
      return {...preState,hotRecommend: data}
    case CHANGE_NEW_ALBUM:
      return {...preState,newAlbum: data}
    case CHANGE_UP_RANKING:
      return {...preState,upRankingList: data}
    case CHANGE_NEW_RANKING:
      return {...preState,newRankingList: data}
    case CHANGE_ORIGIN_RANKING:
      return {...preState,originRankingList: data}
    default:
      return preState  
  }
}

export default reducer;