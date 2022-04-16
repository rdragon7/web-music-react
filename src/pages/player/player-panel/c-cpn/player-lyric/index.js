import React, { memo, useRef, useEffect } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import { scrollTo } from '@/utils/ui-helper';

import { PlayerLyricWrapper } from './style';

export default memo(function ZLPlayerLyric() {
  // state & props

  // redux hooks
  const { lyricList, currentLyricIndex } = useSelector(state => ({
    lyricList: state.player.lyricList,
    currentLyricIndex: state.player.currentLyricIndex
  }),shallowEqual)

  // other hooks
  const panelRef = useRef();
  useEffect(() => {
    if (currentLyricIndex > 0 && currentLyricIndex < 3) return;
    scrollTo(panelRef.current, (currentLyricIndex - 3) * 32, 300)
  },[currentLyricIndex])

  return (
    <PlayerLyricWrapper ref={panelRef}>
      <div className="lrc-content">
        {
          lyricList.map((item,index) => {
            return (
              <div key={index} className={"lrc-item " + (currentLyricIndex === index ? "active" : "")}>
                {item.content}
              </div>
            )
          })
        }
      </div>
    </PlayerLyricWrapper>
  )
})