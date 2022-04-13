import React, { memo } from 'react';

import { CommentWrapper } from './style';
import defaultAvatar from '@/assets/img/default_avatar.jpg';

export default memo(function ZLComment() {
  return (
    <CommentWrapper>
      <div className="comment-left">
        <img src={defaultAvatar} alt="" />
      </div>
      <div className="comment-right">
        <div className="textarea">
          <textarea placeholder="评论"></textarea>
        </div>
        <div className="info">
          <div className="info-icon">
            <i className="icon smile sprite_icon2"></i>
            <i className="icon at sprite_icon2"></i>
          </div>
          <div className="info-rt">
            <span>140</span>
            <div className="comment-btn sprite_button2">评论</div>
          </div>
        </div>
      </div>
    </CommentWrapper>
  )
})