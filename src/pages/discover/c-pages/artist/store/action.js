import { CHANGE_CURRENT_AREA, CHANGE_CURRENT_TYPE, CHANGE_ARTIST_LIST } from './constants';

import { getArtistList } from '@/api/artist';

export const changeCurrentAreaAction = data => ({type: CHANGE_CURRENT_AREA,data});
export const changeCurrentTypeAction = data => ({type: CHANGE_CURRENT_TYPE,data});
export const changeArtistListAction = data => ({type: CHANGE_ARTIST_LIST,data});

export const getArtistListAction = (area,type,initial) => {
  return dispatch => {
    getArtistList(area,type,initial).then(res => {
      const data = res.data.artists;
      dispatch(changeArtistListAction(data));
    })
  }
}