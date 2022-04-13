import { 
  CHANGE_RADIO_CATEGORY,
  CHANGE_CURRENT_ID,
  CHANGE_RADIO_RECOMMEND,
  CHANGE_HOT_RADIO,
  CURRENT_PAGE 
} from './constants';

import { getRadioCategory, getRadioRecommend, getHotRadio } from '@/api/radio';

export const changeRadioCategoryAction = data => ({type: CHANGE_RADIO_CATEGORY,data});
export const changeCurrentIdAction = data => ({type: CHANGE_CURRENT_ID,data});
export const changeRadioRecommendAction = data => ({type: CHANGE_RADIO_RECOMMEND,data});
export const changeHotRadioAction = data => ({type: CHANGE_HOT_RADIO,data});
export const changeCurrentPageAction = data => ({type: CURRENT_PAGE,data});

export const getRadioCategoryAction = () => {
  return dispatch => {
    getRadioCategory().then(res => {
      const data = res.data.categories;
      const id = data[0].id;
      dispatch(changeRadioCategoryAction(data));
      dispatch(changeCurrentIdAction(id));
    })
  }
}

export const getRadioRecommendAction = (type) => {
  return dispatch => {
    getRadioRecommend(type).then(res => {
      const data = res.data.djRadios;
      dispatch(changeRadioRecommendAction(data));
    })
  }
}

export const getHotRadioAction = (cateId,limit,offset) => {
  return dispatch => {
    getHotRadio(cateId,limit,offset).then(res => {
      const data = res.data;
      dispatch(changeHotRadioAction(data));
    })
  }
}