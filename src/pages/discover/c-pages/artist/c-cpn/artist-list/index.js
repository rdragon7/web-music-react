import React, { memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import ZLThemeHeaderNormal from '@/components/theme-header-normal';
import ZLAlphaList from './c-cpn/alpha-list';
import ZLArtistItem from './c-cpn/artist-item';
import { ArtistListWrapper } from './style';

export default memo(function ZLArtistList() {

  // redux hooks
  const { currentType, artistList } = useSelector(state => ({
    currentType: state.artist.currentType,
    artistList: state.artist.artistList
  }),shallowEqual)

  return (
    <ArtistListWrapper>
      <ZLThemeHeaderNormal title={currentType.name} />
      <ZLAlphaList />
      <div className="artist-list">
        {
          artistList && artistList.map((item,index) => {
            return <ZLArtistItem key={item.id} info={item} index={index} />
          })
        }
      </div>
    </ArtistListWrapper>
  )
})