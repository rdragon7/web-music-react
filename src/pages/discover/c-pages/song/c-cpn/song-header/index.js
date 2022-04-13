import React, { memo } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { changeShowCategoryAction } from '../../store/action';

import ZLSongCategory from '../song-category';
import { SongHeaderWrapper } from './style';

export default memo(function ZLSongHeader() {
  // state & props

  // redux hooks
  const dispatch = useDispatch();
  const { currentCategory, showCategory } = useSelector(state => ({
    currentCategory: state.song.currentCategory,
    showCategory: state.song.showCategory
  }),shallowEqual)

  // other hooks

  // 业务逻辑
  const clickShowCategory = () => {
    dispatch(changeShowCategoryAction(!showCategory));
  }

  return (
    <SongHeaderWrapper>
      <div className="header-left">
        <h2 className="title">{currentCategory}</h2>
        <button className="select" onClick={() => clickShowCategory()}>
          <span>选择分类</span>
          <i className="sprite_icon2"></i>
        </button>
        {showCategory ? <ZLSongCategory /> : ""}
      </div>
      <div className="header-right">
      <button className="song-hot">热门</button>
      </div>
    </SongHeaderWrapper>
  )
})