import React, { memo, useEffect, useRef } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getNewAlbumAction } from '../../store/action';

import { Carousel } from 'antd';
import ZLThemeHeaderRCM from '@/components/theme-header-rcm';
import ZLAlbumCover from '@/components/album-cover';
import { NewAlbumWrapper } from './style';

export default memo(function ZLNewAlbum() {
  // state & props

  // redux hooks
  const dispatch = useDispatch();
  const { newAlbum } = useSelector(state => ({
    newAlbum: state.recommend.newAlbum
  }),shallowEqual)

  // other hooks
  const pageRef = useRef();
  useEffect(() => {
    dispatch(getNewAlbumAction());
  },[dispatch])

  // 其他业务逻辑

  return (
    <NewAlbumWrapper>
      <ZLThemeHeaderRCM title="新碟上架" />
      <div className="album-content">
        <button className="arrow arrow-left sprite_02" onClick={() => pageRef.current.prev()}></button>
        <div className="album-list">
          <Carousel ref={pageRef} dots={false}>
            {
              [0,1].map((item,index) => {
                return (
                  <div key={item} className="page">
                    {
                      newAlbum && newAlbum.slice(item * 5,(item + 1) * 5).map((iten,index) => {
                        return <ZLAlbumCover key={iten.id} info={iten} size={100} width={118} bgp={-570} />
                      })
                    }
                  </div>
                )
              })
            }
          </Carousel>
        </div>
        <button className="arrow arrow-right sprite_02" onClick={() => pageRef.current.next()}></button>
      </div>
    </NewAlbumWrapper>
  )
})
