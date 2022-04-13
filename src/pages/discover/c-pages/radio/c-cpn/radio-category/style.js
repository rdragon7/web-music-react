import styled from 'styled-components';

export const RadioCategoryWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 -40px;
  /* 左右箭头 */
  .arrow {
    width: 20px;
    height: 30px;
    background-image: url(${require("@/assets/img/radio_slide.png")});
    cursor: pointer;
  }
  .arrow-left {
    margin-left: 15px;
    background-position: 0 -30px;
  }
  .arrow-right {
    margin-right: 15px;
    background-position: -30px -30px;
  }
  /* 轮播区域 */
  .carousel-wrapper {
    width: 900px;
    .category-page {
      display: flex !important;
      flex-wrap: wrap;
      padding-bottom: 25px;
      /* 首页item */
      .item {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 15px;
        width: 70px;
        height: 70px;
        font-size: 12px;
        cursor: pointer;
        text-align: center;
        border: 2px solid transparent;
        border-radius: 5px;
        &:hover {
          background-color: #eee;
        }
        &.active {
          color: #C20C0C;
          border: 2px solid #d35757;
          .image {
            background-position: -48px 0;
          }
          &:hover {
            background-color: #fff;
          }
        }
      }
      /* 第二页item */
      .item-other {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 15px;
        width: 70px;
        height: 70px;
        font-size: 12px;
        color: #999;
        cursor: pointer;
        text-align: center;
        border: 2px solid transparent;
        border-radius: 5px;
        &:hover {
          background-color: #eee;
          text-decoration: none;
        }
        .faq {
          width: 48px;
          height: 48px;
          background-image: url(${require("@/assets/img/radio_faq.png")});
          background-position: 0 0;
        }
        .apply {
          width: 48px;
          height: 48px;
          background-image: url(${require("@/assets/img/radio_apply.png")});
          background-position: 0 0;
        }
        &:last-child {
          color: #5ab5e7;
        }
      }
    }
  }
  
  /* 重置底部小圆点样式 */
  .dots {
    bottom: 5px;
    li {
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      button {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: #aaa;
      }
    }
    li.slick-active {
      width: 20px;
      button {
        background-color: #C20C0C;
      }
    }
  }
`
export const CategoryItemImage = styled.div`
  width: 48px;
  height: 48px;
  background-image: url(${props => props.imgUrl});
`