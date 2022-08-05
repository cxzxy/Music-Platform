import Vue from 'vue'
import VueRouter from 'vue-router'

//懒加载
const Home = () => import('views/main/home/Home')
const Category = () => import('views/main/category/Category')
const MusicList = () => import('views/main/musiclist/MusicList')
const MusicDetail = () => import('views/main/home/childhome/MusicDetail')
const MvDetail = () => import('views/main/home/childhome/MvDetail')
const Login = () => import('components/common/Login')
const Register = () => import('components/common/Register')
const Main =()=>import('views/main/Main.vue')
const User=()=>import('components/common/User.vue')

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
                component: MusicList
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
                path: 'user',
                component: User
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

export default router