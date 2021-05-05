import http from '../http'

const Api = {
    tree: '/api/sys/dept/tree',
    save: '/api/sys/dept/save',
    edit: '/api/sys/dept/edit',
    remove: '/api/sys/dept/remove',
    removeBatch: '/api/sys/dept/removeBatch',
}

/** 部门树 */
export const tree = data => {
    return http.request({
        url: Api.tree,
        params: data,
        method: 'get'
    })
}

/** 新增部门 */
export const save = data => { 
    return http.request({
        url: Api.save,
        data: data,
        method: 'POST'
    })
}

/** 修改部门 */
export const edit = data => {
    return http.request({
        url: Api.edit,
        data: data,
        method: 'PUT'
    })
}

/** 删除部门 */
export const remove = data => {
    return http.request({
        url: Api.remove,
        params: data,
        method: 'DELETE'
    })
}

/** 批量删除 */
export const removeBatch = data => {
    return http.request({
        url: Api.removeBatch,
        params: data,
        method: 'DELETE'
    })
}