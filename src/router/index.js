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

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/main/home'
    },
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
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

//导航守卫
// router.beforeEach((to,from,next)=>{
//     if(to.path=='/login')  {
//         next()
//     }else{
//         if(to.meta.requireAuth && !localStorage.getItem('accessToken')){
//             next({path: '/login'})
//         }else{
//             next()
//         }
//     }
// })

export default router