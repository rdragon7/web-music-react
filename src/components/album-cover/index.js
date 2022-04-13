import React, { memo } from 'react';

import { getSizeImage } from '@/utils/format-data';

import { AlbumCoverWrapper } from './style';

export default memo(function ZLAlbumCover(props) {
  // state & props
  const { info,width = 153,size = 130,bgp = -845 } = props;

  // redux hooks

  // other hooks

  // 业务逻辑
  
  return (
    <AlbumCoverWrapper width={width} size={size} bgp={bgp}>
      <div className="album-image">
        <img src={getSizeImage(info.picUrl,size)} alt="" />
        <a href="/todo" className="cover sprite_cover">{info.name}</a>
      </div>
      <div className="album-info">
        <div className="name text-nowrap">{info.name}</div>
        <div className="artist text-nowrap">{info.artist.name}</div>
      </div>
    </AlbumCoverWrapper>
  )
})