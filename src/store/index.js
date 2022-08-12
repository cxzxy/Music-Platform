import Vue from 'vue'
import Vuex from 'vuex'
// import VueXAlong from 'vuex-along'

Vue.use(Vuex)

//保存状态
const state = {
    user: null,
    firstListId: 0
}

//实现方法
const mutations = {
    login(state, userName) {
        state.user = userName
    },
    getFirstListId(state, id) {
        state.firstListId = id
    }
}

export default new Vuex.Store({
    state,
    mutations,
})