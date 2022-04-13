import React, { memo } from 'react';

import { getSizeImage } from '@/utils/format-data';

import { RadioRecommendCoverWrapper } from './style';

export default memo(function ZLRadioRecommendCover(props) {
  // state & props
  const { info } = props;
  
  return (
    <RadioRecommendCoverWrapper>
      <a href="/#">
        <img src={getSizeImage(info.picUrl, 150)} alt="" />
      </a>
      <a href="/#" className="text-nowrap name">{info.name}</a>
      <p className="text-nowrap">{info.desc}</p>
    </RadioRecommendCoverWrapper>
  )
})