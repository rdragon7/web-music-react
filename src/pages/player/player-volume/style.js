import styled from 'styled-components';

export const PlayerVolumeWrapper = styled.div`
  position: absolute;
  top: -108px;
  right: 460px;
  width: 32px;
  height: 113px;
  background-position: 0 -503px;
    /* 重置antd中进度条样式 */
    .ant-slider-vertical {
      width: 12px;
      height: 82%;
      margin: 10px 10px;
      padding: 0 4px;
      /* 剩余区域 */
      .ant-slider-rail {
        background: #000;
      }
      /* 滑动的区域 */
      .ant-slider-track {
        /* height: 100%; */
        background: url(${require("@/assets/img/playbar_sprite.png")}) -40px bottom;
      }
      /* 滑块 */
      .ant-slider-handle {
        width: 14px;
        height: 14px;
        border: none;
        background: url(${require("@/assets/img/sprite_icon.png")}) -42px -251px;
      }
    }
    
    
    
`