import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';     

import { 
  getTopListAction, 
  getPlayListAction, 
  changeCurrentIndexAction,
  getRankingCommentAction,
  changeCurPageAction 
} from '../../store/action';
import { getSizeImage } from '@/utils/format-data';
import { COMMENT_PAGE_SIZE } from '@/common/constants';

import { TopRankingWrapper } from './style';
 
export default memo(function ZLTopRanking(props) {
  // state & props

  // redux hooks
  const dispatch = useDispatch();
  const { topList,currentIndex } = useSelector(state => ({
    topList: state.ranking.topList,
    currentIndex: state.ranking.currentIndex
  }))

  // other hooks
  useEffect(() => {
    dispatch(getTopListAction());
  },[dispatch])

  useEffect(() => {
    const id = (topList[currentIndex] && topList[currentIndex].id);
    if (!id) return;
    dispatch(getPlayListAction(id));
    dispatch(getRankingCommentAction(id,COMMENT_PAGE_SIZE));
  },[dispatch,currentIndex,topList])

  // 业务逻辑
  const handleItemClick = (index) => {
    dispatch(changeCurrentIndexAction(index));
    dispatch(changeCurPageAction(1));
    const id = topList[currentIndex].id;
    dispatch(getPlayListAction(id));
  }

  return (
    <TopRankingWrapper>
      {
        topList && topList.map((item,index) => {
          let header;
          if(index === 0 || index === 4) {
            header = <div className="header">{index === 0 ? "云音乐特色榜" : "全球媒体榜"}</div>
          }
          return (
            <div key={item.id}>
              {header}
              <div className={"item "+(index === currentIndex ? "active" : "")}  onClick={e => handleItemClick(index)}>
                <img src={getSizeImage(item.coverImgUrl, 40)} alt="" />
                <div className="info">
                  <div className="name">{item.name}</div>
                  <div className="update">{item.updateFrequency}</div>
                </div>
              </div>
            </div>
          )
        })
      }
    </TopRankingWrapper>
  )
})