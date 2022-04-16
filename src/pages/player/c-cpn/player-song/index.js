import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getSimiPlaylistAction } from '../../store/action';
import { getSizeImage } from '@/utils/format-data';

import ZLThemeHeaderPlayer from '@/components/theme-header-player';
import { PlayerSongWrapper } from './style';

export default memo(function ZLPlayerSong() {
  // state & props

  // redux hooks
  const dispatch = useDispatch();
  const { simiPlayList, currentSong } = useSelector(state => ({
    simiPlayList: state.player.simiPlayList,
    currentSong: state.player.currentSong
  }),shallowEqual)

  // other hooks
  useEffect(() => {
    const id = currentSong && currentSong.id;
    dispatch(getSimiPlaylistAction(id));
  },[dispatch,currentSong])

  // 业务逻辑

  return (
    <PlayerSongWrapper>
      <ZLThemeHeaderPlayer title="包含这首歌的歌单" />
      <div className="songs">
        {
          simiPlayList && simiPlayList.map((item,index) => {
            return (
              <div className="song-item" key={item.id}>
                <a className="image" href="/todo">
                  <img src={getSizeImage(item.coverImgUrl, 50)} alt="" />
                </a>
                <div className="info text-nowrap">
                  <a href="/todo" className="name">{item.name}</a>
                  <div className="anchor">
                    by 
                    <a href="/todo" className="nickname">{item.creator.nickname}</a>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </PlayerSongWrapper>
  )
})