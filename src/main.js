import Vue from 'vue'
import App from './App'
import placeholder from "./assets/images/track-placeholder.png"

Vue.config.productionTip = false
Vue.prototype.$appName = "Soundcloud Grid"
Vue.prototype.$trackPlaceholderImg = placeholder;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
