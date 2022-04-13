import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getRankingCommentAction, changeCurrentPageAction } from '@/pages/discover/c-pages/ranking/store/action';
import { COMMENT_PAGE_SIZE } from '@/common/constants';

import ZLPagination from '../pagination';
import ZLCommentListItem from '@/components/comment-list-item';
import { CommentListWrapper } from './style';

export default memo(function ZLCommentList(props) {
  // state & props

  // redux hooks
  const dispatch = useDispatch();
  const { topList, currentIndex, rankingComment, currentPage } = useSelector(state => ({
    topList: state.ranking.topList,
    currentIndex: state.ranking.currentIndex,
    rankingComment: state.ranking.rankingComment,
    currentPage: state.ranking.currentPage
  }))

  // other hooks

  // 业务逻辑
  const onPageChange = (page,pageSize) => {
    const id = (topList[currentIndex] && topList[currentIndex].id);
    dispatch(changeCurrentPageAction(page));
    dispatch(getRankingCommentAction(id,pageSize,(page-1)*pageSize));
  }

  return (
    <CommentListWrapper>
      <div className="new-comment">
        <div className="new-header">
          <span>最新评论({rankingComment.total})</span>
        </div>
        <div className="new-list">
          {
            rankingComment.comments &&
            rankingComment.comments.length !== 0 ?
            rankingComment.comments.map((item,idex) => {
              return (
                <ZLCommentListItem key={item.commentId} info={item} />
              )
            })
            : <h3 className="w-full text-center">暂无评论...</h3>
          }
        </div>

        <div className="pagination">
          <ZLPagination currentPage={currentPage}
                        total={rankingComment.total} 
                        pageSize={COMMENT_PAGE_SIZE}
                        onPageChange={(page,pageSize) => onPageChange(page,pageSize)} />
        </div>
      </div>
    </CommentListWrapper>
  )
})