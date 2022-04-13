import request from './request';

// 获取歌手哦数据
export function getArtistList(area,type,initial,limit=100) {
  return request({
    url: "/artist/list",
    params: {
      area,
      type,
      initial,
      limit
    }
  })
}