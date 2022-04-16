import styled from 'styled-components';

export const PlayerListWrapper = styled.div`
  width: 560px;
  padding: 2px 0 2px 2px;
  border-right: 6px solid #000;
  .play-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 28px;
    padding: 0 8px 0 25px;
    color: #ccc;
    &.active {
      color: #fff;
      background-color: #000;
      ::before {
        content: "";
        position: absolute;
        left: 8px;
        width: 10px;
        height: 13px;
        background: url(${require("@/assets/img/playlist_sprite.png")}) -182px 0;
      }
    }
    .right {
      display: flex;
      align-items: center;
      .singer {
        width: 80px;
      }
      .duration {
        width: 45px;
      }
      .link {
        /* display: inline-block; */
        margin-left: 20px;
        width: 14px;
        height: 16px;
        background-position: -100px 0;
      }
    }
  }
`