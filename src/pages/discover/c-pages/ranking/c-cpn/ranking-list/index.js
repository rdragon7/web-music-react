import React, { memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import { getSizeImage, formatMinuteSecond } from '@/utils/format-data';

import { RankingListWrapper } from './style';

export default memo(function ZLRankingList() {
  // state & props

  // redux hooks
const { playList } = useSelector(state => ({
  playList: state.ranking.playList
}),shallowEqual)

  return (
    <RankingListWrapper>
      <div className="play-header">
        <div className="left">
          <h3 className="title">歌曲列表</h3>
          <div className="count">{playList && playList.trackCount}首歌</div>
        </div>
        <div className="right">
          <span>播放：</span>
          <span className="count">{playList && playList.playCount}</span>
          <span>次</span>
        </div>
      </div>
      <div className="play-list">
        <table>
          <thead>
            <tr className="header">
              <th className="ranking"></th>
              <th className="title">标题</th>
              <th className="duration">时长</th>
              <th className="singer">歌手</th>
            </tr>
          </thead>
          <tbody>
            {
              playList && playList.tracks && playList.tracks.map((item,index) => {
                return (
                  <tr key={item.id}>
                    <td>
                      <div className="rank-num">
                        <span className="num">{index + 1}</span>
                        <span className="new sprite_icon2"></span>
                      </div>
                    </td>
                    <td>
                      <div className="song-name">
                        {
                          index < 3 ?
                            (<img src={getSizeImage(item.al.picUrl, 50)} alt="" />) : null
                        }
                        <span className="play sprite_table"></span>
                        <span className="name">{item.name}</span>
                      </div>
                    </td>
                    <td>{formatMinuteSecond(item.dt)}</td>
                    <td>{item.ar[0].name}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </RankingListWrapper>
  )
})