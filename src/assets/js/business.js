// 本地存储
export let cache = {
  sessionStorage: {
    get: function (key) {
      return sessionStorage.getItem(key)
    },
    set: function (key, value) {
      return sessionStorage.getItem(key, value)
    },
    remove: function (key) {
      return sessionStorage.removeItem(key)
    }
  },
  localStorage: {
    get: function (key) {
      return localStorage.getItem(key)
    },
    set: function (key, value) {
      return localStorage.getItem(key, value)
    },
    remove: function (key) {
      return localStorage.removeItem(key)
    }
  }
}
// 公共业务方法
export let fn = {
  // 查询参数
  getQueryString: function (name) {
    let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
    let r = window.location.search.substr(1).match(reg)
    if (r != null) return decodeURI(r[2]); return null
  },
  // 获取当前日期或格式化日期 YYYY-MM-DD
  getDateStr: function (dateObj) {
    dateObj = dateObj || new Date()
    let year, month, date
    year = dateObj.getFullYear()
    month = dateObj.getMonth() + 1
    date = dateObj.getDate()
    month = month < 10 ? '0' + month : month
    date = date < 10 ? '0' + date : date
    return year + '-' + month + '-' + date
  }
}
