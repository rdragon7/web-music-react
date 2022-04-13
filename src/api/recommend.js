import request from './request';

// 获取顶部轮播图数据
export function getTopBannerList() {
  return request({
    url: "/banner"
  })
}

// 获取热门推荐列表数据
export function getHotRecommendList(limit) {
  return request({
    url: "/personalized",
    params: {
      limit
    }
  })
}

// 获取新碟上架列表数据
export function getNewAlbumList() {
  return request({
    url: "/album/newest"
  })
}

//获取排行榜数据
export function getTopRanking() {
  return request({
    url: "/toplist"
  })
}

// 根据榜单id获取对应榜单歌曲
export function getPlayList(id) {
  return request({
    url: "/playlist/detail",
    params: {
      id
    }
  })
}