import Vue from 'vue'
import App from './App'
import { store } from './store'
import placeholder from './assets/images/track-placeholder.png'
import './assets/scss/core.scss'

Vue.config.productionTip = false
Vue.prototype.$appName = 'Soundcloud Grid'
Vue.prototype.$trackPlaceholderImg = placeholder;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
