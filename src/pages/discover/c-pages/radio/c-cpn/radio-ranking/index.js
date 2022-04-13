import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getHotRadioAction, changeCurrentPageAction } from '../../store/action';
import { RADIO_PAGE_SIZE } from '@/common/constants';

import ZLThemeHeaderNormal from '@/components/theme-header-normal';
import ZLRadioRankingCover from '@/components/radio-ranking-cover';
import ZLPagination from '@/components/pagination';
import { RadioRankingWrapper } from './style';

export default memo(function ZLRadioRanking() {
  // state & props

  // redux hooks
  const dispatch = useDispatch();
  const { hotRadio, currentId, currentPage } = useSelector(state => ({
    hotRadio: state.radio.hotRadio,
    currentId: state.radio.currentId,
    currentPage: state.radio.currentPage
  }),shallowEqual)

  // other hooks
  useEffect(() => {
    if (currentId === 0) return;
    dispatch(getHotRadioAction(currentId));
  },[dispatch,currentId])

  // 业务逻辑
  const onPageChange = (page,pageSize) => {
    dispatch(changeCurrentPageAction(page))
    dispatch(getHotRadioAction(currentId,pageSize,(page-1)*pageSize));
  }

  return (
    <RadioRankingWrapper>
      <ZLThemeHeaderNormal title="电台排行榜" rightSlot={["上升最快","最热电台"]} />
      <div className="ranking-list">
        {
          hotRadio.djRadios && hotRadio.djRadios.map((item,index) => {
            return <ZLRadioRankingCover key={item.id} info={item} />
          })
        }
      </div>
      <ZLPagination currentPage={currentPage} 
                    total={hotRadio.count} 
                    pageSize={RADIO_PAGE_SIZE} 
                    onPageChange={(page,pageSize) => onPageChange(page,pageSize)} />
    </RadioRankingWrapper>
  )
})