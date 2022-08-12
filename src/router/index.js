import Vue from 'vue'
import VueRouter from 'vue-router'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) {
        return originalPush.call(this, location, onResolve, onReject)
    }
    return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/main/home'
    },
    {
        path: '/main',
        redirect: '/main/home'
    },
    {
        path: '/main',
        component: () => import('views/main/Main.vue'),
        children: [
            {
                path: 'home',
                component: () => import('views/main/home/Home.vue'),
            },
            {
                path: 'category',
                component: () => import('views/main/category/Category.vue'),
                children: [
                    {
                        path: 'categorydetail',
                        component: ()=> import('views/main/category/childcategory/CategoryDetail.vue')
                    }
                ]
            },
            {
                path: 'musiclist',
                component: () => import('views/main/musiclist/MusicList.vue'),
                children: [
                    {
                        path: 'listdetail',
                        component: () => import('views/main/musiclist/childmusiclist/ListDetail.vue'),
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
                component: () => import('views/main/home/childhome/MusicDetail.vue')
            },
            {
                path: 'mv',
                component: () => import('views/main/home/childhome/MvDetail.vue')
            },
            {
                path: 'userinfo',
                component: () => import('components/UserInfo.vue'),
                meta: {
                    requireAuth: true
                }
            },
            {
                path: 'changeuserinfo',
                component: () => import('components/ChangeUserInfo.vue'),
                meta: {
                    requireAuth: true
                }
            },
            {
                path: 'result',
                component: () => import('components/Result.vue')
            }
        ]
    },
    {
        path: '/login',
        component: () => import('components/Login.vue')
    },
    {
        path: '/register',
        component: () => import('components/Register.vue')
    },
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

// 导航守卫
router.beforeEach((to, from, next) => {
    if (to.path == ('/login' || '/register')) {
        next()
    } else {
        if (to.meta.requireAuth && !localStorage.getItem('accessToken')) {
            console.log('拦截')
            next({ path: '/login' })
        } else {
            next()
        }
    }
})

export default router