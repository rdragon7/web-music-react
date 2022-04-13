import React, { memo } from 'react';

import { SongOperationBarWrapper } from './style';

export default memo(function ZLSongOperationBar(props) {
  // state & props
  const { favorTitle, shareTitle, downloadTitle, commentTitle } = props;
  
  return (
    <SongOperationBarWrapper>
      <div className="play">
        <a href="/todo" className="play-icon sprite_button">
          <span className="play-btn sprite_button">
            <i className="sprite_button"></i>
            <span>播放</span>
          </span>
        </a>
        <a href="/todo" className="add-icon sprite_button">+</a>
      </div> 
      <a href="/todo" className="item sprite_button">
        <i className="icon favor-icon sprite_button">{favorTitle}</i>
      </a>
      <a href="/todo" className="item sprite_button">
        <i className="icon favor-icon sprite_button">{shareTitle}</i>
      </a>
      <a href="/todo" className="item sprite_button">
        <i className="icon favor-icon sprite_button">{downloadTitle}</i>
      </a>
      <a href="/todo" className="item sprite_button">
        <i className="icon favor-icon sprite_button">{commentTitle}</i>
      </a>
    </SongOperationBarWrapper>
  )
})