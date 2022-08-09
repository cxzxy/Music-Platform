import {request} from './request'

export function getUserInfo(){
    return request({
        method: 'GET',
        url: '/users/userInfo',
    })
}

export function changeUserInfo(data){
    return request({
        method: 'PUT',
        url: '/users/userInfo',
        data,
    })
}