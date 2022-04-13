import { 
  CHANGE_CATEGORY, 
  CHANGE_CURRENT_CATEGORY, 
  CHANGE_CATEGORY_SONG,
  CHANGE_CURRENT_PAGE,
  CHANGE_SHOW_CATEGORY 
} from './constants';

import { getSongCategory, getSongCategoryList } from '@/api/song';

export const changeCategoryAction = data => ({type: CHANGE_CATEGORY,data});
export const changeCurrentCategoryAction = data => ({type: CHANGE_CURRENT_CATEGORY,data});
export const changeCategorySongAction = data => ({type: CHANGE_CATEGORY_SONG,data});
export const changeCurrentPageAction = data => ({type: CHANGE_CURRENT_PAGE,data});
export const changeShowCategoryAction = data => ({type: CHANGE_SHOW_CATEGORY,data});

export const getCategoryAction = () => {
  return dispatch => {
    getSongCategory().then(res => {
      const data = res.data;
      dispatch(changeCategoryAction(data));
    })
  }
}

export const getCategorySongAction = (cat,limit,offset) => {
  return dispatch => {
    getSongCategoryList(cat,limit,offset).then(res => {
      const data = res.data;
      dispatch(changeCategorySongAction(data))
    })
  }
}