import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import './styles/index.scss'

import $utils from './utils'

Vue.config.productionTip = false

Vue.prototype.$utils = $utils // 工具函数全局挂载

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
