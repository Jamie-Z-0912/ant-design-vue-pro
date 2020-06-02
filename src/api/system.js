import request from '@/utils/request'

const api = {
  orgTree: '/organization/tree',
  orgDetail: '/organization/detail'
}

export default api

export function getOrgTree(parameter) {
  return request({
    url: api.orgTree,
    method: 'get',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

export function getOrgDetail(parameter) {
  return request({
    url: api.orgDetail,
    method: 'get',
    params: parameter
  })
}
