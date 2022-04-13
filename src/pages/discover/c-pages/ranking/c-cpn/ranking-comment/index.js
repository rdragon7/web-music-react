import React, { memo } from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import ZLComment from '@/components/comment';
import ZLCommentList from '@/components/comment-list';
import { RankingCommentWrapper } from './style';

export default memo(function ZLRankingComment() {
  // state & props

  // redux hooks
  const { rankingComment } = useSelector(state => ({
    rankingComment: state.ranking.rankingComment
  }),shallowEqual)

  return (
    <RankingCommentWrapper>
      <div className="comment-header">
          <h3 className="title">评论</h3>
          <div className="count">共{rankingComment && rankingComment.total}条评论</div>
      </div>
      <ZLComment />
      <ZLCommentList />
    </RankingCommentWrapper>
  )
})