import React, { memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import { PlayerHeaderWrapper, HeaderLeft, HeaderRight } from './style';

export default memo(function ZLPlayerHeader() {
  // state & props

  // redux hooks
  const { playList, currentSong } = useSelector(state => ({
    playList: state.player.playList,
    currentSong: state.player.currentSong
  }),shallowEqual)

  return (
    <PlayerHeaderWrapper>
      <HeaderLeft>
        <h3>播放列表({playList.length})</h3>
        <div className="operator">
          <button>
            <i className="sprite_playlist icon favor"></i>
            收藏全部
          </button>
          <button>
            <i className="sprite_playlist icon remove"></i>
            清除
          </button>
        </div>
      </HeaderLeft>
      <HeaderRight>
        {currentSong.name}
      </HeaderRight>
    </PlayerHeaderWrapper>
  )
})