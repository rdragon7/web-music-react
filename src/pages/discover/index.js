import React, { memo } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import { discoverMenu } from '@/common/local-data';

import { DiscoverWrapper } from './style';

export default memo(function ZLDiscover() {
  return (
    <DiscoverWrapper>
      <div className="discover-top">
        <div className="menu wrap-v1">
          {
            discoverMenu.map((item,index) => {
              return (
                <div className="item" key={item.title}>
                  <NavLink to={item.link}>{item.title}</NavLink>
                </div>
              )
            })
          }
        </div>
      </div>
      <Outlet />
    </DiscoverWrapper>
  )
})
