import {request} from './request'

export function getAllCategory(){
    return request({
        method: 'GET',
        url: '/categorys/all',
    })
}

export function getMusicCategory(params){
    return request({
        method: 'GET',
        url: '/categorys/songs',
        params
    })
}