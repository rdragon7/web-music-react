import { 
  CHANGE_RADIO_CATEGORY,
  CHANGE_CURRENT_ID,
  CHANGE_RADIO_RECOMMEND,
  CHANGE_HOT_RADIO,
  CURRENT_PAGE 
} from './constants';

const defaultState = {
  radioCategory: [],
  currentId: 0,
  radioRecommend: [],
  hotRadio: {},
  currentPage: 1
}

function reducer(preState = defaultState,action) {
  const { type, data } = action;
  switch (type) {
    case  CHANGE_RADIO_CATEGORY:
      return {...preState,radioCategory: data}
    case  CHANGE_CURRENT_ID:
      return {...preState,currentId: data}  
    case CHANGE_RADIO_RECOMMEND:
      return {...preState,radioRecommend: data}
    case CHANGE_HOT_RADIO:
      return {...preState,hotRadio: data}
    case CURRENT_PAGE:
      return {...preState,currentPage: data}
    default:
      return preState
  }
}

export default reducer;