import React, { memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import ZLPlayerHeader from './c-cpn/player-header';
import ZLPlayerList from './c-cpn/player-list';
import ZLPlayerLyric from './c-cpn/player-lyric';
import { PlayerPanelWrapper } from './style';

export default memo(function ZLPlayerPanel() {
  // state & props

  // redux hooks
  const { currentSong } = useSelector(state => ({
    currentSong: state.player.currentSong,
  }),shallowEqual)

  // other hooks

  // 业务逻辑
  const img = currentSong && currentSong.al && currentSong.al.picUrl + "?imageView&blur=40x20";

  return (
    <PlayerPanelWrapper bgImg={img}>
      <ZLPlayerHeader />
      <div className="main">
        <img className="image" src={img} alt=""/>
        <ZLPlayerList />
        <ZLPlayerLyric />
      </div>
    </PlayerPanelWrapper>
  )
})