import { request } from './requier'
export function getHomeMutidata() {
  return request({
    url: '/home/multidata'
  })
}

export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    methods: "get",
    params: {
      type,
      page,
    }
  })
}
