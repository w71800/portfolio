// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 匯入元件集合包
import globalComponents from '@/utils/globalComponents.js'
import commonScripts from '@/utils/commonScripts.js'


Vue.config.productionTip = false
Vue.use(globalComponents)
// Vue.use(commonScripts)

/* eslint-disable no-new */
let vue = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
