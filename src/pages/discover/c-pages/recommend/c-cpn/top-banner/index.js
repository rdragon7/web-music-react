import React, { memo, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getTopBannerAction } from '../../store/action';

import { Carousel } from 'antd';
import { TopBannerWrapper } from './style';

export default memo(function ZLTopBanner() {
  // state & props
  const [currentIndex,setCurrentIndex] = useState(0);

  // redux hooks
  const dispatch = useDispatch();
  const { topBanner } = useSelector(state => ({
    topBanner: state.recommend.topBanner
  }),shallowEqual)

  // other hooks
  const bannerRef = useRef();
  useEffect(() => {
    dispatch(getTopBannerAction());
  },[dispatch])

  // 业务逻辑
  const bannerChange = (from,to) => {
    setCurrentIndex(to);
  }
  const bgImg = topBanner[currentIndex] && topBanner[currentIndex].imageUrl + "?imageView&blur=40x20";
  
  return (
    <TopBannerWrapper bgImg = {bgImg}>
      <div className="top-banner-content wrap-v2">
        <div className="left">
          <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={bannerChange}>
            {
              topBanner && topBanner.map((item,index) => {
                return (
                  <div className="banner-item" key={item.imageUrl}>
                    <img src={item.imageUrl} alt={item.imageTitle} className="image" />
                  </div>
                )
              })
            }
          </Carousel>
        </div>
        <div className="right"><a href="/toto">下载</a></div>
        <div className="control">
          <button className="btn left" onClick={e => bannerRef.current.prev()}></button>
          <button className="btn right" onClick={e => bannerRef.current.next()}></button>
        </div>
      </div>
    </TopBannerWrapper>
  )
})