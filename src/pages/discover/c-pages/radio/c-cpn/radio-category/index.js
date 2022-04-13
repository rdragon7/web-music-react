import React, { Fragment, memo, useEffect, useRef } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getRadioCategoryAction, changeCurrentIdAction, changeCurrentPageAction } from '../../store/action';

import { Carousel } from 'antd';
import { RadioCategoryWrapper, CategoryItemImage } from './style';

export default memo(function ZLRadioCategory() {
  // redux hooks
  const dispatch = useDispatch();
  const { radioCategory, currentId } = useSelector(state => ({
    radioCategory: state.radio.radioCategory,
    currentId: state.radio.currentId
  }),shallowEqual)

  // other hooks
  const carouselRef = useRef();
  useEffect(() => {
    dispatch(getRadioCategoryAction());
  },[dispatch])

  // 业务逻辑
  const handleCategory = (iten) => {
    dispatch(changeCurrentIdAction(iten.id));
    dispatch(changeCurrentPageAction(1));
  }

  return (
    <RadioCategoryWrapper>
      <div className="arrow arrow-left"  onClick={() => carouselRef.current.prev()}></div>
      <div className="carousel-wrapper">
        <Carousel dots={{className: "dots"}} ref={carouselRef}>
          {
            [0,1].map((item,index) => {
              return (
                <div key={index} className="category-page">
                  {
                    item === 0 ? (radioCategory && radioCategory.map((iten,index) => {
                      return (
                        <div key={iten.id} className={"item " + (currentId === iten.id ? "active" : "")} onClick={() => handleCategory(iten) }>
                          <CategoryItemImage className="image" imgUrl={iten.picWebUrl}></CategoryItemImage>
                          {iten.name}
                        </div>
                      )
                    }))
                    :
                    <Fragment>
                      <a href="/todo" className="item-other">
                        <i className="faq"></i>
                        <span>常见问题</span>
                      </a>
                      <a href="/todo" className="item-other">
                        <i className="apply"></i>
                        <span>我要做主播</span>
                      </a>
                    </Fragment>
                  }
                </div>
              )
            })
          }
        </Carousel>
      </div>
      <div className="arrow arrow-right"  onClick={e => carouselRef.current.next()}></div>
    </RadioCategoryWrapper>
  )
})