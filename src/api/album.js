import request from './request';

// 获取热门新碟数据
export function getHotAlbum() {
  return request({
    url: "/album/newest"
  })
}

// 获取全部新碟数据
export function getAllAlbum(area="all",limit,offset) {
  return request({
    url: "/album/new",
    params: {
      area,
      limit,
      offset
    }
  })
}