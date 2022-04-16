import React, { memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import { formatMinuteSecond } from '@/utils/format-data';

import { PlayerListWrapper } from './style';

export default memo(function ZLPlayerList() {
  // state & props

  // redux hooks
  const { playList, currentIndex } = useSelector(state => ({
    playList: state.player.playList,
    currentIndex: state.player.currentIndex
  }),shallowEqual)

  // other hooks

  // 业务逻辑
  const handleItem = () => {
    console.log(11);
  }

  return (
    <PlayerListWrapper>
      {
        playList && playList.map((item,index) => {
          return (
            <div key={item.id} className={"play-item " + (currentIndex === index ? "active" : "")} onClick={() => handleItem()}>
              <div className="left">
                {item.name}
              </div>
              <div className="right">
                <span className="singer">{item.ar[0].name}</span>
                <span className="duration">{formatMinuteSecond(item.dt)}</span>
                <span className="sprite_playlist link"></span>
              </div>
            </div>
          )
        })
      }
    </PlayerListWrapper>
  )
})