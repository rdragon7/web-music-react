import request from './request';

// 获取歌单分类数据
export function getSongCategory() {
  return request({
    url: "/playlist/catlist"
  })
}

// 根据分类获取歌曲列表
export function getSongCategoryList(cat="全部",limit = 35,offset = 0) {
  return request({
    url: "/top/playlist",
    params: {
      cat,
      limit,
      offset
    }
  })
}