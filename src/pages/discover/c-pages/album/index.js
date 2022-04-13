import React, { memo } from 'react';

import ZLHotAlbum from './c-cpn/hot-album';
import ZLAllAlbum from './c-cpn/all-album';
import { AlbumWrapper } from './style';

export default memo(function ZLAlbum() {
  return (
    <AlbumWrapper className="wrap-v2">
      <ZLHotAlbum />
      <ZLAllAlbum />
    </AlbumWrapper>
  )
})