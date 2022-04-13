import { 
  CHANGE_CATEGORY, 
  CHANGE_CURRENT_CATEGORY, 
  CHANGE_CATEGORY_SONG,
  CHANGE_CURRENT_PAGE,
  CHANGE_SHOW_CATEGORY 
} from './constants';

const defaultState = {
  category: {},
  currentCategory: "全部",
  categorySong: {},
  currentPage: 1,
  showCategory: false
}

function reducer(preState = defaultState,action) {
  const { type, data } = action;
  switch(type) {
    case CHANGE_CATEGORY:
      return {...preState,category: data}
    case CHANGE_CURRENT_CATEGORY:
      return {...preState,currentCategory: data}
    case CHANGE_CATEGORY_SONG:
      return {...preState,categorySong: data}  
    case CHANGE_CURRENT_PAGE:
      return {...preState,currentPage: data}
    case CHANGE_SHOW_CATEGORY:
      return {...preState,showCategory: data}
    default:
      return preState
  }
}

export default reducer;