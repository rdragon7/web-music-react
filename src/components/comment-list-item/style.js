import styled from 'styled-components';

export const CommentListItemWrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px dotted #ccc;
  padding: 20px 0;
  &:last-child {
    border-bottom: 0;
  }
  /* 左边头像区域 */
  .item-image {
    width: 50px;
    height: 50px;
    a {
      display: block;
      img {
        width: 50px;
        height: 50px;
      }
    }
  }
  /* 右边详情区域 */
  .item-info {
    flex: 1;
    /* height: 50px; */
    padding-left: 10px;
    /* 子级评论区域 */
    .info-top {
      a {
        color: #0c73c2;
        margin-right: 5px;
      }
    }
    /* 父级评论区域 TODO */
    /* .parent-comment {
      padding: 8px 19px;
      margin-top: 10px;
      line-height: 20px;
      background: #f4f4f4;
      border: 1px solid #dedede;
    } */
    .info-bottom {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
      .info-time {
        color: #999;
      }
      .info-dt {
        .zan {
          display: inline-block;
          width: 15px;
          height: 14px;
          background-position: -150px 0;
          margin-right: 8px;
        }
        .fen {
          margin: 0 8px;
        }
      }
    }
  }
`