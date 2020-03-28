## 通用工具函数

- [x] 环境判断
- [x] url编码解析等
- [x] 图片转码、压缩
- [x] sessionStorage、localStorage
- [x] 防抖、节流
- [x] 时间处理
- [x] 保留小数 `toFixed`
- [x] 复制文本 `copyText`

### 使用
已经挂载在 `Vue.prototype.$utils` 上组件内通过 `this.$utils.XXXX` 直接调用

组件外需要 `import` 后使用


## 工具库

- [x] 时间处理请使用 [dayjs](https://github.com/iamkun/dayjs/blob/HEAD/docs/zh-cn/README.zh-CN.md)
- [x] 工具函数用 [lodash](https://lodash.com/) 按需加载
- [x] 数值运算 [number-precision](https://github.com/nefe/number-precision)
