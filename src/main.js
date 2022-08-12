import Vue from 'vue'
import store from './store/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router'

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
    beforeCreate() {//定义全局事件总线
        Vue.prototype.$bus = this
    }
}).$mount('#app')
