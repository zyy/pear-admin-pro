import http from '../http'

/** 接口管理 */
const Api = {
    page: '/api/sys/role/page',
    list: '/api/sys/role/list',
    add: '/api/sys/role/add'
}

/** 角色列表 (分页) */
export const page = data => {
    return http.request({
        url: Api.page,
        params: data,
        method: 'GET'
    })
}

/** 角色列表 */
export const list = data => {
    return http.request({
        url: Api.list,
        params: data,
        method: 'GET'
    })
}

/** 新增角色 */
export const add = data => {
    return http.request({
        url: Api.add,
        data: data,
        method: 'POST'
    })
}