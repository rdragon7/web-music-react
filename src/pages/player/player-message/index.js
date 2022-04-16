import React, { memo }  from 'react';

import { PlayerMessageWrapper } from './style';

export default memo(function ZLPlayerMessage(props) {
  // state & props
  const { info } = props;

  return (
    <PlayerMessageWrapper>
      {info}
    </PlayerMessageWrapper>
  )
})