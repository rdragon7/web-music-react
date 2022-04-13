import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getRadioRecommendAction } from '../../store/action';

import ZLThemeHeaderNormal from '@/components/theme-header-normal';
import ZLRadioRecommendCover from '@/components/radio-recommend-cover';
import { RadioRecommendWrapper } from './style';

export default memo(function ZLRadioRecommend() {
  // state & props 

  // redux hooks
  const dispatch = useDispatch();
  const { radioRecommend, currentId } = useSelector(state => ({
    radioRecommend: state.radio.radioRecommend,
    currentId: state.radio.currentId
  }),shallowEqual)

  // other hooks
  useEffect(() => {
    if (currentId === 0) return;
    dispatch(getRadioRecommendAction(currentId));
  },[dispatch,currentId])

  return (
    <RadioRecommendWrapper>
      <ZLThemeHeaderNormal title="优秀新电台" />
      <div className="radio-list">
        {
          radioRecommend && radioRecommend.slice(0,5).map((item,index) => {
            return <ZLRadioRecommendCover info={item} key={item.id} />
          })
        }
      </div>
    </RadioRecommendWrapper>
  )  
})