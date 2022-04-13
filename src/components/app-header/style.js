import styled from 'styled-components';

export const AppHeaderWrapper = styled.div`
  height: 75px;
  background-color: #242424;
  .header-content {
    display: flex;
    justify-content: space-between;
    height: 70px;
    /* 头部 - 左边区域 */
    .left {
      display: flex;
      /* logo */
      .logo {
        display: block;
        width: 176px;
        height: 69px;
        background-position: 0 0;
        text-indent: -9999px;
      }
      /* 菜单选项 */
      .list {
        display: flex;
        line-height: 70px;
        .list-item {
          position: relative;
          a {
            display: block;
            padding: 0 20px;
            color: #ccc;
          }
          /* 为最后一项添加小icon */
          &:last-of-type a {
            position: relative;
            ::after {
              content: "";
              position: absolute;
              top: 20px;
              right: -15px;
              width: 28px;
              height: 19px;
              background-image: url(${require("@/assets/img/sprite_01.png")});
              background-position: -190px 0;
            }
          }
          &:hover a,a.active {
            color: #fff;
            text-decoration: none;
            background-color: #000;
          }
          /* 为每一个选项做底部三角 */
          .active .icon {
            position: absolute;
            display: inline-block;
            width: 12px;
            height: 7px;
            bottom: -1px;
            left: 50%;
            transform: translate(-50%, 0);
            background-position: -226px 0;
          }
        }
      }
    }
    /* 头部 - 右边区域 */
    .right {
      display: flex;
      align-items: center;
      color: #ccc;
      font-size: 12px;
      /* 搜索框 */
      .search {
        width: 158px;
        height: 32px;
        border-radius: 16px;
        input {
          &::placeholder {
            font-size: 12px;
            color: #999;
          }
        }
      }
      /* 创作者中心 */
      .center {
        width: 90px;
        height: 32px;
        line-height: 32px;
        text-align: center;
        border: 1px solid #666;
        border-radius: 16px;
        margin: 0 16px;
        &:hover {
          border: 1px solid #fff;
          color: #fff;
        }
      }
      /* 登录 */
      .login {
        color: #999;
        &:hover {
          color: #ccc;
        }
      }
    }
  }
  .header-divider {
    height: 5px;
    background-color: #C20C0C;
  }
`