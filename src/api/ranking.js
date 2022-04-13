import request from './request';

// 获取榜单数据
export function getTopList() {
  return request({
    url: "/toplist"
  })
}

// 获取榜单详情
export function getPlayList(id) {
  return request({
    url: "/playlist/detail",
    params: {
      id
    }
  })
}

// 获取歌单评论
export function getRankingComment(id,limit,offset) {
  return request({
    url: "/comment/playlist",
    params: {
      id,
      limit,
      offset
    }
  })
}