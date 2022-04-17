import request from './request';

export function getSearchSuggest(keywords) {
  return request({
    url: "/search/suggest",
    params: {
      keywords
    }
  })
}