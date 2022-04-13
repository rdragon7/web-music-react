import request from './request';

// 获取电台分类
export function getRadioCategory() {
  return request({
    url: "/dj/catelist"
  })
}

// 根据type获取对应的电台
export function getRadioRecommend(type) {
  return request({
    url: "/dj/recommend/type",
    params: {
      type
    }
  })
}

// 根据id获取对应最热电台数据
export function getHotRadio(cateId,limit,offset) {
  return request({
    url: "/dj/radio/hot",
    params: {
      cateId,
      limit,
      offset
    }
  })
}
