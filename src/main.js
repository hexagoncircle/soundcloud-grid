import Vue from 'vue'
import Vuex from 'vuex'
import vClickOutside from 'v-click-outside'

import App from './App'
import store from './store/index'
import placeholder from './assets/images/track-placeholder.png'

import './assets/scss/core.scss'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(vClickOutside)

Vue.prototype.$app_name = 'Soundcloud Grid'
Vue.prototype.$track_placeholder_image = placeholder

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
