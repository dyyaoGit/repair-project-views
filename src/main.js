// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'normalize.css/normalize.css' // 导入初始化样式
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import {axios} from './utils'
import {ToastPlugin} from 'vux'


Vue.prototype.$axios = axios

Vue.config.productionTip = false
Vue.use(ToastPlugin)
Vue.use(MintUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
