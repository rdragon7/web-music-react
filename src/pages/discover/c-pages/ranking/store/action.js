import { 
  CHANGE_TOP_LIST,
  CHANGE_PLAT_LIST,
  CHANGE_CURRENT_INDEX,
  CHANGE_RANKING_COMMENT,
  CHANGE_CUR_PAGE 
} from './constants';

import { getTopList, getPlayList, getRankingComment } from '@/api/ranking';

export const changeTopListAction = data => ({type: CHANGE_TOP_LIST,data});
export const changeCurrentIndexAction = data => ({type: CHANGE_CURRENT_INDEX,data});
export const changePlayListAction = data => ({type: CHANGE_PLAT_LIST,data});
export const changeRankingCommentAction = data => ({type: CHANGE_RANKING_COMMENT,data});
export const changeCurPageAction = data => ({type: CHANGE_CUR_PAGE,data});

export const getTopListAction = () => {
  return dispatch => {
    getTopList().then(res => {
      const data = res.data.list;
      dispatch(changeTopListAction(data));
    })
  }
}

export const getPlayListAction = (id) => {
  return dispatch => {
    getPlayList(id).then(res => {
      const data = res.data.playlist;
      dispatch(changePlayListAction(data));
    })
  }
}
  
export const getRankingCommentAction = (id,limit,offset) => {
  return dispatch => {
    getRankingComment(id,limit,offset).then(res => {
      const data = res.data;
      dispatch(changeRankingCommentAction(data));
    })
  }
}