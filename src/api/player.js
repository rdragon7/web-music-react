import request from './request';

// 获取歌曲详情
export function getSongDetail(ids) {
  return request({
    url: "/song/detail",
    params: {
      ids
    }
  })
}

// 获取当前歌曲歌词
export function getLyric(id) {
  return request({
    url: "/lyric",
    params: {
      id
    }
  })
}

// 获取歌曲评论
export function getSongComment(id,limit,offset) {
  return request({
    url: "/comment/music",
    params: {
      id,
      limit,
      offset
    }
  })
}

// 获取包含当前歌曲的歌单
export function getSimiPlaylist(id) {
  return request({
    url: "/simi/playlist",
    params: {
      id
    }
  })
}

// 获取当前歌曲的相似歌曲
export function getSimiSong(id) {
  return request({
    url: "/simi/song",
    params: {
      id
    }
  })
}