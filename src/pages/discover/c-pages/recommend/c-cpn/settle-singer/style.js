import styled from 'styled-components';

export const SettleSingerWrapper = styled.div`
  padding: 20px;
  /* 头部区域 */
  .singer-top {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    .title {
      font-weight: 700;
    }
  }
  /* 列表区域 */
  .singer-list {
    .item {
      margin-top: 15px;
      height: 62px;
      a {
        display: flex;
        height: 62px;
        background-color: #FAFAFA;
        .head {
          width: 62px;
          height: 62px;
          img {
            width: 62px;
            height: 62px;
          }
        }
        .info {
          flex: 1;
          padding: 10px 15px;
          line-height: 23px;
          border: 1px solid #eee;
          h4 {
            width: 110px;
            font-weight: 700;
            font-size: 14px;
          }
          p {
            width: 110px;
          }
        }
      }
      &:hover a {
        text-decoration: none;
        background-color: #F1F1F1;
      }
    }
  }
  /* 尾部区域 */
  .singer-bottom {
    flex: 1;
    border: 1px solid #ccc;
    margin-top: 15px;
    font-weight: 700;
    border-radius: 4px;
    background: linear-gradient(#F1F1F1,#F5F5F5);
    box-shadow: 0 1px 1px #ccc;
    a {
      display: block;
      line-height: 30px;
      text-align: center;
      &:hover {
        text-decoration: none;
        background-color: #FCFCFC;
      }
    }
  }
`