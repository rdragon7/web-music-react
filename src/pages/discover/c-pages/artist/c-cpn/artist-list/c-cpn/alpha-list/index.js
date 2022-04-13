import React, { memo, useState, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { singerAlphas } from '@/utils/handle-data';
import { getArtistListAction } from '../../../../store/action';

import { AlphaListWrapper } from './style';

export default memo(function ZLAlphaList() {
  // state & props
  const [currentAlpha,setCurrentAlpha] = useState("-1");

  // redux hooks
  const dispatch = useDispatch();
  const { currentArea, currentType } = useSelector(state => ({
    currentArea: state.artist.currentArea,
    currentType: state.artist.currentType
  }),shallowEqual)

  // other hooks
  useEffect(() => {
    dispatch(getArtistListAction(currentArea,currentType.type,currentAlpha));
  },[dispatch,currentArea,currentType,currentAlpha])

  // 业务逻辑
  const handleCurrentAlpha = (item) => {
    setCurrentAlpha(item);
  }

  return (
    <AlphaListWrapper>
      {
        singerAlphas.map((item,index) => {
          const isActive =  currentAlpha === item;
          return (
            <div key={item} className={"item " + (isActive ? "active" : "")}>
              <span onClick={() => handleCurrentAlpha(item)}>
                {
                  item === "-1" ? "热门" : (item === "0" ? "其他" : item)
                }
              </span>
            </div>
          )
        })
      }
    </AlphaListWrapper>
  )
})