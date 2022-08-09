import {request} from './request'

//获取所有歌单信息
export function getMusicList(){
    return request({
        method: 'GET',
        url: '/Song-Lists/my-Lists',
    })
}

//新建一个歌单
export function createMusicList(params){
    return request({
        method: 'GET',
        url: '/Song-Lists/Creat-List',
        params,
    })
}

//删除一个歌单
export function deleteMusicList(params){
    return request({
        method: 'DELETE',
        url: '/Song-Lists/Delete-List',
        params,
    })
}

//修改歌单信息
export function editMusicList(data){
    return request({
        method: 'POST',
        url: '/Song-Lists/Edit-List',
        data,
    })
}

//查询歌单中所有歌曲
export function getMusicsInList(params){
    return request({
        method: 'GET',
        url: '/songs/Songs-In-List',
        params,
    })
}

//歌曲添加到歌单
export function addToList(data){
    return request({
        method: 'POST',
        url: '/songs/Add-To-List',
        data,
    })
}

//歌曲从歌单中删除
export function deleteFromList(data){
    return request({
        method: 'DELETE',
        url: '/songs/from-list',
        data,
    })
}