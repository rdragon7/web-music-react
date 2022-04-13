import styled from 'styled-components';

export const TopBannerWrapper = styled.div`
background: url(${props => props.bgImg}) center/6000px;
.top-banner-content {
  display: flex;
  position: relative;
  height: 270px;
  /* 轮播图 - 左边区域 */
  .left {
    width: 730px;
    .banner-item {
      overflow: hidden;
      height: 270px;
      .image {
        width: 100%;
      }
    }
  }
  /* 轮播图 - 右边区域 */
  .right {
    width: 250px;
    height: 270px;
    a {
      display: block;
      width: 250px;
      height: 270px;
      background: url(${require("@/assets/img/download.png")});
      text-indent: -9999px;
    }
  }
  /* 轮播图 - 左右按钮 */
  .control {
    position: absolute;
    left: 0;
    right: 0;
    top: 40%;
    background-color: #000;
    .btn {
      position: absolute;
      width: 37px;
      height: 63px;
      background-image: url(${require("@/assets/img/banner_sprite.png")});
      background-color: transparent;
      cursor: pointer;
      &:hover {
        background-color: rgba(0, 0, 0, .1);
      }
    }
    .left {
      left: -68px;
      background-position: 0 -360px;
    }

    .right {
      right: -68px;
      background-position: 0 -508px;
    }
  }
}
`