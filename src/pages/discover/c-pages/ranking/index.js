import React, { memo } from 'react';

import ZLTopRanking from './c-cpn/top-ranking';
import ZLRankingHeader from './c-cpn/ranking-header';
import ZLRankingList from './c-cpn/ranking-list';
import ZLRankingComment from './c-cpn/ranking-comment';
import { RankingWrapper, RankingLeft, RankingRight } from './style';

export default memo(function ZLRanking() {
  return (
    <RankingWrapper className="wrap-v2">
      <RankingLeft>
        <ZLTopRanking />
      </RankingLeft>
      <RankingRight>
        <ZLRankingHeader />
        <ZLRankingList />
        <ZLRankingComment />
      </RankingRight>
    </RankingWrapper>
  )
})