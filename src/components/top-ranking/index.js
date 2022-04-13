import React, { memo } from 'react';

import { getSizeImage } from '@/utils/format-data';

import { TopRankingWrapper } from './style';

export default memo(function ZLTopRanking(props) {
  // state & props
  const { info = [] } = props;

  // redux hooks

  // other hooks

  // 业务逻辑
  
  return (
    <TopRankingWrapper>
      <div className="ranking-header">
        <div className="image">
          <img src={getSizeImage(info.coverImgUrl,80)} alt="" />
          <a href="/todo" className="image_cover">ranking</a>
        </div>
        <div className="info">
          <a href="/todo">{info.name}</a>
          <div>
            <button className="btn play sprite_02"></button>
            <button className="btn favor sprite_02"></button>
          </div>
        </div>
      </div>
      <div className="ranking-list">
        {
          info.tracks && info.tracks.slice(0,10).map((item,index) => {
            return (
              <div className="item" key={item.id}>
                <div className="rank">{index + 1}</div>
                <div className="info">
                  <span className="name text-nowrap">{item.name}</span>
                  <div className="operate">
                    <button className="btn sprite_02 play"></button>
                    <button className="btn sprite_icon2 add"></button>
                    <button className="btn sprite_02 favor"></button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="ranking-footer">
        <a href="/todo">查看全部 &gt;</a>
      </div>
    </TopRankingWrapper>
  )
})