import styled from 'styled-components';

export const AppPlayerBarWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  height: 52px;
  background-position: 0 0;
  background-repeat: repeat;
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    height: 47px;
  }
`

// 左边播放控制区域
export const Control = styled.div`
  display: flex;
  align-items: center;  
  .prev, .next {
    width: 28px;
    height: 28px;
  }
  .prev {
    background-position: 0 -130px;
    &:hover {
      background-position: -30px -130px;
    }
  }
  .next {
    background-position: -80px -130px;
    &:hover {
      background-position: -110px -130px;
    }
  }
  .play {
    width: 36px;
    height: 36px;
    margin: 0 8px;
    background-position: 0 ${props => props.isPlay ? "-165px" : "-204px"};
  }
`
// 中间详情区域
export const PlayInfo = styled.div`
  display: flex;
  align-items: center;
  width: 642px;
  /* 头像 */
  .image {
    width: 34px;
    height: 34px;
    border-radius: 5px;
    overflow: hidden;
  }
  /* 详情 */
  .info {
    flex: 1;
    color: #a1a1a1;
    margin-left: 10px;
    /* 歌曲信息 */
    .song {
      position: relative;
      top: 8px;
      left: 8px;
      .song-name {
        color: #e1e1e1;
        margin-right: 10px;
        &:hover {
          text-decoration: underline;
        }
      }
      .singer-name:hover {
        text-decoration: underline;
      }
    }
    /* 进度条 */
    .progress {
      display: flex;
      align-items: center;
      .ant-slider {
        width: 493px;
        margin-right: 10px;
      }
      /* 重置antd中进度条样式 */
      .ant-slider-rail {
        height: 9px;
        background: url(${require("@/assets/img/progress_bar.png")}) right 0;
      }
      .ant-slider-track {
        height: 9px;
        background: url(${require("@/assets/img/progress_bar.png")}) left -66px;
      }
      .ant-slider-handle {
        width: 22px;
        height: 24px;
        border: none;
        margin-top: -7px;
        background: url(${require("@/assets/img/sprite_icon.png")}) 0 -250px;
      }
      /* 歌曲时间 */
      .time {
        .now-time {
          color: #e1e1e1;
        }
        .divider {
          margin: 0 3px;
        }
      }
    }
  }
`
// 右边按钮区域
export const Operator = styled.div`
  display: flex;
  .btn {
    width: 25px;
    height: 25px;
  }
  .left {
    position: relative;
    top: 3px;
    .favor {
      background-position: -88px -163px;
      &:hover {
        background-position: -88px -189px;
      }
    }
    .share {
      background-position: -114px -163px;
      &:hover {
        background-position: -114px -189px;
      }
    }
  }
  .right {
    display: flex;
    align-items: center;
    width: 126px;
    padding-left: 13px;
    background-position: -147px -248px;
    .volume {
      background-position: -2px -248px;
      &:hover {
        background-position: -31px -248px;
      }
    }
    .loop {
      background-position: ${props => {
        switch(props.sequence) {
          case 1:
            return "-66px -248px";
          case 2:
            return "-66px -344px";
          default:
            return "-3px -344px";
        }
      }};
      &:hover {
        background-position: ${props => {
          switch(props.sequence) {
            case 1:
              return "-93px -248px";
            case 2:
              return "-93px -344px";
            default:
              return "-33px -344px";
          }
        }};
      }
    }
    .playlist {
      width: 59px;
      color: #666;
      padding-left: 21px;
      background-position: -42px -68px;
      &:hover {
        background-position: -42px -98px;
      }
    }
  }
`