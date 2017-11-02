import Vue from 'vue'
import Vuex from 'vuex'
import {getAdminInfo} from '@/api/data'

Vue.use(Vuex)

const state = {
  adminInfo: {
    avatar: 'default.jpg'
  }
}

const getter = {
}

const mutations = {
  saveAdminInfo (state, adminInfo) {
    state.adminInfo = adminInfo
  }
}

const actions = {
  async getAdminInfo ({commit}) {
    try {
      const res = await getAdminInfo();
      if (res.status == 1){
        commit('saveAdminInfo',res.data);
      } else {
        throw new Error(res);
      }
    } catch (error) {
      console.log('您尚未登录或者session失败');
    }
  }
}

export default new Vuex.Store({
  state,
  getter,
  actions,
  mutations
})
