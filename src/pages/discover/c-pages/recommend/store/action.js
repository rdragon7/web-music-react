import { 
  CHANGE_TOP_BANNER,
  CHANGE_HOT_RECOMMEND,
  CHANGE_NEW_ALBUM,
  CHANGE_UP_RANKING,
  CHANGE_NEW_RANKING,
  CHANGE_ORIGIN_RANKING
} from './constants';

import { 
  getTopBannerList,
  getHotRecommendList,
  getNewAlbumList,
  getPlayList 
} from '@/api/recommend';

export const changeTopBannerAction = data => ({type: CHANGE_TOP_BANNER,data});
export const changeHotRecommendAction = data => ({type: CHANGE_HOT_RECOMMEND,data});
export const changeNewAlbumAction = data => ({type: CHANGE_NEW_ALBUM,data});
export const changeUpRankingAction = data => ({type: CHANGE_UP_RANKING,data});
export const changeNewRankingAction = data => ({type: CHANGE_NEW_RANKING,data});
export const changeOriginRankingAction = data => ({type: CHANGE_ORIGIN_RANKING,data});

export const getTopBannerAction = () => {
  return dispatch => {
    getTopBannerList().then(res => {
      const data = res.data.banners;
      dispatch(changeTopBannerAction(data));
    })
  }
}

export const getHotRecommendAction = (limit) => {
  return dispatch => {
    getHotRecommendList(limit).then(res => {
      const data = res.data.result;
      dispatch(changeHotRecommendAction(data));
    })
  }
}

export const getNewAlbumAction = () => {
  return dispatch => {
    getNewAlbumList().then(res => {
      const data = res.data.albums;
      dispatch(changeNewAlbumAction(data));
    })
  }
}

export const getUpRankingAction = (id) => {
  return dispatch => {
    getPlayList(id).then(res => {
      const data = res.data.playlist;
      dispatch(changeUpRankingAction(data));
    })
  }
}

export const getNewRankingAction = (id) => {
  return dispatch => {
    getPlayList(id).then(res => {
      const data = res.data.playlist;
      dispatch(changeNewRankingAction(data));
    })
  }
}

export const getOriginRankingAction = (id) => {
  return dispatch => {
    getPlayList(id).then(res => {
      const data = res.data.playlist;
      dispatch(changeOriginRankingAction(data));
    })
  }
}

