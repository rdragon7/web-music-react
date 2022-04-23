import React, { memo } from 'react';

import { Slider } from 'antd';
import { PlayerVolumeWrapper } from './style';

export default memo(function ZLPlayerVolume(props) {
  // state & props
  const { volume,volumeClick } = props;
  // redux hooks

  // other hooks

  // 业务逻辑
  const sliderChange = (value) => {
    volumeClick(value / 100);
  }


  return (
    <PlayerVolumeWrapper className="sprite_playbar">
      <Slider value={volume * 100} vertical onChange={sliderChange} />
    </PlayerVolumeWrapper>
  )
})