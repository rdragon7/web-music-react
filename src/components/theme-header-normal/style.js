import styled from 'styled-components';

export const ThemeHeaderNormalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 5px;
  border-bottom: 2px solid #c20c0c;
  font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
  .left {
    display: flex;
    align-items: center;
    .title {
      font-size: 24px;
      margin-right: 20px;
    }
    .album-list {
      display: flex;
      font-size: 14px;
      .album-item {
        .keyword {
          &:hover {
            text-decoration: underline;
          }
        }
        .album-divider {
          margin: 0 15px;
          color: #ccc;
        }
        &:last-of-type .album-divider{
          color: #fff;
        }
      }
    }
  }
  .right {
    .album-divider {
      margin: 0 15px;
      color: #ccc;
      &:last-of-type {
        color: #fff;
      }
    }
    .active {
      color: #c20c0c;
    }
  }
`