import styled from 'styled-components';

export const ThemeHeaderRCMWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 33px;
  border-bottom: 2px solid #C10D0C;
  padding: 0 10px 4px 35px;
  background-position: -225px -156px;
  /* 左边区域 */
  .theme-header-left {
    display: flex;
    align-items: center;
    /* 标题 */
    .title {
      font-size: 20px;
      font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
      margin-right: 20px;
    }
    .keyword-list {
      display: flex;
      .item {
        .divider {
          margin: 0 15px;
          color: #ccc;
          
        }
        &:last-of-type .divider{
          color: #fff;
        }
      }
    }
  }
  /* 右边区域 */
  .theme-header-right {
    display: flex;
    align-items: center;
    .icon {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      background-position: 0 -240px;
    }
  }
`
