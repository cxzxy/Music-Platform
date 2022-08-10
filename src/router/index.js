import Vue from 'vue'
import VueRouter from 'vue-router'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject){
    return originalPush.call(this, location, onResolve, onReject)
  }
  return originalPush.call(this, location).catch(err => err)
}


//懒加载
const Home = () => import('views/main/home/Home')
const Category = () => import('views/main/category/Category')
const MusicList = () => import('views/main/musiclist/MusicList')
const MusicDetail = () => import('views/main/home/childhome/MusicDetail')
const MvDetail = () => import('views/main/home/childhome/MvDetail')
const Login = () => import('components/common/Login')
const Register = () => import('components/common/Register')
const Main =()=>import('views/main/Main.vue')
const UserInfo=()=>import('components/common/UserInfo.vue')
const ChangeUserInfo=()=>import('components/common/ChangeUserInfo.vue')
const ListDetail=()=>import('views/main/musiclist/childmusiclist/ListDetail.vue')

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/main/home'
    },
    // {
    //     path: '/main/musiclist/listdetail',
    //     redirect: 'main/musiclist/listdetail?id=36&title=test&index=4'
    // },
    {
        path: '/main',
        component: Main,
        children: [
            {
                path: 'home',
                component: Home,
            },
            {
                path: 'category',
                component: Category
            },
            {
                path: 'musiclist',
                component: MusicList,
                children:[
                    {
                        path: 'listdetail',
                        component: ListDetail,
                        meta: {
                            requireAuth: true
                        }
                    }
                ],
                meta: {
                    requireAuth: true
                }
            },
            {
                path: 'music',
                component: MusicDetail
            },
            {
                path: 'mv',
                component: MvDetail
            },
            {
                path: 'userinfo',
                component: UserInfo,
                meta: {
                    requireAuth: true
                }
            },
            {
                path: 'changeuserinfo',
                component: ChangeUserInfo,
                meta: {
                    requireAuth: true
                }
            }
        ]
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },
    // {
    //     path: '/aaa',
    //     component: aaa
    // }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

// 导航守卫
router.beforeEach((to,from,next)=>{
    if(to.path==('/login'||'/register'))  {
        next()
    }else{
        if(to.meta.requireAuth && !localStorage.getItem('accessToken')){
            console.log('拦截')
            next({path: '/login'})
        }else{
            next()
        }
        // console.log(!localStorage.getItem('accessToken'))
    }
})

export default router