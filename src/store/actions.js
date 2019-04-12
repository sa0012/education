import * as types from './mutation-types.js'
import '../mock'
import axios from 'axios'
export default {
  setCityName ({commit, state}) {
    // 跟后台打交道
    // 调用mutaions里面的方法
    commit(types.IS_CITY, true)
  },
  getNavList ({commit, state}) {
    const navlist = [
      {name: '首页', url: '/', icon: 'shop'},
      {name: '租房', url: '/roomlist', icon: 'chat'},
      {name: '订单列表', url: '/orderlist', icon: 'records'},
      {name: '个人中心', url: '/center', icon: 'gold-coin'}
    ]
    commit(types.NAV_LIST, navlist)
  },
  getCityList ({commit, state}) {
    axios.post('/getCityList').then(res => {
      commit(types.CITY_LIST, res.data.citylist.city)
    })
  },
  getHotList ({commit, state}) {
    axios.post('/getHotList').then(res => {
      console.log(res.data.hotlist.hotels)
      commit(types.HOT_LIST, res.data.hotlist.hotels)
    })
  },
  getHotelList ({commit, state}) {
    axios.post('/getHotelList').then(res => {
      commit(types.HOTEL_LIST, res.data.hotellist.hotels)
    })
  },
  getMemberDetail ({commit, state}) {
    axios.post('/getMemberDetail').then(res => {
      commit(types.MEMBER_DETAIL, res.data.memberdetail.detail)
    })
  }
}
