import React, { memo, useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import { getRankingCommentAction, changeCurPageAction } from '../../store/action';

import ZLThemeHeaderComment from '@/components/theme-header-comment';
import ZLComment from '@/components/comment';
import ZLCommentList from '@/components/comment-list';
import { RankingCommentWrapper } from './style';

export default memo(function ZLRankingComment() {
  // state & props

  // redux hooks
  const dispatch = useDispatch();
  const { rankingComment, topList, currentIndex, curPage } = useSelector(state => ({
    rankingComment: state.ranking.rankingComment,
    topList: state.ranking.topList,
    currentIndex: state.ranking.currentIndex,
    curPage: state.ranking.curPage
  }),shallowEqual)

  // other hooks
  useEffect(() => {
    dispatch(changeCurPageAction(1));
  },[dispatch])

  // 业务逻辑
  const handlePagination = (limit,offset) => {
    const id = (topList[currentIndex] && topList[currentIndex].id);
    dispatch(getRankingCommentAction(id,limit,offset));
  }

  const handleCurrentPage = (page) => {
    dispatch(changeCurPageAction(page));
  }

  return (
    <RankingCommentWrapper>
      <ZLThemeHeaderComment info={rankingComment} />
      <ZLComment />
      <ZLCommentList info={rankingComment} handlePagination={handlePagination} handleCurrentPage={(page) => handleCurrentPage(page)} currentPage={curPage} />
    </RankingCommentWrapper>
  )
})