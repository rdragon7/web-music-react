import styled from 'styled-components';

export const SearchListWrapper = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  z-index: 3;
  width: 240px;
  border: 1px solid #bebebe;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 4px 7px #555;
  /* 头部区域 */
  .header {
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }
  /* 列表区域 */
  .list {
    .item {
      display: flex;
      h3 {
        width: 60px;
        padding: 5px 0;
        font-size: 14px;
        text-align: center;
        border-right: 1px solid #ccc;
        .icon {
          position: relative;
          top: 4px;
          display: inline-block;
          width: 16px;
          height: 16px;
          
        }
      }
      .hd {
        width: 180px;
        padding: 5px 0;
        li {
          width: 100%;
          padding: 3px 0;
          padding-left: 10px;
          span:nth-child(1) {
            color: #2374C2;
          }
          span:nth-child(2) {
            color: #333;
          }
          &:hover {
            background-color: #ECECEC;
          }
        }
      }
    }
    .item1 h3 .icon {
      background-position: -34px -300px;
    }
    .item2 h3 .icon {
      background-position: -50px -300px;
    }
    .item3 h3 .icon {
      background-position: -34px -320px;
    }
  }
`