import request from '@/utils/request'
// eslint-disable-next-line no-unused-vars
import { mockLoginData } from './mocks/index'

class Apis {
  /**
   * 我的邀请-奖励
   * @param data
   */
  @mockLoginData
  GET_LOGIN_DATA = data => request({
    method: 'post',
    url: '/login/loginByPhone',
    data
  })
}

export default new Apis()
