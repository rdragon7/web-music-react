import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

import { headerLinks } from '@/common/local-data';

import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { AppHeaderWrapper } from './style';

export default memo(function ZLAppHeader() {
  // state & props

  // redux hooks

  // other hooks

  // 业务逻辑
  const selectItem = (item,index) => {
    if(index < 3) {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className="sprite_01 icon"></i>
          </NavLink>
      )
    } else {
      return (
        <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
      )
    }
  }
  
  return (
    <AppHeaderWrapper>
      <div className="header-content wrap-v1">
        <div className="left">
          <a href="/discover" className="logo sprite_01">网易云音乐</a>
          <div className="list">
            {
              headerLinks.map((item,index) => {
                return (
                  <div className="list-item" key={item.title}>
                    {selectItem(item,index)}
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="right">
          <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} />
          <div className="center">创作者中心</div>
          <div className="login">登录</div>
        </div>
      </div>
      <div className="header-divider"></div>
    </AppHeaderWrapper>
  )
})