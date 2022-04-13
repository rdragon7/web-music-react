import { CHANGE_HOT_ALBUM, CHANGE_ALL_ALBUM, CHANGE_CURRENT_AREA } from './constants';
import { getHotAlbum, getAllAlbum } from '@/api/album';

export const changeHotAlbumAction = data => ({type: CHANGE_HOT_ALBUM,data});
export const changeAllAlbumAction = data => ({type: CHANGE_ALL_ALBUM,data});
export const changeCurrentAreaAction = data => ({type: CHANGE_CURRENT_AREA,data});

export const getHotAlbumAction = () => {
  return dispatch => {
    getHotAlbum().then(res => {
      const data = res.data.albums;
      dispatch(changeHotAlbumAction(data));
    })
  }
}

export const getAllAlbumAction = (area,limit,offset) => {
  return dispatch => {
    getAllAlbum(area,limit,offset).then(res => {
      const data = res.data;
      dispatch(changeAllAlbumAction(data));
    })
  }
}
