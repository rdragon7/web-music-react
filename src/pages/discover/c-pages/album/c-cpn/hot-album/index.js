import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getHotAlbumAction } from '../../store/action';

import ZLThemeHeaderNormal from '@/components/theme-header-normal';
import ZLAlbumCover from '@/components/album-cover';
import { HotAlbumWrapper } from './style';

export default memo(function ZLHotAlbum() {
  // state & props

  // redux hooks
  const dispatch = useDispatch();
  const { hotAlbum } = useSelector(state => ({
    hotAlbum: state.album.hotAlbum
  }),shallowEqual)

  // other hooks
  useEffect(() => {
    dispatch(getHotAlbumAction());
  },[dispatch])

  // 业务逻辑

  return (
    <HotAlbumWrapper>
      <ZLThemeHeaderNormal title="热门新碟" />
      <div className="hot-list">
        {
          hotAlbum && hotAlbum.slice(0,10).map((item,index) => {
            return <ZLAlbumCover key={item.id} 
                                 info={item}
                                 width={153}
                                 size={130}
                                 bgp={-845} />
          })
        }
      </div>
    </HotAlbumWrapper>
  )
})