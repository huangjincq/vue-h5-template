import { mockDecorator } from '@/utils/decorator'

export const mockLoginData = mockDecorator(() => {
  /*
  * 注：必须 写 process.env.NODE_ENV === 'development' 而不能 提前用变量声明是因为这样不会吧mock数据打包到代码内
  * */
  if (process.env.NODE_ENV === 'development') {
    return new Promise(resolve => {
      window.setTimeout(resolve, 500, {
        code: 0,
        msg: '',
        data: '成功'
      })
    })
  }
})
