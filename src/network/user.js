import {request} from './request'

//登录
export function login(data){
    return request({
        method: 'POST',
        url: '/login',
        data,
    })
}

//得到登录验证码
export function getCode(responseType,params){
    return request({
        method: 'GET',
        url: '/codes/captcha',
        responseType,
        params
    })
}

//发送邮箱验证码
export function sendEmailCode(params){
    return request({
        method: 'GET',
        url: '/codes/sendVerificationCode',
        params,
    })
}

//检验邮箱验证码
export function verifyEmailCode(params){
    return request({
        method: 'GET',
        url: '/codes/valid-code',
        params,
    })
}

//注册
export function register(data){
    return request({
        method: 'POST',
        url: '/users/register',
        data,
    })
}