import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import { formatMonthDay } from '@/utils/format-data';

import ZLSongOperationBar from '@/components/song-operation-bar';
import { RankingHeaderWrapper } from './style';

export default memo(function ZLRankingHeader() {
  // state & props

  // redux hooks
  const { playList,currentIndex,topList } = useSelector(state => ({
    playList: state.ranking.playList,
    currentIndex: state.ranking.currentIndex,
    topList: state.ranking.topList
  }));

  return (
    <RankingHeaderWrapper>
      <div className="header-image">
        <img src={playList && playList.coverImgUrl} alt="" />
        <span className="image_cover">封面</span>
      </div>
      <div className="header-info">
        <div className="title">{playList && playList.name}</div>
        <div className="time">
          <i className="clock sprite_icon2"></i>
          <div>最近更新：{playList && formatMonthDay(playList.updateTime)}</div>
          <div className="update-f">（{topList[currentIndex] && topList[currentIndex].updateFrequency}）</div>
        </div>
        <ZLSongOperationBar favorTitle={`(${playList && playList.subscribedCount})`}
                            shareTitle={`(${playList && playList.shareCount})`}
                            downloadTitle="下载"
                            commentTitle={`(${playList && playList.commentCount})`} />
      </div>
    </RankingHeaderWrapper>
  )
})