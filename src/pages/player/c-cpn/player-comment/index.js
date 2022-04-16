import React, { memo, useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getSongCommentAction, changeCurrentPageAction } from '../../store/action';

import ZLThemeHeaderComment from '@/components/theme-header-comment';
import ZLComment from '@/components/comment';
import ZLCommentList from '@/components/comment-list';


import { PlayerCommentWrapper } from './style';

export default memo(function ZLPlayerComment() {
  // state & props
  const [currentId,setCurrentId] = useState(0);

  // redux hooks
  const dispatch = useDispatch();
  const { songComment, currentSong, currentPage } = useSelector(state => ({
    songComment: state.player.songComment,
    currentSong: state.player.currentSong,
    currentPage: state.player.currentPage
  }),shallowEqual)

  // other hooks
  useEffect(() => {
    const id = currentSong && currentSong.id
    setCurrentId(id);
  },[currentSong])

  useEffect(() => {
    dispatch(changeCurrentPageAction(1));
  },[dispatch])

  // 业务逻辑
  const handlePagination = (limit,offset) => {
    dispatch(getSongCommentAction(currentId,limit,offset));
  }
  const handleCurrentPage = (page) => {
    dispatch(changeCurrentPageAction(page));
  }

  return (
    <PlayerCommentWrapper>
      <ZLThemeHeaderComment info={songComment} />
      <ZLComment />
      <ZLCommentList info={songComment} 
                     handlePagination={(limit,offset) => handlePagination(limit,offset)}
                     handleCurrentPage={(page) => handleCurrentPage(page)}
                     currentPage={currentPage}  />
    </PlayerCommentWrapper>
  )
})