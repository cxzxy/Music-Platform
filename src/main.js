import Vue from 'vue'
import Vuex from 'vuex'
import store from './store/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router'

Vue.use(ElementUI);
// Vue.use(Vuex)


Vue.config.productionTip = false

new Vue({
    router,
    store,
  render: h => h(App),
}).$mount('#app')
