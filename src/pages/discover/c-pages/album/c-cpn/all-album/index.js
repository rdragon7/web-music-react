import React, { memo, useEffect, useState} from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getAllAlbumAction, changeCurrentAreaAction } from '../../store/action';
import { ALBUM_PAGE_SIZE } from '@/common/constants';
import { albumKeyword } from '@/common/local-data';

import ZLThemeHeaderNormal from '@/components/theme-header-normal';
import ZLAlbumCover from '@/components/album-cover';
import ZLPagination from '@/components/pagination';
import { AllAlbumWrapper } from './style';

export default memo(function ZLAllAlbum() {
  // state & props
  const [currentPage,setCurrentPage] = useState(1);

  // redux hooks
  const dispatch = useDispatch();
  const { currentArea, allAlbum } = useSelector(state => ({
    currentArea: state.album.currentArea,
    allAlbum: state.album.allAlbum
  }),shallowEqual)

  // other hooks
  useEffect(() => {
    dispatch(getAllAlbumAction(currentArea && currentArea,ALBUM_PAGE_SIZE,0));
  },[dispatch,currentArea])

  // 业务逻辑
  // 处理分页
  const onPageChange = (page,pageSize) => {
    setCurrentPage(page);
    dispatch(getAllAlbumAction(currentArea && currentArea,pageSize,(page-1)*pageSize));
  }
  // 处理关键字
  const itemClick = (area) => {
    setCurrentPage(1);
    dispatch(changeCurrentAreaAction(area,ALBUM_PAGE_SIZE,0));
  }

  return (
    <AllAlbumWrapper>
      <ZLThemeHeaderNormal title="全部新碟" keyword={albumKeyword} itemClick={(item) => itemClick(item)} />
      <div className="all-list">
        {
          allAlbum.albums && allAlbum.albums.map((item,index) => {
            return <ZLAlbumCover key={item.id} info={item} width={153} size={130} bgp={-845} />
          })
        }
      </div>
      <ZLPagination currentPage={currentPage} 
                    total={allAlbum.total} 
                    pageSize={ALBUM_PAGE_SIZE}
                    onPageChange={(page,pageSize) => onPageChange(page,pageSize)} />
    </AllAlbumWrapper>
  )
})