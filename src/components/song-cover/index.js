import React, { memo } from 'react';

import { getSizeImage, getHotRecommendCount } from '@/utils/format-data';

import { SongCoverWrapper } from './style';

export default memo(function ZLSongCover(props) {
  // state & props
  const { info,right } = props;

  // redux hooks

  // other hooks

  // 业务逻辑

  return (
    <SongCoverWrapper right={right}>
      <div className="cover-top">
        <img src={getSizeImage((info.picUrl || info.coverImgUrl),140)} alt="" />
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="sprite_icon erji"></i>
              {getHotRecommendCount(info.playCount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom text-nowrap">
        {info.name}
      </div>
      <div className="cover-source">
        by {info.copywriter || (info.creator && info.creator.nickname)}
      </div>
    </SongCoverWrapper>
  )
})