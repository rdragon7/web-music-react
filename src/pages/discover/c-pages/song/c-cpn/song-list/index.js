import React, { memo } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';

import { SONG_PAGE_SIZE } from '@/common/constants';
import { getCategorySongAction, changeCurrentPageAction } from '../../store/action';

import ZLSongCover from '@/components/song-cover';
import ZLPagination from '@/components/pagination';
import { SongListWrapper } from './style';

export default memo(function ZLSongList() {
  // state & props

  // redux hooks
  const dispatch = useDispatch();
  const { categorySong, currentCategory, currentPage } = useSelector(state => ({
    categorySong: state.song.categorySong,
    currentPage: state.song.currentPage
  }),shallowEqual)

  // other hooks


  // 业务逻辑
  const onPageChange = (page,pageSize) => {
    dispatch(changeCurrentPageAction(page));
    dispatch(getCategorySongAction(currentCategory,pageSize,(page - 1) * pageSize));
  }

  return (
    <SongListWrapper>
      <div className="song-list">
        {
          categorySong && categorySong.playlists && categorySong.playlists.map((item,index) => {
            return <ZLSongCover info={item} key={item.id} right="30px" />
          })
        }
      </div>
      {<ZLPagination  total={categorySong.total} 
                      pageSize={SONG_PAGE_SIZE} 
                      currentPage={currentPage} 
                      onPageChange={(page,pageSize) => onPageChange(page,pageSize)} />}
    </SongListWrapper>
  )
})