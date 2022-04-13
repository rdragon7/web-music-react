import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getUpRankingAction, getNewRankingAction, getOriginRankingAction } from '../../store/action';

import ZLThemeHeaderRCM from '@/components/theme-header-rcm';
import ZLTopRanking from '@/components/top-ranking';
import { RecommendRankingWrapper } from './style';

export default memo(function ZLRecommendRanking() {
  // state & props

  // redux hooks
  const dispatch = useDispatch();
  const { upRankingList, newRankingList, originRankingList } = useSelector(state => ({
    upRankingList: state.recommend.upRankingList,
    newRankingList: state.recommend.newRankingList,
    originRankingList: state.recommend.originRankingList
  }),shallowEqual)

  // other hooks
  useEffect(() => {
    dispatch(getUpRankingAction(19723756));
    dispatch(getNewRankingAction(3779629));
    dispatch(getOriginRankingAction(2884035));
  },[dispatch])

  // 业务逻辑

  return (
    <RecommendRankingWrapper>
      <ZLThemeHeaderRCM title="榜单" />
      <div className="ranking-content">
        <ZLTopRanking info={upRankingList} />
        <ZLTopRanking info={newRankingList} />
        <ZLTopRanking info={originRankingList} />
      </div>
    </RecommendRankingWrapper>
  )
})