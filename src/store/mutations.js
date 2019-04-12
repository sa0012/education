import {
  IS_CITY,
  NAV_LIST,
  CITY_LIST,
  HOT_LIST,
  HOTEL_LIST,
  MEMBER_DETAIL
} from './mutation-types.js'

export default {
  [IS_CITY] (state, bool) {
    state.city = bool ? 'yes' : 'no'
  },
  [NAV_LIST] (state, list) {
    state.navlist = list
  },
  [CITY_LIST] (state, list) {
    state.citylist = list
  },
  [HOT_LIST] (state, list) {
    state.hotlist = list
  },
  [HOTEL_LIST] (state, list) {
    state.hotellist = list
  },
  [MEMBER_DETAIL] (state, detail) {
    state.memberdetail = detail
  }
}
