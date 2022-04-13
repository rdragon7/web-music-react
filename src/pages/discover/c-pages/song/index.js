import React, { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getCategoryAction, getCategorySongAction } from './store/action';

import ZLSongHeader from './c-cpn/song-header';
import ZLSongList from './c-cpn/song-list';
import { SongWrapper } from './style';

export default memo(function ZLSong() {
  // state & props

  // redux hooks
  const dispatch = useDispatch();

  // other hooks
  useEffect(() => {
    dispatch(getCategoryAction());
    dispatch(getCategorySongAction());
  },[dispatch])
  
  return (
    <SongWrapper className="wrap-v2">
      <ZLSongHeader />
      <ZLSongList />
    </SongWrapper>
  )
})