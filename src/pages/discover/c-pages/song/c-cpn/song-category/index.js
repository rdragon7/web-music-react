import React, { Fragment, memo } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { 
  changeCurrentCategoryAction, 
  getCategorySongAction, 
  changeCurrentPageAction, 
  changeShowCategoryAction 
} from '../../store/action';

import { SongCategoryWrapper } from './style';

export default memo(function ZLSongCategory() {
  // state & props

  // redux hooks
  const dispatch = useDispatch();
  const { category } = useSelector(state => ({
    category: state.song.category,
    showCategory: state.song.showCategory
  }),shallowEqual)

  // other hooks

  // 业务逻辑
  // 处理每一项分类item
  const selectCategory = (name) => {
    dispatch(changeCurrentPageAction(1));
    dispatch(changeCurrentCategoryAction(name));
    dispatch(getCategorySongAction(name));
    dispatch(changeShowCategoryAction(false));
  }

  // 处理全部分类按钮
  const allClick = () => {
    dispatch(changeCurrentPageAction(1));
    dispatch(changeCurrentCategoryAction("全部"));
    dispatch(getCategorySongAction("all"));
    dispatch(changeShowCategoryAction(false));
  }

  return (
    <SongCategoryWrapper>
      <div className="arrow sprite_icon"></div>
      <div className="all">
        <span className="link" onClick={() => allClick()}>全部风格</span>
      </div>
      <div className="category">
       {
         [0,1,2,3,4].map((item,index) => {
           return (
             <dl className={"item"+ index} key={item}>
               <dt>
                 <i className="icon sprite_icon2"></i>
                 {category.categories[item]}
               </dt>
               <dd>
                {
                  category.sub.filter(iten => iten.category === item).map((iten2,index) => {
                    return (
                      <Fragment key={iten2.name}>
                        <span className="cat" onClick={() => selectCategory(iten2.name)}>{iten2.name}</span>
                        <span className="line">|</span>
                      </Fragment>
                    )
                  })
                }
               </dd>
             </dl>
           )
         })
       }
       
      </div>
    </SongCategoryWrapper>
  )
})