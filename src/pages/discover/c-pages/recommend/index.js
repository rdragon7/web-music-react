import React, { memo } from 'react';

import ZLTopBanner from './c-cpn/top-banner';
import ZLHotRecommend from './c-cpn/hot-recommend';
import ZLNewAlbum from './c-cpn/new-album';
import ZLRecommendRanking from './c-cpn/recommend-ranking';
import ZLUserLogin from './c-cpn/user-login';
import ZLSettleSinger from './c-cpn/settle-singer';
import ZLHotAnchor from './c-cpn/hot-anchor';
import { RecommendWrapper } from './style';

export default memo(function ZLRecommend() {
  return (
    <RecommendWrapper>
      <ZLTopBanner />
      <div className="recommend-content wrap-v2">
        <div className="left">
          <ZLHotRecommend />
          <ZLNewAlbum />
          <ZLRecommendRanking />
        </div>
        <div className="right">
          <ZLUserLogin />
          <ZLSettleSinger />
          <ZLHotAnchor />
        </div>
      </div>
    </RecommendWrapper>
  )
})