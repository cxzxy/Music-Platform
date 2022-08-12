import {request} from './request'

//获取用户信息
export function getUserInfo(){
    return request({
        method: 'GET',
        url: '/users/userInfo',
    })
}

//修改用户信息
export function changeUserInfo(data){
    return request({
        method: 'PUT',
        url: '/users/userInfo',
        data,
    })
}

//上传用户头像
export function changeUserAvatar(data){
    return request({
        method: 'POST',
        url: '/file/upload',
        data
    })
}