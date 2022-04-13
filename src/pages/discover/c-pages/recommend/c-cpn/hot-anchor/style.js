import styled from 'styled-components';

export const HotAnchorWrapper = styled.div`
  padding: 20px;
  /* 头部区域 */
  .anchor-top {
    display: flex;
    border-bottom: 1px solid #ccc;
    .title {
      font-weight: 700;
    }
  }
  /* 列表区域 */
  .anchor-list {
    .item {
      margin-top: 15px;
      height: 40px;
      a {
        display: flex;
        .head {
          width: 40px;
          height: 40px;
          img {
            width: 40px;
            height: 40px;
          }
        }
        .info {
          flex: 1;
          padding-left: 15px;
          line-height: 22px;
          h4 {
            color: #000;
            font-size: 14px;
          }
          p {
            width: 150px;
          }
        }
      }
      &:hover a {
        text-decoration: none;
      }
    }
  }
`