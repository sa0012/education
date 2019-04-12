import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

let state = {
  city: '城市名字',
  navlist: [],
  citylist: [],
  hotlist: [],
  hotellist: [],
  memberDetail: []
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})

// let store = new Vuex.Store({
//   // 1. state
//   state: {
//     city: '城市名'
//   },
//   // 2. getters
//   getters: {
//     // 参数列表state指的是state数据
//     getCityFn (state) {
//       return state.city
//     }
//   },
//   // 3. actions
//   // 通常跟api接口打交道
//   actions: {
//     // 设置城市信息
//     // 参数列表：{commit, state}
//     // state指的是state数据
//     // commit调用mutations的方法
//     // name就是调用此方法时要传的参数
//     setCityName ({commit, state}, name) {
//       // 跟后台打交道
//       // 调用mutaions里面的方法
//       commit('setCity', name)
//     }
//   },
//   // 4. mutations
//   mutations: {
//     // state指的是state的数据
//     // name传递过来的数据
//     setCity (state, name) {
//       // 将传参设置给state的city
//       state.city = name
//     }
//   }
// })
