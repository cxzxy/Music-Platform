import axios from 'axios'
import router from '../router'

export function request(config) {
    const instance = axios.create({
        baseURL: 'http://47.103.198.84:8080',
        timeout: 5000,
    })

    // 后端验证token，有token(未登录)去验证，没token直接越过
    //请求拦截器
    instance.interceptors.request.use(config => {
        const token = localStorage.accessToken
        if (token) config.headers.token = token
        return config
    })

    // //响应拦截器
    instance.interceptors.response.use(res => {
        return res.data
    }, err => {
        console.log(err)
    })

    return instance(config)
}
