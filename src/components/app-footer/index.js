import React, { Fragment, memo } from 'react';

import { footerLinks, footerImages } from '@/common/local-data';

import { AppFooterWrapper } from './style';

export default memo(function ZLAppFooter() {
  return (
    <AppFooterWrapper>
      <div className="footer-content wrap-v2">
        <div className="left">
          <div className="link">
            {
              footerLinks.map((item,index) => {
                return (
                  <Fragment key={item.title}>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
                    <span className="line">|</span>
                  </Fragment>
                )
              })
            }
          </div>
          <div className="copy">
              <span>网易公司版权所有©1997-2020</span>
              <span>
                杭州乐读科技有限公司运营：
                <a href="https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png" rel="noopener noreferrer" target="_blank">浙网文[2018]3506-263号</a>
              </span>
          </div>
          <div className="info">
            <a href="http://www.beian.miit.gov.cn/publish/query/indexFirst.action" rel="noopener noreferrer" target="_blank">
              粤B2-20090191-18&nbsp;&nbsp;工业和信息化部备案管理系统网站
            </a>
            <a href="http://www.beian.miit.gov.cn/publish/query/indexFirst.action" rel="noopener noreferrer" target="_blank">
              浙公网安备33010902002564
            </a>
          </div>
        </div>
        <ul className="right">
          {
            footerImages.map((item, index) => {
              return (
                <li className="item" key={item.link}>
                  <a className="link" href={item.link} rel="noopener noreferrer" target="_blank"> </a>
                  <span className="title"></span>
                </li>
              )
            })
          }
        </ul>
      </div>
    </AppFooterWrapper>
  )
})