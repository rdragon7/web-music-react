import React, { memo } from 'react';

import { settleSinger } from '@/api/local-data';
import { getSizeImage } from '@/utils/format-data';

import { SettleSingerWrapper } from './style';

export default memo(function ZLSettleSinger() {
  return (
    <SettleSingerWrapper>
      <div className="singer-top">
        <h3 className="title">入驻歌手</h3>
        <a href="/todo">查看全部 &gt;</a>
      </div>
      <ul className="singer-list">
        {
          settleSinger && settleSinger.map((item,index) => {
            return (
              <li key={item.id} className="item">
                <a href="/todo">
                  <div className="head">
                    <img src={getSizeImage(item.picUrl,62)} alt="" />
                  </div>
                  <div className="info">
                    <h4 className="text-nowrap">{item.name}</h4>
                    <p className="text-nowrap">{item.desc}</p>
                  </div>
                </a>
              </li>
            )
          })
        }
      </ul>
      <div className="singer-bottom">
        <a href="/todo">申请成为网易音乐人</a>
      </div>
    </SettleSingerWrapper>
  )
})