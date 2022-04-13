import React, { memo } from 'react';

import ZLRadioCategory from './c-cpn/radio-category';
import ZLRadioRecommend from './c-cpn/radio-recommend';
import ZLRadioRanking from './c-cpn/radio-ranking';
import { RadioWrapper } from './style';

export default memo(function ZLRadio() {
  return (
    <RadioWrapper className="wrap-v2">
      <ZLRadioCategory />
      <ZLRadioRecommend />
      <ZLRadioRanking />
    </RadioWrapper>
  )
})