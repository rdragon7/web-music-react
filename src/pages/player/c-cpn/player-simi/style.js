import styled from 'styled-components';

export const PlayerSimiWrapper = styled.div`
  margin-top: 40px;
  .song {
    .song-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
      /* 歌曲详情 */
      .info {
        .title {
          a {
            color: #333;
          }
        }
        .artist {
          a {
            color: #999;
          }
        }
      }
      /* 按钮 */
      .operate {
        .item {
          display: inline-block;
          width: 10px;
          height: 11px;
        }
        .play {
          background-position: -69px -455px;
          margin-right: 10px;
        }
        .add {
          background-position: -87px -454px;
        }
      }
    }
  }
`