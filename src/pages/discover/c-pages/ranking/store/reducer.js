import { 
  CHANGE_TOP_LIST,
  CHANGE_PLAT_LIST,
  CHANGE_CURRENT_INDEX,
  CHANGE_RANKING_COMMENT,
  CHANGE_CURRENT_PAGE 
} from './constants';

const defaultState = {
  topList: [],
  currentIndex: 0,
  playList: {},
  rankingComment: {},
  currentPage: 1
}

function reducer(preState = defaultState,action) {
  const { type, data } = action;
  switch(type) {
    case CHANGE_TOP_LIST:
      return {...preState,topList: data}
    case CHANGE_CURRENT_INDEX:
      return {...preState,currentIndex: data}
    case CHANGE_PLAT_LIST:
      return {...preState,playList: data}
    case CHANGE_RANKING_COMMENT:
      return {...preState,rankingComment: data}
    case CHANGE_CURRENT_PAGE:
      return {...preState,currentPage: data}
    default:
      return preState  
  }
}

export default reducer;