import {request} from './request'

export function getRecommendMusic(){
    return request({
        method: 'GET',
        url:'/songs/Recommanded-songs',
    })
}

export function getRecommendMv(){
    return request({
        method: 'GET',
        url: '/MV/Recommanded-MVs',
    })
}