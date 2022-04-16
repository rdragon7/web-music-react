import styled from 'styled-components';

export const PlayerLyricWrapper = styled.div`
  flex: 1;
  margin: 21px 0 20px 0;
  overflow: scroll;
  /* 让竖向滚动条消失 */
  &::-webkit-scrollbar {
    display: none;
  }
  /* 具体歌词区域 */
  .lrc-content {
    .lrc-item {
      height: 32px;
      text-align: center;
      color: #989898;
      &.active {
        color: #fff;
        font-size: 14px;
      }
    }
  }
`