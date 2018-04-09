import Vue from 'vue'
import Vuex from 'vuex'
import vClickOutside from 'v-click-outside'

import App from './App'
import store from './store/index'

import './assets/scss/core.scss'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(vClickOutside)

Vue.prototype.$app_name = 'Soundcloud Grid'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
