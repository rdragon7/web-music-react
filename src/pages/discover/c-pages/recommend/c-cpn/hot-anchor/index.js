import React, { memo } from 'react';

import { hotAncHor } from '@/api/local-data';
import { getSizeImage } from '@/utils/format-data';

import { HotAnchorWrapper } from './style';

export default memo(function ZLHotAnchor() {
  return (
    <HotAnchorWrapper>
      <div className="anchor-top">
        <h3 className="title">热门主播</h3>
      </div>
      <ul className="anchor-list">
        {
          hotAncHor && hotAncHor.map((item,index) => {
            return (
              <li key={item.id} className="item">
                <a href="/todo">
                  <div className="head">
                    <img src={getSizeImage(item.picUrl,40)} alt="" />
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
    </HotAnchorWrapper>
  )
})