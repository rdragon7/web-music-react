import React, { Fragment, memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getSimiSongAction } from '../../store/action';

import ZLThemeHeaderPlayer from '@/components/theme-header-player';
import { PlayerSimiWrapper } from './style';

export default memo(function ZLPlayerSimi() {
  // state & props

  // redux hooks
  const dispatch = useDispatch();
  const { currentSong, simiSong } = useSelector(state => ({
    currentSong: state.player.currentSong,
    simiSong: state.player.simiSong
  }),shallowEqual)

  // other hooks
  useEffect(() => {
    const id = currentSong && currentSong.id;
    dispatch(getSimiSongAction(id));
  },[dispatch, currentSong])

  // 业务逻辑

  return (
    <PlayerSimiWrapper>
      <ZLThemeHeaderPlayer title="相似歌曲" />
      <div className="song">
        {
          simiSong && simiSong.map((item,index) => {
            return (
              <div className="song-item" key={item.id}>
                <div className="info">
                  <div className="title">
                    <a href="/todo">{item.name}</a>
                  </div>
                  <div className="artist">
                      {
                        item.artists.length > 1 ? 
                        <Fragment>
                          <a href="/todo">{item.artists[0].name}</a>
                          <span style={{color: "#999"}}>/</span>
                          <a href="/todo">{item.artists[1].name}</a>
                        </Fragment>
                        :
                        <a href="/todo">{item.artists[0].name}</a>
                      }
                  </div>
                </div>
                <div className="operate">
                  <button className="item sprite_icon3 play"></button>
                  <button className="item sprite_icon3 add"></button>
                </div>
              </div>
            )
          })
        }
      </div>
    </PlayerSimiWrapper>
  )
})