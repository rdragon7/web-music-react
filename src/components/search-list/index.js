import React, { Fragment, memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getSearchSongAction, getSearchArtistAction, getSearchAlbumAction } from './store/action';
import { getCurrentSongAction } from '@/pages/player/store/action';

import { SearchListWrapper } from './style';

export default memo(function ZLSearchList(props) {
  // state & props
  const { currentKeyword } = props

  // redux hooks
  const dispatch = useDispatch();
  const { searchSong, searchArtist, searchAlbum } = useSelector(state => ({
    searchSong: state.search.searchSong,
    searchArtist: state.search.searchArtist,
    searchAlbum: state.search.searchAlbum
  }),shallowEqual)

  // other hooks
  useEffect(() => {
    if(currentKeyword) {
      dispatch(getSearchSongAction(currentKeyword));
      dispatch(getSearchArtistAction(currentKeyword));
      dispatch(getSearchAlbumAction(currentKeyword));
    }
  },[dispatch,currentKeyword])
  const navigate = useNavigate();

  // 业务逻辑
  const songItemClick = (id) => {
    dispatch(getCurrentSongAction(id));
    navigate("/discover/player");
  }

  return (
    <Fragment>
      {
        currentKeyword 
        ?
        <SearchListWrapper>
          <div className="header">
            <a href="/todo">搜"{currentKeyword}"相关用户&gt;</a>
          </div>
          <div className="list">
            {/* 单曲 */}
            <div className="item item1">
              <h3 className="title">
                <i className="sprite_icon2 icon"></i>
                单曲
              </h3>
              <ul className="hd">
                {
                  searchSong && searchSong.map((item,index) => {
                    return (
                      <li key={item.id} onClick={() => songItemClick(item.id)} className="text-nowrap">
                        <span>{item.name}</span>
                        &nbsp;-&nbsp;
                        <span>
                          {
                            Array.isArray(item.artists)
                            ?
                            item.artists.map((iten,index) => {
                              return (
                                <Fragment key={iten.id}>
                                  {iten.name}
                                </Fragment>
                              )
                            })
                            :
                            ""
                          }
                          </span>
                      </li>
                    )
                  })
                }
                
              </ul>
            </div>
            {/* 歌手 */}
            <div className="item item2">
              <h3 className="title">
                <i className="sprite_icon2 icon"></i>
                歌手
              </h3>
              <ul className="hd">
                {
                  searchArtist && searchArtist.map((item,index) => {
                    return (
                      <li key={item.id} className="text-nowrap">
                        <span>{item.name}</span>
                      </li>
                    )
                  })
                }
                
              </ul>
            </div>
            {/* 专辑 */}
            <div className="item item1">
              <h3 className="title">
                <i className="sprite_icon2 icon"></i>
                专辑
              </h3>
              <ul className="hd">
                {
                  searchAlbum && searchAlbum.map((item,index) => {
                    return (
                      <li key={item.id} className="text-nowrap">
                        <span>{item.name}</span>
                        &nbsp;-&nbsp;
                        <span>{item.artist.name}</span>
                      </li>
                    )
                  })
                }
                
              </ul>
            </div>
          </div>
        </SearchListWrapper> 
        :
        ""
      }
    </Fragment>
    
  )
})