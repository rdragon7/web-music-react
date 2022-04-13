import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getHotRecommendAction } from '../../store/action';
import { HOT_RECOMMEND_LIMIT } from '@/common/constants';

import ZLThemeHeaderRCM from '@/components/theme-header-rcm';
import ZLSongCover from '@/components/song-cover';
import { HotRecommendWrapper } from './style';

export default memo(function ZLHotRecommend() {
  // state & props

  // redux hooks
  const dispatch = useDispatch();
  const { hotRecommend } = useSelector(state => ({
    hotRecommend: state.recommend.hotRecommend
  }),shallowEqual)

  // other hooks
  useEffect(() => {
    dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT));
  },[dispatch])

  // 业务逻辑

  return (
    <HotRecommendWrapper>
      <ZLThemeHeaderRCM title="热门推荐" keyword={["华语","流行","摇滚","民谣","电子"]} />
      <div className="recommend-lis">
        {
          hotRecommend && hotRecommend.map((item,index) => {
            return <ZLSongCover info={item} key={item.id} />
          })
        }
      </div>
    </HotRecommendWrapper>
  )
})