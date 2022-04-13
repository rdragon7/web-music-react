import styled from 'styled-components';

export const SongCategoryWrapper = styled.div`
  position: absolute;
  top: 55px;
  left: -25px;
  z-index: 99;
  width: 700px;
  border: 1px solid #ccc;
  background-color: #fefefe;
  box-shadow: 0 0 10px 2px #d3d3d3;
  border-radius: 5px;
  padding-top: 10px;

  /* 添加小箭头 */
  .arrow {
    position: absolute;
    top: -11px;
    left: 110px;
    width: 24px;
    height: 11px;
    background-position: -48px 0;
  }
  /* 全部分类按钮 */
  .all {
    padding: 10px 25px;
    border-bottom: 1px solid #e2e2e2;
    .link {
      display: block;
      width: 75px;
      height: 26px;
      line-height: 26px;
      text-align: center;
      border: 1px solid #d3d3d3;
      border-radius: 3px;
      background-color: #fafafa;
    }
  }
  /* 具体分类 */
  .category {
    padding-left: 25px;
    dl {
      display: flex;
      dt {
        float: left;
        align-items: center;
        padding-top: 15px;
        width: 70px;
        text-align: center;
        font-weight: 700;
        border-right: 1px solid #ccc;
        /* 为每一个dt添加icon图标 */
        i {
          display: inline-block;
          width: 24px;
          height: 24px;
          background-position: -20px -735px;
          margin-right: 8px;
          margin-bottom: 4px;
          vertical-align: middle;
        }
      }
      dd {
        flex: 1;
        display: flex;
        flex-wrap: wrap;
        padding-left: 15px;
        padding-top: 15px;
        line-height: 25px;
        .cat {
          color: #333;
        }
        .line {
          padding: 0 12px;
          color: #e2e2e2;
          &:last-of-type {
            color: #fff;
          }
        }
      }
    }
    dl.item1 {
      i {
        background-position: 0 -60px;
      }
    }
    dl.item2 {
      i {
        background-position: 0 -88px;
      }
    }
    dl.item3 {
      i {
        background-position: 0 -117px;
      }
    }
    dl.item4 {
      i {
        background-position: 0 -141px;
      }
      dd {
        padding-bottom: 25px;
      }
    }
  }
`