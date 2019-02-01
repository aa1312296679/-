import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import 'styles/reset.scss'
import fastClick from 'fastclick'
import InitBetterScroll from 'common/core/InitBscroll/index.js'
Vue.config.productionTip = false
Vue.config.devtools = true
Vue.use(InitBetterScroll)
fastClick.attach(document.body)
// 阻止滚动条默认事件
window.addEventListener('touchmove', e => e.preventDefault(), { passive: false })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
