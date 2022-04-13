import styled from 'styled-components';

export const CommentWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  /* 左边头像区域 */
  .comment-left {
    width: 50px;
    height: 50px;
    img {
      width: 50px;
      height: 50px;
    }
  }
  .comment-right {
    flex: 1;
    padding-left: 14px;
    height: 98px;
    /* textarea区域 */
    .textarea {
      textarea {
        width: 100%;
        height: 63px;
        resize: none;
        background-color: #fff;
        border: 1px solid #cdcdcd;
        padding: 5px 6px 6px;
      }
    }
    .info {
      display: flex;
      justify-content: space-between;
      height: 35px;
      .info-icon {
        width: 50px;
        height: 35px;
        .icon {
          display: inline-block;
          width: 18px;
          height: 18px;
        }
        .smile {
          background-position: -40px -490px;
          margin-right: 10px;
        }
        .at {
          background-position: -60px -490px;
        }
      }
      .info-rt {
        display: flex;
        align-items: center;
        span {
          color: #999;
        }
        .comment-btn {
          width: 46px;
          height: 25px;
          line-height: 25px;
          margin-left: 10px;
          background-position: -84px -64px;
          color: #fff;
          text-align: center;
        }
      }
    }
  }
`