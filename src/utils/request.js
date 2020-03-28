import axios from 'axios'
import store from '../store'
import { Toast } from 'vant'

const ENV = process.env.NODE_ENV
const BASE_API = process.env.BASE_API //  连接测试服务器 请求跨域数据

// 创建axios实例
const service = axios.create({
  baseURL: BASE_API, // 设置默认的BASE_API
  timeout: 60 * 1000 // 请求超时时间 60s
})

// request 请求发送之前 拦截器
service.interceptors.request.use(config => {
  const Authorization = localStorage.getItem('Authorization3')
  if (Authorization) {
    config.headers.Token = Authorization // 让每个请求携带token--['Authorization']
  }
  return config
}, error => {
  // Do something with request error
  console.log(error)
  Promise.reject(error)
})

// request 请求收到后 拦截器设置
service.interceptors.response.use(
  response => {
    if (response) {
      if (response.data) {
        if (!response.data.status) { // 如何status 返回false 表示出错
          Toast.fail(response.data.msg ? response.data.msg : '返回state不存在')
        }
      }
      return response.data
    } else {
      Toast.fail('响应成功，但是响应信息不存在！')
    }
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401: // 如果返回状态为401表示登录超时
          store.dispatch('logOut').then(() => {
            location.reload() // 刷新页面
          })
      }
    }
    Toast.fail(ENV === 'development' ? '服务器端产生错误！' : '网络因素，请稍后重试！')
    return Promise.reject(error.response.data) // 返回接口返回的错误信息
  })

export default service
