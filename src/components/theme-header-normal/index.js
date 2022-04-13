import React, { Fragment, memo, useState } from 'react';

import { ThemeHeaderNormalWrapper } from './style';

export default memo(function ZLThemeHeaderNormal(props) {
  // state & props
  const { title,keyword = [], rightSlot = [], itemClick } = props;
  const [currentIndex,setCurrentIndex] = useState(1);

  // redux hooks

  // other hooks
  
  // 业务逻辑
  const handleClick = (item) => {
    const area = item.area;
    itemClick(area);
  }

  const hotClick = (index) => {
    setCurrentIndex(index);
  }

  return (
    <ThemeHeaderNormalWrapper>
      <div className="left">
        <div className="title">
          {title}
        </div>
        <div className="album-list">
          {
            keyword.map((item,index) => {
              return (
                <div className="album-item" key={item.title}>
                  <span className="keyword" onClick={() => handleClick(item)}>{item.title}</span>
                  <span className="album-divider">|</span>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="right">
        {
          rightSlot.map((item,index) => {
            return (
              <Fragment key={item}>
                <span className={"item "+ (currentIndex === index ? "active" : "")} onClick={() => hotClick(index)}>{item}</span>
                <span className="album-divider">|</span>
              </Fragment>
            )
          })
        }
      </div>
    </ThemeHeaderNormalWrapper>
  )  
})