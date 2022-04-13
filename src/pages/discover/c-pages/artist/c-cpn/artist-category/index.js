import React, { memo } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { artistCategories } from '@/api/local-data';
import { changeCurrentAreaAction, changeCurrentTypeAction } from '../../store/action';

import { ArtistCategoryWrapper, CategoryItem } from './style';

export default memo(function ZLArtistCategory() {
  // state & props

  // redux hooks
  const dispatch = useDispatch();
  const { currentArea, currentType } = useSelector(state => ({
    currentArea: state.artist.currentArea,
    currentType: state.artist.currentType
  }),shallowEqual)
  
  // other hooks
  
  // 业务逻辑
  const selectArtist = (area,type) => {
    dispatch(changeCurrentAreaAction(area));
    dispatch(changeCurrentTypeAction(type));
  }

  return (
    <ArtistCategoryWrapper>
      {
        artistCategories.map((item,index) => {
          return (
            <div className="section" key={item.area}>
              <h2 className="title">{item.title}</h2>
              {
                item.artists.map((iten,index) => {
                  const isSelect = currentArea === item.area && currentType.type === iten.type;
                  return (
                    <CategoryItem key={iten.name} className={isSelect ? "active" : ""}>
                      <span onClick={() => selectArtist(item.area,iten)}>{iten.name}</span>
                    </CategoryItem>
                  )
                })
              }
            </div>
          )
        })
      }
    </ArtistCategoryWrapper>
  )
})