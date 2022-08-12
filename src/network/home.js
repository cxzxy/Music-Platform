import {request} from './request'

//获取推荐music
export function getRecommendMusic(){
    return request({
        method: 'GET',
        url:'/songs/Recommanded-songs',
    })
}

//获取推荐mv
export function getRecommendMv(){
    return request({
        method: 'GET',
        url: '/MV/Recommanded-MVs',
    })
}

//获取轮播图
export function getBanners(){
    return request({
        method: 'GET',
        url: '/banner/imgs'
    })
}