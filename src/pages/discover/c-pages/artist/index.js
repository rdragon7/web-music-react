import React, { memo } from 'react';

import ZLArtistCategory from './c-cpn/artist-category';
import ZLArtistList from './c-cpn/artist-list';
import { ArtistWrapper } from './style';

export default memo(function ZLArtist() {
  return (
    <ArtistWrapper className="wrap-v2">
      <ZLArtistCategory />
      <ZLArtistList />
    </ArtistWrapper>
  )
})