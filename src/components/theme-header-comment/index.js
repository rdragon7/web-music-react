import React, { memo } from 'react';

import { ThemeHeaderCommentWrapper } from './style';

export default memo(function ZLThemeHeaderComment(props) {
  // state & props
  const { info } = props;

  return (
    <ThemeHeaderCommentWrapper>
       <h3 className="title">评论</h3>
       <div className="count">共{info && info.total}条评论</div>
    </ThemeHeaderCommentWrapper>
  )
})