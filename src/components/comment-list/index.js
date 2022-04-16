import React, { memo } from 'react';

import { COMMENT_PAGE_SIZE } from '@/common/constants';

import ZLPagination from '../pagination';
import ZLCommentListItem from '@/components/comment-list-item';
import { CommentListWrapper } from './style';

export default memo(function ZLCommentList(props) {
  // state & props
  const { info, handlePagination, handleCurrentPage, currentPage } = props;

  // redux hooks

  // other hooks

  // 业务逻辑
  const onPageChange = (page,pageSize) => {
    handleCurrentPage(page);
    handlePagination(pageSize,(page-1)*pageSize);
  }

  return (
    <CommentListWrapper>
      <div className="new-comment">
        <div className="new-header">
          <span>最新评论({info && info.total})</span>
        </div>
        <div className="new-list">
          {
            info && info.comments &&
            info.comments.length !== 0 ?
            info.comments.map((item,idx) => {
              return (
                <ZLCommentListItem key={item.commentId} info={item} />
              )
            })
            : <h3 className="w-full text-center">暂无评论...</h3>
          }
        </div>

        <div className="pagination">
          <ZLPagination currentPage={currentPage && currentPage}
                        total={info && info.total} 
                        pageSize={COMMENT_PAGE_SIZE}
                        onPageChange={(page,pageSize) => onPageChange(page,pageSize)} />
        </div>
      </div>
    </CommentListWrapper>
  )
})