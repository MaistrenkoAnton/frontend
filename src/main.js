// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './store'
import VueSVGIcon from 'vue-svgicon'

import 'vue2-toast/lib/toast.css'
import Toast from 'vue2-toast'
Vue.use(Toast, {
  defaultType: 'center',
  duration: 5000,
  wordWrap: true,
  width: '250px'
})

Vue.use(VueSVGIcon)
Vue.use(Vuex)

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.directive('focus', {
  inserted: function (el) {
    el.focus()
  }
})
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
