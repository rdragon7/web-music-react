import React, { memo } from 'react';

import { ThemeHeaderPlayerWrapper } from './style';

export default memo(function ZLThemeHeaderPlayer(props) {
  // state & props
  const { title } = props;
  
  return (
    <ThemeHeaderPlayerWrapper>
      <h3>{title}</h3>
    </ThemeHeaderPlayerWrapper>
  )
})